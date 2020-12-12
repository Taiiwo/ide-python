// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = void 0 && (void 0).__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // tslint:disable:no-invalid-template-strings

const inversify_1 = require("inversify");

const path = require("path");

const vscode_1 = require("vscode");

const invalidPythonPathInDebugger_1 = require("../../../application/diagnostics/checks/invalidPythonPathInDebugger");

const types_1 = require("../../../application/diagnostics/types");

const types_2 = require("../../../common/application/types");

const constants_1 = require("../../../common/constants");

const types_3 = require("../../../common/types");

let BaseConfigurationProvider = class BaseConfigurationProvider {
  constructor(debugType, serviceContainer) {
    this.debugType = debugType;
    this.serviceContainer = serviceContainer;
  }

  resolveDebugConfiguration(folder, debugConfiguration, token) {
    return __awaiter(this, void 0, void 0, function* () {
      const workspaceFolder = this.getWorkspaceFolder(folder);

      if (debugConfiguration.request === 'attach') {
        yield this.provideAttachDefaults(workspaceFolder, debugConfiguration);
      } else {
        const config = debugConfiguration;
        const numberOfSettings = Object.keys(config);

        if (config.noDebug === true && numberOfSettings.length === 1 || numberOfSettings.length === 0) {
          const defaultProgram = this.getProgram();
          config.name = 'Launch';
          config.type = this.debugType;
          config.request = 'launch';
          config.program = defaultProgram ? defaultProgram : '';
          config.env = {};
        }

        yield this.provideLaunchDefaults(workspaceFolder, config);
        const isValid = yield this.validateLaunchConfiguration(config);

        if (!isValid) {
          return;
        }
      }

      const dbgConfig = debugConfiguration;

      if (Array.isArray(dbgConfig.debugOptions)) {
        dbgConfig.debugOptions = dbgConfig.debugOptions.filter((item, pos) => dbgConfig.debugOptions.indexOf(item) === pos);
      }

      return debugConfiguration;
    });
  }

  provideAttachDefaults(workspaceFolder, debugConfiguration) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!Array.isArray(debugConfiguration.debugOptions)) {
        debugConfiguration.debugOptions = [];
      }

      if (!debugConfiguration.host) {
        debugConfiguration.host = 'localhost';
      } // Pass workspace folder so we can get this when we get debug events firing.


      debugConfiguration.workspaceFolder = workspaceFolder ? workspaceFolder.fsPath : undefined;
    });
  }

  provideLaunchDefaults(workspaceFolder, debugConfiguration) {
    return __awaiter(this, void 0, void 0, function* () {
      this.resolveAndUpdatePythonPath(workspaceFolder, debugConfiguration);

      if (typeof debugConfiguration.cwd !== 'string' && workspaceFolder) {
        debugConfiguration.cwd = workspaceFolder.fsPath;
      }

      if (typeof debugConfiguration.envFile !== 'string' && workspaceFolder) {
        const envFile = path.join(workspaceFolder.fsPath, '.env');
        debugConfiguration.envFile = envFile;
      }

      if (typeof debugConfiguration.stopOnEntry !== 'boolean') {
        debugConfiguration.stopOnEntry = false;
      }

      if (typeof debugConfiguration.showReturnValue !== 'boolean') {
        debugConfiguration.showReturnValue = false;
      }

      if (!debugConfiguration.console) {
        debugConfiguration.console = 'integratedTerminal';
      } // If using a terminal, then never open internal console.


      if (debugConfiguration.console !== 'none' && !debugConfiguration.internalConsoleOptions) {
        debugConfiguration.internalConsoleOptions = 'neverOpen';
      }

      if (!Array.isArray(debugConfiguration.debugOptions)) {
        debugConfiguration.debugOptions = [];
      } // Pass workspace folder so we can get this when we get debug events firing.


      debugConfiguration.workspaceFolder = workspaceFolder ? workspaceFolder.fsPath : undefined;
    });
  }

  validateLaunchConfiguration(debugConfiguration) {
    return __awaiter(this, void 0, void 0, function* () {
      const diagnosticService = this.serviceContainer.get(types_1.IDiagnosticsService, invalidPythonPathInDebugger_1.InvalidPythonPathInDebuggerServiceId);
      return diagnosticService.validatePythonPath(debugConfiguration.pythonPath);
    });
  }

  getWorkspaceFolder(folder) {
    if (folder) {
      return folder.uri;
    }

    const program = this.getProgram();
    const workspaceService = this.serviceContainer.get(types_2.IWorkspaceService);

    if (!Array.isArray(workspaceService.workspaceFolders) || workspaceService.workspaceFolders.length === 0) {
      return program ? vscode_1.Uri.file(path.dirname(program)) : undefined;
    }

    if (workspaceService.workspaceFolders.length === 1) {
      return workspaceService.workspaceFolders[0].uri;
    }

    if (program) {
      const workspaceFolder = workspaceService.getWorkspaceFolder(vscode_1.Uri.file(program));

      if (workspaceFolder) {
        return workspaceFolder.uri;
      }
    }
  }

  getProgram() {
    const documentManager = this.serviceContainer.get(types_2.IDocumentManager);
    const editor = documentManager.activeTextEditor;

    if (editor && editor.document.languageId === constants_1.PYTHON_LANGUAGE) {
      return editor.document.fileName;
    }
  }

  resolveAndUpdatePythonPath(workspaceFolder, debugConfiguration) {
    if (!debugConfiguration) {
      return;
    }

    if (debugConfiguration.pythonPath === '${config:python.pythonPath}' || !debugConfiguration.pythonPath) {
      const configService = this.serviceContainer.get(types_3.IConfigurationService);
      const pythonPath = configService.getSettings(workspaceFolder).pythonPath;
      debugConfiguration.pythonPath = pythonPath;
    }
  }

};
BaseConfigurationProvider = __decorate([inversify_1.injectable(), __param(0, inversify_1.unmanaged())], BaseConfigurationProvider);
exports.BaseConfigurationProvider = BaseConfigurationProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VQcm92aWRlci5qcyJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX3BhcmFtIiwicGFyYW1JbmRleCIsImRlY29yYXRvciIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJleHBvcnRzIiwiaW52ZXJzaWZ5XzEiLCJyZXF1aXJlIiwicGF0aCIsInZzY29kZV8xIiwiaW52YWxpZFB5dGhvblBhdGhJbkRlYnVnZ2VyXzEiLCJ0eXBlc18xIiwidHlwZXNfMiIsImNvbnN0YW50c18xIiwidHlwZXNfMyIsIkJhc2VDb25maWd1cmF0aW9uUHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsImRlYnVnVHlwZSIsInNlcnZpY2VDb250YWluZXIiLCJyZXNvbHZlRGVidWdDb25maWd1cmF0aW9uIiwiZm9sZGVyIiwiZGVidWdDb25maWd1cmF0aW9uIiwidG9rZW4iLCJ3b3Jrc3BhY2VGb2xkZXIiLCJnZXRXb3Jrc3BhY2VGb2xkZXIiLCJyZXF1ZXN0IiwicHJvdmlkZUF0dGFjaERlZmF1bHRzIiwiY29uZmlnIiwibnVtYmVyT2ZTZXR0aW5ncyIsImtleXMiLCJub0RlYnVnIiwiZGVmYXVsdFByb2dyYW0iLCJnZXRQcm9ncmFtIiwibmFtZSIsInR5cGUiLCJwcm9ncmFtIiwiZW52IiwicHJvdmlkZUxhdW5jaERlZmF1bHRzIiwiaXNWYWxpZCIsInZhbGlkYXRlTGF1bmNoQ29uZmlndXJhdGlvbiIsImRiZ0NvbmZpZyIsIkFycmF5IiwiaXNBcnJheSIsImRlYnVnT3B0aW9ucyIsImZpbHRlciIsIml0ZW0iLCJwb3MiLCJpbmRleE9mIiwiaG9zdCIsImZzUGF0aCIsInVuZGVmaW5lZCIsInJlc29sdmVBbmRVcGRhdGVQeXRob25QYXRoIiwiY3dkIiwiZW52RmlsZSIsImpvaW4iLCJzdG9wT25FbnRyeSIsInNob3dSZXR1cm5WYWx1ZSIsImNvbnNvbGUiLCJpbnRlcm5hbENvbnNvbGVPcHRpb25zIiwiZGlhZ25vc3RpY1NlcnZpY2UiLCJnZXQiLCJJRGlhZ25vc3RpY3NTZXJ2aWNlIiwiSW52YWxpZFB5dGhvblBhdGhJbkRlYnVnZ2VyU2VydmljZUlkIiwidmFsaWRhdGVQeXRob25QYXRoIiwicHl0aG9uUGF0aCIsInVyaSIsIndvcmtzcGFjZVNlcnZpY2UiLCJJV29ya3NwYWNlU2VydmljZSIsIndvcmtzcGFjZUZvbGRlcnMiLCJVcmkiLCJmaWxlIiwiZGlybmFtZSIsImRvY3VtZW50TWFuYWdlciIsIklEb2N1bWVudE1hbmFnZXIiLCJlZGl0b3IiLCJhY3RpdmVUZXh0RWRpdG9yIiwiZG9jdW1lbnQiLCJsYW5ndWFnZUlkIiwiUFlUSE9OX0xBTkdVQUdFIiwiZmlsZU5hbWUiLCJjb25maWdTZXJ2aWNlIiwiSUNvbmZpZ3VyYXRpb25TZXJ2aWNlIiwiZ2V0U2V0dGluZ3MiLCJpbmplY3RhYmxlIiwidW5tYW5hZ2VkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsVUFBVSxHQUFJLFVBQVEsU0FBS0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ25GLE1BQUlDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFsQjtBQUFBLE1BQTBCQyxDQUFDLEdBQUdILENBQUMsR0FBRyxDQUFKLEdBQVFILE1BQVIsR0FBaUJFLElBQUksS0FBSyxJQUFULEdBQWdCQSxJQUFJLEdBQUdL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LEVBRG1DLEVBRW5DbkcsT0FBTyxDQUFDLENBQUQsRUFBSXNCLFdBQVcsQ0FBQzhFLFNBQVosRUFBSixDQUY0QixDQUFELEVBR25DckUseUJBSG1DLENBQXRDO0FBSUFWLE9BQU8sQ0FBQ1UseUJBQVIsR0FBb0NBLHlCQUFwQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbid1c2Ugc3RyaWN0JztcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fcGFyYW0gPSAodGhpcyAmJiB0aGlzLl9fcGFyYW0pIHx8IGZ1bmN0aW9uIChwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWludmFsaWQtdGVtcGxhdGUtc3RyaW5nc1xyXG5jb25zdCBpbnZlcnNpZnlfMSA9IHJlcXVpcmUoXCJpbnZlcnNpZnlcIik7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3QgdnNjb2RlXzEgPSByZXF1aXJlKFwidnNjb2RlXCIpO1xyXG5jb25zdCBpbnZhbGlkUHl0aG9uUGF0aEluRGVidWdnZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9hcHBsaWNhdGlvbi9kaWFnbm9zdGljcy9jaGVja3MvaW52YWxpZFB5dGhvblBhdGhJbkRlYnVnZ2VyXCIpO1xyXG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL2FwcGxpY2F0aW9uL2RpYWdub3N0aWNzL3R5cGVzXCIpO1xyXG5jb25zdCB0eXBlc18yID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi9hcHBsaWNhdGlvbi90eXBlc1wiKTtcclxuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50c1wiKTtcclxuY29uc3QgdHlwZXNfMyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tb24vdHlwZXNcIik7XHJcbmxldCBCYXNlQ29uZmlndXJhdGlvblByb3ZpZGVyID0gY2xhc3MgQmFzZUNvbmZpZ3VyYXRpb25Qcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkZWJ1Z1R5cGUsIHNlcnZpY2VDb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLmRlYnVnVHlwZSA9IGRlYnVnVHlwZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2VDb250YWluZXIgPSBzZXJ2aWNlQ29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgcmVzb2x2ZURlYnVnQ29uZmlndXJhdGlvbihmb2xkZXIsIGRlYnVnQ29uZmlndXJhdGlvbiwgdG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCB3b3Jrc3BhY2VGb2xkZXIgPSB0aGlzLmdldFdvcmtzcGFjZUZvbGRlcihmb2xkZXIpO1xyXG4gICAgICAgICAgICBpZiAoZGVidWdDb25maWd1cmF0aW9uLnJlcXVlc3QgPT09ICdhdHRhY2gnKSB7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnByb3ZpZGVBdHRhY2hEZWZhdWx0cyh3b3Jrc3BhY2VGb2xkZXIsIGRlYnVnQ29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBkZWJ1Z0NvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgICAgICAgICBjb25zdCBudW1iZXJPZlNldHRpbmdzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIGlmICgoY29uZmlnLm5vRGVidWcgPT09IHRydWUgJiYgbnVtYmVyT2ZTZXR0aW5ncy5sZW5ndGggPT09IDEpIHx8IG51bWJlck9mU2V0dGluZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcubmFtZSA9ICdMYXVuY2gnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy50eXBlID0gdGhpcy5kZWJ1Z1R5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnJlcXVlc3QgPSAnbGF1bmNoJztcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcucHJvZ3JhbSA9IGRlZmF1bHRQcm9ncmFtID8gZGVmYXVsdFByb2dyYW0gOiAnJztcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuZW52ID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnByb3ZpZGVMYXVuY2hEZWZhdWx0cyh3b3Jrc3BhY2VGb2xkZXIsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0geWllbGQgdGhpcy52YWxpZGF0ZUxhdW5jaENvbmZpZ3VyYXRpb24oY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkYmdDb25maWcgPSBkZWJ1Z0NvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRiZ0NvbmZpZy5kZWJ1Z09wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICBkYmdDb25maWcuZGVidWdPcHRpb25zID0gZGJnQ29uZmlnLmRlYnVnT3B0aW9ucy5maWx0ZXIoKGl0ZW0sIHBvcykgPT4gZGJnQ29uZmlnLmRlYnVnT3B0aW9ucy5pbmRleE9mKGl0ZW0pID09PSBwb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkZWJ1Z0NvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcm92aWRlQXR0YWNoRGVmYXVsdHMod29ya3NwYWNlRm9sZGVyLCBkZWJ1Z0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGVidWdDb25maWd1cmF0aW9uLmRlYnVnT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnQ29uZmlndXJhdGlvbi5kZWJ1Z09wdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWRlYnVnQ29uZmlndXJhdGlvbi5ob3N0KSB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z0NvbmZpZ3VyYXRpb24uaG9zdCA9ICdsb2NhbGhvc3QnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFBhc3Mgd29ya3NwYWNlIGZvbGRlciBzbyB3ZSBjYW4gZ2V0IHRoaXMgd2hlbiB3ZSBnZXQgZGVidWcgZXZlbnRzIGZpcmluZy5cclxuICAgICAgICAgICAgZGVidWdDb25maWd1cmF0aW9uLndvcmtzcGFjZUZvbGRlciA9IHdvcmtzcGFjZUZvbGRlciA/IHdvcmtzcGFjZUZvbGRlci5mc1BhdGggOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcm92aWRlTGF1bmNoRGVmYXVsdHMod29ya3NwYWNlRm9sZGVyLCBkZWJ1Z0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVBbmRVcGRhdGVQeXRob25QYXRoKHdvcmtzcGFjZUZvbGRlciwgZGVidWdDb25maWd1cmF0aW9uKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZWJ1Z0NvbmZpZ3VyYXRpb24uY3dkICE9PSAnc3RyaW5nJyAmJiB3b3Jrc3BhY2VGb2xkZXIpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnQ29uZmlndXJhdGlvbi5jd2QgPSB3b3Jrc3BhY2VGb2xkZXIuZnNQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVidWdDb25maWd1cmF0aW9uLmVudkZpbGUgIT09ICdzdHJpbmcnICYmIHdvcmtzcGFjZUZvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW52RmlsZSA9IHBhdGguam9pbih3b3Jrc3BhY2VGb2xkZXIuZnNQYXRoLCAnLmVudicpO1xyXG4gICAgICAgICAgICAgICAgZGVidWdDb25maWd1cmF0aW9uLmVudkZpbGUgPSBlbnZGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVidWdDb25maWd1cmF0aW9uLnN0b3BPbkVudHJ5ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnQ29uZmlndXJhdGlvbi5zdG9wT25FbnRyeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVidWdDb25maWd1cmF0aW9uLnNob3dSZXR1cm5WYWx1ZSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z0NvbmZpZ3VyYXRpb24uc2hvd1JldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFkZWJ1Z0NvbmZpZ3VyYXRpb24uY29uc29sZSkge1xyXG4gICAgICAgICAgICAgICAgZGVidWdDb25maWd1cmF0aW9uLmNvbnNvbGUgPSAnaW50ZWdyYXRlZFRlcm1pbmFsJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiB1c2luZyBhIHRlcm1pbmFsLCB0aGVuIG5ldmVyIG9wZW4gaW50ZXJuYWwgY29uc29sZS5cclxuICAgICAgICAgICAgaWYgKGRlYnVnQ29uZmlndXJhdGlvbi5jb25zb2xlICE9PSAnbm9uZScgJiYgIWRlYnVnQ29uZmlndXJhdGlvbi5pbnRlcm5hbENvbnNvbGVPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxDb25zb2xlT3B0aW9ucyA9ICduZXZlck9wZW4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkZWJ1Z0NvbmZpZ3VyYXRpb24uZGVidWdPcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgZGVidWdDb25maWd1cmF0aW9uLmRlYnVnT3B0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFBhc3Mgd29ya3NwYWNlIGZvbGRlciBzbyB3ZSBjYW4gZ2V0IHRoaXMgd2hlbiB3ZSBnZXQgZGVidWcgZXZlbnRzIGZpcmluZy5cclxuICAgICAgICAgICAgZGVidWdDb25maWd1cmF0aW9uLndvcmtzcGFjZUZvbGRlciA9IHdvcmtzcGFjZUZvbGRlciA/IHdvcmtzcGFjZUZvbGRlci5mc1BhdGggOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZUxhdW5jaENvbmZpZ3VyYXRpb24oZGVidWdDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlhZ25vc3RpY1NlcnZpY2UgPSB0aGlzLnNlcnZpY2VDb250YWluZXIuZ2V0KHR5cGVzXzEuSURpYWdub3N0aWNzU2VydmljZSwgaW52YWxpZFB5dGhvblBhdGhJbkRlYnVnZ2VyXzEuSW52YWxpZFB5dGhvblBhdGhJbkRlYnVnZ2VyU2VydmljZUlkKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRpYWdub3N0aWNTZXJ2aWNlLnZhbGlkYXRlUHl0aG9uUGF0aChkZWJ1Z0NvbmZpZ3VyYXRpb24ucHl0aG9uUGF0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRXb3Jrc3BhY2VGb2xkZXIoZm9sZGVyKSB7XHJcbiAgICAgICAgaWYgKGZvbGRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZm9sZGVyLnVyaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xyXG4gICAgICAgIGNvbnN0IHdvcmtzcGFjZVNlcnZpY2UgPSB0aGlzLnNlcnZpY2VDb250YWluZXIuZ2V0KHR5cGVzXzIuSVdvcmtzcGFjZVNlcnZpY2UpO1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh3b3Jrc3BhY2VTZXJ2aWNlLndvcmtzcGFjZUZvbGRlcnMpIHx8IHdvcmtzcGFjZVNlcnZpY2Uud29ya3NwYWNlRm9sZGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2dyYW0gPyB2c2NvZGVfMS5VcmkuZmlsZShwYXRoLmRpcm5hbWUocHJvZ3JhbSkpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod29ya3NwYWNlU2VydmljZS53b3Jrc3BhY2VGb2xkZXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd29ya3NwYWNlU2VydmljZS53b3Jrc3BhY2VGb2xkZXJzWzBdLnVyaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2dyYW0pIHtcclxuICAgICAgICAgICAgY29uc3Qgd29ya3NwYWNlRm9sZGVyID0gd29ya3NwYWNlU2VydmljZS5nZXRXb3Jrc3BhY2VGb2xkZXIodnNjb2RlXzEuVXJpLmZpbGUocHJvZ3JhbSkpO1xyXG4gICAgICAgICAgICBpZiAod29ya3NwYWNlRm9sZGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd29ya3NwYWNlRm9sZGVyLnVyaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFByb2dyYW0oKSB7XHJcbiAgICAgICAgY29uc3QgZG9jdW1lbnRNYW5hZ2VyID0gdGhpcy5zZXJ2aWNlQ29udGFpbmVyLmdldCh0eXBlc18yLklEb2N1bWVudE1hbmFnZXIpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRvciA9IGRvY3VtZW50TWFuYWdlci5hY3RpdmVUZXh0RWRpdG9yO1xyXG4gICAgICAgIGlmIChlZGl0b3IgJiYgZWRpdG9yLmRvY3VtZW50Lmxhbmd1YWdlSWQgPT09IGNvbnN0YW50c18xLlBZVEhPTl9MQU5HVUFHRSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZWRpdG9yLmRvY3VtZW50LmZpbGVOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc29sdmVBbmRVcGRhdGVQeXRob25QYXRoKHdvcmtzcGFjZUZvbGRlciwgZGVidWdDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFkZWJ1Z0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGVidWdDb25maWd1cmF0aW9uLnB5dGhvblBhdGggPT09ICcke2NvbmZpZzpweXRob24ucHl0aG9uUGF0aH0nIHx8ICFkZWJ1Z0NvbmZpZ3VyYXRpb24ucHl0aG9uUGF0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25maWdTZXJ2aWNlID0gdGhpcy5zZXJ2aWNlQ29udGFpbmVyLmdldCh0eXBlc18zLklDb25maWd1cmF0aW9uU2VydmljZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHB5dGhvblBhdGggPSBjb25maWdTZXJ2aWNlLmdldFNldHRpbmdzKHdvcmtzcGFjZUZvbGRlcikucHl0aG9uUGF0aDtcclxuICAgICAgICAgICAgZGVidWdDb25maWd1cmF0aW9uLnB5dGhvblBhdGggPSBweXRob25QYXRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuQmFzZUNvbmZpZ3VyYXRpb25Qcm92aWRlciA9IF9fZGVjb3JhdGUoW1xyXG4gICAgaW52ZXJzaWZ5XzEuaW5qZWN0YWJsZSgpLFxyXG4gICAgX19wYXJhbSgwLCBpbnZlcnNpZnlfMS51bm1hbmFnZWQoKSlcclxuXSwgQmFzZUNvbmZpZ3VyYXRpb25Qcm92aWRlcik7XHJcbmV4cG9ydHMuQmFzZUNvbmZpZ3VyYXRpb25Qcm92aWRlciA9IEJhc2VDb25maWd1cmF0aW9uUHJvdmlkZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2VQcm92aWRlci5qcy5tYXAiXX0=