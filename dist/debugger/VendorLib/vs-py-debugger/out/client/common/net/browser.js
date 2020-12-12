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
}); // tslint:disable:no-require-imports no-var-requires

const opn = require('opn');

const inversify_1 = require("inversify");

function launch(url) {
  opn(url);
}

exports.launch = launch;
let BrowserService = class BrowserService {
  launch(url) {
    launch(url);
  }

};
BrowserService = __decorate([inversify_1.injectable()], BrowserService);
exports.BrowserService = BrowserService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZXIuanMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwib3BuIiwicmVxdWlyZSIsImludmVyc2lmeV8xIiwibGF1bmNoIiwidXJsIiwiQnJvd3NlclNlcnZpY2UiLCJpbmplY3RhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsVUFBVSxHQUFJLFVBQVEsU0FBS0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ25GLE1BQUlDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFsQjtBQUFBLE1BQTBCQyxDQUFDLEdBQUdILENBQUMsR0FBRyxDQUFKLEdBQVFILE1BQVIsR0FBaUJFLElBQUksS0FBSyxJQUFULEdBQWdCQSxJQUFJLEdBQUdLLE1BQU0sQ0FBQ0Msd0JBQVAsQ0FBZ0NSLE1BQWhDLEVBQXdDQyxHQUF4QyxDQUF2QixHQUFzRUMsSUFBckg7QUFBQSxNQUEySE8sQ0FBM0g7QUFDQSxNQUFJLE9BQU9DLE9BQVAsS0FBbUIsUUFBbkIsSUFBK0IsT0FBT0EsT0FBTyxDQUFDQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxDQUFDLEdBQUdJLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQlosVUFBakIsRUFBNkJDLE1BQTdCLEVBQXFDQyxHQUFyQyxFQUEwQ0MsSUFBMUMsQ0FBSixDQUEzRSxLQUNLLEtBQUssSUFBSVUsQ0FBQyxHQUFHYixVQUFVLENBQUNNLE1BQVgsR0FBb0IsQ0FBakMsRUFBb0NPLENBQUMsSUFBSSxDQUF6QyxFQUE0Q0EsQ0FBQyxFQUE3QyxFQUFpRCxJQUFJSCxDQUFDLEdBQUdWLFVBQVUsQ0FBQ2EsQ0FBRCxDQUFsQixFQUF1Qk4sQ0FBQyxHQUFHLENBQUNILENBQUMsR0FBRyxDQUFKLEdBQVFNLENBQUMsQ0FBQ0gsQ0FBRCxDQUFULEdBQWVILENBQUMsR0FBRyxDQUFKLEdBQVFNLENBQUMsQ0FBQ1QsTUFBRCxFQUFTQyxHQUFULEVBQWNLLENBQWQsQ0FBVCxHQUE0QkcsQ0FBQyxDQUFDVCxNQUFELEVBQVNDLEdBQVQsQ0FBN0MsS0FBK0RLLENBQW5FO0FBQzdFLFNBQU9ILENBQUMsR0FBRyxDQUFKLElBQVNHLENBQVQsSUFBY0MsTUFBTSxDQUFDTSxjQUFQLENBQXNCYixNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNLLENBQW5DLENBQWQsRUFBcURBLENBQTVEO0FBQ0gsQ0FMRDs7QUFNQUMsTUFBTSxDQUFDTSxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQUE3QyxFLENBQ0E7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUMsS0FBRCxDQUFuQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxXQUFELENBQTNCOztBQUNBLFNBQVNFLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0FBQ2pCSixFQUFBQSxHQUFHLENBQUNJLEdBQUQsQ0FBSDtBQUNIOztBQUNETixPQUFPLENBQUNLLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0EsSUFBSUUsY0FBYyxHQUFHLE1BQU1BLGNBQU4sQ0FBcUI7QUFDdENGLEVBQUFBLE1BQU0sQ0FBQ0MsR0FBRCxFQUFNO0FBQ1JELElBQUFBLE1BQU0sQ0FBQ0MsR0FBRCxDQUFOO0FBQ0g7O0FBSHFDLENBQTFDO0FBS0FDLGNBQWMsR0FBR3ZCLFVBQVUsQ0FBQyxDQUN4Qm9CLFdBQVcsQ0FBQ0ksVUFBWixFQUR3QixDQUFELEVBRXhCRCxjQUZ3QixDQUEzQjtBQUdBUCxPQUFPLENBQUNPLGNBQVIsR0FBeUJBLGNBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXJlcXVpcmUtaW1wb3J0cyBuby12YXItcmVxdWlyZXNcclxuY29uc3Qgb3BuID0gcmVxdWlyZSgnb3BuJyk7XHJcbmNvbnN0IGludmVyc2lmeV8xID0gcmVxdWlyZShcImludmVyc2lmeVwiKTtcclxuZnVuY3Rpb24gbGF1bmNoKHVybCkge1xyXG4gICAgb3BuKHVybCk7XHJcbn1cclxuZXhwb3J0cy5sYXVuY2ggPSBsYXVuY2g7XHJcbmxldCBCcm93c2VyU2VydmljZSA9IGNsYXNzIEJyb3dzZXJTZXJ2aWNlIHtcclxuICAgIGxhdW5jaCh1cmwpIHtcclxuICAgICAgICBsYXVuY2godXJsKTtcclxuICAgIH1cclxufTtcclxuQnJvd3NlclNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgIGludmVyc2lmeV8xLmluamVjdGFibGUoKVxyXG5dLCBCcm93c2VyU2VydmljZSk7XHJcbmV4cG9ydHMuQnJvd3NlclNlcnZpY2UgPSBCcm93c2VyU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci5qcy5tYXAiXX0=