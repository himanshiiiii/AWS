/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["jquery","jqueryHelper","configurationRepository","languageCodes","resourceManager","stringHelper","argumentNullError","argumentError"],function($,a,b,c,d,e,f,g){var h={};return h.mapsApiConfiguration=null,h.map=null,h.defaultLayers=null,h.useBingChinaMaps=!1,h.zoomLevel=15,h.initialize=function(a,b,c,d){var g,i,j,k;if(null===a||void 0===a)throw f.createInstance("nokiaH");if(null===b||void 0===b)throw f.createInstance("mapCanvasElement");if(e.isStringNullOrWhiteSpace(c))throw f.createInstance("applicationId");if(e.isStringNullOrWhiteSpace(d))throw f.createInstance("applicationCode");g=new a.service.Platform({app_id:c,app_code:d,useHTTPS:!0,useCIT:!0}),h.defaultLayers=g.createDefaultLayers(),j=g.getMapTileService(),k=j.createTileLayer("maptile","normal.day",256,"png8",{style:"flame"}),h.map=new a.Map(b,h.defaultLayers.normal.map),h.map.setBaseLayer(k),i=new a.mapevents.Behavior(new a.mapevents.MapEvents(h.map)),i=a.ui.UI.createDefault(h.map,h.defaultLayers)},h.setLanguage=function(a,b){var c;if(null===a||void 0===a)throw f.createInstance("nokiaH");e.isStringNullOrWhiteSpace(b)===!1&&(c=a.ui.UI.createDefault(h.map,h.defaultLayers,b))},h.showMap=function(b,d,i,j,k){var l,m,n,o;if(e.isStringNullOrWhiteSpace(i))throw f.createInstance("mapCanvasElementId");if(isNaN(b)||null===b)throw g.createInstance("latitude must be a number.");if(isNaN(d)||null===d)throw g.createInstance("longitude must be a number.");if(l=a.select("#"+i),null===l||void 0===l)throw g.createInstance("Map canvas element with ID "+i+".");if(void 0===j||null===j){if("undefined"==typeof H)return void h.showError(l);j=H}return null!==h.mapsApiConfiguration&&void 0!==h.mapsApiConfiguration||(h.getNokiaMapsConfiguration(),h.mapsApiConfiguration&&h.mapsApiConfiguration.ApplicationId&&h.mapsApiConfiguration.ApplicationCode)?(m=h.mapsApiConfiguration.ApplicationId,n=h.mapsApiConfiguration.ApplicationCode,o=a.getCurrentCultureCode(),o=c.getNokiaMapsLanguageCode(o),k!==!0&&null!==h.map&&void 0!==h.map||h.initialize(j,l[0],m,n),h.setLanguage(j,o),h.map.setCenter({lat:b,lng:d}),h.map.setZoom(h.zoomLevel),void h.map.addObject(new j.map.Marker({lat:b,lng:d}))):void h.showError(l)},h.setZoomLevel=function(a){h.zoomLevel=a},h.showError=function(a){a.html("<div class='kiku-map-error-message'>"+d.getString("General_Maps_Connection_Error")+"</div>")},h.getNokiaMapsConfiguration=function(){b.getNokiaMapsConfiguration(!1,h.getNokiaMapsConfigurationCompleted,h)},h.getNokiaMapsConfigurationCompleted=function(a,b,c){b===!1&&null!==a&&void 0!==a&&(h.mapsApiConfiguration=a)},h});