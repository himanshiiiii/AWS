/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["jquery","jqueryHelper","configurationRepository","languageCodes","resourceManager","stringHelper","argumentNullError","argumentError"],function($,a,b,c,d,e,f,g){var h={};return h.mapsApiConfiguration={},h.zoomLevel=15,h.mapsApiLoaded=!1,h.showMapDeferredArgs=null,h.loadingDetectionDelay=100,h.divKikuLoDetailsMap="#divKikuLoDetailsMap",h.mapMinHeight="320px",window.onBingMapsLoaded=function(){this.mapsApiLoaded=!0,window.clearInterval(h.loadingDetectionInterval),h.loadingDetectionInterval=null,h.showMapDeferredArgs&&(h.showMap.apply(h,h.showMapDeferredArgs),h.showMapDeferredArgs=null),h.mapsApiLoaded=!0},h.initialize=function(a){var b=document.createElement("script");b.setAttribute("type","text/javascript"),b.setAttribute("src","https://www.bing.com/api/maps/mapcontrol?callback=onBingMapsLoaded&setMkt="+h.getBingMapsLanguageCode()),void 0!==a&&null!==a&&a!==!0||document.getElementsByTagName("head")[0].appendChild(b),this.getBingMapsConfiguration(),h.loadingDetectionInterval=window.setInterval(h.detectIfLoaded,h.loadingDetectionDelay),$(window).resize(h.adjustMap)},h.getBingMapsConfiguration=function(){b.getBingMapsConfiguration(!1,h.getBingMapsConfigurationCompleted,h)},h.getBingMapsConfigurationCompleted=function(a,b,c){b===!1&&null!==a&&void 0!==a&&(h.mapsApiConfiguration=a,h.mapsApiLoaded&&h.showMapDeferredArgs&&h.onBingMapsLoaded())},h.setZoomLevel=function(a){h.zoomLevel=a},h.detectIfLoaded=function(){window.Microsoft&&window.Microsoft.Maps&&h.onBingMapsLoaded()},h.onBingMapsLoaded=window.onBingMapsLoaded,h.getBingMapsLanguageCode=function(){var b=a.getCurrentCultureCode();return c.getBingMapsLanguageCode(b)},h.showMap=function(a,b,c){var d,e,f;return h.mapsApiLoaded&&h.mapsApiConfiguration.MapsApiKey?(d=new Microsoft.Maps.Map("#"+c,{credentials:h.mapsApiConfiguration.MapsApiKey,zoom:h.zoomLevel}),e=new Microsoft.Maps.Location(a,b),f=d.getOptions(),f.center=e,d.setView(f),d.entities.clear(),void d.entities.push(new Microsoft.Maps.Pushpin(e,{}))):void(h.showMapDeferredArgs=arguments)},h.adjustMap=function(){$(h.divKikuLoDetailsMap).css("min-height",h.mapMinHeight)},h});