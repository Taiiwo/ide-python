"use strict"; // Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

Object.defineProperty(exports, "__esModule", {
  value: true
});

const types_1 = require("../common/types");

const interpreterComparer_1 = require("./configuration/interpreterComparer");

const interpreterSelector_1 = require("./configuration/interpreterSelector");

const pythonPathUpdaterService_1 = require("./configuration/pythonPathUpdaterService");

const pythonPathUpdaterServiceFactory_1 = require("./configuration/pythonPathUpdaterServiceFactory");

const types_2 = require("./configuration/types");

const contracts_1 = require("./contracts");

const display_1 = require("./display");

const progressDisplay_1 = require("./display/progressDisplay");

const shebangCodeLensProvider_1 = require("./display/shebangCodeLensProvider");

const helpers_1 = require("./helpers");

const interpreterService_1 = require("./interpreterService");

const interpreterVersion_1 = require("./interpreterVersion");

const helpers_2 = require("./locators/helpers");

const index_1 = require("./locators/index");

const progressService_1 = require("./locators/progressService");

const condaEnvFileService_1 = require("./locators/services/condaEnvFileService");

const condaEnvService_1 = require("./locators/services/condaEnvService");

const condaService_1 = require("./locators/services/condaService");

const currentPathService_1 = require("./locators/services/currentPathService");

const globalVirtualEnvService_1 = require("./locators/services/globalVirtualEnvService");

const interpreterWatcherBuilder_1 = require("./locators/services/interpreterWatcherBuilder");

const KnownPathsService_1 = require("./locators/services/KnownPathsService");

const pipEnvService_1 = require("./locators/services/pipEnvService");

const windowsRegistryService_1 = require("./locators/services/windowsRegistryService");

const workspaceVirtualEnvService_1 = require("./locators/services/workspaceVirtualEnvService");

const workspaceVirtualEnvWatcherService_1 = require("./locators/services/workspaceVirtualEnvWatcherService");

const index_2 = require("./virtualEnvs/index");

const types_3 = require("./virtualEnvs/types");

function registerTypes(serviceManager) {
  serviceManager.addSingleton(contracts_1.IKnownSearchPathsForInterpreters, KnownPathsService_1.KnownSearchPathsForInterpreters);
  serviceManager.addSingleton(contracts_1.IVirtualEnvironmentsSearchPathProvider, globalVirtualEnvService_1.GlobalVirtualEnvironmentsSearchPathProvider, 'global');
  serviceManager.addSingleton(contracts_1.IVirtualEnvironmentsSearchPathProvider, workspaceVirtualEnvService_1.WorkspaceVirtualEnvironmentsSearchPathProvider, 'workspace');
  serviceManager.addSingleton(contracts_1.ICondaService, condaService_1.CondaService);
  serviceManager.addSingleton(types_3.IVirtualEnvironmentManager, index_2.VirtualEnvironmentManager);
  serviceManager.add(contracts_1.IInterpreterWatcher, workspaceVirtualEnvWatcherService_1.WorkspaceVirtualEnvWatcherService, contracts_1.WORKSPACE_VIRTUAL_ENV_SERVICE);
  serviceManager.addSingleton(contracts_1.IInterpreterWatcherBuilder, interpreterWatcherBuilder_1.InterpreterWatcherBuilder);
  serviceManager.addSingleton(contracts_1.IInterpreterVersionService, interpreterVersion_1.InterpreterVersionService);
  serviceManager.addSingleton(contracts_1.IInterpreterLocatorService, index_1.PythonInterpreterLocatorService, contracts_1.INTERPRETER_LOCATOR_SERVICE);
  serviceManager.addSingleton(contracts_1.IInterpreterLocatorService, condaEnvFileService_1.CondaEnvFileService, contracts_1.CONDA_ENV_FILE_SERVICE);
  serviceManager.addSingleton(contracts_1.IInterpreterLocatorService, condaEnvService_1.CondaEnvService, contracts_1.CONDA_ENV_SERVICE);
  serviceManager.addSingleton(contracts_1.IInterpreterLocatorService, currentPathService_1.CurrentPathService, contracts_1.CURRENT_PATH_SERVICE);
  serviceManager.addSingleton(contracts_1.IInterpreterLocatorService, globalVirtualEnvService_1.GlobalVirtualEnvService, contracts_1.GLOBAL_VIRTUAL_ENV_SERVICE);
  serviceManager.addSingleton(contracts_1.IInterpreterLocatorService, workspaceVirtualEnvService_1.WorkspaceVirtualEnvService, contracts_1.WORKSPACE_VIRTUAL_ENV_SERVICE);
  serviceManager.addSingleton(contracts_1.IInterpreterLocatorService, pipEnvService_1.PipEnvService, contracts_1.PIPENV_SERVICE);
  serviceManager.addSingleton(contracts_1.IPipEnvService, pipEnvService_1.PipEnvService);
  const isWindows = serviceManager.get(types_1.IsWindows);

  if (isWindows) {
    serviceManager.addSingleton(contracts_1.IInterpreterLocatorService, windowsRegistryService_1.WindowsRegistryService, contracts_1.WINDOWS_REGISTRY_SERVICE);
  }

  serviceManager.addSingleton(contracts_1.IInterpreterLocatorService, KnownPathsService_1.KnownPathsService, contracts_1.KNOWN_PATH_SERVICE);
  serviceManager.addSingleton(contracts_1.IInterpreterService, interpreterService_1.InterpreterService);
  serviceManager.addSingleton(contracts_1.IInterpreterDisplay, display_1.InterpreterDisplay);
  serviceManager.addSingleton(types_2.IPythonPathUpdaterServiceFactory, pythonPathUpdaterServiceFactory_1.PythonPathUpdaterServiceFactory);
  serviceManager.addSingleton(types_2.IPythonPathUpdaterServiceManager, pythonPathUpdaterService_1.PythonPathUpdaterService);
  serviceManager.addSingleton(types_2.IInterpreterSelector, interpreterSelector_1.InterpreterSelector);
  serviceManager.addSingleton(contracts_1.IShebangCodeLensProvider, shebangCodeLensProvider_1.ShebangCodeLensProvider);
  serviceManager.addSingleton(contracts_1.IInterpreterHelper, helpers_1.InterpreterHelper);
  serviceManager.addSingleton(contracts_1.IInterpreterLocatorHelper, helpers_2.InterpreterLocatorHelper);
  serviceManager.addSingleton(types_2.IInterpreterComparer, interpreterComparer_1.InterpreterComparer);
  serviceManager.addSingleton(contracts_1.InterpreterLocatorProgressHandler, progressDisplay_1.InterpreterLocatorProgressStatubarHandler);
  serviceManager.addSingleton(contracts_1.IInterpreterLocatorProgressService, progressService_1.InterpreterLocatorProgressService);
}

exports.registerTypes = registerTypes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VSZWdpc3RyeS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInR5cGVzXzEiLCJyZXF1aXJlIiwiaW50ZXJwcmV0ZXJDb21wYXJlcl8xIiwiaW50ZXJwcmV0ZXJTZWxlY3Rvcl8xIiwicHl0aG9uUGF0aFVwZGF0ZXJTZXJ2aWNlXzEiLCJweXRob25QYXRoVXBkYXRlclNlcnZpY2VGYWN0b3J5XzEiLCJ0eXBlc18yIiwiY29udHJhY3RzXzEiLCJkaXNwbGF5XzEiLCJwcm9ncmVzc0Rpc3BsYXlfMSIsInNoZWJhbmdDb2RlTGVuc1Byb3ZpZGVyXzEiLCJoZWxwZXJzXzEiLCJpbnRlcnByZXRlclNlcnZpY2VfMSIsImludGVycHJldGVyVmVyc2lvbl8xIiwiaGVscGVyc18yIiwiaW5kZXhfMSIsInByb2dyZXNzU2VydmljZV8xIiwiY29uZGFFbnZGaWxlU2VydmljZV8xIiwiY29uZGFFbnZTZXJ2aWNlXzEiLCJjb25kYVNlcnZpY2VfMSIsImN1cnJlbnRQYXRoU2VydmljZV8xIiwiZ2xvYmFsVmlydHVhbEVudlNlcnZpY2VfMSIsImludGVycHJldGVyV2F0Y2hlckJ1aWxkZXJfMSIsIktub3duUGF0aHNTZXJ2aWNlXzEiLCJwaXBFbnZTZXJ2aWNlXzEiLCJ3aW5kb3dzUmVnaXN0cnlTZXJ2aWNlXzEiLCJ3b3Jrc3BhY2VWaXJ0dWFsRW52U2VydmljZV8xIiwid29ya3NwYWNlVmlydHVhbEVudldhdGNoZXJTZXJ2aWNlXzEiLCJpbmRleF8yIiwidHlwZXNfMyIsInJlZ2lzdGVyVHlwZXMiLCJzZXJ2aWNlTWFuYWdlciIsImFkZFNpbmdsZXRvbiIsIklLbm93blNlYXJjaFBhdGhzRm9ySW50ZXJwcmV0ZXJzIiwiS25vd25TZWFyY2hQYXRoc0ZvckludGVycHJldGVycyIsIklWaXJ0dWFsRW52aXJvbm1lbnRzU2VhcmNoUGF0aFByb3ZpZGVyIiwiR2xvYmFsVmlydHVhbEVudmlyb25tZW50c1NlYXJjaFBhdGhQcm92aWRlciIsIldvcmtzcGFjZVZpcnR1YWxFbnZpcm9ubWVudHNTZWFyY2hQYXRoUHJvdmlkZXIiLCJJQ29uZGFTZXJ2aWNlIiwiQ29uZGFTZXJ2aWNlIiwiSVZpcnR1YWxFbnZpcm9ubWVudE1hbmFnZXIiLCJWaXJ0dWFsRW52aXJvbm1lbnRNYW5hZ2VyIiwiYWRkIiwiSUludGVycHJldGVyV2F0Y2hlciIsIldvcmtzcGFjZVZpcnR1YWxFbnZXYXRjaGVyU2VydmljZSIsIldPUktTUEFDRV9WSVJUVUFMX0VOVl9TRVJWSUNFIiwiSUludGVycHJldGVyV2F0Y2hlckJ1aWxkZXIiLCJJbnRlcnByZXRlcldhdGNoZXJCdWlsZGVyIiwiSUludGVycHJldGVyVmVyc2lvblNlcnZpY2UiLCJJbnRlcnByZXRlclZlcnNpb25TZXJ2aWNlIiwiSUludGVycHJldGVyTG9jYXRvclNlcnZpY2UiLCJQeXRob25JbnRlcnByZXRlckxvY2F0b3JTZXJ2aWNlIiwiSU5URVJQUkVURVJfTE9DQVRPUl9TRVJWSUNFIiwiQ29uZGFFbnZGaWxlU2VydmljZSIsIkNPTkRBX0VOVl9GSUxFX1NFUlZJQ0UiLCJDb25kYUVudlNlcnZpY2UiLCJDT05EQV9FTlZfU0VSVklDRSIsIkN1cnJlbnRQYXRoU2VydmljZSIsIkNVUlJFTlRfUEFUSF9TRVJWSUNFIiwiR2xvYmFsVmlydHVhbEVudlNlcnZpY2UiLCJHTE9CQUxfVklSVFVBTF9FTlZfU0VSVklDRSIsIldvcmtzcGFjZVZpcnR1YWxFbnZTZXJ2aWNlIiwiUGlwRW52U2VydmljZSIsIlBJUEVOVl9TRVJWSUNFIiwiSVBpcEVudlNlcnZpY2UiLCJpc1dpbmRvd3MiLCJnZXQiLCJJc1dpbmRvd3MiLCJXaW5kb3dzUmVnaXN0cnlTZXJ2aWNlIiwiV0lORE9XU19SRUdJU1RSWV9TRVJWSUNFIiwiS25vd25QYXRoc1NlcnZpY2UiLCJLTk9XTl9QQVRIX1NFUlZJQ0UiLCJJSW50ZXJwcmV0ZXJTZXJ2aWNlIiwiSW50ZXJwcmV0ZXJTZXJ2aWNlIiwiSUludGVycHJldGVyRGlzcGxheSIsIkludGVycHJldGVyRGlzcGxheSIsIklQeXRob25QYXRoVXBkYXRlclNlcnZpY2VGYWN0b3J5IiwiUHl0aG9uUGF0aFVwZGF0ZXJTZXJ2aWNlRmFjdG9yeSIsIklQeXRob25QYXRoVXBkYXRlclNlcnZpY2VNYW5hZ2VyIiwiUHl0aG9uUGF0aFVwZGF0ZXJTZXJ2aWNlIiwiSUludGVycHJldGVyU2VsZWN0b3IiLCJJbnRlcnByZXRlclNlbGVjdG9yIiwiSVNoZWJhbmdDb2RlTGVuc1Byb3ZpZGVyIiwiU2hlYmFuZ0NvZGVMZW5zUHJvdmlkZXIiLCJJSW50ZXJwcmV0ZXJIZWxwZXIiLCJJbnRlcnByZXRlckhlbHBlciIsIklJbnRlcnByZXRlckxvY2F0b3JIZWxwZXIiLCJJbnRlcnByZXRlckxvY2F0b3JIZWxwZXIiLCJJSW50ZXJwcmV0ZXJDb21wYXJlciIsIkludGVycHJldGVyQ29tcGFyZXIiLCJJbnRlcnByZXRlckxvY2F0b3JQcm9ncmVzc0hhbmRsZXIiLCJJbnRlcnByZXRlckxvY2F0b3JQcm9ncmVzc1N0YXR1YmFySGFuZGxlciIsIklJbnRlcnByZXRlckxvY2F0b3JQcm9ncmVzc1NlcnZpY2UiLCJJbnRlcnByZXRlckxvY2F0b3JQcm9ncmVzc1NlcnZpY2UiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FDQTtBQUNBOztBQUNBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDOztBQUNBLE1BQU1DLE9BQU8sR0FBR0MsT0FBTyxDQUFDLGlCQUFELENBQXZCOztBQUNBLE1BQU1DLHFCQUFxQixHQUFHRCxPQUFPLENBQUMscUNBQUQsQ0FBckM7O0FBQ0EsTUFBTUUscUJBQXFCLEdBQUdGLE9BQU8sQ0FBQyxxQ0FBRCxDQUFyQzs7QUFDQSxNQUFNRywwQkFBMEIsR0FBR0gsT0FBTyxDQUFDLDBDQUFELENBQTFDOztBQUNBLE1BQU1JLGlDQUFpQyxHQUFHSixPQUFPLENBQUMsaURBQUQsQ0FB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QTRCekIsV0FBVyxDQUFDNkUsa0JBQXhDLEVBQTREekUsU0FBUyxDQUFDMEUsaUJBQXRFO0FBQ0F0RCxFQUFBQSxjQUFjLENBQUNDLFlBQWYsQ0FBNEJ6QixXQUFXLENBQUMrRSx5QkFBeEMsRUFBbUV4RSxTQUFTLENBQUN5RSx3QkFBN0U7QUFDQXhELEVBQUFBLGNBQWMsQ0FBQ0MsWUFBZixDQUE0QjFCLE9BQU8sQ0FBQ2tGLG9CQUFwQyxFQUEwRHRGLHFCQUFxQixDQUFDdUYsbUJBQWhGO0FBQ0ExRCxFQUFBQSxjQUFjLENBQUNDLFlBQWYsQ0FBNEJ6QixXQUFXLENBQUNtRixpQ0FBeEMsRUFBMkVqRixpQkFBaUIsQ0FBQ2tGLHlDQUE3RjtBQUNBNUQsRUFBQUEsY0FBYyxDQUFDQyxZQUFmLENBQTRCekIsV0FBVyxDQUFDcUYsa0NBQXhDLEVBQTRFNUUsaUJBQWlCLENBQUM2RSxpQ0FBOUY7QUFDSDs7QUFDRC9GLE9BQU8sQ0FBQ2dDLGFBQVIsR0FBd0JBLGFBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdHlwZXNcIik7XHJcbmNvbnN0IGludGVycHJldGVyQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ3VyYXRpb24vaW50ZXJwcmV0ZXJDb21wYXJlclwiKTtcclxuY29uc3QgaW50ZXJwcmV0ZXJTZWxlY3Rvcl8xID0gcmVxdWlyZShcIi4vY29uZmlndXJhdGlvbi9pbnRlcnByZXRlclNlbGVjdG9yXCIpO1xyXG5jb25zdCBweXRob25QYXRoVXBkYXRlclNlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ3VyYXRpb24vcHl0aG9uUGF0aFVwZGF0ZXJTZXJ2aWNlXCIpO1xyXG5jb25zdCBweXRob25QYXRoVXBkYXRlclNlcnZpY2VGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi9jb25maWd1cmF0aW9uL3B5dGhvblBhdGhVcGRhdGVyU2VydmljZUZhY3RvcnlcIik7XHJcbmNvbnN0IHR5cGVzXzIgPSByZXF1aXJlKFwiLi9jb25maWd1cmF0aW9uL3R5cGVzXCIpO1xyXG5jb25zdCBjb250cmFjdHNfMSA9IHJlcXVpcmUoXCIuL2NvbnRyYWN0c1wiKTtcclxuY29uc3QgZGlzcGxheV8xID0gcmVxdWlyZShcIi4vZGlzcGxheVwiKTtcclxuY29uc3QgcHJvZ3Jlc3NEaXNwbGF5XzEgPSByZXF1aXJlKFwiLi9kaXNwbGF5L3Byb2dyZXNzRGlzcGxheVwiKTtcclxuY29uc3Qgc2hlYmFuZ0NvZGVMZW5zUHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL2Rpc3BsYXkvc2hlYmFuZ0NvZGVMZW5zUHJvdmlkZXJcIik7XHJcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XHJcbmNvbnN0IGludGVycHJldGVyU2VydmljZV8xID0gcmVxdWlyZShcIi4vaW50ZXJwcmV0ZXJTZXJ2aWNlXCIpO1xyXG5jb25zdCBpbnRlcnByZXRlclZlcnNpb25fMSA9IHJlcXVpcmUoXCIuL2ludGVycHJldGVyVmVyc2lvblwiKTtcclxuY29uc3QgaGVscGVyc18yID0gcmVxdWlyZShcIi4vbG9jYXRvcnMvaGVscGVyc1wiKTtcclxuY29uc3QgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2xvY2F0b3JzL2luZGV4XCIpO1xyXG5jb25zdCBwcm9ncmVzc1NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2xvY2F0b3JzL3Byb2dyZXNzU2VydmljZVwiKTtcclxuY29uc3QgY29uZGFFbnZGaWxlU2VydmljZV8xID0gcmVxdWlyZShcIi4vbG9jYXRvcnMvc2VydmljZXMvY29uZGFFbnZGaWxlU2VydmljZVwiKTtcclxuY29uc3QgY29uZGFFbnZTZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9sb2NhdG9ycy9zZXJ2aWNlcy9jb25kYUVudlNlcnZpY2VcIik7XHJcbmNvbnN0IGNvbmRhU2VydmljZV8xID0gcmVxdWlyZShcIi4vbG9jYXRvcnMvc2VydmljZXMvY29uZGFTZXJ2aWNlXCIpO1xyXG5jb25zdCBjdXJyZW50UGF0aFNlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2xvY2F0b3JzL3NlcnZpY2VzL2N1cnJlbnRQYXRoU2VydmljZVwiKTtcclxuY29uc3QgZ2xvYmFsVmlydHVhbEVudlNlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2xvY2F0b3JzL3NlcnZpY2VzL2dsb2JhbFZpcnR1YWxFbnZTZXJ2aWNlXCIpO1xyXG5jb25zdCBpbnRlcnByZXRlcldhdGNoZXJCdWlsZGVyXzEgPSByZXF1aXJlKFwiLi9sb2NhdG9ycy9zZXJ2aWNlcy9pbnRlcnByZXRlcldhdGNoZXJCdWlsZGVyXCIpO1xyXG5jb25zdCBLbm93blBhdGhzU2VydmljZV8xID0gcmVxdWlyZShcIi4vbG9jYXRvcnMvc2VydmljZXMvS25vd25QYXRoc1NlcnZpY2VcIik7XHJcbmNvbnN0IHBpcEVudlNlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2xvY2F0b3JzL3NlcnZpY2VzL3BpcEVudlNlcnZpY2VcIik7XHJcbmNvbnN0IHdpbmRvd3NSZWdpc3RyeVNlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2xvY2F0b3JzL3NlcnZpY2VzL3dpbmRvd3NSZWdpc3RyeVNlcnZpY2VcIik7XHJcbmNvbnN0IHdvcmtzcGFjZVZpcnR1YWxFbnZTZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9sb2NhdG9ycy9zZXJ2aWNlcy93b3Jrc3BhY2VWaXJ0dWFsRW52U2VydmljZVwiKTtcclxuY29uc3Qgd29ya3NwYWNlVmlydHVhbEVudldhdGNoZXJTZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9sb2NhdG9ycy9zZXJ2aWNlcy93b3Jrc3BhY2VWaXJ0dWFsRW52V2F0Y2hlclNlcnZpY2VcIik7XHJcbmNvbnN0IGluZGV4XzIgPSByZXF1aXJlKFwiLi92aXJ0dWFsRW52cy9pbmRleFwiKTtcclxuY29uc3QgdHlwZXNfMyA9IHJlcXVpcmUoXCIuL3ZpcnR1YWxFbnZzL3R5cGVzXCIpO1xyXG5mdW5jdGlvbiByZWdpc3RlclR5cGVzKHNlcnZpY2VNYW5hZ2VyKSB7XHJcbiAgICBzZXJ2aWNlTWFuYWdlci5hZGRTaW5nbGV0b24oY29udHJhY3RzXzEuSUtub3duU2VhcmNoUGF0aHNGb3JJbnRlcnByZXRlcnMsIEtub3duUGF0aHNTZXJ2aWNlXzEuS25vd25TZWFyY2hQYXRoc0ZvckludGVycHJldGVycyk7XHJcbiAgICBzZXJ2aWNlTWFuYWdlci5hZGRTaW5nbGV0b24oY29udHJhY3RzXzEuSVZpcnR1YWxFbnZpcm9ubWVudHNTZWFyY2hQYXRoUHJvdmlkZXIsIGdsb2JhbFZpcnR1YWxFbnZTZXJ2aWNlXzEuR2xvYmFsVmlydHVhbEVudmlyb25tZW50c1NlYXJjaFBhdGhQcm92aWRlciwgJ2dsb2JhbCcpO1xyXG4gICAgc2VydmljZU1hbmFnZXIuYWRkU2luZ2xldG9uKGNvbnRyYWN0c18xLklWaXJ0dWFsRW52aXJvbm1lbnRzU2VhcmNoUGF0aFByb3ZpZGVyLCB3b3Jrc3BhY2VWaXJ0dWFsRW52U2VydmljZV8xLldvcmtzcGFjZVZpcnR1YWxFbnZpcm9ubWVudHNTZWFyY2hQYXRoUHJvdmlkZXIsICd3b3Jrc3BhY2UnKTtcclxuICAgIHNlcnZpY2VNYW5hZ2VyLmFkZFNpbmdsZXRvbihjb250cmFjdHNfMS5JQ29uZGFTZXJ2aWNlLCBjb25kYVNlcnZpY2VfMS5Db25kYVNlcnZpY2UpO1xyXG4gICAgc2VydmljZU1hbmFnZXIuYWRkU2luZ2xldG9uKHR5cGVzXzMuSVZpcnR1YWxFbnZpcm9ubWVudE1hbmFnZXIsIGluZGV4XzIuVmlydHVhbEVudmlyb25tZW50TWFuYWdlcik7XHJcbiAgICBzZXJ2aWNlTWFuYWdlci5hZGQoY29udHJhY3RzXzEuSUludGVycHJldGVyV2F0Y2hlciwgd29ya3NwYWNlVmlydHVhbEVudldhdGNoZXJTZXJ2aWNlXzEuV29ya3NwYWNlVmlydHVhbEVudldhdGNoZXJTZXJ2aWNlLCBjb250cmFjdHNfMS5XT1JLU1BBQ0VfVklSVFVBTF9FTlZfU0VSVklDRSk7XHJcbiAgICBzZXJ2aWNlTWFuYWdlci5hZGRTaW5nbGV0b24oY29udHJhY3RzXzEuSUludGVycHJldGVyV2F0Y2hlckJ1aWxkZXIsIGludGVycHJldGVyV2F0Y2hlckJ1aWxkZXJfMS5JbnRlcnByZXRlcldhdGNoZXJCdWlsZGVyKTtcclxuICAgIHNlcnZpY2VNYW5hZ2VyLmFkZFNpbmdsZXRvbihjb250cmFjdHNfMS5JSW50ZXJwcmV0ZXJWZXJzaW9uU2VydmljZSwgaW50ZXJwcmV0ZXJWZXJzaW9uXzEuSW50ZXJwcmV0ZXJWZXJzaW9uU2VydmljZSk7XHJcbiAgICBzZXJ2aWNlTWFuYWdlci5hZGRTaW5nbGV0b24oY29udHJhY3RzXzEuSUludGVycHJldGVyTG9jYXRvclNlcnZpY2UsIGluZGV4XzEuUHl0aG9uSW50ZXJwcmV0ZXJMb2NhdG9yU2VydmljZSwgY29udHJhY3RzXzEuSU5URVJQUkVURVJfTE9DQVRPUl9TRVJWSUNFKTtcclxuICAgIHNlcnZpY2VNYW5hZ2VyLmFkZFNpbmdsZXRvbihjb250cmFjdHNfMS5JSW50ZXJwcmV0ZXJMb2NhdG9yU2VydmljZSwgY29uZGFFbnZGaWxlU2VydmljZV8xLkNvbmRhRW52RmlsZVNlcnZpY2UsIGNvbnRyYWN0c18xLkNPTkRBX0VOVl9GSUxFX1NFUlZJQ0UpO1xyXG4gICAgc2VydmljZU1hbmFnZXIuYWRkU2luZ2xldG9uKGNvbnRyYWN0c18xLklJbnRlcnByZXRlckxvY2F0b3JTZXJ2aWNlLCBjb25kYUVudlNlcnZpY2VfMS5Db25kYUVudlNlcnZpY2UsIGNvbnRyYWN0c18xLkNPTkRBX0VOVl9TRVJWSUNFKTtcclxuICAgIHNlcnZpY2VNYW5hZ2VyLmFkZFNpbmdsZXRvbihjb250cmFjdHNfMS5JSW50ZXJwcmV0ZXJMb2NhdG9yU2VydmljZSwgY3VycmVudFBhdGhTZXJ2aWNlXzEuQ3VycmVudFBhdGhTZXJ2aWNlLCBjb250cmFjdHNfMS5DVVJSRU5UX1BBVEhfU0VSVklDRSk7XHJcbiAgICBzZXJ2aWNlTWFuYWdlci5hZGRTaW5nbGV0b24oY29udHJhY3RzXzEuSUludGVycHJldGVyTG9jYXRvclNlcnZpY2UsIGdsb2JhbFZpcnR1YWxFbnZTZXJ2aWNlXzEuR2xvYmFsVmlydHVhbEVudlNlcnZpY2UsIGNvbnRyYWN0c18xLkdMT0JBTF9WSVJUVUFMX0VOVl9TRVJWSUNFKTtcclxuICAgIHNlcnZpY2VNYW5hZ2VyLmFkZFNpbmdsZXRvbihjb250cmFjdHNfMS5JSW50ZXJwcmV0ZXJMb2NhdG9yU2VydmljZSwgd29ya3NwYWNlVmlydHVhbEVudlNlcnZpY2VfMS5Xb3Jrc3BhY2VWaXJ0dWFsRW52U2VydmljZSwgY29udHJhY3RzXzEuV09SS1NQQUNFX1ZJUlRVQUxfRU5WX1NFUlZJQ0UpO1xyXG4gICAgc2VydmljZU1hbmFnZXIuYWRkU2luZ2xldG9uKGNvbnRyYWN0c18xLklJbnRlcnByZXRlckxvY2F0b3JTZXJ2aWNlLCBwaXBFbnZTZXJ2aWNlXzEuUGlwRW52U2VydmljZSwgY29udHJhY3RzXzEuUElQRU5WX1NFUlZJQ0UpO1xyXG4gICAgc2VydmljZU1hbmFnZXIuYWRkU2luZ2xldG9uKGNvbnRyYWN0c18xLklQaXBFbnZTZXJ2aWNlLCBwaXBFbnZTZXJ2aWNlXzEuUGlwRW52U2VydmljZSk7XHJcbiAgICBjb25zdCBpc1dpbmRvd3MgPSBzZXJ2aWNlTWFuYWdlci5nZXQodHlwZXNfMS5Jc1dpbmRvd3MpO1xyXG4gICAgaWYgKGlzV2luZG93cykge1xyXG4gICAgICAgIHNlcnZpY2VNYW5hZ2VyLmFkZFNpbmdsZXRvbihjb250cmFjdHNfMS5JSW50ZXJwcmV0ZXJMb2NhdG9yU2VydmljZSwgd2luZG93c1JlZ2lzdHJ5U2VydmljZV8xLldpbmRvd3NSZWdpc3RyeVNlcnZpY2UsIGNvbnRyYWN0c18xLldJTkRPV1NfUkVHSVNUUllfU0VSVklDRSk7XHJcbiAgICB9XHJcbiAgICBzZXJ2aWNlTWFuYWdlci5hZGRTaW5nbGV0b24oY29udHJhY3RzXzEuSUludGVycHJldGVyTG9jYXRvclNlcnZpY2UsIEtub3duUGF0aHNTZXJ2aWNlXzEuS25vd25QYXRoc1NlcnZpY2UsIGNvbnRyYWN0c18xLktOT1dOX1BBVEhfU0VSVklDRSk7XHJcbiAgICBzZXJ2aWNlTWFuYWdlci5hZGRTaW5nbGV0b24oY29udHJhY3RzXzEuSUludGVycHJldGVyU2VydmljZSwgaW50ZXJwcmV0ZXJTZXJ2aWNlXzEuSW50ZXJwcmV0ZXJTZXJ2aWNlKTtcclxuICAgIHNlcnZpY2VNYW5hZ2VyLmFkZFNpbmdsZXRvbihjb250cmFjdHNfMS5JSW50ZXJwcmV0ZXJEaXNwbGF5LCBkaXNwbGF5XzEuSW50ZXJwcmV0ZXJEaXNwbGF5KTtcclxuICAgIHNlcnZpY2VNYW5hZ2VyLmFkZFNpbmdsZXRvbih0eXBlc18yLklQeXRob25QYXRoVXBkYXRlclNlcnZpY2VGYWN0b3J5LCBweXRob25QYXRoVXBkYXRlclNlcnZpY2VGYWN0b3J5XzEuUHl0aG9uUGF0aFVwZGF0ZXJTZXJ2aWNlRmFjdG9yeSk7XHJcbiAgICBzZXJ2aWNlTWFuYWdlci5hZGRTaW5nbGV0b24odHlwZXNfMi5JUHl0aG9uUGF0aFVwZGF0ZXJTZXJ2aWNlTWFuYWdlciwgcHl0aG9uUGF0aFVwZGF0ZXJTZXJ2aWNlXzEuUHl0aG9uUGF0aFVwZGF0ZXJTZXJ2aWNlKTtcclxuICAgIHNlcnZpY2VNYW5hZ2VyLmFkZFNpbmdsZXRvbih0eXBlc18yLklJbnRlcnByZXRlclNlbGVjdG9yLCBpbnRlcnByZXRlclNlbGVjdG9yXzEuSW50ZXJwcmV0ZXJTZWxlY3Rvcik7XHJcbiAgICBzZXJ2aWNlTWFuYWdlci5hZGRTaW5nbGV0b24oY29udHJhY3RzXzEuSVNoZWJhbmdDb2RlTGVuc1Byb3ZpZGVyLCBzaGViYW5nQ29kZUxlbnNQcm92aWRlcl8xLlNoZWJhbmdDb2RlTGVuc1Byb3ZpZGVyKTtcclxuICAgIHNlcnZpY2VNYW5hZ2VyLmFkZFNpbmdsZXRvbihjb250cmFjdHNfMS5JSW50ZXJwcmV0ZXJIZWxwZXIsIGhlbHBlcnNfMS5JbnRlcnByZXRlckhlbHBlcik7XHJcbiAgICBzZXJ2aWNlTWFuYWdlci5hZGRTaW5nbGV0b24oY29udHJhY3RzXzEuSUludGVycHJldGVyTG9jYXRvckhlbHBlciwgaGVscGVyc18yLkludGVycHJldGVyTG9jYXRvckhlbHBlcik7XHJcbiAgICBzZXJ2aWNlTWFuYWdlci5hZGRTaW5nbGV0b24odHlwZXNfMi5JSW50ZXJwcmV0ZXJDb21wYXJlciwgaW50ZXJwcmV0ZXJDb21wYXJlcl8xLkludGVycHJldGVyQ29tcGFyZXIpO1xyXG4gICAgc2VydmljZU1hbmFnZXIuYWRkU2luZ2xldG9uKGNvbnRyYWN0c18xLkludGVycHJldGVyTG9jYXRvclByb2dyZXNzSGFuZGxlciwgcHJvZ3Jlc3NEaXNwbGF5XzEuSW50ZXJwcmV0ZXJMb2NhdG9yUHJvZ3Jlc3NTdGF0dWJhckhhbmRsZXIpO1xyXG4gICAgc2VydmljZU1hbmFnZXIuYWRkU2luZ2xldG9uKGNvbnRyYWN0c18xLklJbnRlcnByZXRlckxvY2F0b3JQcm9ncmVzc1NlcnZpY2UsIHByb2dyZXNzU2VydmljZV8xLkludGVycHJldGVyTG9jYXRvclByb2dyZXNzU2VydmljZSk7XHJcbn1cclxuZXhwb3J0cy5yZWdpc3RlclR5cGVzID0gcmVnaXN0ZXJUeXBlcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VydmljZVJlZ2lzdHJ5LmpzLm1hcCJdfQ==