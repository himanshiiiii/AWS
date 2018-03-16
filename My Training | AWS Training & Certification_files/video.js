/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["knockoutjs","duration","currency","language","enums","classification","availabilityRule","pricingRule","learningObject","learningObjectGroups","sellerOfRecord","misc","viewModelHelper","loClassification","urlBuilder","learningObjectPageUrl","registrableLearningObjectViewModelBase"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=function(c){var r,s,t,u,v=this;if(a.utils.extend(v,new q(c)),this.id=a.observable(m.getPropertyValueOrDefault(c,"Id")),this.code=a.observable(m.getPropertyValueOrDefault(c,"Code")),this.displayAge=a.observable(m.getPropertyValueOrDefault(c,"DisplayAge")),this.title=a.observable(m.getPropertyValueOrDefault(c,"Title")),this.abstract=a.observable(m.getPropertyValueOrDefault(c,"Abstract")),this.description=a.observable(m.getPropertyValueOrDefault(c,"Description")),this.duration=a.observable(new b(m.getPropertyValueOrDefault(c,"Duration"))),this.language=a.observable(new d(m.getPropertyValueOrDefault(c,"Language"))),this.lastModifiedUtc=a.observable(m.getPropertyValueOrDefault(c,"LastModifiedUtc")),this.displayLastModifiedUtc=a.observable(m.getPropertyValueOrDefault(c,"DisplayLastModifiedUtc")),this.hasEvaluationUrl=a.observable(m.getPropertyValueOrDefault(c,"HasEvaluationUrl")),this.evaluationBaseUrl=a.observable(m.getPropertyValueOrDefault(c,"EvaluationBaseUrl")),this.packageId=a.observable(m.getPropertyValueOrDefault(c,"PackageId")),this.contentS3Path=a.observable(m.getPropertyValueOrDefault(c,"ContentS3Path")),this.s3ContentExists=a.observable(m.getPropertyValueOrDefault(c,"S3ContentExists")),this.lrsPackageExists=a.observable(m.getPropertyValueOrDefault(c,"LrsPackageExists")),this.captionExists=a.observable(m.getPropertyValueOrDefault(c,"CaptionExists")),this.captions=a.observable(m.getPropertyValueOrDefault(c,"Captions")),this.completionThreshold=a.observable(m.getPropertyValueOrDefault(c,"CompletionThreshold")),this.curriculumDependenciesCount=a.observable(m.getPropertyValueOrDefault(c,"CurriculumDependenciesCount")),this.groups=a.observable(m.getPropertyValueOrDefault(c,"Groups")),this.languageGroups=a.observable((this.groups()&&this.groups().Language||[]).map(function(a){return a.Url=i.getDetailsPageUrl(a.Id,a.Kind),a})),this.majorVersion=a.observable(m.getPropertyValueOrDefault(c,"MajorVersion")),this.minorVersion=a.observable(m.getPropertyValueOrDefault(c,"MinorVersion")),this.patch=a.observable(m.getPropertyValueOrDefault(c,"Patch")),this.displayVersion=a.observable(this.majorVersion()+"."+this.minorVersion()+"."+this.patch()),this.owner=a.observable(m.getPropertyValueOrDefault(c,"Owner")),this.isUnlistedString=a.observable(m.getPropertyValueOrDefault(c,"IsUnlisted").toString()),this.isUnlisted=a.computed(function(){return l.parseBool(this.isUnlistedString(),!1)},this),this.displayIsUnlisted=a.computed(function(){return l.boolToYesNo(this.isUnlisted(),!1)},this),this.statusString=a.observable(m.getPropertyValueOrDefault(c,"Status").toString()),this.displayStatus=a.observable(m.getPropertyValueOrDefault(c,"DisplayStatus")),this.status=a.computed(function(){return l.parseInt(this.statusString())},this),this.isStandaloneString=a.observable(m.getPropertyValueOrDefault(c,"IsStandalone").toString()),this.isStandalone=a.computed(function(){return l.parseBool(this.isStandaloneString(),!1)},this),this.displayIsStandalone=a.computed(function(){return l.boolToYesNo(this.isStandalone(),!1)},this),this.isExpanded=a.observable(!1),this.jobRoles=a.observableArray([]),this.experienceLevels=a.observableArray([]),this.trainingFormats=a.observableArray([]),this.tags=a.observableArray([]),this.classifications=a.observableArray([]),r=m.getPropertyValueOrDefault(c,"Classifications"),null!==r&&void 0!==r&&r.length>0)for(s in r)r.hasOwnProperty(s)&&(this.classifications.push(new f(r[s])),n.isJobRole(r[s].Id)===!0?this.jobRoles.push(r[s].Category+" - "+r[s].Value):n.isExperienceLevel(r[s].Id)===!0?this.experienceLevels.push(r[s].Category+" - "+r[s].Value):n.isTrainingFormat(r[s].Id)===!0?this.trainingFormats.push(r[s].Category+" - "+r[s].Value):this.tags.push(r[s].Category+" - "+r[s].Value));if(this.groups=a.observable(new j(m.getPropertyValueOrDefault(c,"Groups"))),this.availabilityRules=a.observableArray(),t=m.getPropertyValueOrDefault(c,"AvailabilityRules"),null!==t&&void 0!==t&&t.length>0)for(s in t)t.hasOwnProperty(s)&&this.availabilityRules.push(new g(t[s]));if(this.price=a.observable(m.getPropertyValueOrDefault(c,"Price")),this.sellerOfRecord=a.observable(new k(m.getPropertyValueOrDefault(c,"SellerOfRecord"))),this.currency=a.observable(a.utils.clone(this.sellerOfRecord().currency())),this.displayPrice=a.observable(""),this.currency()&&this.displayPrice(l.getDisplayMonetaryString(this.currency().symbol(),this.price())+" ("+this.currency().code()+")"),this.pricingRules=a.observableArray(),u=m.getPropertyValueOrDefault(c,"PricingRules"),null!==u&&void 0!==u&&u.length>0)for(s in u)u.hasOwnProperty(s)&&this.pricingRules.push(new h(u[s]));i.setNotificationGroups(this,c),this.apnDeepLink=a.observable(m.getPropertyValueOrDefault(c,"ApnDeepLink")),this.employeeDeepLink=a.observable(m.getPropertyValueOrDefault(c,"EmployeeDeepLink")),this.customerDeepLink=a.observable(m.getPropertyValueOrDefault(c,"CustomerDeepLink")),this.anonymousDeepLink=a.observable(m.getPropertyValueOrDefault(c,"AnonymousDeepLink")),this.apnOneClickDeepLink=a.observable(m.getPropertyValueOrDefault(c,"ApnOneClickDeepLink")),this.employeeOneClickDeepLink=a.observable(m.getPropertyValueOrDefault(c,"EmployeeOneClickDeepLink")),this.customerOneClickDeepLink=a.observable(m.getPropertyValueOrDefault(c,"CustomerOneClickDeepLink")),this.anonymousOneClickDeepLink=a.observable(m.getPropertyValueOrDefault(c,"AnonymousOneClickDeepLink")),this.detailsPageUrl=a.observable(""),this.editPageUrl=a.observable(""),this.copyPageUrl=a.observable(""),this.auditPageUrl=a.observable(""),this.notificationLogsPageUrl=a.observable(""),this.id()&&(this.detailsPageUrl=a.observable("/learningobject/video?id="+this.id()),this.editPageUrl=a.observable(i.videoAdminPageBaseUrl+"?id="+this.id()+"&mode="+e.adminPageMode.update),this.copyPageUrl=a.observable(i.videoAdminPageBaseUrl+"?id="+this.id()+"&mode="+e.adminPageMode.copy),this.auditPageUrl=a.observable(p.getAuditPageUrl(c.Kind,this.id())),this.notificationLogsPageUrl=a.observable(o.buildLearningObjectNotificationLogsPageUrl(this.id()))),this.displayJobRoles=a.observable(a.toJS(this.jobRoles()).join(", ")),this.displayExperienceLevels=a.observable(a.toJS(this.experienceLevels()).join(", ")),this.displayTrainingFormats=a.observable(a.toJS(this.trainingFormats()).join(", ")),this.displayTags=a.observable(a.toJS(this.tags()).join(", ")),this.displayClassificationTags=a.observable("-"),null!==r&&void 0!==r&&r.length>0&&this.displayClassificationTags([this.displayExperienceLevels(),this.displayJobRoles(),this.displayTrainingFormats(),this.displayTags()].filter(Boolean).join(" | "))};return r.getTemplate=function(){return new r({Status:0,Price:0,Currency:{Id:1},Duration:{Unit:0},Language:{Id:1},IsUnlisted:!1,IsStandalone:!0,CompletionThreshold:100})},r});