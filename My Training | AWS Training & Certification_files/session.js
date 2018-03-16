/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["knockoutjs","course","duration","eventLocation","trainingProvider","language","currency","dateTimeHelper","stringHelper","viewModelHelper","resourceManager","registrableLearningObjectViewModelBase","misc","enums"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=function(o){var p=this;a.utils.extend(p,new l(o)),this.Id=a.observable(j.getPropertyValueOrDefault(o,"Id")),this.Kind=a.observable(j.getPropertyValueOrDefault(o,"Kind")),this.DisplayKind=a.observable(j.getPropertyValueOrDefault(o,"DisplayKind")),this.DetailsPage=a.observable(j.getPropertyValueOrDefault(o,"DetailsPage")),this.StartDateTimeUtc=a.observable(j.getPropertyValueOrDefault(o,"StartDateTimeUtc")),this.EndDateTimeUtc=a.observable(j.getPropertyValueOrDefault(o,"EndDateTimeUtc")),this.StartDateTime=a.observable(j.getPropertyValueOrDefault(o,"StartDateTime")),this.EndDateTime=a.observable(j.getPropertyValueOrDefault(o,"EndDateTime")),this.DisplayStartDateTime=a.observable(j.getPropertyValueOrDefault(o,"DisplayStartDateTime")),this.DisplayEndDateTime=a.observable(j.getPropertyValueOrDefault(o,"DisplayEndDateTime")),this.DisplayStartTime=a.observable(j.getPropertyValueOrDefault(o,"DisplayStartTime")),this.DisplayStartDate=a.observable(j.getPropertyValueOrDefault(o,"DisplayStartDate")),this.Duration=a.observable(new c(j.getPropertyValueOrDefault(o,"Duration"))),this.Course=a.observable(new b(j.getPropertyValueOrDefault(o,"Course"),(!0))),this.SessionBuildingName=a.observable(j.getPropertyValueOrDefault(o,"SessionBuildingName")),this.SessionLocationDisplayTitle=a.observable(j.getPropertyValueOrDefault(o,"SessionLocationDisplayTitle")),this.ShouldHideLocation=a.observable(j.getPropertyValueOrDefault(o,"ShouldHideLocation")),this.Location=a.observable(new d(j.getPropertyValueOrDefault(o,"Location"),this.SessionBuildingName(),this.SessionLocationDisplayTitle(),this.ShouldHideLocation(),this.Kind())),this.OfferedBy=a.observable(new e(j.getPropertyValueOrDefault(o,"OfferedBy"))),this.Language=a.observable(new f(j.getPropertyValueOrDefault(o,"Language"))),this.Price=a.observable(j.getPropertyValueOrDefault(o,"Price")||0),this.Currency=a.observable(new g(j.getPropertyValueOrDefault(o,"Currency"))),this.preWorkInstructions=a.observable(""),this.notes=a.observable(""),this.isAwsClass=a.observable(!0),o&&!o.Currency&&o.SellerOfRecord&&o.SellerOfRecord.Currency&&this.Currency(new g(o.SellerOfRecord.Currency)),this.isVilt=a.computed(function(){return this.Kind()===n.learningObjectKind.VirtualIltSession},this),this.owner=a.observable(j.getPropertyValueOrDefault(o,"Owner")),this.MaxCapacity=a.observable(j.getPropertyValueOrDefault(o,"MaxCapacity")),this.RegistrationCount=a.observable(j.getPropertyValueOrDefault(o,"RegistrationCount")),this.RemainingSeatCount=a.observable(j.getPropertyValueOrDefault(o,"RemainingSeatCount")),this.SeatsRemaining=a.computed(function(){var a=this.RemainingSeatCount();return null===a||""===a?k.getString("General_Unlimited"):(a<0&&(a=0),null===this.MaxCapacity()||""===this.MaxCapacity()?a:k.getFromattedString("General_SeatsRemaining_Message",[a,this.MaxCapacity()]))},this),this.displayPrice=a.observable(m.getDisplayMonetaryString(this.Currency().symbol(),this.Price())+" ("+this.Currency().code()+")"),1===this.OfferedBy().Id()&&this.DetailsPage("/learningobject/ilt?id="+this.Id()),this.IsVilt=a.observable(3===this.Kind()),this.IsExpired=a.observable(!1),i.isStringNullOrWhiteSpace(this.StartDateTimeUtc())||this.IsExpired(a.observable(h.hasExpired(this.StartDateTimeUtc())))};return o});