"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

class BlockRegEx {
  constructor(regEx, startWord) {
    this.regEx = regEx;
    this.startWord = startWord;
  }

  test(value) {
    // Clear the cache
    this.regEx.lastIndex = -1;
    return this.regEx.test(value);
  }

}

exports.BlockRegEx = BlockRegEx;
exports.IF_REGEX = new BlockRegEx(/^( |\t)*if +.*: *$/g, 'if');
exports.ELIF_REGEX = new BlockRegEx(/^( |\t)*elif +.*: *$/g, 'elif');
exports.ELSE_REGEX = new BlockRegEx(/^( |\t)*else *: *$/g, 'else');
exports.FOR_IN_REGEX = new BlockRegEx(/^( |\t)*for \w in .*: *$/g, 'for');
exports.ASYNC_FOR_IN_REGEX = new BlockRegEx(/^( |\t)*async *for \w in .*: *$/g, 'for');
exports.WHILE_REGEX = new BlockRegEx(/^( |\t)*while .*: *$/g, 'while');
exports.TRY_REGEX = new BlockRegEx(/^( |\t)*try *: *$/g, 'try');
exports.FINALLY_REGEX = new BlockRegEx(/^( |\t)*finally *: *$/g, 'finally');
exports.EXCEPT_REGEX = new BlockRegEx(/^( |\t)*except *\w* *(as)? *\w* *: *$/g, 'except');
exports.DEF_REGEX = new BlockRegEx(/^( |\t)*def \w *\(.*$/g, 'def');
exports.ASYNC_DEF_REGEX = new BlockRegEx(/^( |\t)*async *def \w *\(.*$/g, 'async');
exports.CLASS_REGEX = new BlockRegEx(/^( |\t)*class *\w* *.*: *$/g, 'class');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYWN0cy5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkJsb2NrUmVnRXgiLCJjb25zdHJ1Y3RvciIsInJlZ0V4Iiwic3RhcnRXb3JkIiwidGVzdCIsImxhc3RJbmRleCIsIklGX1JFR0VYIiwiRUxJRl9SRUdFWCIsIkVMU0VfUkVHRVgiLCJGT1JfSU5fUkVHRVgiLCJBU1lOQ19GT1JfSU5fUkVHRVgiLCJXSElMRV9SRUdFWCIsIlRSWV9SRUdFWCIsIkZJTkFMTFlfUkVHRVgiLCJFWENFUFRfUkVHRVgiLCJERUZfUkVHRVgiLCJBU1lOQ19ERUZfUkVHRVgiLCJDTEFTU19SRUdFWCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0FBQ0EsTUFBTUMsVUFBTixDQUFpQjtBQUNiQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUUMsU0FBUixFQUFtQjtBQUMxQixTQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNIOztBQUNEQyxFQUFBQSxJQUFJLENBQUNMLEtBQUQsRUFBUTtBQUNSO0FBQ0EsU0FBS0csS0FBTCxDQUFXRyxTQUFYLEdBQXVCLENBQUMsQ0FBeEI7QUFDQSxXQUFPLEtBQUtILEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkwsS0FBaEIsQ0FBUDtBQUNIOztBQVRZOztBQVdqQkQsT0FBTyxDQUFDRSxVQUFSLEdBQXFCQSxVQUFyQjtBQUNBRixPQUFPLENBQUNRLFFBQVIsR0FBbUIsSUFBSU4sVUFBSixDQUFlLHFCQUFmLEVBQXNDLElBQXRDLENBQW5CO0FBQ0FGLE9BQU8sQ0FBQ1MsVUFBUixHQUFxQixJQUFJUCxVQUFKLENBQWUsdUJBQWYsRUFBd0MsTUFBeEMsQ0FBckI7QUFDQUYsT0FBTyxDQUFDVSxVQUFSLEdBQXFCLElBQUlSLFVBQUosQ0FBZSxxQkFBZixFQUFzQyxNQUF0QyxDQUFyQjtBQUNBRixPQUFPLENBQUNXLFlBQVIsR0FBdUIsSUFBSVQsVUFBSixDQUFlLDJCQUFmLEVBQTRDLEtBQTVDLENBQXZCO0FBQ0FGLE9BQU8sQ0FBQ1ksa0JBQVIsR0FBNkIsSUFBSVYsVUFBSixDQUFlLGtDQUFmLEVBQW1ELEtBQW5ELENBQTdCO0FBQ0FGLE9BQU8sQ0FBQ2EsV0FBUixHQUFzQixJQUFJWCxVQUFKLENBQWUsdUJBQWYsRUFBd0MsT0FBeEMsQ0FBdEI7QUFDQUYsT0FBTyxDQUFDYyxTQUFSLEdBQW9CLElBQUlaLFVBQUosQ0FBZSxvQkFBZixFQUFxQyxLQUFyQyxDQUFwQjtBQUNBRixPQUFPLENBQUNlLGFBQVIsR0FBd0IsSUFBSWIsVUFBSixDQUFlLHdCQUFmLEVBQXlDLFNBQXpDLENBQXhCO0FBQ0FGLE9BQU8sQ0FBQ2dCLFlBQVIsR0FBdUIsSUFBSWQsVUFBSixDQUFlLHdDQUFmLEVBQXlELFFBQXpELENBQXZCO0FBQ0FGLE9BQU8sQ0FBQ2lCLFNBQVIsR0FBb0IsSUFBSWYsVUFBSixDQUFlLHdCQUFmLEVBQXlDLEtBQXpDLENBQXBCO0FBQ0FGLE9BQU8sQ0FBQ2tCLGVBQVIsR0FBMEIsSUFBSWhCLFVBQUosQ0FBZSwrQkFBZixFQUFnRCxPQUFoRCxDQUExQjtBQUNBRixPQUFPLENBQUNtQixXQUFSLEdBQXNCLElBQUlqQixVQUFKLENBQWUsNkJBQWYsRUFBOEMsT0FBOUMsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBCbG9ja1JlZ0V4IHtcclxuICAgIGNvbnN0cnVjdG9yKHJlZ0V4LCBzdGFydFdvcmQpIHtcclxuICAgICAgICB0aGlzLnJlZ0V4ID0gcmVnRXg7XHJcbiAgICAgICAgdGhpcy5zdGFydFdvcmQgPSBzdGFydFdvcmQ7XHJcbiAgICB9XHJcbiAgICB0ZXN0KHZhbHVlKSB7XHJcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGNhY2hlXHJcbiAgICAgICAgdGhpcy5yZWdFeC5sYXN0SW5kZXggPSAtMTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWdFeC50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkJsb2NrUmVnRXggPSBCbG9ja1JlZ0V4O1xyXG5leHBvcnRzLklGX1JFR0VYID0gbmV3IEJsb2NrUmVnRXgoL14oIHxcXHQpKmlmICsuKjogKiQvZywgJ2lmJyk7XHJcbmV4cG9ydHMuRUxJRl9SRUdFWCA9IG5ldyBCbG9ja1JlZ0V4KC9eKCB8XFx0KSplbGlmICsuKjogKiQvZywgJ2VsaWYnKTtcclxuZXhwb3J0cy5FTFNFX1JFR0VYID0gbmV3IEJsb2NrUmVnRXgoL14oIHxcXHQpKmVsc2UgKjogKiQvZywgJ2Vsc2UnKTtcclxuZXhwb3J0cy5GT1JfSU5fUkVHRVggPSBuZXcgQmxvY2tSZWdFeCgvXiggfFxcdCkqZm9yIFxcdyBpbiAuKjogKiQvZywgJ2ZvcicpO1xyXG5leHBvcnRzLkFTWU5DX0ZPUl9JTl9SRUdFWCA9IG5ldyBCbG9ja1JlZ0V4KC9eKCB8XFx0KSphc3luYyAqZm9yIFxcdyBpbiAuKjogKiQvZywgJ2ZvcicpO1xyXG5leHBvcnRzLldISUxFX1JFR0VYID0gbmV3IEJsb2NrUmVnRXgoL14oIHxcXHQpKndoaWxlIC4qOiAqJC9nLCAnd2hpbGUnKTtcclxuZXhwb3J0cy5UUllfUkVHRVggPSBuZXcgQmxvY2tSZWdFeCgvXiggfFxcdCkqdHJ5ICo6ICokL2csICd0cnknKTtcclxuZXhwb3J0cy5GSU5BTExZX1JFR0VYID0gbmV3IEJsb2NrUmVnRXgoL14oIHxcXHQpKmZpbmFsbHkgKjogKiQvZywgJ2ZpbmFsbHknKTtcclxuZXhwb3J0cy5FWENFUFRfUkVHRVggPSBuZXcgQmxvY2tSZWdFeCgvXiggfFxcdCkqZXhjZXB0ICpcXHcqICooYXMpPyAqXFx3KiAqOiAqJC9nLCAnZXhjZXB0Jyk7XHJcbmV4cG9ydHMuREVGX1JFR0VYID0gbmV3IEJsb2NrUmVnRXgoL14oIHxcXHQpKmRlZiBcXHcgKlxcKC4qJC9nLCAnZGVmJyk7XHJcbmV4cG9ydHMuQVNZTkNfREVGX1JFR0VYID0gbmV3IEJsb2NrUmVnRXgoL14oIHxcXHQpKmFzeW5jICpkZWYgXFx3ICpcXCguKiQvZywgJ2FzeW5jJyk7XHJcbmV4cG9ydHMuQ0xBU1NfUkVHRVggPSBuZXcgQmxvY2tSZWdFeCgvXiggfFxcdCkqY2xhc3MgKlxcdyogKi4qOiAqJC9nLCAnY2xhc3MnKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udHJhY3RzLmpzLm1hcCJdfQ==