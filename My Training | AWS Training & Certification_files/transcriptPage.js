//Copyright 2014-2014 Amazon.com, Inc. or its affiliates. All Rights Reserved.

/*jslint unparam: true */

require(["jquery", "transcriptPageViewModel"], function ($, TranscriptPageViewModel) {
    $(document).ready(function () {

        // Variables
        var viewModel;

        viewModel = new TranscriptPageViewModel();
        viewModel.initialize();
    });
});