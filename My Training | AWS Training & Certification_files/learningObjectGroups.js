/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["knockoutjs","enums","learningObject","misc","viewModelHelper"],function(a,b,c,d,e){var f=function(b){var d=this;d.item=b,d.language=a.observableArray([]),d.item.Language&&d.item.Language.forEach(function(a,b,e){d.language.push(new c(d.item.Language[b]))}),d.credit=a.observableArray([]),d.item.Credit&&d.item.Credit.forEach(function(a,b,e){d.credit.push(new c(d.item.Credit[b]))})};return f});