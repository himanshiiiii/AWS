/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["argumentNullError"],function(a){var b=function(b,c,d){if(null===b||void 0===b)throw new a.createInstance("callbackFunction");if(null===c||void 0===c)throw new a.createInstance("callbackContext");this.callbackFunction=b,this.callbackContext=c,this.data=d};return b});