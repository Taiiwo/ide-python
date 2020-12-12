// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const platform_1 = require("../utils/platform");

const constants_1 = require("./constants");

function getPathVariableName(info) {
  return platform_1.isWindows(info) ? constants_1.WINDOWS_PATH_VARIABLE_NAME : constants_1.NON_WINDOWS_PATH_VARIABLE_NAME;
}

exports.getPathVariableName = getPathVariableName;

function getVirtualEnvBinName(info) {
  return platform_1.isWindows(info) ? 'scripts' : 'bin';
}

exports.getVirtualEnvBinName = getVirtualEnvBinName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9zaW5mby5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInBsYXRmb3JtXzEiLCJyZXF1aXJlIiwiY29uc3RhbnRzXzEiLCJnZXRQYXRoVmFyaWFibGVOYW1lIiwiaW5mbyIsImlzV2luZG93cyIsIldJTkRPV1NfUEFUSF9WQVJJQUJMRV9OQU1FIiwiTk9OX1dJTkRPV1NfUEFUSF9WQVJJQUJMRV9OQU1FIiwiZ2V0VmlydHVhbEVudkJpbk5hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFDQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxtQkFBRCxDQUExQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQTNCOztBQUNBLFNBQVNFLG1CQUFULENBQTZCQyxJQUE3QixFQUFtQztBQUMvQixTQUFPSixVQUFVLENBQUNLLFNBQVgsQ0FBcUJELElBQXJCLElBQTZCRixXQUFXLENBQUNJLDBCQUF6QyxHQUFzRUosV0FBVyxDQUFDSyw4QkFBekY7QUFDSDs7QUFDRFQsT0FBTyxDQUFDSyxtQkFBUixHQUE4QkEsbUJBQTlCOztBQUNBLFNBQVNLLG9CQUFULENBQThCSixJQUE5QixFQUFvQztBQUNoQyxTQUFPSixVQUFVLENBQUNLLFNBQVgsQ0FBcUJELElBQXJCLElBQTZCLFNBQTdCLEdBQXlDLEtBQWhEO0FBQ0g7O0FBQ0ROLE9BQU8sQ0FBQ1Usb0JBQVIsR0FBK0JBLG9CQUEvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbid1c2Ugc3RyaWN0JztcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwbGF0Zm9ybV8xID0gcmVxdWlyZShcIi4uL3V0aWxzL3BsYXRmb3JtXCIpO1xyXG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcclxuZnVuY3Rpb24gZ2V0UGF0aFZhcmlhYmxlTmFtZShpbmZvKSB7XHJcbiAgICByZXR1cm4gcGxhdGZvcm1fMS5pc1dpbmRvd3MoaW5mbykgPyBjb25zdGFudHNfMS5XSU5ET1dTX1BBVEhfVkFSSUFCTEVfTkFNRSA6IGNvbnN0YW50c18xLk5PTl9XSU5ET1dTX1BBVEhfVkFSSUFCTEVfTkFNRTtcclxufVxyXG5leHBvcnRzLmdldFBhdGhWYXJpYWJsZU5hbWUgPSBnZXRQYXRoVmFyaWFibGVOYW1lO1xyXG5mdW5jdGlvbiBnZXRWaXJ0dWFsRW52QmluTmFtZShpbmZvKSB7XHJcbiAgICByZXR1cm4gcGxhdGZvcm1fMS5pc1dpbmRvd3MoaW5mbykgPyAnc2NyaXB0cycgOiAnYmluJztcclxufVxyXG5leHBvcnRzLmdldFZpcnR1YWxFbnZCaW5OYW1lID0gZ2V0VmlydHVhbEVudkJpbk5hbWU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9zaW5mby5qcy5tYXAiXX0=