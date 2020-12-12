// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./progress.css");

const React = require("react");

class Progress extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Vscode does this with two parts, a progress container and a progress bit
    return React.createElement("div", {
      className: 'monaco-progress-container active infinite'
    }, React.createElement("div", {
      className: 'progress-bit'
    }));
  }

}

exports.Progress = Progress;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwicmVxdWlyZSIsIlJlYWN0IiwiUHJvZ3Jlc3MiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDOztBQUNBQyxPQUFPLENBQUMsZ0JBQUQsQ0FBUDs7QUFDQSxNQUFNQyxLQUFLLEdBQUdELE9BQU8sQ0FBQyxPQUFELENBQXJCOztBQUNBLE1BQU1FLFFBQU4sU0FBdUJELEtBQUssQ0FBQ0UsU0FBN0IsQ0FBdUM7QUFDbkNDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjtBQUNIOztBQUNEQyxFQUFBQSxNQUFNLEdBQUc7QUFDTDtBQUNBLFdBQVFMLEtBQUssQ0FBQ00sYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUFFQyxNQUFBQSxTQUFTLEVBQUU7QUFBYixLQUEzQixFQUNKUCxLQUFLLENBQUNNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRUMsTUFBQUEsU0FBUyxFQUFFO0FBQWIsS0FBM0IsQ0FESSxDQUFSO0FBRUg7O0FBUmtDOztBQVV2Q1YsT0FBTyxDQUFDSSxRQUFSLEdBQW1CQSxRQUFuQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbid1c2Ugc3RyaWN0JztcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9wcm9ncmVzcy5jc3NcIik7XHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jbGFzcyBQcm9ncmVzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBWc2NvZGUgZG9lcyB0aGlzIHdpdGggdHdvIHBhcnRzLCBhIHByb2dyZXNzIGNvbnRhaW5lciBhbmQgYSBwcm9ncmVzcyBiaXRcclxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdtb25hY28tcHJvZ3Jlc3MtY29udGFpbmVyIGFjdGl2ZSBpbmZpbml0ZScgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3Byb2dyZXNzLWJpdCcgfSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlByb2dyZXNzID0gUHJvZ3Jlc3M7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb2dyZXNzLmpzLm1hcCJdfQ==