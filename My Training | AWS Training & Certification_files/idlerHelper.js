/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["jquery","jqueryHelper","misc","argumentNullError"],function($,a,b,c){var d=function(){};return d.fullIdler=a.select("#divIdler"),d.paymentIdler=a.select("#divPaymentIdler"),d.show=function(a){var b;if(!a)throw c.createInstance("targetElement");return b=$("<div class='kiku-idler inner'></div>"),a.css("position","relative"),a.append(b),b},d.showFull=function(){d.fullIdler.show()},d.hide=function(a){if(!a)throw c.createInstance("targetElement");a.children(".kiku-idler.inner").remove()},d.hideFull=function(){d.fullIdler.hide()},d.showPaymentIdler=function(){d.paymentIdler.show()},d.hidePaymentIdler=function(){d.paymentIdler.hide()},d});