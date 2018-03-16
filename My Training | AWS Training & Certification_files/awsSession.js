/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["knockoutjs","moment-with-locales","misc","course","instructor","duration","eventLocation","trainingProvider","language","currency","availabilityRule","classification","sellerOfRecord","learningObjectNotificationGroup","learningObject","learningObjectGroups","enrollmentRestrictionRule","pricingRule","enums","dateTimeHelper","stringHelper","viewModelHelper","workflow","argumentNullError","argumentError","urlBuilder","learningObjectPageUrl","jqueryHelper","queryParametersHelper","learningObjectResource","learningObjectResourceGoToTraining"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){var F=function(h,j){var n,p,x,y,C,E,G;if(void 0===j&&(j=!0),this.id=a.observable(v.getPropertyValueOrDefault(h,"Id")),this.title=a.observable(v.getPropertyValueOrDefault(h,"Title")),this.owner=a.observable(v.getPropertyValueOrDefault(h,"Owner")),this.duration=a.observable(new f(v.getPropertyValueOrDefault(h,"Duration"))),this.course=a.observable(new d(v.getPropertyValueOrDefault(h,"Course"))),this.courseTitle=a.computed(function(){return this.course().Title()},this),this.language=a.observable(new i(v.getPropertyValueOrDefault(h,"Language"))),this.lastModifiedUtc=a.observable(v.getPropertyValueOrDefault(h,"LastModifiedUtc")),this.displayLastModifiedUtc=a.observable(v.getPropertyValueOrDefault(h,"DisplayLastModifiedUtc")),this.hasEvaluationUrl=a.observable(v.getPropertyValueOrDefault(h,"HasEvaluationUrl")),this.evaluationBaseUrl=a.observable(v.getPropertyValueOrDefault(h,"EvaluationBaseUrl")),this.enums=s,this.workflow=a.observable(new w(v.getPropertyValueOrDefault(h,"WorkflowWebModel"))),this.majorVersion=a.observable(v.getPropertyValueOrDefault(h,"MajorVersion")),this.minorVersion=a.observable(v.getPropertyValueOrDefault(h,"MinorVersion")),this.patch=a.observable(v.getPropertyValueOrDefault(h,"Patch")),this.displayVersion=a.computed(function(){return this.majorVersion()+"."+this.minorVersion()+"."+this.patch()},this),this.startDateTimeUtc=a.observable(v.getPropertyValueOrDefault(h,"StartDateTimeUtc")),this.startDateTime=a.observable(v.getPropertyValueOrDefault(h,"StartDateTime")),this.displayStartDateTime=a.observable(v.getPropertyValueOrDefault(h,"DisplayStartDateTime")),this.displayStartTime=a.observable(v.getPropertyValueOrDefault(h,"DisplayStartTime")),this.displayStartTime()||this.displayStartTime("8:00 AM"),this.displayStartTime(b(this.displayStartTime(),["h:mm A"]).format("HH:mm")),this.displayStartDate=a.observable(v.getPropertyValueOrDefault(h,"DisplayStartDate")),this.updateStartDateTime=function(){var a=t.toUtcMoment(this.displayStartDate(),this.displayStartTime());this.startDateTime(a.format("YYYY-MM-DDTHH:mm:ss"))},this.displayStartDate.subscribe(this.updateStartDateTime,this),this.displayStartTime.subscribe(this.updateStartDateTime,this),this.endDateTimeUtc=a.observable(v.getPropertyValueOrDefault(h,"EndDateTimeUtc")),this.endDateTime=a.observable(v.getPropertyValueOrDefault(h,"EndDateTime")),this.displayEndDateTime=a.observable(v.getPropertyValueOrDefault(h,"DisplayEndDateTime")),this.displayEndTime=a.observable(v.getPropertyValueOrDefault(h,"DisplayEndTime")),this.displayEndTime()||this.displayEndTime("5:00 PM"),this.displayEndTime(b(this.displayEndTime(),["h:mm A"]).format("HH:mm")),this.displayEndDate=a.observable(v.getPropertyValueOrDefault(h,"DisplayEndDate")),this.updateEndDateTime=function(){var a=t.toUtcMoment(this.displayEndDate(),this.displayEndTime());this.endDateTime(a.format("YYYY-MM-DDTHH:mm:ss"))},this.displayEndDate.subscribe(this.updateEndDateTime,this),this.displayEndTime.subscribe(this.updateEndDateTime,this),this.price=a.observable(v.getPropertyValueOrDefault(h,"Price")),this.sellerOfRecord=a.observable(new m(v.getPropertyValueOrDefault(h,"SellerOfRecord"))),this.currency=a.observable(a.utils.clone(this.sellerOfRecord().currency())),this.displayPrice=a.observable(""),""!==this.price()&&this.displayPrice(c.getDisplayMonetaryString(this.currency().symbol(),this.price())+" ("+this.currency().code()+")"),this.displayStatus=a.observable(v.getPropertyValueOrDefault(h,"DisplayStatus")),this.statusString=a.observable(v.getPropertyValueOrDefault(h,"Status").toString()),this.status=a.computed(function(){return c.parseInt(this.statusString())},this),this.schedulingStatus=a.observable(v.getPropertyValueOrDefault(h,"SchedulingStatus")),this.displaySchedulingStatus=a.observable(v.getPropertyValueOrDefault(h,"DisplaySchedulingStatus")),this.cancellationReason=a.observable(v.getPropertyValueOrDefault(h,"CancellationReason")),this.isUnlistedString=a.observable(v.getPropertyValueOrDefault(h,"IsUnlisted").toString()),this.isUnlisted=a.computed(function(){return c.parseBool(this.isUnlistedString(),!1)},this),this.displayIsUnlisted=a.computed(function(){return c.boolToYesNo(this.isUnlisted(),!1)},this),this.isStandaloneString=a.observable(v.getPropertyValueOrDefault(h,"IsStandalone").toString()),this.isStandalone=a.computed(function(){return c.parseBool(this.isStandaloneString(),!1)},this),this.displayIsStandalone=a.computed(function(){return c.boolToYesNo(this.isStandalone(),!1)},this),this.kindString=a.observable(v.getPropertyValueOrDefault(h,"Kind").toString()),this.displayKind=a.observable(v.getPropertyValueOrDefault(h,"DisplayKind")),this.kind=a.computed(function(){return c.parseInt(this.kindString())},this),this.kind.subscribe(function(){this.resetLoTypeInEvaluationUrl()},this),this.virtualLabClassroomId=a.observable(v.getPropertyValueOrDefault(h,"VirtualLabClassroomId")),this.virtualLabClassroomDomain=a.observable(v.getPropertyValueOrDefault(h,"VirtualLabClassroomDomain")),this.virtualLabClassroomInvoiceId=a.observable(v.getPropertyValueOrDefault(h,"VirtualLabClassroomInvoiceId")),this.virtualLabClassroomCredits=a.observable(v.getPropertyValueOrDefault(h,"VirtualLabClassroomCredits")),this.minCapacity=a.observable(v.getPropertyValueOrDefault(h,"MinCapacity")),this.maxCapacity=a.observable(v.getPropertyValueOrDefault(h,"MaxCapacity")),h&&null!==h.RegistrationCount&&void 0!==h.RegistrationCount?this.registrationCount=a.observable(h.RegistrationCount):this.registrationCount=a.observable(null),this.displayEnrollment=a.computed(function(){return(this.registrationCount()||"0")+"/"+this.maxCapacity()},this),this.isWaitListingAllowedString=a.observable(v.getPropertyValueOrDefault(h,"IsWaitListingAllowed").toString()),this.isWaitListingAllowed=a.computed(function(){return c.parseBool(this.isWaitListingAllowedString(),!1)},this),this.isApprovalNeededString=a.observable(v.getPropertyValueOrDefault(h,"IsApprovalNeeded").toString()),this.isApprovalNeeded=a.computed(function(){return c.parseBool(this.isApprovalNeededString(),!1)},this),this.displayIsApprovalNeeded=a.observable(c.boolToYesNo(this.isApprovalNeeded())),this.shouldHideLocation=a.observable(v.getPropertyValueOrDefault(h,"ShouldHideLocation")),this.locationDisplayTitle=a.observable(v.getPropertyValueOrDefault(h,"LocationDisplayTitle")),this.buildingName=a.observable(v.getPropertyValueOrDefault(h,"BuildingName")),this.sessionBuildingName=a.observable(v.getPropertyValueOrDefault(h,"SessionBuildingName")),this.sessionLocationDisplayTitle=a.observable(v.getPropertyValueOrDefault(h,"SessionLocationDisplayTitle")),this.location=a.observable(new g(v.getPropertyValueOrDefault(h,"Location"),this.buildingName(),this.locationDisplayTitle(),this.shouldHideLocation())),this.fullDisplayAddress=a.computed(function(){var a=this.locationDisplayTitle()||this.location().DisplayName(),b=this.buildingName()||this.location().BuildingName(),c="";return(a||b)&&(c="["+a+(a&&b?" - ":"")+b+"] "),c+this.location().FormattedAddress()},this),this.notes=a.observable(v.getPropertyValueOrDefault(h,"Notes")),this.preWorkInstructions=a.observable(v.getPropertyValueOrDefault(h,"PreWorkInstructions")),this.refundCutoffInDays=a.observable(v.getPropertyValueOrDefault(h,"RefundCutoffInDays")),this.instructors=a.observableArray([]),G=v.getPropertyValueOrDefault(h,"Instructors"),(G||[]).forEach(function(a){this.instructors.push(new e(a))},this),this.displayInstructors=a.computed(function(){return this.instructors()?this.instructors().map(function(a){return a.name()}).join(", "):""},this),this.availabilityRules=a.observableArray(),p=v.getPropertyValueOrDefault(h,"AvailabilityRules"),null!==p&&void 0!==p&&p.length>0)for(n in p)p.hasOwnProperty(n)&&this.availabilityRules.push(new k(p[n]));if(this.pricingRules=a.observableArray(),x=v.getPropertyValueOrDefault(h,"PricingRules"),null!==x&&void 0!==x&&x.length>0)for(n in x)x.hasOwnProperty(n)&&this.pricingRules.push(new r(x[n]));if(this.schedulingStatus()===s.learningObjectSchedulingStatus.proposed||this.schedulingStatus()===s.learningObjectSchedulingStatus.scheduled?this.registrationRestrictionRuleEnabled=a.observable(!0):this.registrationRestrictionRuleEnabled=a.observable(!1),this.registrationrestrictionRules=a.observableArray(),y=v.getPropertyValueOrDefault(h,"RegistrationRestrictionRules"),null!==y&&void 0!==y&&y.length>0)for(n in y)y.hasOwnProperty(n)&&this.registrationrestrictionRules.push(new q(y[n]));if(o.setNotificationGroups(this,h),this.classifications=a.observableArray([]),C=v.getPropertyValueOrDefault(h,"Classifications"),null!==C&&void 0!==C&&C.length>0)for(n in C)C.hasOwnProperty(n)&&this.classifications.push(new l(C[n]));this.allowedToHaveResources=a.computed(function(){return this.kind()===s.learningObjectKind.VirtualIltSession},this),this.resources=a.observableArray([]),h&&(h.Resources||[]).forEach(function(a){E=new D(a),this.resources.push(E)},this),this.goToTrainingResource=a.computed(function(){return a.utils.arrayFirst(this.resources(),function(a){return a.name()===s.learningObjectResourceNames.goToTraining})},this),this.labClassroomResource=a.computed(function(){return a.utils.arrayFirst(this.resources(),function(a){return a.name()===s.learningObjectResourceNames.labsClassroom})},this),this.isExpired=a.observable(!1),u.isStringNullOrWhiteSpace(this.startDateTimeUtc())||this.isExpired(a.observable(t.hasExpired(this.startDateTimeUtc()))),this.apnDeepLink=a.observable(v.getPropertyValueOrDefault(h,"ApnDeepLink")),this.employeeDeepLink=a.observable(v.getPropertyValueOrDefault(h,"EmployeeDeepLink")),this.customerDeepLink=a.observable(v.getPropertyValueOrDefault(h,"CustomerDeepLink")),this.anonymousDeepLink=a.observable(v.getPropertyValueOrDefault(h,"AnonymousDeepLink")),this.apnOneClickDeepLink=a.observable(v.getPropertyValueOrDefault(h,"ApnOneClickDeepLink")),this.employeeOneClickDeepLink=a.observable(v.getPropertyValueOrDefault(h,"EmployeeOneClickDeepLink")),this.customerOneClickDeepLink=a.observable(v.getPropertyValueOrDefault(h,"CustomerOneClickDeepLink")),this.anonymousOneClickDeepLink=a.observable(v.getPropertyValueOrDefault(h,"AnonymousOneClickDeepLink")),this.isExpanded=a.observable(!1),this.detailsPageUrl=a.observable(""),this.editPageUrl=a.observable(""),this.copyPageUrl=a.observable(""),this.rosterPageUrl=a.observable(""),this.auditPageUrl=a.observable(""),this.notificationLogsPageUrl=a.observable(""),this.id()&&(this.detailsPageUrl=a.observable("/learningobject/ilt?id="+this.id()),this.editPageUrl=a.observable("/admin/session?id="+this.id()+"&mode="+s.adminPageMode.update),this.copyPageUrl=a.observable("/admin/session?id="+this.id()+"&mode="+s.adminPageMode.copy),this.rosterPageUrl=a.observable("/roster/?sessionId="+this.id()),this.auditPageUrl=a.observable(A.getAuditPageUrl(this.kind(),this.id())),this.notificationLogsPageUrl=a.observable(z.buildLearningObjectNotificationLogsPageUrl(this.id()))),this.registrationCutoffInDays=a.observable(v.getPropertyValueOrDefault(h,"RegistrationCutoffInDays")),this.registrationCutoffDateTime=a.computed(function(){var a;return a=null===this.registrationCutoffInDays()||u.isStringNullOrWhiteSpace(this.registrationCutoffInDays())?b(this.endDateTime()):b(this.startDateTime()).add(this.registrationCutoffInDays(),"days")},this),this.displayRegistrationCutoffDateTime=a.computed(function(){if(!this.registrationCutoffDateTime())return"";var a=B.getCurrentLanguageCode();return this.registrationCutoffDateTime().locale(a).format("L LT")},this),this.isRegistrationCutoffPastEndDate=a.computed(function(){return b(this.registrationCutoffDateTime()).isAfter(b(this.endDateTime()))},this),this.isRegistrationCutoffBeforeToday=a.computed(function(){return b(this.registrationCutoffDateTime()).isBefore(b())},this),this.isRegistrationCutoffValid=a.computed(function(){return!this.isRegistrationCutoffBeforeToday()&&!this.isRegistrationCutoffPastEndDate()},this),j&&F.setDefaults(this)};return F.getTemplate=function(){return new F({Status:0,SchedulingStatus:0,Kind:2,IsUnlisted:!1,RegistrationCutoffInDays:null,IsStandalone:!0})},F.restoreCourseDefaults=function(b){if(null===b||void 0===b)throw x.createInstance("observableAwsSession");if(null===b.course||void 0===b.course)throw y.createInstance("Course cannot be null.");b.evaluationBaseUrl(b.course().evaluationBaseUrl()),b.resetLoTypeInEvaluationUrl(),b.duration(a.utils.clone(b.course().Duration())),b.price(b.course().Price()),b.sellerOfRecord(a.utils.clone(b.course().sellerOfRecord())),b.currency(a.utils.clone(b.course().Currency())),b.majorVersion(b.course().majorVersion()),b.minorVersion(b.course().minorVersion()),b.patch(b.course().patch()),b.isWaitListingAllowedString(b.course().IsWaitListingAllowedString()),b.isApprovalNeededString(b.course().IsApprovalNeededString()),b.minCapacity(b.course().minCapacity()),b.maxCapacity(b.course().maxCapacity()),b.refundCutoffInDays(b.course().RefundCutoffInDays()),F.setPricingRulesFromCourse(b),F.setAvailabilityRulesFromCourse(b),F.setRestrationRestrictionRulesFromCourse(b),F.setNotificationGroupsFromCourse(b),b.notes(b.course().Notes()),b.preWorkInstructions(b.course().PreWorkInstructions()),b.registrationCutoffInDays(b.course().registrationCutoffInDays()),b.classifications(b.course().classifications().slice(0))},F.prototype.resetLoTypeInEvaluationUrl=function(){if(!u.isStringNullOrWhiteSpace(this.evaluationBaseUrl())){var a=this.getLoTypeParameterForEvaluationUrl();this.evaluationBaseUrl(C.addOrUpdateQueryParameterValue(this.evaluationBaseUrl(),"lotype",a))}},F.prototype.getLoTypeParameterForEvaluationUrl=function(){if(this.kind()===s.learningObjectKind.IltSession)return"Session";if(this.kind()===s.learningObjectKind.VirtualIltSession)return"vILT";if(this.kind()===s.learningObjectKind.VirtualLabClassroom)return"VirtualLabClassroom";throw y.createInstance("This LearningObject Kind ("+this.kind()+") is not supported on the evaluation URL.")},F.setDefaults=function(b){b.evaluationBaseUrl()||b.evaluationBaseUrl(a.utils.clone(b.course().evaluationBaseUrl())),b.duration()&&0!==b.duration().value()||b.duration(a.utils.clone(b.course().Duration())),null!==b.price()&&void 0!==b.price()||(b.price(b.course().Price()),b.sellerOfRecord(a.utils.clone(b.course().sellerOfRecord())),b.currency(a.utils.clone(b.course().Currency()))),b.majorVersion()<=0&&b.majorVersion(b.course().majorVersion()),b.minorVersion()<=0&&b.minorVersion(b.course().minorVersion()),b.patch()<=0&&b.patch(b.course().patch()),b.isWaitListingAllowedString()||b.isWaitListingAllowedString(b.course().IsWaitListingAllowedString()),b.isApprovalNeededString()||b.isApprovalNeededString(b.course().IsApprovalNeededString()),b.minCapacity()||b.minCapacity(b.course().minCapacity()),b.maxCapacity()||b.maxCapacity(b.course().maxCapacity()),b.refundCutoffInDays()||b.refundCutoffInDays(b.course().RefundCutoffInDays()),b.pricingRules&&0!==b.pricingRules().length||F.setPricingRulesFromCourse(b),b.availabilityRules&&0!==b.availabilityRules().length||F.setAvailabilityRulesFromCourse(b),b.notificationGroups&&0!==b.notificationGroups().length||F.setNotificationGroupsFromCourse(b),b.notes&&!u.isStringNullOrWhiteSpace(b.notes())||b.notes(b.course().Notes()),b.preWorkInstructions&&!u.isStringNullOrWhiteSpace(b.preWorkInstructions())||b.preWorkInstructions(b.course().PreWorkInstructions()),b.registrationCutoffInDays()||b.registrationCutoffInDays(b.course().registrationCutoffInDays())},F.setAvailabilityRulesFromCourse=function(b){var c,d;b.availabilityRules||(b.availabilityRules=a.observableArray([])),b.availabilityRules.removeAll();for(c in b.course().availabilityRules())b.course().availabilityRules().hasOwnProperty(c)&&(d=b.course().availabilityRules()[c],b.availabilityRules.push(a.utils.clone(d)))},F.setPricingRulesFromCourse=function(b){var c,d;b.pricingRules||(b.pricingRules=a.observableArray([])),b.pricingRules.removeAll();for(c in b.course().pricingRules())b.course().pricingRules().hasOwnProperty(c)&&(d=b.course().pricingRules()[c],b.pricingRules.push(a.utils.clone(d)))},F.setRestrationRestrictionRulesFromCourse=function(b){var c,d;b.registrationrestrictionRules||(b.registrationrestrictionRules=a.observableArray([])),b.registrationrestrictionRules.removeAll();for(c in b.course().registrationrestrictionRules())b.course().registrationrestrictionRules().hasOwnProperty(c)&&(d=b.course().registrationrestrictionRules()[c],b.registrationrestrictionRules.push(a.utils.clone(d)))},F.setNotificationGroupsFromCourse=function(b){var c,d,e,f,g;b.notificationGroups||(b.notificationGroups=a.observableArray([])),b.notificationGroups.removeAll();for(c in b.course().notificationGroups())if(b.course().notificationGroups().hasOwnProperty(c)){d=b.course().notificationGroups()[c],g=a.utils.clone(d),g.audience=a.observable(a.utils.clone(d.audience())),g.notifications=a.observableArray([]),e=d.notifications();for(c in d.notifications())d.notifications().hasOwnProperty(c)&&(f=a.utils.clone(d.notifications()[c]),f.template=a.observable(a.utils.clone(f.template)),g.notifications.push(f));b.notificationGroups.push(g)}},F});