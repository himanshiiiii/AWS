//-----------------------------------------------------------------------
// <copyright>
//     Copyright 2016-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// </copyright>
//-----------------------------------------------------------------------
/*jslint unparam: true */

require(["jquery", "layoutPageViewModel"], function ($, LayoutPageViewModel) {
    $(document).ready(function () {
        // Variables
        var viewModel = new LayoutPageViewModel();
        viewModel.initialize();
    });
});