/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["knockoutjs","learningObject","language","currency","duration","dateTimeHelper","url","classification","availabilityRule","pricingRule","loClassification","viewModelHelper","sellerOfRecord","curriculumComponent","learningObjectGroups","enums","misc","arrayHelper","argumentNullError","urlBuilder","learningObjectPageUrl","registrableLearningObjectViewModelBase"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var w=function(d){var f,g,r,s,w,x=this;if(a.utils.extend(x,new v(d)),w=b.curriculumAdminPageBaseUrl,this.id=a.observable(l.getPropertyValueOrDefault(d,"Id")),this.code=a.observable(l.getPropertyValueOrDefault(d,"Code")),this.title=a.observable(l.getPropertyValueOrDefault(d,"Title")),this.abstract=a.observable(l.getPropertyValueOrDefault(d,"Abstract")),this.description=a.observable(l.getPropertyValueOrDefault(d,"Description")),this.duration=a.observable(new e(l.getPropertyValueOrDefault(d,"Duration"))),this.language=a.observable(new c(l.getPropertyValueOrDefault(d,"Language"))),this.lastModifiedUtc=a.observable(l.getPropertyValueOrDefault(d,"LastModifiedUtc")),this.displayLastModifiedUtc=a.observable(l.getPropertyValueOrDefault(d,"DisplayLastModifiedUtc")),this.hasEvaluationUrl=a.observable(l.getPropertyValueOrDefault(d,"HasEvaluationUrl")),this.evaluationBaseUrl=a.observable(l.getPropertyValueOrDefault(d,"EvaluationBaseUrl")),this.groups=a.observable(l.getPropertyValueOrDefault(d,"Groups")),this.curriculumDependenciesCount=a.observable(l.getPropertyValueOrDefault(d,"CurriculumDependenciesCount")),this.languageGroups=a.observable((this.groups()&&this.groups().Language||[]).map(function(a){return a.Url=b.getDetailsPageUrl(a.Id,a.Kind),a})),this.price=a.observable(l.getPropertyValueOrDefault(d,"Price")),this.sellerOfRecord=a.observable(new m(l.getPropertyValueOrDefault(d,"SellerOfRecord"))),this.currency=a.observable(a.utils.clone(this.sellerOfRecord().currency())),this.displayPrice=a.observable(""),this.currency()&&this.displayPrice(q.getDisplayMonetaryString(this.currency().symbol(),this.price())+" ("+this.currency().code()+")"),this.majorVersion=a.observable(l.getPropertyValueOrDefault(d,"MajorVersion")),this.minorVersion=a.observable(l.getPropertyValueOrDefault(d,"MinorVersion")),this.patch=a.observable(l.getPropertyValueOrDefault(d,"Patch")),this.displayVersion=a.computed(function(){return Number(this.majorVersion().toString())+"."+Number(this.minorVersion().toString())+"."+Number(this.patch().toString())},this),this.comparableVersion=a.computed(function(){return Number(this.displayVersion().replace(/\./g,""))},this),this.statusString=a.observable(l.getPropertyValueOrDefault(d,"Status").toString()),this.displayStatus=a.observable(l.getPropertyValueOrDefault(d,"DisplayStatus")),this.Status=a.computed(function(){return q.parseInt(this.statusString())},this),this.owner=a.observable(l.getPropertyValueOrDefault(d,"Owner")),this.kindString=a.observable(l.getPropertyValueOrDefault(d,"Kind").toString()),this.displayKind=a.observable(l.getPropertyValueOrDefault(d,"DisplayKind").toString()),this.Kind=a.computed(function(){return q.parseInt(this.kindString())},this),this.isUnlistedString=a.observable(l.getPropertyValueOrDefault(d,"IsUnlisted").toString()),this.isUnlisted=a.computed(function(){return q.parseBool(this.isUnlistedString(),!1)},this),this.displayIsUnlisted=a.computed(function(){return q.boolToYesNo(this.isUnlisted(),!1)},this),this.isStandaloneString=a.observable(l.getPropertyValueOrDefault(d,"IsStandalone").toString()),this.isStandalone=a.computed(function(){return q.parseBool(this.isStandaloneString(),!1)},this),this.displayIsStandalone=a.computed(function(){return q.boolToYesNo(this.isStandalone(),!1)},this),this.components=a.observableArray((d&&d.Components||[]).map(function(a){return new n(a)},this)),this.components.sort(function(a,b){return a.rank()===b.rank()?0:a.rank()<b.rank()?-1:1}),this.groups=a.observable(new o(l.getPropertyValueOrDefault(d,"Groups"))),this.availabilityRules=a.observableArray(),g=l.getPropertyValueOrDefault(d,"AvailabilityRules"),null!==g&&void 0!==g&&g.length>0)for(s in g)g.hasOwnProperty(s)&&this.availabilityRules.push(new i(g[s]));if(this.pricingRules=a.observableArray(),r=l.getPropertyValueOrDefault(d,"PricingRules"),null!==r&&void 0!==r&&r.length>0)for(s in r)r.hasOwnProperty(s)&&this.pricingRules.push(new j(r[s]));if(this.jobRoles=a.observableArray([]),this.experienceLevels=a.observableArray([]),this.trainingFormats=a.observableArray([]),this.tags=a.observableArray([]),this.classifications=a.observableArray([]),f=l.getPropertyValueOrDefault(d,"Classifications"),null!==f&&void 0!==f&&f.length>0)for(s in f)f.hasOwnProperty(s)&&(this.classifications.push(new h(f[s])),k.isJobRole(f[s].Id)===!0?this.jobRoles.push(f[s].Category+" - "+f[s].Value):k.isExperienceLevel(f[s].Id)===!0?this.experienceLevels.push(f[s].Category+" - "+f[s].Value):k.isTrainingFormat(f[s].Id)===!0?this.trainingFormats.push(f[s].Category+" - "+f[s].Value):this.tags.push(f[s].Category+" - "+f[s].Value));b.setNotificationGroups(this,d),this.apnDeepLink=a.observable(l.getPropertyValueOrDefault(d,"ApnDeepLink")),this.employeeDeepLink=a.observable(l.getPropertyValueOrDefault(d,"EmployeeDeepLink")),this.customerDeepLink=a.observable(l.getPropertyValueOrDefault(d,"CustomerDeepLink")),this.anonymousDeepLink=a.observable(l.getPropertyValueOrDefault(d,"AnonymousDeepLink")),this.apnOneClickDeepLink=a.observable(l.getPropertyValueOrDefault(d,"ApnOneClickDeepLink")),this.employeeOneClickDeepLink=a.observable(l.getPropertyValueOrDefault(d,"EmployeeOneClickDeepLink")),this.customerOneClickDeepLink=a.observable(l.getPropertyValueOrDefault(d,"CustomerOneClickDeepLink")),this.anonymousOneClickDeepLink=a.observable(l.getPropertyValueOrDefault(d,"AnonymousOneClickDeepLink")),this.detailsPageUrl=a.observable(""),this.editPageUrl=a.observable(""),this.copyPageUrl=a.observable(""),this.auditPageUrl=a.observable(""),this.notificationLogsPageUrl=a.observable(""),this.id()&&(this.detailsPageUrl=a.observable(b.getDetailsPageUrl(this.id(),this.Kind())),this.editPageUrl=a.observable(w+"?id="+this.id()+"&mode="+p.adminPageMode.update),this.copyPageUrl=a.observable(w+"?id="+this.id()+"&mode="+p.adminPageMode.copy),this.auditPageUrl=a.observable(u.getAuditPageUrl(d.Kind,this.id())),this.notificationLogsPageUrl=a.observable(t.buildLearningObjectNotificationLogsPageUrl(this.id()))),this.displayJobRoles=a.observable(a.toJS(this.jobRoles()).join(", ")),this.displayExperienceLevels=a.observable(a.toJS(this.experienceLevels()).join(", ")),this.displayTrainingFormats=a.observable(a.toJS(this.trainingFormats()).join(", ")),this.displayTags=a.observable(a.toJS(this.tags()).join(", ")),this.displayClassificationTags=a.observable("-"),null!==f&&void 0!==f&&f.length>0&&this.displayClassificationTags([this.displayExperienceLevels(),this.displayJobRoles(),this.displayTrainingFormats(),this.displayTags()].filter(Boolean).join(" | ")),this.isExpanded=a.observable(!1),this.elementId=a.observable("__curriculumElement_"+this.id())};return w.getTemplate=function(){return new w({Status:0,Price:0,Currency:{Id:1},Duration:{Unit:0},IsUnlisted:!1,IsStandalone:!0,Components:[],Language:{Id:1},Kind:p.learningObjectKind.Curriculum})},w});