/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define([],function(){var a=function(){};return a.entityStatus={active:0,inactive:1},a.userAccountStatus={active:0,inactive:1,merged:2},a.learningObjectGroupType={language:0},a.learningObjectStatus={active:0,inactive:1},a.learningObjectSchedulingStatus={proposed:0,scheduled:1,completed:2,canceled:3},a.learningObjectKind={IltCourse:0,WbtCourse:1,IltSession:2,VirtualIltSession:3,InstructionalVideo:4,SelfPacedLab:5,Curriculum:6,Link:7,LearningPath:8,VirtualLabClassroom:9},a.adminPageMode={update:0,create:1,copy:2},a.geocodingVendor={nokia:0,google:1},a.accountPool={local:0,global:1},a.notificationTriggerType={sessionEndReminder:8,sessionStartReminder:9,userAccountCreated:10},a.notificationPreviewErrorCode={notificationTemplateNotFound:0,learningObjectNotFound:1},a.paymentStatusCode={asyncAuthorizationDeclined:0,asyncAuthorizationInitiated:1,asyncAuthorizationStatusError:2,OrderReferenceStatus:3,success:4,syncAuthorizationDeclined:5,syncAuthorizationStatusError:6,unexpectedFailure:7,billingAddressError:8,paymentNotNeeded:9},a.refundTransactionError={captureDeclined:0,capturePending:1},a.transcriptStatus={approvalPending:0,waitlisted:10,registrationPending:20,registered:30,inProgress:40,withdrawn:-10,completed:-20,approvalDenied:-30,waitlistExpired:-40,canceled:-50,noShow:-60},a.transcriptRefundStatus={success:0,failed:1,notIssued:2,captureDeclined:3,capturePending:4,paymentProcessorNotSupported:5},a.orderStatus={completed:0,pending:1,failed:2},a.transcriptStateTransitionResult={success:0,seatNotAvailable:1,seatAvailable:2,invalid:3,transitionNotAllowed:4,transitionNotNeeded:5,notScheduled:6,notActive:7,loKindNotAllowed:8,invalidTranscriptUser:9,notAvailable:10,transcriptExists:11,waitlistOff:12,paymentRequired:13,invalidSchedulingStatus:14,registrationClosed:15,approvalRequired:16,paymentPending:17,SeatNotAvailableRegistrationRestriction:18},a.paymentProcessorSystem={none:0,lpa:1,csod:2},a.groupRuleConditionOperator={equals:0,between:2},a.evaluationStatus={transcriptNotFound:0,pending:1,submitted:2},a.audienceSelectorMode={availabilityRules:0,pricingRules:1,notifications:2,registrationrestrictionRules:3},a.cartPageMode={login:0,wallet:1,readonlyWallet:2,captured:3},a.transcriptStatus={approvalPending:0,waitlisted:10,registrationPending:20,registered:30,inProgress:40,withdrawn:-10,completed:-20,approvalDenied:-30,waitlistExpired:-40,canceled:-50,noShow:-60},a.auditChangeType={created:0,updated:1,deleted:2},a.transcriptMode={current:0,past:1},a.accountMergePaegMode={start:0,profileVerification:1,transcriptVerification:2,orderHistoryVerification:3,finalConfirmation:4,merging:5},a.awsSessionSortField={course:0,status:1,scheduleStatus:2,language:3,city:4,startDateTime:5,locatorNumber:6,unlisted:7,title:8,version:9,kind:10},a.userMetadataValueKind={string:0,number:1,encrypted:2},a.userMetadataFieldName={employeeId:"EmployeeId",jobCode:"JobCode",jobLevel:"JobLevel",jobTitle:"JobTitle",isManager:"IsManager",employmentType:"EmployeeType",managerId:"ManagerId",departmentId:"DepartmentId",steamUid:"SteamUid",locationId:"LocationId",amazonLastHireDate:"AmazonLastHireDate",jobFunction:"JobFunction",salesTeam:"SalesTeam",salesSegment:"SalesSegment",salesSegmentTerritory:"SalesSegmentTerritory",salesSegmentSubRegion:"SalesSegmentSubRegion",regulatoryRegion:"RegulatoryRegion",geo:"Geo"},a.audienceSpecificDataDictionaryField={jobFunction:0,salesTeam:1,jobTitle:2,costCenter:3,geo:9,regulatoryRegion:10},a.UserIdentitySystemNames={amazonNA:"AmazonNA",amazonCN:"AmazonCN",amazonJP:"AmazonJP",localAccountPool:"LocalAccountPool",amazonShibboleth:"AmazonShibboleth",apn:"APN",qwikLab:"QwikLab",certMetrics:"CertMetrics",csodHashedUserName:"CSODHashedUserName",csod:"CSODAccountId"},a.learningObjectResourceNames={goToTraining:"GoToTraining"},a.learningObjectResourceLocations={rosterActionButton:0,rosterActionDropdown:1},a.CurriculumComponentType={LearningObject:0,Header:1,TextLabel:2},a.SubscriptionBillingType={Free:0,Monthly:1,Annual:2},a.PurchasableKind={SubscriptionProduct:100},a.UserSubscriptionState={ActiveUserSubscriptionExists:0,UserSubscriptionRequired:1,NoSubscriptionRequired:2},a.UserSubscriptionStatus={Expired:-10,Withdrawn:-5,Subscribed:10},a});