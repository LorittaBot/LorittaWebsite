(function(root, factory) {
  if (typeof define === 'function' && define.amd) 
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object') 
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-client-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-client-js'.");
    }
    root['ktor-client-js'] = factory(typeof this['ktor-client-js'] === 'undefined' ? {} : this['ktor-client-js'], kotlin);
  }
}(this, function(_, Kotlin) {
  'use strict';
  Kotlin.defineModule('ktor-client-js', _);
  return _;
}));
