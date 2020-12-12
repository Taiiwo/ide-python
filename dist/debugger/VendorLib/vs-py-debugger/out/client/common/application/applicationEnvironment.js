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

Object.defineProperty(exports, "__esModule", {
  value: true
});

const inversify_1 = require("inversify");

const path = require("path");

const vscode = require("vscode");

const constants_1 = require("../constants");

let ApplicationEnvironment = class ApplicationEnvironment {
  get appName() {
    return vscode.env.appName;
  }

  get appRoot() {
    return vscode.env.appRoot;
  }

  get language() {
    return vscode.env.language;
  }

  get sessionId() {
    return vscode.env.sessionId;
  }

  get machineId() {
    return vscode.env.machineId;
  }

  get extensionName() {
    // tslint:disable-next-line:non-literal-require
    return require(path.join(constants_1.EXTENSION_ROOT_DIR, 'package.json')).displayName;
  } // tslint:disable-next-line:no-any


  get packageJson() {
    // tslint:disable-next-line:non-literal-require
    return require(path.join(constants_1.EXTENSION_ROOT_DIR, 'package.json'));
  }

};
ApplicationEnvironment = __decorate([inversify_1.injectable()], ApplicationEnvironment);
exports.ApplicationEnvironment = ApplicationEnvironment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uRW52aXJvbm1lbnQuanMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiaW52ZXJzaWZ5XzEiLCJyZXF1aXJlIiwicGF0aCIsInZzY29kZSIsImNvbnN0YW50c18xIiwiQXBwbGljYXRpb25FbnZpcm9ubWVudCIsImFwcE5hbWUiLCJlbnYiLCJhcHBSb290IiwibGFuZ3VhZ2UiLCJzZXNzaW9uSWQiLCJtYWNoaW5lSWQiLCJleHRlbnNpb25OYW1lIiwiam9pbiIsIkVYVEVOU0lPTl9ST09UX0RJUiIsImRpc3BsYXlOYW1lIiwicGFja2FnZUpzb24iLCJpbmplY3RhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsVUFBVSxHQUFJLFVBQVEsU0FBS0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ25GLE1BQUlDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFsQjtBQUFBLE1BQTBCQyxDQUFDLEdBQUdILENBQUMsR0FBRyxDQUFKLEdBQVFILE1BQVIsR0FBaUJFLElBQUksS0FBSyxJQUFULEdBQWdCQSxJQUFJLEdBQUdLLE1BQU0sQ0FBQ0Msd0JBQVAsQ0FBZ0NSLE1BQWhDLEVBQXdDQyxHQUF4QyxDQUF2QixHQUFzRUMsSUFBckg7QUFBQSxNQUEySE8sQ0FBM0g7QUFDQSxNQUFJLE9BQU9DLE9BQVAsS0FBbUIsUUFBbkIsSUFBK0IsT0FBT0EsT0FBTyxDQUFDQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxDQUFDLEdBQUdJLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQlosVUFBakIsRUFBNkJDLE1BQTdCLEVBQXFDQyxHQUFyQyxFQUEwQ0MsSUFBMUMsQ0FBSixDQUEzRSxLQUNLLEtBQUssSUFBSVUsQ0FBQyxHQUFHYixVQUFVLENBQUNNLE1BQVgsR0FBb0IsQ0FBakMsRUFBb0NPLENBQUMsSUFBSSxDQUF6QyxFQUE0Q0EsQ0FBQyxFQUE3QyxFQUFpRCxJQUFJSCxDQUFDLEdBQUdWLFVBQVUsQ0FBQ2EsQ0FBRCxDQUFsQixFQUF1Qk4sQ0FBQyxHQUFHLENBQUNILENBQUMsR0FBRyxDQUFKLEdBQVFNLENBQUMsQ0FBQ0gsQ0FBRCxDQUFULEdBQWVILENBQUMsR0FBRyxDQUFKLEdBQVFNLENBQUMsQ0FBQ1QsTUFBRCxFQUFTQyxHQUFULEVBQWNLLENBQWQsQ0FBVCxHQUE0QkcsQ0FBQyxDQUFDVCxNQUFELEVBQVNDLEdBQVQsQ0FBN0MsS0FBK0RLLENBQW5FO0FBQzdFLFNBQU9ILENBQUMsR0FBRyxDQUFKLElBQVNHLENBQVQsSUFBY0MsTUFBTSxDQUFDTSxjQUFQLENBQXNCYixNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNLLENBQW5DLENBQWQsRUFBcURBLENBQTVEO0FBQ0gsQ0FMRDs7QUFNQUMsTUFBTSxDQUFDTSxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQTNCOztBQUNBLE1BQU1DLElBQUksR0FBR0QsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0EsTUFBTUUsTUFBTSxHQUFHRixPQUFPLENBQUMsUUFBRCxDQUF0Qjs7QUFDQSxNQUFNRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxjQUFELENBQTNCOztBQUNBLElBQUlJLHNCQUFzQixHQUFHLE1BQU1BLHNCQUFOLENBQTZCO0FBQ3RELE1BQUlDLE9BQUosR0FBYztBQUNWLFdBQU9ILE1BQU0sQ0FBQ0ksR0FBUCxDQUFXRCxPQUFsQjtBQUNIOztBQUNELE1BQUlFLE9BQUosR0FBYztBQUNWLFdBQU9MLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXQyxPQUFsQjtBQUNIOztBQUNELE1BQUlDLFFBQUosR0FBZTtBQUNYLFdBQU9OLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXRSxRQUFsQjtBQUNIOztBQUNELE1BQUlDLFNBQUosR0FBZ0I7QUFDWixXQUFPUCxNQUFNLENBQUNJLEdBQVAsQ0FBV0csU0FBbEI7QUFDSDs7QUFDRCxNQUFJQyxTQUFKLEdBQWdCO0FBQ1osV0FBT1IsTUFBTSxDQUFDSSxHQUFQLENBQVdJLFNBQWxCO0FBQ0g7O0FBQ0QsTUFBSUMsYUFBSixHQUFvQjtBQUNoQjtBQUNBLFdBQU9YLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDVyxJQUFMLENBQVVULFdBQVcsQ0FBQ1Usa0JBQXRCLEVBQTBDLGNBQTFDLENBQUQsQ0FBUCxDQUFtRUMsV0FBMUU7QUFDSCxHQW5CcUQsQ0FvQnREOzs7QUFDQSxNQUFJQyxXQUFKLEdBQWtCO0FBQ2Q7QUFDQSxXQUFPZixPQUFPLENBQUNDLElBQUksQ0FBQ1csSUFBTCxDQUFVVCxXQUFXLENBQUNVLGtCQUF0QixFQUEwQyxjQUExQyxDQUFELENBQWQ7QUFDSDs7QUF4QnFELENBQTFEO0FBMEJBVCxzQkFBc0IsR0FBR3ZCLFVBQVUsQ0FBQyxDQUNoQ2tCLFdBQVcsQ0FBQ2lCLFVBQVosRUFEZ0MsQ0FBRCxFQUVoQ1osc0JBRmdDLENBQW5DO0FBR0FQLE9BQU8sQ0FBQ08sc0JBQVIsR0FBaUNBLHNCQUFqQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbid1c2Ugc3RyaWN0JztcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnZlcnNpZnlfMSA9IHJlcXVpcmUoXCJpbnZlcnNpZnlcIik7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3QgdnNjb2RlID0gcmVxdWlyZShcInZzY29kZVwiKTtcclxuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xyXG5sZXQgQXBwbGljYXRpb25FbnZpcm9ubWVudCA9IGNsYXNzIEFwcGxpY2F0aW9uRW52aXJvbm1lbnQge1xyXG4gICAgZ2V0IGFwcE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHZzY29kZS5lbnYuYXBwTmFtZTtcclxuICAgIH1cclxuICAgIGdldCBhcHBSb290KCkge1xyXG4gICAgICAgIHJldHVybiB2c2NvZGUuZW52LmFwcFJvb3Q7XHJcbiAgICB9XHJcbiAgICBnZXQgbGFuZ3VhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHZzY29kZS5lbnYubGFuZ3VhZ2U7XHJcbiAgICB9XHJcbiAgICBnZXQgc2Vzc2lvbklkKCkge1xyXG4gICAgICAgIHJldHVybiB2c2NvZGUuZW52LnNlc3Npb25JZDtcclxuICAgIH1cclxuICAgIGdldCBtYWNoaW5lSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHZzY29kZS5lbnYubWFjaGluZUlkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGV4dGVuc2lvbk5hbWUoKSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vbi1saXRlcmFsLXJlcXVpcmVcclxuICAgICAgICByZXR1cm4gcmVxdWlyZShwYXRoLmpvaW4oY29uc3RhbnRzXzEuRVhURU5TSU9OX1JPT1RfRElSLCAncGFja2FnZS5qc29uJykpLmRpc3BsYXlOYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgZ2V0IHBhY2thZ2VKc29uKCkge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpub24tbGl0ZXJhbC1yZXF1aXJlXHJcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUocGF0aC5qb2luKGNvbnN0YW50c18xLkVYVEVOU0lPTl9ST09UX0RJUiwgJ3BhY2thZ2UuanNvbicpKTtcclxuICAgIH1cclxufTtcclxuQXBwbGljYXRpb25FbnZpcm9ubWVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgaW52ZXJzaWZ5XzEuaW5qZWN0YWJsZSgpXHJcbl0sIEFwcGxpY2F0aW9uRW52aXJvbm1lbnQpO1xyXG5leHBvcnRzLkFwcGxpY2F0aW9uRW52aXJvbm1lbnQgPSBBcHBsaWNhdGlvbkVudmlyb25tZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHBsaWNhdGlvbkVudmlyb25tZW50LmpzLm1hcCJdfQ==