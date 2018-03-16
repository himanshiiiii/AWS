/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["jquery","knockoutjs","jqueryHelper","transcript","transcriptRepository","idlerHelper","stringHelper","queryParametersHelper","transcriptPageViewModelBase","curriculumRepository","windowHelper","launchUrlRepository","dialogBox","enums","resourceManager","argumentNullError","misc"],function($,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=function(){var i=this;i.enums=m,a.utils.extend(i,new h),i.divKoBindingTarget=b.select("#transcript-page"),i.divTranscriptNotification=b.select("#divTranscriptNotification"),i.divCurrentTranscriptStatusUpdateError=b.select("#divCurrentTranscriptStatusUpdateError"),i.modeQueryParameterName="mode",i.itemIdQueryParameterName="itemId",i.tabToActivate=a.observable(0),i.transcriptNotification=a.observable(""),i.loadCompleted=a.observable(!1),i.currentTranscripts=a.observableArray(),i.pastTranscripts=a.observableArray(),i.currentTranscriptErrorMessage=a.observable(""),i.pastTranscriptErrorMessage=a.observable(""),i.updatedItemId=a.observable(""),i.currentTranscriptSearchCompleted=a.observable(!1),i.pastTranscriptSearchCompleted=a.observable(!1),i.pastTabIntialized=!1,i.currentTabIntialized=!1,i.initialize=function(){var b;b=g.getQueryParameterValue(null,i.modeQueryParameterName),i.updatedItemId=g.getQueryParameterValue(null,i.itemIdQueryParameterName),i.tabToActivate(0),Number(b)===m.transcriptMode.past&&i.tabToActivate(m.transcriptMode.past),i.tabToActivate()===m.transcriptMode.current?i.getCurrentTranscripts():i.tabToActivate()===m.transcriptMode.past&&i.getPastTranscripts(),i.divKoBindingTarget.show(),a.applyBindings(this,i.divKoBindingTarget[0])},i.onPastTabClicked=function(){i.pastTabIntialized===!1&&(i.loadCompleted(!1),i.pastTabIntialized=!0,i.getPastTranscripts()),g.updateQueryParameterValue(i.modeQueryParameterName,m.transcriptMode.past)},i.onCurrentTabClicked=function(){i.currentTabIntialized===!1&&(i.loadCompleted(!1),i.currentTabIntialized=!0,i.getCurrentTranscripts()),g.updateQueryParameterValue(i.modeQueryParameterName,m.transcriptMode.current)},i.onDownloadCertificateClicked=function(a){if(!a)throw new o.createInstance("transcript");d.downloadCertificate(a.id())},i.onWithdrawClicked=function(a){var b;if(!a)throw o.createInstance("transcript");b=a.refundCutoffMissed()?a.refundCutoffMessage():n.getFromattedString("Customer_MyTranscript_WithdrawConfirmationMessage",[a.learningObject().title()]),l.confirm(n.getString("Customer_MyTranscript_WithdrawConfirmationTitle"),b,{},function(b){b&&i.withdraw(a)},i)},i.onMarkAsCompletedClicked=function(a){var b;if(!a)throw o.createInstance("transcript");b=n.getFromattedString("Customer_MyTranscript_MarkAsCompletedConfirmationMessage",[a.learningObject().title()]),l.confirm(n.getString("Customer_MyTranscript_MarkAsCompletedConfirmationTitle"),b,{},function(b){b&&i.markLinkAsCompleted(a)},i)},i.onOnlineTrainingLaunchButtonClicked=function(a){if(!a)throw o.createInstance("transcript");a.learningObject().kind()!==m.learningObjectKind.WbtCourse&&a.learningObject().kind()!==m.learningObjectKind.InstructionalVideo||a.status()===m.transcriptStatus.canceled||(a.status()===m.transcriptStatus.registered?i.markAsInProgress(a.id()):i.getLaunchUrl(a))},i.onLinkLaunchButtonClicked=function(a){if(!a)throw o.createInstance("transcript");a.learningObject().isLink()&&(a.status()===m.transcriptStatus.registered?i.markAsInProgress(a.id()):i.getLaunchUrl(a))},i.showTranscriptNotification=function(a){i.transcriptNotification(a),b.scrollToTop(),i.divTranscriptNotification.fadeIn().delay(8e3).fadeOut()},i.getCurrentTranscripts=function(){e.showFull(),i.currentTranscriptSearchCompleted(!1),d.getCurrentTranscripts(null,null,i.onGetCurrentTranscriptsCompleted,i)},i.onGetCurrentTranscriptsCompleted=function(a,b,c){b?i.currentTranscriptErrorMessage(n.getString("WebService_Generic_ErrorMessage")):(i.currentTranscripts([]),i.loadCompleted(!0),a.Items&&i.processTranscripts(i.currentTranscripts,a.Items)),e.hideFull(),i.currentTranscriptSearchCompleted(!0)},i.getPastTranscripts=function(){e.showFull(),i.pastTranscriptSearchCompleted(!1),d.getArchivedTranscripts(null,null,i.onGetPastTranscriptsCompleted,i)},i.onGetPastTranscriptsCompleted=function(a,b,c){b?i.pastTranscriptErrorMessage(n.getString("WebService_Generic_ErrorMessage")):(i.pastTranscripts([]),i.loadCompleted(!0),a.Items&&i.processTranscripts(i.pastTranscripts,a.Items)),e.hideFull(),i.pastTranscriptSearchCompleted(!0)},i.processTranscripts=function(b,d){var e;d.forEach(function(a){b.push(new c(a))}),i.updatedItemId&&(e=a.utils.arrayFirst(b(),function(a){return i.updatedItemId===a.id()}),e&&i.showTranscriptNotification(n.getFromattedString("Customer_MyTranscript_ActionMessage",[e.displayStatus().toLowerCase(),e.learningObject().title()])))},i.withdraw=function(a){if(f.isStringNullOrWhiteSpace(a))throw o.createInstance("transcript");a.isRefreshing(!0),d.withdraw(a.id(),i.onWithdrawCompleted,i,a)},i.onWithdrawCompleted=function(a,b,c,d){var e,f;return d&&d.isRefreshing(!1),b||!a?void l.showGenericError():a.RefundStatus===m.transcriptRefundStatus.capturePending?void l.showError(n.getString("Admin_ManageTranscript_WithdrawRefundErrorCapturePending_Message")):a.RefundStatus===m.transcriptRefundStatus.paymentProcessorNotSupported?(f=n.getString("UI_General_ContactUsLink"),void l.showError(n.getFromattedString("UI_TranscriptPage_PaymentProcessorNotSupported_Message",[f,a.OrderId]))):(i.moveTranscriptItemToArchivedTab(a),e=n.getFromattedString("Customer_MyTranscript_WithdrawSuccessMessage",[a.LearningObject&&a.LearningObject.Title||""]),a.RefundStatus===m.transcriptRefundStatus.captureDeclined?e+=" "+n.getString("Admin_ManageTranscript_WithdrawRefundErrorCaptureDeclined_Message"):(Number(a.RefundedAmount)>0&&(e+="<br/>"+n.getFromattedString("Customer_MyTranscript_WithdrawRefundSuccessMessage",[a.CurrencySymbol,p.getRoundedNumber(a.RefundedAmount,2)])),a.RefundedVoucherToken&&(e+="<br/>"+n.getFromattedString("Customer_MyTranscript_WithdrawVoucherTokenSuccessMessage",[a.RefundedVoucherToken]))),void i.showTranscriptNotification(e))},i.markLinkAsCompleted=function(a){if(f.isStringNullOrWhiteSpace(a))throw o.createInstance("transcript");a.learningObject().kind()===m.learningObjectKind.Link&&(a.isRefreshing(!0),d.markLinkAsCompleted(a.id(),i.onMarkLinkAsCompletedFinished,i,a))},i.onMarkLinkAsCompletedFinished=function(a,b,c,d){return d&&d.isRefreshing(!1),b||!a?void l.showGenericError():(i.moveTranscriptItemToArchivedTab(a),void i.showTranscriptNotification(n.getFromattedString("Customer_MyTranscript_SelfAttestSuccessMessage",[a.LearningObject&&a.LearningObject.Title||""])))},i.getLaunchUrl=function(a){e.showFull(),a.learningObject().isLink()?k.getLinkLaunchUrl(a.learningObject().id(),!0,i.onGetLinkLaunchUrlCompleted,i):a.learningObject().isWbt()?k.getWbtLaunchUrl(a.learningObject().id(),a.id(),!0,i.onGetWbtLaunchUrlCompleted,i):a.learningObject().isVideo()&&k.getVideoLaunchUrl(a.learningObject().id(),a.id(),!0,i.onGetVideoLaunchUrlCompleted,i)},i.onGetWbtLaunchUrlCompleted=function(a,b,c){return e.hideFull(),!a||b?void l.showError(n.getString("Wbt_LaunchUrl_NotFound")):void j.open(a,"_blank")},i.onGetVideoLaunchUrlCompleted=function(a,b,c){return e.hideFull(),!a||b?void l.showError(n.getString("Video_LaunchUrl_NotFound")):void j.open(a,"_blank")},i.onGetLinkLaunchUrlCompleted=function(a,b,c){return e.hideFull(),!a||b?void l.showError(n.getString("Link_LaunchUrl_NotFound")):void j.open(a,"_blank")},i.markAsInProgress=function(a){a&&(e.showFull(),d.markAsInProgress(a,i.onMarkAsInProgressCompleted,i))},i.onMarkAsInProgressCompleted=function(b,d,f){var g;d?i.divCurrentTranscriptStatusUpdateError.stop(!0,!0).show().fadeOut(1e4):(i.getLaunchUrl(new c(b)),g=a.utils.arrayFirst(i.currentTranscripts(),function(a){return a.id()===b.Id}),g.status(b.Status),g.displayStatus(b.DisplayStatus)),e.hideFull()},i.moveTranscriptItemToArchivedTab=function(a){i.currentTranscripts.remove(function(b){return b.id()===a.Id}),i.pastTranscripts.unshift(new c(a))}};return q});