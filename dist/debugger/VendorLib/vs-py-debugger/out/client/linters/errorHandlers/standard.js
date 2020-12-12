"use strict";

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

const vscode_1 = require("vscode");

const types_1 = require("../types");

const baseErrorHandler_1 = require("./baseErrorHandler");

class StandardErrorHandler extends baseErrorHandler_1.BaseErrorHandler {
  constructor(product, outputChannel, serviceContainer) {
    super(product, outputChannel, serviceContainer);
  }

  handleError(error, resource, execInfo) {
    return __awaiter(this, void 0, void 0, function* () {
      if (typeof error === 'string' && error.indexOf('OSError: [Errno 2] No such file or directory: \'/') > 0) {
        return this.nextHandler ? this.nextHandler.handleError(error, resource, execInfo) : Promise.resolve(false);
      }

      const linterManager = this.serviceContainer.get(types_1.ILinterManager);
      const info = linterManager.getLinterInfo(execInfo.product);
      this.logger.logError(`There was an error in running the linter ${info.id}`, error);
      this.outputChannel.appendLine(`Linting with ${info.id} failed.`);
      this.outputChannel.appendLine(error.toString());
      this.displayLinterError(info.id, resource);
      return true;
    });
  }

  displayLinterError(linterId, resource) {
    return __awaiter(this, void 0, void 0, function* () {
      const message = `There was an error in running the linter '${linterId}'`;
      yield vscode_1.window.showErrorMessage(message, 'View Errors');
      this.outputChannel.show();
    });
  }

}

exports.StandardErrorHandler = StandardErrorHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YW5kYXJkLmpzIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2c2NvZGVfMSIsInJlcXVpcmUiLCJ0eXBlc18xIiwiYmFzZUVycm9ySGFuZGxlcl8xIiwiU3RhbmRhcmRFcnJvckhhbmRsZXIiLCJCYXNlRXJyb3JIYW5kbGVyIiwiY29uc3RydWN0b3IiLCJwcm9kdWN0Iiwib3V0cHV0Q2hhbm5lbCIsInNlcnZpY2VDb250YWluZXIiLCJoYW5kbGVFcnJvciIsImVycm9yIiwicmVzb3VyY2UiLCJleGVjSW5mbyIsImluZGV4T2YiLCJuZXh0SGFuZGxlciIsImxpbnRlck1hbmFnZXIiLCJnZXQiLCJJTGludGVyTWFuYWdlciIsImluZm8iLCJnZXRMaW50ZXJJbmZvIiwibG9nZ2VyIiwibG9nRXJyb3IiLCJpZCIsImFwcGVuZExpbmUiLCJ0b1N0cmluZyIsImRpc3BsYXlMaW50ZXJFcnJvciIsImxpbnRlcklkIiwibWVzc2FnZSIsIndpbmRvdyIsInNob3dFcnJvck1lc3NhZ2UiLCJzaG93Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQSxJQUFJQSxTQUFTLEdBQUksVUFBUSxTQUFLQSxTQUFkLElBQTRCLFVBQVVDLE9BQVYsRUFBbUJDLFVBQW5CLEVBQStCQyxDQUEvQixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFDckYsU0FBTyxLQUFLRCxDQUFDLEtBQUtBLENBQUMsR0FBR0UsT0FBVCxDQUFOLEVBQXlCLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQ3ZELGFBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUUsVUFBSTtBQUFFQyxRQUFBQSxJQUFJLENBQUNOLFNBQVMsQ0FBQ08sSUFBVixDQUFlRixLQUFmLENBQUQsQ0FBSjtBQUE4QixPQUFwQyxDQUFxQyxPQUFPRyxDQUFQLEVBQVU7QUFBRUwsUUFBQUEsTUFBTSxDQUFDSyxDQUFELENBQU47QUFBWTtBQUFFOztBQUMzRixhQUFTQyxRQUFULENBQWtCSixLQUFsQixFQUF5QjtBQUFFLFVBQUk7QUFBRUMsUUFBQUEsSUFBSSxDQUFDTixTQUFTLENBQUMsT0FBRCxDQUFULENBQW1CSyxLQUFuQixDQUFELENBQUo7QUFBa0MsT0FBeEMsQ0FBeUMsT0FBT0csQ0FBUCxFQUFVO0FBQUVMLFFBQUFBLE1BQU0sQ0FBQ0ssQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDOUYsYUFBU0YsSUFBVCxDQUFjSSxNQUFkLEVBQXNCO0FBQUVBLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjVCxPQUFPLENBQUNRLE1BQU0sQ0FBQ0wsS0FBUixDQUFyQixHQUFzQyxJQUFJTixDQUFKLENBQU0sVUFBVUcsT0FBVixFQUFtQjtBQUFFQSxRQUFBQSxPQUFPLENBQUNRLE1BQU0sQ0FBQ0wsS0FBUixDQUFQO0FBQXdCLE9BQW5ELEVBQXFETyxJQUFyRCxDQUEwRFIsU0FBMUQsRUFBcUVLLFFBQXJFLENBQXRDO0FBQXVIOztBQUMvSUgsSUFBQUEsSUFBSSxDQUFDLENBQUNOLFNBQVMsR0FBR0EsU0FBUyxDQUFDYSxLQUFWLENBQWdCaEIsT0FBaEIsRUFBeUJDLFVBQVUsSUFBSSxFQUF2QyxDQUFiLEVBQXlEUyxJQUF6RCxFQUFELENBQUo7QUFDSCxHQUxNLENBQVA7QUFNSCxDQVBEOztBQVFBTyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVYLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDOztBQUNBLE1BQU1ZLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBeEI7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUF2Qjs7QUFDQSxNQUFNRSxrQkFBa0IsR0FBR0YsT0FBTyxDQUFDLG9CQUFELENBQWxDOztBQUNBLE1BQU1HLG9CQUFOLFNBQW1DRCxrQkFBa0IsQ0FBQ0UsZ0JBQXRELENBQXVFO0FBQ25FQyxFQUFBQSxXQUFXLENBQUNDLE9BQUQsRUFBVUMsYUFBVixFQUF5QkMsZ0JBQXpCLEVBQTJDO0FBQ2xELFVBQU1GLE9BQU4sRUFBZUMsYUFBZixFQUE4QkMsZ0JBQTlCO0FBQ0g7O0FBQ0RDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQWtCQyxRQUFsQixFQUE0QjtBQUNuQyxXQUFPbEMsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLGFBQWE7QUFDaEQsVUFBSSxPQUFPZ0MsS0FBUCxLQUFpQixRQUFqQixJQUE2QkEsS0FBSyxDQUFDRyxPQUFOLENBQWMsbURBQWQsSUFBcUUsQ0FBdEcsRUFBeUc7QUFDckcsZUFBTyxLQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJMLFdBQWpCLENBQTZCQyxLQUE3QixFQUFvQ0MsUUFBcEMsRUFBOENDLFFBQTlDLENBQW5CLEdBQTZFN0IsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQWhCLENBQXBGO0FBQ0g7O0FBQ0QsWUFBTStCLGFBQWEsR0FBRyxLQUFLUCxnQkFBTCxDQUFzQlEsR0FBdEIsQ0FBMEJmLE9BQU8sQ0FBQ2dCLGNBQWxDLENBQXRCO0FBQ0EsWUFBTUMsSUFBSSxHQUFHSCxhQUFhLENBQUNJLGFBQWQsQ0FBNEJQLFFBQVEsQ0FBQ04sT0FBckMsQ0FBYjtBQUNBLFdBQUtjLE1BQUwsQ0FBWUMsUUFBWixDQUFzQiw0Q0FBMkNILElBQUksQ0FBQ0ksRUFBRyxFQUF6RSxFQUE0RVosS0FBNUU7QUFDQSxXQUFLSCxhQUFMLENBQW1CZ0IsVUFBbkIsQ0FBK0IsZ0JBQWVMLElBQUksQ0FBQ0ksRUFBRyxVQUF0RDtBQUNBLFdBQUtmLGFBQUwsQ0FBbUJnQixVQUFuQixDQUE4QmIsS0FBSyxDQUFDYyxRQUFOLEVBQTlCO0FBQ0EsV0FBS0Msa0JBQUwsQ0FBd0JQLElBQUksQ0FBQ0ksRUFBN0IsRUFBaUNYLFFBQWpDO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0FYZSxDQUFoQjtBQVlIOztBQUNEYyxFQUFBQSxrQkFBa0IsQ0FBQ0MsUUFBRCxFQUFXZixRQUFYLEVBQXFCO0FBQ25DLFdBQU9qQyxTQUFTLENBQUMsSUFBRCxFQUFPLEtBQUssQ0FBWixFQUFlLEtBQUssQ0FBcEIsRUFBdUIsYUFBYTtBQUNoRCxZQUFNaUQsT0FBTyxHQUFJLDZDQUE0Q0QsUUFBUyxHQUF0RTtBQUNBLFlBQU0zQixRQUFRLENBQUM2QixNQUFULENBQWdCQyxnQkFBaEIsQ0FBaUNGLE9BQWpDLEVBQTBDLGFBQTFDLENBQU47QUFDQSxXQUFLcEIsYUFBTCxDQUFtQnVCLElBQW5CO0FBQ0gsS0FKZSxDQUFoQjtBQUtIOztBQXhCa0U7O0FBMEJ2RWhDLE9BQU8sQ0FBQ0ssb0JBQVIsR0FBK0JBLG9CQUEvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHZzY29kZV8xID0gcmVxdWlyZShcInZzY29kZVwiKTtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcclxuY29uc3QgYmFzZUVycm9ySGFuZGxlcl8xID0gcmVxdWlyZShcIi4vYmFzZUVycm9ySGFuZGxlclwiKTtcclxuY2xhc3MgU3RhbmRhcmRFcnJvckhhbmRsZXIgZXh0ZW5kcyBiYXNlRXJyb3JIYW5kbGVyXzEuQmFzZUVycm9ySGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9kdWN0LCBvdXRwdXRDaGFubmVsLCBzZXJ2aWNlQ29udGFpbmVyKSB7XHJcbiAgICAgICAgc3VwZXIocHJvZHVjdCwgb3V0cHV0Q2hhbm5lbCwgc2VydmljZUNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVFcnJvcihlcnJvciwgcmVzb3VyY2UsIGV4ZWNJbmZvKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgJiYgZXJyb3IuaW5kZXhPZignT1NFcnJvcjogW0Vycm5vIDJdIE5vIHN1Y2ggZmlsZSBvciBkaXJlY3Rvcnk6IFxcJy8nKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5leHRIYW5kbGVyID8gdGhpcy5uZXh0SGFuZGxlci5oYW5kbGVFcnJvcihlcnJvciwgcmVzb3VyY2UsIGV4ZWNJbmZvKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbGludGVyTWFuYWdlciA9IHRoaXMuc2VydmljZUNvbnRhaW5lci5nZXQodHlwZXNfMS5JTGludGVyTWFuYWdlcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBsaW50ZXJNYW5hZ2VyLmdldExpbnRlckluZm8oZXhlY0luZm8ucHJvZHVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ0Vycm9yKGBUaGVyZSB3YXMgYW4gZXJyb3IgaW4gcnVubmluZyB0aGUgbGludGVyICR7aW5mby5pZH1gLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGBMaW50aW5nIHdpdGggJHtpbmZvLmlkfSBmYWlsZWQuYCk7XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKGVycm9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlMaW50ZXJFcnJvcihpbmZvLmlkLCByZXNvdXJjZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheUxpbnRlckVycm9yKGxpbnRlcklkLCByZXNvdXJjZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlcmUgd2FzIGFuIGVycm9yIGluIHJ1bm5pbmcgdGhlIGxpbnRlciAnJHtsaW50ZXJJZH0nYDtcclxuICAgICAgICAgICAgeWllbGQgdnNjb2RlXzEud2luZG93LnNob3dFcnJvck1lc3NhZ2UobWVzc2FnZSwgJ1ZpZXcgRXJyb3JzJyk7XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0Q2hhbm5lbC5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TdGFuZGFyZEVycm9ySGFuZGxlciA9IFN0YW5kYXJkRXJyb3JIYW5kbGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGFuZGFyZC5qcy5tYXAiXX0=