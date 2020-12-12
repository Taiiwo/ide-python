// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';

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
});

require("../common/extensions");

const types_1 = require("../common/types");

const baseLinter_1 = require("./baseLinter");

const types_2 = require("./types");

class Bandit extends baseLinter_1.BaseLinter {
  constructor(outputChannel, serviceContainer) {
    super(types_1.Product.bandit, outputChannel, serviceContainer);
  }

  runLinter(document, cancellation) {
    return __awaiter(this, void 0, void 0, function* () {
      // View all errors in bandit <= 1.5.1 (https://github.com/PyCQA/bandit/issues/371)
      const messages = yield this.run(['-f', 'custom', '--msg-template', '{line},0,{severity},{test_id}:{msg}', '-n', '-1', document.uri.fsPath], document, cancellation);
      messages.forEach(msg => {
        msg.severity = {
          LOW: types_2.LintMessageSeverity.Information,
          MEDIUM: types_2.LintMessageSeverity.Warning,
          HIGH: types_2.LintMessageSeverity.Error
        }[msg.type];
      });
      return messages;
    });
  }

}

exports.Bandit = Bandit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbmRpdC5qcyJdLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwicmVxdWlyZSIsInR5cGVzXzEiLCJiYXNlTGludGVyXzEiLCJ0eXBlc18yIiwiQmFuZGl0IiwiQmFzZUxpbnRlciIsImNvbnN0cnVjdG9yIiwib3V0cHV0Q2hhbm5lbCIsInNlcnZpY2VDb250YWluZXIiLCJQcm9kdWN0IiwiYmFuZGl0IiwicnVuTGludGVyIiwiZG9jdW1lbnQiLCJjYW5jZWxsYXRpb24iLCJtZXNzYWdlcyIsInJ1biIsInVyaSIsImZzUGF0aCIsImZvckVhY2giLCJtc2ciLCJzZXZlcml0eSIsIkxPVyIsIkxpbnRNZXNzYWdlU2V2ZXJpdHkiLCJJbmZvcm1hdGlvbiIsIk1FRElVTSIsIldhcm5pbmciLCJISUdIIiwiRXJyb3IiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsU0FBUyxHQUFJLFVBQVEsU0FBS0EsU0FBZCxJQUE0QixVQUFVQyxPQUFWLEVBQW1CQyxVQUFuQixFQUErQkMsQ0FBL0IsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQ3JGLFNBQU8sS0FBS0QsQ0FBQyxLQUFLQSxDQUFDLEdBQUdFLE9BQVQsQ0FBTixFQUF5QixVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUN2RCxhQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFFLFVBQUk7QUFBRUMsUUFBQUEsSUFBSSxDQUFDTixTQUFTLENBQUNPLElBQVYsQ0FBZUYsS0FBZixDQUFELENBQUo7QUFBOEIsT0FBcEMsQ0FBcUMsT0FBT0csQ0FBUCxFQUFVO0FBQUVMLFFBQUFBLE1BQU0sQ0FBQ0ssQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDM0YsYUFBU0MsUUFBVCxDQUFrQkosS0FBbEIsRUFBeUI7QUFBRSxVQUFJO0FBQUVDLFFBQUFBLElBQUksQ0FBQ04sU0FBUyxDQUFDLE9BQUQsQ0FBVCxDQUFtQkssS0FBbkIsQ0FBRCxDQUFKO0FBQWtDLE9BQXhDLENBQXlDLE9BQU9HLENBQVAsRUFBVTtBQUFFTCxRQUFBQSxNQUFNLENBQUNLLENBQUQsQ0FBTjtBQUFZO0FBQUU7O0FBQzlGLGFBQVNGLElBQVQsQ0FBY0ksTUFBZCxFQUFzQjtBQUFFQSxNQUFBQSxNQUFNLENBQUNDLElBQVAsR0FBY1QsT0FBTyxDQUFDUSxNQUFNLENBQUNMLEtBQVIsQ0FBckIsR0FBc0MsSUFBSU4sQ0FBSixDQUFNLFVBQVVHLE9BQVYsRUFBbUI7QUFBRUEsUUFBQUEsT0FBTyxDQUFDUSxNQUFNLENBQUNMLEtBQVIsQ0FBUDtBQUF3QixPQUFuRCxFQUFxRE8sSUFBckQsQ0FBMERSLFNBQTFELEVBQXFFSyxRQUFyRSxDQUF0QztBQUF1SDs7QUFDL0lILElBQUFBLElBQUksQ0FBQyxDQUFDTixTQUFTLEdBQUdBLFNBQVMsQ0FBQ2EsS0FBVixDQUFnQmhCLE9BQWhCLEVBQXlCQyxVQUFVLElBQUksRUFBdkMsQ0FBYixFQUF5RFMsSUFBekQsRUFBRCxDQUFKO0FBQ0gsR0FMTSxDQUFQO0FBTUgsQ0FQRDs7QUFRQU8sTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFWCxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQVksT0FBTyxDQUFDLHNCQUFELENBQVA7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsaUJBQUQsQ0FBdkI7O0FBQ0EsTUFBTUUsWUFBWSxHQUFHRixPQUFPLENBQUMsY0FBRCxDQUE1Qjs7QUFDQSxNQUFNRyxPQUFPLEdBQUdILE9BQU8sQ0FBQyxTQUFELENBQXZCOztBQUNBLE1BQU1JLE1BQU4sU0FBcUJGLFlBQVksQ0FBQ0csVUFBbEMsQ0FBNkM7QUFDekNDLEVBQUFBLFdBQVcsQ0FBQ0MsYUFBRCxFQUFnQkMsZ0JBQWhCLEVBQWtDO0FBQ3pDLFVBQU1QLE9BQU8sQ0FBQ1EsT0FBUixDQUFnQkMsTUFBdEIsRUFBOEJILGFBQTlCLEVBQTZDQyxnQkFBN0M7QUFDSDs7QUFDREcsRUFBQUEsU0FBUyxDQUFDQyxRQUFELEVBQVdDLFlBQVgsRUFBeUI7QUFDOUIsV0FBT2xDLFNBQVMsQ0FBQyxJQUFELEVBQU8sS0FBSyxDQUFaLEVBQWUsS0FBSyxDQUFwQixFQUF1QixhQUFhO0FBQ2hEO0FBQ0EsWUFBTW1DLFFBQVEsR0FBRyxNQUFNLEtBQUtDLEdBQUwsQ0FBUyxDQUM1QixJQUQ0QixFQUN0QixRQURzQixFQUNaLGdCQURZLEVBQ00scUNBRE4sRUFDNkMsSUFEN0MsRUFDbUQsSUFEbkQsRUFDeURILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhQyxNQUR0RSxDQUFULEVBRXBCTCxRQUZvQixFQUVWQyxZQUZVLENBQXZCO0FBR0FDLE1BQUFBLFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQkMsR0FBRyxJQUFJO0FBQ3BCQSxRQUFBQSxHQUFHLENBQUNDLFFBQUosR0FBZTtBQUNYQyxVQUFBQSxHQUFHLEVBQUVsQixPQUFPLENBQUNtQixtQkFBUixDQUE0QkMsV0FEdEI7QUFFWEMsVUFBQUEsTUFBTSxFQUFFckIsT0FBTyxDQUFDbUIsbUJBQVIsQ0FBNEJHLE9BRnpCO0FBR1hDLFVBQUFBLElBQUksRUFBRXZCLE9BQU8sQ0FBQ21CLG1CQUFSLENBQTRCSztBQUh2QixVQUliUixHQUFHLENBQUNTLElBSlMsQ0FBZjtBQUtILE9BTkQ7QUFPQSxhQUFPZCxRQUFQO0FBQ0gsS0FiZSxDQUFoQjtBQWNIOztBQW5Cd0M7O0FBcUI3Q2YsT0FBTyxDQUFDSyxNQUFSLEdBQWlCQSxNQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbid1c2Ugc3RyaWN0JztcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi4vY29tbW9uL2V4dGVuc2lvbnNcIik7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3R5cGVzXCIpO1xyXG5jb25zdCBiYXNlTGludGVyXzEgPSByZXF1aXJlKFwiLi9iYXNlTGludGVyXCIpO1xyXG5jb25zdCB0eXBlc18yID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbmNsYXNzIEJhbmRpdCBleHRlbmRzIGJhc2VMaW50ZXJfMS5CYXNlTGludGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG91dHB1dENoYW5uZWwsIHNlcnZpY2VDb250YWluZXIpIHtcclxuICAgICAgICBzdXBlcih0eXBlc18xLlByb2R1Y3QuYmFuZGl0LCBvdXRwdXRDaGFubmVsLCBzZXJ2aWNlQ29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIHJ1bkxpbnRlcihkb2N1bWVudCwgY2FuY2VsbGF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgLy8gVmlldyBhbGwgZXJyb3JzIGluIGJhbmRpdCA8PSAxLjUuMSAoaHR0cHM6Ly9naXRodWIuY29tL1B5Q1FBL2JhbmRpdC9pc3N1ZXMvMzcxKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IHlpZWxkIHRoaXMucnVuKFtcclxuICAgICAgICAgICAgICAgICctZicsICdjdXN0b20nLCAnLS1tc2ctdGVtcGxhdGUnLCAne2xpbmV9LDAse3NldmVyaXR5fSx7dGVzdF9pZH06e21zZ30nLCAnLW4nLCAnLTEnLCBkb2N1bWVudC51cmkuZnNQYXRoXHJcbiAgICAgICAgICAgIF0sIGRvY3VtZW50LCBjYW5jZWxsYXRpb24pO1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKG1zZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBtc2cuc2V2ZXJpdHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTE9XOiB0eXBlc18yLkxpbnRNZXNzYWdlU2V2ZXJpdHkuSW5mb3JtYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgTUVESVVNOiB0eXBlc18yLkxpbnRNZXNzYWdlU2V2ZXJpdHkuV2FybmluZyxcclxuICAgICAgICAgICAgICAgICAgICBISUdIOiB0eXBlc18yLkxpbnRNZXNzYWdlU2V2ZXJpdHkuRXJyb3JcclxuICAgICAgICAgICAgICAgIH1bbXNnLnR5cGVdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQmFuZGl0ID0gQmFuZGl0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYW5kaXQuanMubWFwIl19