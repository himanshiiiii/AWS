/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["knockoutjs","viewModelHelper","misc","enums"],function(a,b,c,d){var e=function(e){this.id=a.observable(b.getPropertyValueOrDefault(e,"Id")),this.userId=a.observable(b.getPropertyValueOrDefault(e,"UserId")),this.displayStatus=a.observable(b.getPropertyValueOrDefault(e,"DisplayStatus")),this.statusString=a.observable(b.getPropertyValueOrDefault(e,"Status").toString()),this.status=a.computed(function(){return c.parseInt(this.statusString())},this),this.name=a.observable(b.getPropertyValueOrDefault(e,"Name")),this.displayName=a.computed(function(){return this.name()||this.userId()?this.name()+" ("+this.userId()+")":""},this),this.copyPageUrl=a.computed(function(){return"/admin/instructor?id="+this.id()+"&mode="+d.adminPageMode.copy},this),this.editPageUrl=a.computed(function(){return"/admin/instructor?id="+this.id()+"&mode="+d.adminPageMode.update},this),this.userPageUrl=a.computed(function(){return"/admin/user?id="+this.userId()+"&mode="+d.adminPageMode.update},this)};return e});