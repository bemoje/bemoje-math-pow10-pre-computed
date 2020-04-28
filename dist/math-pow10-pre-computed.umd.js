(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['math-pow10-pre-computed'] = factory());
}(this, (function () { 'use strict';

	/**
	 * Pre-computed powers of 10
	 * @const {Array} POW10
	 */
	var mathPow10PreComputed = [1, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9];

	return mathPow10PreComputed;

})));
