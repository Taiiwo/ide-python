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

Object.defineProperty(exports, "__esModule", {
  value: true
});

const inversify_1 = require("inversify");

const types_1 = require("../common/types");

const types_2 = require("../ioc/types");

const types_3 = require("./types");

let HistoryProvider = class HistoryProvider {
  constructor(serviceContainer, disposables) {
    this.serviceContainer = serviceContainer;
    this.disposables = disposables;

    this.create = () => {
      const result = this.serviceContainer.get(types_3.IHistory);
      const handler = result.closed(this.onHistoryClosed);
      this.disposables.push(result);
      this.disposables.push(handler);
      return result;
    };

    this.onHistoryClosed = history => {
      if (this.activeHistory === history) {
        this.activeHistory = undefined;
      }
    };
  }

  get active() {
    if (!this.activeHistory) {
      this.activeHistory = this.create();
    }

    return this.activeHistory;
  }

  set active(history) {
    this.activeHistory = history;
  }

};
HistoryProvider = __decorate([inversify_1.injectable(), __param(0, inversify_1.inject(types_2.IServiceContainer)), __param(1, inversify_1.inject(types_1.IDisposableRegistry))], HistoryProvider);
exports.HistoryProvider = HistoryProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnlQcm92aWRlci5qcyJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX3BhcmFtIiwicGFyYW1JbmRleCIsImRlY29yYXRvciIsImV4cG9ydHMiLCJ2YWx1ZSIsImludmVyc2lmeV8xIiwicmVxdWlyZSIsInR5cGVzXzEiLCJ0eXBlc18yIiwidHlwZXNfMyIsIkhpc3RvcnlQcm92aWRlciIsImNvbnN0cnVjdG9yIiwic2VydmljZUNvbnRhaW5lciIsImRpc3Bvc2FibGVzIiwiY3JlYXRlIiwicmVzdWx0IiwiZ2V0IiwiSUhpc3RvcnkiLCJoYW5kbGVyIiwiY2xvc2VkIiwib25IaXN0b3J5Q2xvc2VkIiwicHVzaCIsImhpc3RvcnkiLCJhY3RpdmVIaXN0b3J5IiwidW5kZWZpbmVkIiwiYWN0aXZlIiwiaW5qZWN0YWJsZSIsImluamVjdCIsIklTZXJ2aWNlQ29udGFpbmVyIiwiSURpc3Bvc2FibGVSZWdpc3RyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBLElBQUlBLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxNQUFNLENBQUNDLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEs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QUFvQjtBQUNoQixTQUFLQyxhQUFMLEdBQXFCRCxPQUFyQjtBQUNIOztBQXpCdUMsQ0FBNUM7QUEyQkFaLGVBQWUsR0FBRzFCLFVBQVUsQ0FBQyxDQUN6QnFCLFdBQVcsQ0FBQ3FCLFVBQVosRUFEeUIsRUFFekIxQixPQUFPLENBQUMsQ0FBRCxFQUFJSyxXQUFXLENBQUNzQixNQUFaLENBQW1CbkIsT0FBTyxDQUFDb0IsaUJBQTNCLENBQUosQ0FGa0IsRUFHekI1QixPQUFPLENBQUMsQ0FBRCxFQUFJSyxXQUFXLENBQUNzQixNQUFaLENBQW1CcEIsT0FBTyxDQUFDc0IsbUJBQTNCLENBQUosQ0FIa0IsQ0FBRCxFQUl6Qm5CLGVBSnlCLENBQTVCO0FBS0FQLE9BQU8sQ0FBQ08sZUFBUixHQUEwQkEsZUFBMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4ndXNlIHN0cmljdCc7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX3BhcmFtID0gKHRoaXMgJiYgdGhpcy5fX3BhcmFtKSB8fCBmdW5jdGlvbiAocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnZlcnNpZnlfMSA9IHJlcXVpcmUoXCJpbnZlcnNpZnlcIik7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3R5cGVzXCIpO1xyXG5jb25zdCB0eXBlc18yID0gcmVxdWlyZShcIi4uL2lvYy90eXBlc1wiKTtcclxuY29uc3QgdHlwZXNfMyA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG5sZXQgSGlzdG9yeVByb3ZpZGVyID0gY2xhc3MgSGlzdG9yeVByb3ZpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2VDb250YWluZXIsIGRpc3Bvc2FibGVzKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlQ29udGFpbmVyID0gc2VydmljZUNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmRpc3Bvc2FibGVzID0gZGlzcG9zYWJsZXM7XHJcbiAgICAgICAgdGhpcy5jcmVhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2VydmljZUNvbnRhaW5lci5nZXQodHlwZXNfMy5JSGlzdG9yeSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSByZXN1bHQuY2xvc2VkKHRoaXMub25IaXN0b3J5Q2xvc2VkKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwb3NhYmxlcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcG9zYWJsZXMucHVzaChoYW5kbGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25IaXN0b3J5Q2xvc2VkID0gKGhpc3RvcnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSGlzdG9yeSA9PT0gaGlzdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVIaXN0b3J5ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldCBhY3RpdmUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZUhpc3RvcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVIaXN0b3J5ID0gdGhpcy5jcmVhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlSGlzdG9yeTtcclxuICAgIH1cclxuICAgIHNldCBhY3RpdmUoaGlzdG9yeSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICB9XHJcbn07XHJcbkhpc3RvcnlQcm92aWRlciA9IF9fZGVjb3JhdGUoW1xyXG4gICAgaW52ZXJzaWZ5XzEuaW5qZWN0YWJsZSgpLFxyXG4gICAgX19wYXJhbSgwLCBpbnZlcnNpZnlfMS5pbmplY3QodHlwZXNfMi5JU2VydmljZUNvbnRhaW5lcikpLFxyXG4gICAgX19wYXJhbSgxLCBpbnZlcnNpZnlfMS5pbmplY3QodHlwZXNfMS5JRGlzcG9zYWJsZVJlZ2lzdHJ5KSlcclxuXSwgSGlzdG9yeVByb3ZpZGVyKTtcclxuZXhwb3J0cy5IaXN0b3J5UHJvdmlkZXIgPSBIaXN0b3J5UHJvdmlkZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhpc3RvcnlQcm92aWRlci5qcy5tYXAiXX0=