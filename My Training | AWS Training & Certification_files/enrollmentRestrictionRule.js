/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["knockoutjs","audience","viewModelHelper","audienceBasedLearningObjectRule"],function(a,b,c,d){var e=function(e){var f=this;a.utils.extend(f,new d(e)),f.seatCount=a.observable(c.getPropertyValueOrDefault(e,"SeatCount")),f.audicenNameElementId=a.computed(function(){return"registrationRestrictionAudinceNameElementId"+b.normalizeFullPath(this.audienceFullPath())},f),f.seatCountElementId=a.computed(function(){return"registrationRestrictionRuleSeatCountElementId"+b.normalizeFullPath(this.audienceFullPath())},f)};return e});