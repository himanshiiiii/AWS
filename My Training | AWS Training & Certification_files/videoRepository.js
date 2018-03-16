/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["jquery","knockoutjs","ajaxHelper","video","webServiceError","webServiceCallbackParameters","enums","stringHelper","misc","arrayHelper","argumentNullError","argumentError"],function($,a,b,c,d,e,f,g,h,i,j,k){var l=function(){};return l.getVideoById=function(a,c,d,f){if(null===c||void 0===c)throw j.createInstance("callback");if(null===d||void 0===d)throw new j.createInstance("callbackContext");if(a=h.parseInt(a),isNaN(a)||a<=0)throw k.createInstance("id must be an integer number greater than zero.");b.invokeWebApi("GET","/api/v1/video?simulateTranscriptTransition=true&id="+a,!0,new e(c,d,f),l.onGetVideoByIdSuccess,l.onGetVideoByIdError)},l.onGetVideoByIdSuccess=function(a,b){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,b,!1,null,a.data)},l.onGetVideoByIdError=function(a,b,c,e){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,null,!0,new d(b,c,e),a.data)},l.search=function(a,c,d){var f,g,i;if(null===a||void 0===a)throw new j.createInstance("request");if(null===c||void 0===c)throw new j.createInstance("callback");if(null===d||void 0===d)throw new j.createInstance("callbackContext");if(void 0===a.searchPhrase&&(a.searchPhrase=""),a.includeUnlisted=h.parseBool(a.includeUnlisted,!1).toString(),g="",a.status&&a.status.length>0)for(i in a.status)a.status.hasOwnProperty(i)&&(g+="&status="+encodeURIComponent(a.status[i]));void 0!==a.locatorNumber&&null!==a.locatorNumber||(a.locatorNumber=""),void 0!==a.languageId&&null!==a.languageId||(a.languageId=""),f="/api/v1/video/search?SearchPhrase="+encodeURIComponent(a.searchPhrase)+"&SortField="+encodeURIComponent(a.sortField)+"&SortAscending="+encodeURIComponent(a.sortAscending)+"&PageNumber="+encodeURIComponent(a.pageNumber)+"&LocatorNumber="+encodeURIComponent(a.locatorNumber)+"&LanguageId="+encodeURIComponent(a.languageId)+"&PageSize="+encodeURIComponent(a.pageSize)+"&IncludeUnlisted="+encodeURIComponent(a.includeUnlisted)+"&visibilitymode="+encodeURIComponent(a.visibilityMode)+g,b.invokeWebApi("GET",f,!0,new e(c,d),l.onSearchSuccess,l.onSearchError,null,JSON.stringify(a))},l.onSearchSuccess=function(a,b){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,b,!1,null)},l.onSearchError=function(a,b,c,e){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,null,!0,new d(b,c,e))},l.getBaseById=function(a,c,d){if(isNaN(a)||a<=0)throw k.createInstance("id must be an integer number greater than zero.");if(null===c||void 0===c)throw j.createInstance("callback");if(null===d||void 0===d)throw new j.createInstance("callbackContext");b.invokeWebApi("GET","/api/v1/video/base?id="+a,!0,new e(c,d),l.onGetBaseByIdSuccess,l.onGetBaseByIdError)},l.onGetBaseByIdSuccess=function(a,b){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,b,!1,null)},l.onGetBaseByIdError=function(a,b,c,e){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,null,!0,new d(b,c,e))},l.getLocalizedById=function(a,c,d,f){var h;if(isNaN(a)||a<=0)throw j.createInstance("id must be an integer number greater than zero.");if(g.isStringNullOrWhiteSpace(c))throw j.createInstance("cultureCode");if(null===d||void 0===d)throw j.createInstance("callback");if(null===f||void 0===f)throw new j.createInstance("callbackContext");h="/api/v1/localizedvideo?baseId="+a+"&cultureCode="+c,b.invokeWebApi("GET",h,!0,new e(d,f),l.onGetLocalizedByIdSuccess,l.onGetLocalizedByIdError)},l.onGetLocalizedByIdSuccess=function(a,b){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,b,!1,null)},l.onGetLocalizedByIdError=function(a,b,c,e){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,null,!0,new d(b,c,e))},l.update=function(a,c,d){var g;if(null===a||void 0===a)throw new j.createInstance("video");if(null===c||void 0===c)throw new j.createInstance("callback");if(null===d||void 0===d)throw new j.createInstance("callbackContext");a.kind=f.learningObjectKind.InstructionalVideo,g="/api/v1/video",b.invokeWebApi("POST",g,!0,new e(c,d),l.onUpdateSuccess,l.onUpdateError,null,JSON.stringify(a))},l.onUpdateSuccess=function(a,b){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,b,!1,null)},l.onUpdateError=function(a,b,c,e){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,null,!0,new d(b,c,e))},l.updateLocalized=function(a,c,d){var f;if(null===a||void 0===a)throw new j.createInstance("video");if(null===c||void 0===c)throw new j.createInstance("callback");if(null===d||void 0===d)throw new j.createInstance("callbackContext");f="/api/v1/localizedvideo",b.invokeWebApi("POST",f,!0,new e(c,d),l.onUpdateLocalizedSuccess,l.onUpdateLocalizedError,null,JSON.stringify(a))},l.onUpdateLocalizedSuccess=function(a,b){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,b,!1,null)},l.onUpdateLocalizedError=function(a,b,c,e){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,null,!0,new d(b,c,e))},l.create=function(a,c,d){var g;if(null===a||void 0===a)throw new j.createInstance("video");if(null===c||void 0===c)throw new j.createInstance("callback");if(null===d||void 0===d)throw new j.createInstance("callbackContext");a.kind=f.learningObjectKind.InstructionalVideo,g="/api/v1/video",b.invokeWebApi("PUT",g,!0,new e(c,d),l.onCreateSuccess,l.onCreateError,null,JSON.stringify(a))},l.onCreateSuccess=function(a,b){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,b,!1,null)},l.onCreateError=function(a,b,c,e){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,null,!0,new d(b,c,e))},l.publishPackageToLrs=function(a,c,d){if(isNaN(a)||a<=0)throw j.createInstance("id must be an integer number greater than zero.");if(null===c||void 0===c)throw j.createInstance("callback");if(null===d||void 0===d)throw new j.createInstance("callbackContext");b.invokeWebApi("PUT","/api/v1/video/package?videoId="+a,!0,new e(c,d),l.onPublishPackageToLrsSuccess,l.onPublishPackageToLrsError)},l.onPublishPackageToLrsSuccess=function(a,b){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,b,!1,null)},l.onPublishPackageToLrsError=function(a,b,c,e){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,null,!0,new d(b,c,e))},l.getPackageDetails=function(a,c,d){if(g.isStringNullOrWhiteSpace(a))throw j.createInstance("packageId");if(null===c||void 0===c)throw j.createInstance("callback");if(null===d||void 0===d)throw new j.createInstance("callbackContext");b.invokeWebApi("GET","/api/v1/video/package?packageId="+a,!0,new e(c,d),l.onGetPackageDetailsSuccess,l.onGetPackageDetailsError)},l.onGetPackageDetailsSuccess=function(a,b){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,b,!1,null)},l.onGetPackageDetailsError=function(a,b,c,e){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,null,!0,new d(b,c,e))},l.deleteById=function(a,c,d){if(isNaN(a)||a<=0)throw k.createInstance("id must be an integer number greater than zero.");if(null===c||void 0===c)throw j.createInstance("callback");if(null===d||void 0===d)throw new j.createInstance("callbackContext");b.invokeWebApi("DELETE","/api/v1/video?id="+a,!0,new e(c,d),l.onDeleteByIdSuccess,l.onDeleteByIdError)},l.onDeleteByIdSuccess=function(a,b){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,b,!1,null)},l.onDeleteByIdError=function(a,b,c,e){if(null===a||void 0===a)throw new j.createInstance("context");a.callbackFunction.call(a.callbackContext,null,!0,new d(b,c,e))},l});