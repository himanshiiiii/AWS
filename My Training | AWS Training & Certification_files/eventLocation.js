/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["knockoutjs","jqueryHelper","city","timezone","coordinates","viewModelHelper","misc","enums","resourceManager"],function(a,b,c,d,e,f,g,h,i){var j=function(b,k,l,m,n){var o,p,q=this;q.loKind=n,q.Id=a.observable(f.getPropertyValueOrDefault(b,"Id")),q.DisplayName=a.observable(l||f.getPropertyValueOrDefault(b,"DisplayName")),q.BuildingName=a.observable(k||f.getPropertyValueOrDefault(b,"BuildingName")),q.FormattedAddress=a.observable(f.getPropertyValueOrDefault(b,"FormattedAddress")),q.PostalCode=a.observable(f.getPropertyValueOrDefault(b,"PostalCode")),q.Timezone=a.observable(new d(f.getPropertyValueOrDefault(b,"Timezone"))),q.Coordinates=a.observable(new e(f.getPropertyValueOrDefault(b,"Coordinates"))),q.City=a.observable(new c(f.getPropertyValueOrDefault(b,"City"))),q.LearningObjectCount=a.observable(f.getPropertyValueOrDefault(b,"LearningObjectCount")),q.IsInUseDisplayString=a.computed(function(){return q.LearningObjectCount()>0?i.getString("General_Yes"):i.getString("General_No")},q),q.EditPageUrl=a.computed(function(){return"/admin/location?id="+q.Id()+"&mode="+h.adminPageMode.update},q),q.AuditPageUrl=a.computed(function(){return"/admin/auditLog?entitytype=Location&entityid="+q.Id()},q),q.MapsUrl=a.observable(""),null!==q.Coordinates()&&void 0!==q.Coordinates()?(p=q.Coordinates().Latitude()+","+q.Coordinates().Longitude(),o="https://www.here.com/directions/drive/"+q.FormattedAddress().replace(" ","-")+":"+p+"/?map="+p+",11,normal",q.MapsUrl(o)):q.MapsUrl("https://www.here.com/directions/drive/"+q.FormattedAddress().replace(" ","-")),q.ShouldHideLocation=a.computed(function(){return g.parseBool(m,!1)},q),q.DisplayFormattedAddress=a.observable(j.getDisplayFormattedAddress(b,k,l,m)),q.CustomDisplayName=a.computed(function(){return Number(this.loKind)===h.learningObjectKind.VirtualIltSession&&this.DisplayName()?this.DisplayName():q.City().Name()&&q.City().Country().Abbreviation()?q.City().Name()+", "+q.City().Country().Abbreviation():void 0},q)};return j.getDisplayFormattedAddress=function(a,b,c,d){if(null===a||void 0===a)return"";if(d===!0)return i.getString("UI_LearningObject_Location_ToBeDetermined_Text");var e,f,g="";return e=b||a.BuildingName,f=c||a.DisplayName,f&&(g=f),e&&(g+="<br/>"+e),g?a.FormattedAddress&&(g=a.FormattedAddress+"<br/>"+g):g=a.FormattedAddress,g},j});