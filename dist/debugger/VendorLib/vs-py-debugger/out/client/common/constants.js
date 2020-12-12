"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const path = require("path");

exports.PYTHON_LANGUAGE = 'python';
exports.PYTHON = [{
  scheme: 'file',
  language: exports.PYTHON_LANGUAGE
}, {
  scheme: 'untitled',
  language: exports.PYTHON_LANGUAGE
}];
exports.PVSC_EXTENSION_ID = 'ms-python.python';
var Commands;

(function (Commands) {
  Commands.Set_Interpreter = 'python.setInterpreter';
  Commands.Set_ShebangInterpreter = 'python.setShebangInterpreter';
  Commands.Exec_In_Terminal = 'python.execInTerminal';
  Commands.Exec_Selection_In_Terminal = 'python.execSelectionInTerminal';
  Commands.Exec_Selection_In_Django_Shell = 'python.execSelectionInDjangoShell';
  Commands.Tests_View_UI = 'python.viewTestUI';
  Commands.Tests_Picker_UI = 'python.selectTestToRun';
  Commands.Tests_Picker_UI_Debug = 'python.selectTestToDebug';
  Commands.Tests_Discover = 'python.discoverTests';
  Commands.Tests_Run_Failed = 'python.runFailedTests';
  Commands.Sort_Imports = 'python.sortImports';
  Commands.Tests_Run = 'python.runtests';
  Commands.Tests_Debug = 'python.debugtests';
  Commands.Tests_Ask_To_Stop_Test = 'python.askToStopUnitTests';
  Commands.Tests_Ask_To_Stop_Discovery = 'python.askToStopUnitTestDiscovery';
  Commands.Tests_Stop = 'python.stopUnitTests';
  Commands.Tests_ViewOutput = 'python.viewTestOutput';
  Commands.Tests_Select_And_Run_Method = 'python.selectAndRunTestMethod';
  Commands.Tests_Select_And_Debug_Method = 'python.selectAndDebugTestMethod';
  Commands.Tests_Select_And_Run_File = 'python.selectAndRunTestFile';
  Commands.Tests_Run_Current_File = 'python.runCurrentTestFile';
  Commands.Refactor_Extract_Variable = 'python.refactorExtractVariable';
  Commands.Refaactor_Extract_Method = 'python.refactorExtractMethod';
  Commands.Update_SparkLibrary = 'python.updateSparkLibrary';
  Commands.Build_Workspace_Symbols = 'python.buildWorkspaceSymbols';
  Commands.Start_REPL = 'python.startREPL';
  Commands.Create_Terminal = 'python.createTerminal';
  Commands.Set_Linter = 'python.setLinter';
  Commands.Enable_Linter = 'python.enableLinting';
  Commands.Run_Linter = 'python.runLinting';
})(Commands = exports.Commands || (exports.Commands = {}));

var Octicons;

(function (Octicons) {
  Octicons.Test_Pass = '$(check)';
  Octicons.Test_Fail = '$(alert)';
  Octicons.Test_Error = '$(x)';
  Octicons.Test_Skip = '$(circle-slash)';
})(Octicons = exports.Octicons || (exports.Octicons = {}));

exports.Button_Text_Tests_View_Output = 'View Output';
var Text;

(function (Text) {
  Text.CodeLensRunUnitTest = 'Run Test';
  Text.CodeLensDebugUnitTest = 'Debug Test';
})(Text = exports.Text || (exports.Text = {}));

var Delays;

(function (Delays) {
  // Max time to wait before aborting the generation of code lenses for unit tests
  Delays.MaxUnitTestCodeLensDelay = 5000;
})(Delays = exports.Delays || (exports.Delays = {}));

var LinterErrors;

(function (LinterErrors) {
  let pylint;

  (function (pylint) {
    pylint.InvalidSyntax = 'E0001';
  })(pylint = LinterErrors.pylint || (LinterErrors.pylint = {}));

  let prospector;

  (function (prospector) {
    prospector.InvalidSyntax = 'F999';
  })(prospector = LinterErrors.prospector || (LinterErrors.prospector = {}));

  let flake8;

  (function (flake8) {
    flake8.InvalidSyntax = 'E999';
  })(flake8 = LinterErrors.flake8 || (LinterErrors.flake8 = {}));
})(LinterErrors = exports.LinterErrors || (exports.LinterErrors = {}));

exports.STANDARD_OUTPUT_CHANNEL = 'STANDARD_OUTPUT_CHANNEL';

function isTestExecution() {
  return process.env.VSC_PYTHON_CI_TEST === '1';
}

exports.isTestExecution = isTestExecution;
/**
 * Whether we're running unit tests (*.unit.test.ts).
 * These tests have a speacial meaning, they run fast.
 * @export
 * @returns {boolean}
 */

function isUnitTestExecution() {
  return process.env.VSC_PYTHON_UNIT_TEST === '1';
}

exports.isUnitTestExecution = isUnitTestExecution;

function isLanguageServerTest() {
  return process.env.VSC_PYTHON_LANGUAGE_SERVER === '1';
}

exports.isLanguageServerTest = isLanguageServerTest;
exports.EXTENSION_ROOT_DIR = path.join(__dirname, '..', '..', '..');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInBhdGgiLCJyZXF1aXJlIiwiUFlUSE9OX0xBTkdVQUdFIiwiUFlUSE9OIiwic2NoZW1lIiwibGFuZ3VhZ2UiLCJQVlNDX0VYVEVOU0lPTl9JRCIsIkNvbW1hbmRzIiwiU2V0X0ludGVycHJldGVyIiwiU2V0X1NoZWJhbmdJbnRlcnByZXRlciIsIkV4ZWNfSW5fVGVybWluYWwiLCJFeGVjX1NlbGVjdGlvbl9Jbl9UZXJtaW5hbCIsIkV4ZWNfU2VsZWN0aW9uX0luX0RqYW5nb19TaGVsbCIsIlRlc3RzX1ZpZXdfVUkiLCJUZXN0c19QaWNrZXJfVUkiLCJUZXN0c19QaWNrZXJfVUlfRGVidWciLCJUZXN0c19EaXNjb3ZlciIsIlRlc3RzX1J1bl9GYWlsZWQiLCJTb3J0X0ltcG9ydHMiLCJUZXN0c19SdW4iLCJUZXN0c19EZWJ1ZyIsIlRlc3RzX0Fza19Ub19TdG9wX1Rlc3QiLCJUZXN0c19Bc2tfVG9fU3RvcF9EaXNjb3ZlcnkiLCJUZXN0c19TdG9wIiwiVGVzdHNfVmlld091dHB1dCIsIlRlc3RzX1NlbGVjdF9BbmRfUnVuX01ldGhvZCIsIlRlc3RzX1NlbGVjdF9BbmRfRGVidWdfTWV0aG9kIiwiVGVzdHNfU2VsZWN0X0FuZF9SdW5fRmlsZSIsIlRlc3RzX1J1bl9DdXJyZW50X0ZpbGUiLCJSZWZhY3Rvcl9FeHRyYWN0X1ZhcmlhYmxlIiwiUmVmYWFjdG9yX0V4dHJhY3RfTWV0aG9kIiwiVXBkYXRlX1NwYXJrTGlicmFyeSIsIkJ1aWxkX1dvcmtzcGFjZV9TeW1ib2xzIiwiU3RhcnRfUkVQTCIsIkNyZWF0ZV9UZXJtaW5hbCIsIlNldF9MaW50ZXIiLCJFbmFibGVfTGludGVyIiwiUnVuX0xpbnRlciIsIk9jdGljb25zIiwiVGVzdF9QYXNzIiwiVGVzdF9GYWlsIiwiVGVzdF9FcnJvciIsIlRlc3RfU2tpcCIsIkJ1dHRvbl9UZXh0X1Rlc3RzX1ZpZXdfT3V0cHV0IiwiVGV4dCIsIkNvZGVMZW5zUnVuVW5pdFRlc3QiLCJDb2RlTGVuc0RlYnVnVW5pdFRlc3QiLCJEZWxheXMiLCJNYXhVbml0VGVzdENvZGVMZW5zRGVsYXkiLCJMaW50ZXJFcnJvcnMiLCJweWxpbnQiLCJJbnZhbGlkU3ludGF4IiwicHJvc3BlY3RvciIsImZsYWtlOCIsIlNUQU5EQVJEX09VVFBVVF9DSEFOTkVMIiwiaXNUZXN0RXhlY3V0aW9uIiwicHJvY2VzcyIsImVudiIsIlZTQ19QWVRIT05fQ0lfVEVTVCIsImlzVW5pdFRlc3RFeGVjdXRpb24iLCJWU0NfUFlUSE9OX1VOSVRfVEVTVCIsImlzTGFuZ3VhZ2VTZXJ2ZXJUZXN0IiwiVlNDX1BZVEhPTl9MQU5HVUFHRV9TRVJWRVIiLCJFWFRFTlNJT05fUk9PVF9ESVIiLCJqb2luIiwiX19kaXJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBSCxPQUFPLENBQUNJLGVBQVIsR0FBMEIsUUFBMUI7QUFDQUosT0FBTyxDQUFDSyxNQUFSLEdBQWlCLENBQ2I7QUFBRUMsRUFBQUEsTUFBTSxFQUFFLE1BQVY7QUFBa0JDLEVBQUFBLFFBQVEsRUFBRVAsT0FBTyxDQUFDSTtBQUFwQyxDQURhLEVBRWI7QUFBRUUsRUFBQUEsTUFBTSxFQUFFLFVBQVY7QUFBc0JDLEVBQUFBLFFBQVEsRUFBRVAsT0FBTyxDQUFDSTtBQUF4QyxDQUZhLENBQWpCO0FBSUFKLE9BQU8sQ0FBQ1EsaUJBQVIsR0FBNEIsa0JBQTVCO0FBQ0EsSUFBSUMsUUFBSjs7QUFDQSxDQUFDLFVBQVVBLFFBQVYsRUFBb0I7QUFDakJBLEVBQUFBLFFBQVEsQ0FBQ0MsZUFBVCxHQUEyQix1QkFBM0I7QUFDQUQsRUFBQUEsUUFBUSxD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QkFBbEM7O0FBQ0EsU0FBU0MsZUFBVCxHQUEyQjtBQUN2QixTQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsa0JBQVosS0FBbUMsR0FBMUM7QUFDSDs7QUFDRDVELE9BQU8sQ0FBQ3lELGVBQVIsR0FBMEJBLGVBQTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNJLG1CQUFULEdBQStCO0FBQzNCLFNBQU9ILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxvQkFBWixLQUFxQyxHQUE1QztBQUNIOztBQUNEOUQsT0FBTyxDQUFDNkQsbUJBQVIsR0FBOEJBLG1CQUE5Qjs7QUFDQSxTQUFTRSxvQkFBVCxHQUFnQztBQUM1QixTQUFPTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssMEJBQVosS0FBMkMsR0FBbEQ7QUFDSDs7QUFDRGhFLE9BQU8sQ0FBQytELG9CQUFSLEdBQStCQSxvQkFBL0I7QUFDQS9ELE9BQU8sQ0FBQ2lFLGtCQUFSLEdBQTZCL0QsSUFBSSxDQUFDZ0UsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLElBQWpDLENBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5leHBvcnRzLlBZVEhPTl9MQU5HVUFHRSA9ICdweXRob24nO1xyXG5leHBvcnRzLlBZVEhPTiA9IFtcclxuICAgIHsgc2NoZW1lOiAnZmlsZScsIGxhbmd1YWdlOiBleHBvcnRzLlBZVEhPTl9MQU5HVUFHRSB9LFxyXG4gICAgeyBzY2hlbWU6ICd1bnRpdGxlZCcsIGxhbmd1YWdlOiBleHBvcnRzLlBZVEhPTl9MQU5HVUFHRSB9XHJcbl07XHJcbmV4cG9ydHMuUFZTQ19FWFRFTlNJT05fSUQgPSAnbXMtcHl0aG9uLnB5dGhvbic7XHJcbnZhciBDb21tYW5kcztcclxuKGZ1bmN0aW9uIChDb21tYW5kcykge1xyXG4gICAgQ29tbWFuZHMuU2V0X0ludGVycHJldGVyID0gJ3B5dGhvbi5zZXRJbnRlcnByZXRlcic7XHJcbiAgICBDb21tYW5kcy5TZXRfU2hlYmFuZ0ludGVycHJldGVyID0gJ3B5dGhvbi5zZXRTaGViYW5nSW50ZXJwcmV0ZXInO1xyXG4gICAgQ29tbWFuZHMuRXhlY19Jbl9UZXJtaW5hbCA9ICdweXRob24uZXhlY0luVGVybWluYWwnO1xyXG4gICAgQ29tbWFuZHMuRXhlY19TZWxlY3Rpb25fSW5fVGVybWluYWwgPSAncHl0aG9uLmV4ZWNTZWxlY3Rpb25JblRlcm1pbmFsJztcclxuICAgIENvbW1hbmRzLkV4ZWNfU2VsZWN0aW9uX0luX0RqYW5nb19TaGVsbCA9ICdweXRob24uZXhlY1NlbGVjdGlvbkluRGphbmdvU2hlbGwnO1xyXG4gICAgQ29tbWFuZHMuVGVzdHNfVmlld19VSSA9ICdweXRob24udmlld1Rlc3RVSSc7XHJcbiAgICBDb21tYW5kcy5UZXN0c19QaWNrZXJfVUkgPSAncHl0aG9uLnNlbGVjdFRlc3RUb1J1bic7XHJcbiAgICBDb21tYW5kcy5UZXN0c19QaWNrZXJfVUlfRGVidWcgPSAncHl0aG9uLnNlbGVjdFRlc3RUb0RlYnVnJztcclxuICAgIENvbW1hbmRzLlRlc3RzX0Rpc2NvdmVyID0gJ3B5dGhvbi5kaXNjb3ZlclRlc3RzJztcclxuICAgIENvbW1hbmRzLlRlc3RzX1J1bl9GYWlsZWQgPSAncHl0aG9uLnJ1bkZhaWxlZFRlc3RzJztcclxuICAgIENvbW1hbmRzLlNvcnRfSW1wb3J0cyA9ICdweXRob24uc29ydEltcG9ydHMnO1xyXG4gICAgQ29tbWFuZHMuVGVzdHNfUnVuID0gJ3B5dGhvbi5ydW50ZXN0cyc7XHJcbiAgICBDb21tYW5kcy5UZXN0c19EZWJ1ZyA9ICdweXRob24uZGVidWd0ZXN0cyc7XHJcbiAgICBDb21tYW5kcy5UZXN0c19Bc2tfVG9fU3RvcF9UZXN0ID0gJ3B5dGhvbi5hc2tUb1N0b3BVbml0VGVzdHMnO1xyXG4gICAgQ29tbWFuZHMuVGVzdHNfQXNrX1RvX1N0b3BfRGlzY292ZXJ5ID0gJ3B5dGhvbi5hc2tUb1N0b3BVbml0VGVzdERpc2NvdmVyeSc7XHJcbiAgICBDb21tYW5kcy5UZXN0c19TdG9wID0gJ3B5dGhvbi5zdG9wVW5pdFRlc3RzJztcclxuICAgIENvbW1hbmRzLlRlc3RzX1ZpZXdPdXRwdXQgPSAncHl0aG9uLnZpZXdUZXN0T3V0cHV0JztcclxuICAgIENvbW1hbmRzLlRlc3RzX1NlbGVjdF9BbmRfUnVuX01ldGhvZCA9ICdweXRob24uc2VsZWN0QW5kUnVuVGVzdE1ldGhvZCc7XHJcbiAgICBDb21tYW5kcy5UZXN0c19TZWxlY3RfQW5kX0RlYnVnX01ldGhvZCA9ICdweXRob24uc2VsZWN0QW5kRGVidWdUZXN0TWV0aG9kJztcclxuICAgIENvbW1hbmRzLlRlc3RzX1NlbGVjdF9BbmRfUnVuX0ZpbGUgPSAncHl0aG9uLnNlbGVjdEFuZFJ1blRlc3RGaWxlJztcclxuICAgIENvbW1hbmRzLlRlc3RzX1J1bl9DdXJyZW50X0ZpbGUgPSAncHl0aG9uLnJ1bkN1cnJlbnRUZXN0RmlsZSc7XHJcbiAgICBDb21tYW5kcy5SZWZhY3Rvcl9FeHRyYWN0X1ZhcmlhYmxlID0gJ3B5dGhvbi5yZWZhY3RvckV4dHJhY3RWYXJpYWJsZSc7XHJcbiAgICBDb21tYW5kcy5SZWZhYWN0b3JfRXh0cmFjdF9NZXRob2QgPSAncHl0aG9uLnJlZmFjdG9yRXh0cmFjdE1ldGhvZCc7XHJcbiAgICBDb21tYW5kcy5VcGRhdGVfU3BhcmtMaWJyYXJ5ID0gJ3B5dGhvbi51cGRhdGVTcGFya0xpYnJhcnknO1xyXG4gICAgQ29tbWFuZHMuQnVpbGRfV29ya3NwYWNlX1N5bWJvbHMgPSAncHl0aG9uLmJ1aWxkV29ya3NwYWNlU3ltYm9scyc7XHJcbiAgICBDb21tYW5kcy5TdGFydF9SRVBMID0gJ3B5dGhvbi5zdGFydFJFUEwnO1xyXG4gICAgQ29tbWFuZHMuQ3JlYXRlX1Rlcm1pbmFsID0gJ3B5dGhvbi5jcmVhdGVUZXJtaW5hbCc7XHJcbiAgICBDb21tYW5kcy5TZXRfTGludGVyID0gJ3B5dGhvbi5zZXRMaW50ZXInO1xyXG4gICAgQ29tbWFuZHMuRW5hYmxlX0xpbnRlciA9ICdweXRob24uZW5hYmxlTGludGluZyc7XHJcbiAgICBDb21tYW5kcy5SdW5fTGludGVyID0gJ3B5dGhvbi5ydW5MaW50aW5nJztcclxufSkoQ29tbWFuZHMgPSBleHBvcnRzLkNvbW1hbmRzIHx8IChleHBvcnRzLkNvbW1hbmRzID0ge30pKTtcclxudmFyIE9jdGljb25zO1xyXG4oZnVuY3Rpb24gKE9jdGljb25zKSB7XHJcbiAgICBPY3RpY29ucy5UZXN0X1Bhc3MgPSAnJChjaGVjayknO1xyXG4gICAgT2N0aWNvbnMuVGVzdF9GYWlsID0gJyQoYWxlcnQpJztcclxuICAgIE9jdGljb25zLlRlc3RfRXJyb3IgPSAnJCh4KSc7XHJcbiAgICBPY3RpY29ucy5UZXN0X1NraXAgPSAnJChjaXJjbGUtc2xhc2gpJztcclxufSkoT2N0aWNvbnMgPSBleHBvcnRzLk9jdGljb25zIHx8IChleHBvcnRzLk9jdGljb25zID0ge30pKTtcclxuZXhwb3J0cy5CdXR0b25fVGV4dF9UZXN0c19WaWV3X091dHB1dCA9ICdWaWV3IE91dHB1dCc7XHJcbnZhciBUZXh0O1xyXG4oZnVuY3Rpb24gKFRleHQpIHtcclxuICAgIFRleHQuQ29kZUxlbnNSdW5Vbml0VGVzdCA9ICdSdW4gVGVzdCc7XHJcbiAgICBUZXh0LkNvZGVMZW5zRGVidWdVbml0VGVzdCA9ICdEZWJ1ZyBUZXN0JztcclxufSkoVGV4dCA9IGV4cG9ydHMuVGV4dCB8fCAoZXhwb3J0cy5UZXh0ID0ge30pKTtcclxudmFyIERlbGF5cztcclxuKGZ1bmN0aW9uIChEZWxheXMpIHtcclxuICAgIC8vIE1heCB0aW1lIHRvIHdhaXQgYmVmb3JlIGFib3J0aW5nIHRoZSBnZW5lcmF0aW9uIG9mIGNvZGUgbGVuc2VzIGZvciB1bml0IHRlc3RzXHJcbiAgICBEZWxheXMuTWF4VW5pdFRlc3RDb2RlTGVuc0RlbGF5ID0gNTAwMDtcclxufSkoRGVsYXlzID0gZXhwb3J0cy5EZWxheXMgfHwgKGV4cG9ydHMuRGVsYXlzID0ge30pKTtcclxudmFyIExpbnRlckVycm9ycztcclxuKGZ1bmN0aW9uIChMaW50ZXJFcnJvcnMpIHtcclxuICAgIGxldCBweWxpbnQ7XHJcbiAgICAoZnVuY3Rpb24gKHB5bGludCkge1xyXG4gICAgICAgIHB5bGludC5JbnZhbGlkU3ludGF4ID0gJ0UwMDAxJztcclxuICAgIH0pKHB5bGludCA9IExpbnRlckVycm9ycy5weWxpbnQgfHwgKExpbnRlckVycm9ycy5weWxpbnQgPSB7fSkpO1xyXG4gICAgbGV0IHByb3NwZWN0b3I7XHJcbiAgICAoZnVuY3Rpb24gKHByb3NwZWN0b3IpIHtcclxuICAgICAgICBwcm9zcGVjdG9yLkludmFsaWRTeW50YXggPSAnRjk5OSc7XHJcbiAgICB9KShwcm9zcGVjdG9yID0gTGludGVyRXJyb3JzLnByb3NwZWN0b3IgfHwgKExpbnRlckVycm9ycy5wcm9zcGVjdG9yID0ge30pKTtcclxuICAgIGxldCBmbGFrZTg7XHJcbiAgICAoZnVuY3Rpb24gKGZsYWtlOCkge1xyXG4gICAgICAgIGZsYWtlOC5JbnZhbGlkU3ludGF4ID0gJ0U5OTknO1xyXG4gICAgfSkoZmxha2U4ID0gTGludGVyRXJyb3JzLmZsYWtlOCB8fCAoTGludGVyRXJyb3JzLmZsYWtlOCA9IHt9KSk7XHJcbn0pKExpbnRlckVycm9ycyA9IGV4cG9ydHMuTGludGVyRXJyb3JzIHx8IChleHBvcnRzLkxpbnRlckVycm9ycyA9IHt9KSk7XHJcbmV4cG9ydHMuU1RBTkRBUkRfT1VUUFVUX0NIQU5ORUwgPSAnU1RBTkRBUkRfT1VUUFVUX0NIQU5ORUwnO1xyXG5mdW5jdGlvbiBpc1Rlc3RFeGVjdXRpb24oKSB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuVlNDX1BZVEhPTl9DSV9URVNUID09PSAnMSc7XHJcbn1cclxuZXhwb3J0cy5pc1Rlc3RFeGVjdXRpb24gPSBpc1Rlc3RFeGVjdXRpb247XHJcbi8qKlxyXG4gKiBXaGV0aGVyIHdlJ3JlIHJ1bm5pbmcgdW5pdCB0ZXN0cyAoKi51bml0LnRlc3QudHMpLlxyXG4gKiBUaGVzZSB0ZXN0cyBoYXZlIGEgc3BlYWNpYWwgbWVhbmluZywgdGhleSBydW4gZmFzdC5cclxuICogQGV4cG9ydFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzVW5pdFRlc3RFeGVjdXRpb24oKSB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuVlNDX1BZVEhPTl9VTklUX1RFU1QgPT09ICcxJztcclxufVxyXG5leHBvcnRzLmlzVW5pdFRlc3RFeGVjdXRpb24gPSBpc1VuaXRUZXN0RXhlY3V0aW9uO1xyXG5mdW5jdGlvbiBpc0xhbmd1YWdlU2VydmVyVGVzdCgpIHtcclxuICAgIHJldHVybiBwcm9jZXNzLmVudi5WU0NfUFlUSE9OX0xBTkdVQUdFX1NFUlZFUiA9PT0gJzEnO1xyXG59XHJcbmV4cG9ydHMuaXNMYW5ndWFnZVNlcnZlclRlc3QgPSBpc0xhbmd1YWdlU2VydmVyVGVzdDtcclxuZXhwb3J0cy5FWFRFTlNJT05fUk9PVF9ESVIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnLi4nLCAnLi4nKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCJdfQ==