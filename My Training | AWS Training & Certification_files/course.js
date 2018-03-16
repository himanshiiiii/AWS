/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["knockoutjs","currency","duration","dateTimeHelper","url","classification","availabilityRule","enrollmentRestrictionRule","pricingRule","loClassification","viewModelHelper","sellerOfRecord","learningObject","learningObjectGroups","enums","misc","arrayHelper","argumentNullError","customKoBindings","urlBuilder","learningObjectPageUrl"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v=function(b,q){var r,s,t,v,w,x,y,z;if(z="/admin/course",this.id=a.observable(k.getPropertyValueOrDefault(b,"Id")),this.Id=a.observable(k.getPropertyValueOrDefault(b,"Id")),this.code=a.observable(k.getPropertyValueOrDefault(b,"Code")),this.Title=a.observable(k.getPropertyValueOrDefault(b,"Title")),this.Abstract=a.observable(k.getPropertyValueOrDefault(b,"Abstract")),this.Description=a.observable(k.getPropertyValueOrDefault(b,"Description")),this.Notes=a.observable(k.getPropertyValueOrDefault(b,"Notes")),this.PreWorkInstructions=a.observable(k.getPropertyValueOrDefault(b,"PreWorkInstructions")),this.Duration=a.observable(new c(k.getPropertyValueOrDefault(b,"Duration"))),this.lastModifiedUtc=a.observable(k.getPropertyValueOrDefault(b,"LastModifiedUtc")),this.displayLastModifiedUtc=a.observable(k.getPropertyValueOrDefault(b,"DisplayLastModifiedUtc")),this.hasEvaluationUrl=a.observable(k.getPropertyValueOrDefault(b,"HasEvaluationUrl")),this.evaluationBaseUrl=a.observable(k.getPropertyValueOrDefault(b,"EvaluationBaseUrl")),this.curriculumDependenciesCount=a.observable(k.getPropertyValueOrDefault(b,"CurriculumDependenciesCount")),this.majorVersion=a.observable(k.getPropertyValueOrDefault(b,"MajorVersion")),this.minorVersion=a.observable(k.getPropertyValueOrDefault(b,"MinorVersion")),this.patch=a.observable(k.getPropertyValueOrDefault(b,"Patch")),this.displayVersion=a.computed(function(){return this.majorVersion()+"."+this.minorVersion()+"."+this.patch()},this),this.Price=a.observable(k.getPropertyValueOrDefault(b,"Price")),this.sellerOfRecord=a.observable(new l(k.getPropertyValueOrDefault(b,"SellerOfRecord"))),this.Currency=a.observable(a.utils.clone(this.sellerOfRecord().currency())),this.minCapacity=a.observable(k.getPropertyValueOrDefault(b,"MinCapacity")),this.maxCapacity=a.observable(k.getPropertyValueOrDefault(b,"MaxCapacity")),this.owner=a.observable(k.getPropertyValueOrDefault(b,"Owner")),this.apnDeepLink=a.observable(k.getPropertyValueOrDefault(b,"ApnDeepLink")),this.employeeDeepLink=a.observable(k.getPropertyValueOrDefault(b,"EmployeeDeepLink")),this.customerDeepLink=a.observable(k.getPropertyValueOrDefault(b,"CustomerDeepLink")),this.anonymousDeepLink=a.observable(k.getPropertyValueOrDefault(b,"AnonymousDeepLink")),this.StatusString=a.observable(k.getPropertyValueOrDefault(b,"Status").toString()),this.DisplayStatus=a.observable(k.getPropertyValueOrDefault(b,"DisplayStatus")),this.Status=a.computed(function(){return p.parseInt(this.StatusString())},this),this.isUnlistedString=a.observable(k.getPropertyValueOrDefault(b,"IsUnlisted").toString()),this.isUnlisted=a.computed(function(){return p.parseBool(this.isUnlistedString(),!1)},this),this.displayIsUnlisted=a.computed(function(){return p.boolToYesNo(this.isUnlisted(),!1)},this),this.isStandaloneString=a.observable(k.getPropertyValueOrDefault(b,"IsStandalone").toString()),this.isStandalone=a.computed(function(){return p.parseBool(this.isStandaloneString(),!1)},this),this.displayIsStandalone=a.computed(function(){return p.boolToYesNo(this.isStandalone(),!1)},this),this.IsWaitListingAllowedString=a.observable(k.getPropertyValueOrDefault(b,"IsWaitListingAllowed").toString()),this.IsWaitListingAllowed=a.computed(function(){return p.parseBool(this.IsWaitListingAllowedString(),!1)},this),this.IsApprovalNeededString=a.observable(k.getPropertyValueOrDefault(b,"IsApprovalNeeded").toString()),this.IsApprovalNeeded=a.computed(function(){return p.parseBool(this.IsApprovalNeededString(),!1)},this),this.displayIsApprovalNeeded=a.observable(p.boolToYesNo(this.IsApprovalNeeded())),this.RefundCutoffInDays=a.observable(k.getPropertyValueOrDefault(b,"RefundCutoffInDays")),this.registrationCutoffInDays=a.observable(k.getPropertyValueOrDefault(b,"RegistrationCutoffInDays")),this.groups=a.observable(new n(k.getPropertyValueOrDefault(b,"Groups"))),this.availabilityRules=a.observableArray(),s=k.getPropertyValueOrDefault(b,"AvailabilityRules"),null!==s&&void 0!==s&&s.length>0)for(w in s)s.hasOwnProperty(w)&&this.availabilityRules.push(new g(s[w]));if(this.registrationrestrictionRules=a.observableArray(),t=k.getPropertyValueOrDefault(b,"RegistrationRestrictionRules"),null!==t&&void 0!==t&&t.length>0)for(w in t)t.hasOwnProperty(w)&&this.registrationrestrictionRules.push(new h(t[w]));if(this.pricingRules=a.observableArray(),v=k.getPropertyValueOrDefault(b,"PricingRules"),null!==v&&void 0!==v&&v.length>0)for(w in v)v.hasOwnProperty(w)&&this.pricingRules.push(new i(v[w]));if(this.jobRoles=a.observableArray([]),this.experienceLevels=a.observableArray([]),this.trainingFormats=a.observableArray([]),this.tags=a.observableArray([]),this.classifications=a.observableArray([]),r=k.getPropertyValueOrDefault(b,"Classifications"),null!==r&&void 0!==r&&r.length>0)for(w in r)r.hasOwnProperty(w)&&(this.classifications.push(new f(r[w])),j.isJobRole(r[w].Id)===!0?this.jobRoles.push(r[w].Category+" - "+r[w].Value):j.isExperienceLevel(r[w].Id)===!0?this.experienceLevels.push(r[w].Category+" - "+r[w].Value):j.isTrainingFormat(r[w].Id)===!0?this.trainingFormats.push(r[w].Category+" - "+r[w].Value):this.tags.push(r[w].Category+" - "+r[w].Value));q||m.setNotificationGroups(this,b),this.ScheduleUrl=a.observable(""),null!==b&&void 0!==b&&(x=d.getUtcNow(),y=x.clone().add(6,"months"),this.ScheduleUrl=a.observable(e.toAbsolute("/training/schedule?courseid="+this.Id()+"&daterangestart="+d.toIso(x,!0)+"&daterangeend="+d.toIso(y,!0)))),this.editPageUrl=a.observable(""),this.copyPageUrl=a.observable(""),this.auditPageUrl=a.observable(""),this.Id()&&(this.editPageUrl=a.observable(z+"?id="+this.Id()+"&mode="+o.adminPageMode.update),this.copyPageUrl=a.observable(z+"?id="+this.Id()+"&mode="+o.adminPageMode.copy),this.auditPageUrl=a.observable(u.getAuditPageUrl(o.learningObjectKind.IltCourse,this.Id()))),this.displayJobRoles=a.observable(a.toJS(this.jobRoles()).join(", ")),this.displayExperienceLevels=a.observable(a.toJS(this.experienceLevels()).join(", ")),this.displayTrainingFormats=a.observable(a.toJS(this.trainingFormats()).join(", ")),this.displayTags=a.observable(a.toJS(this.tags()).join(", ")),this.displayClassificationTags=a.observable("-"),null!==r&&void 0!==r&&r.length>0&&this.displayClassificationTags([this.displayExperienceLevels(),this.displayJobRoles(),this.displayTrainingFormats(),this.displayTags()].filter(Boolean).join(" | ")),this.isExpanded=a.observable(!1)};return v.isCourseInClassification=function(a,b){var c;if(null===a||void 0===a)throw r.createInstance("course");if(null===b||void 0===b)throw r.createInstance("classificationValue");if("-1"===b.toString())return!0;if(null!==a.classifications&&void 0!==a.classifications&&a.classifications.length>0)for(c in a.classifications)if(a.classifications.hasOwnProperty(c)&&a.classifications[c].id.toString()===b.toString())return!0;return!1},v.getDefault=function(){return new v({Status:0,Price:0,Currency:{Id:1},Duration:{Unit:0},RefundCutoffInDays:5,IsWaitListingAllowed:!0,IsApprovalNeeded:!1,IsUnlisted:!1,HasEvaluationUrl:!0,IsStandalone:!0})},v});