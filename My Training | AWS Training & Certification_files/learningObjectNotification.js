/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["knockoutjs","language","eventLocation","enums","misc","viewModelHelper","notificationTemplate"],function(a,b,c,d,e,f,g){var h=function(b){this.id=a.observable(f.getPropertyValueOrDefault(b,"Id")),this.groupId=a.observable(f.getPropertyValueOrDefault(b,"GroupId")),this.triggerType=a.observable(f.getPropertyValueOrDefault(b,"TriggerType")),this.displayTriggerType=a.observable(f.getPropertyValueOrDefault(b,"DisplayTriggerType")),this.template=a.observable(new g(f.getPropertyValueOrDefault(b,"Template"))),this.elementId=a.computed(function(){return"__loNotf__"+this.triggerType()+this.template().id()+Math.random().toString().replace(".","")},this)};return h});