/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["knockoutjs","country","viewModelHelper"],function(a,b,c){var d=function(b){this.Id=a.observable(c.getPropertyValueOrDefault(b,"Id")),this.Name=a.observable(c.getPropertyValueOrDefault(b,"Name")),this.Abbreviation=a.observable(c.getPropertyValueOrDefault(b,"Abbreviation")),b&&b.Country?this.Country=a.observable(b.Country):this.Country=null};return d});