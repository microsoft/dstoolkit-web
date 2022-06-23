---
layout: page
title: Contributors
permalink: /contributors/
---

<!-- TODO: Loading the methods to get contributors  -->
<script src="/scripts/script-getcontributors.js" type="text/javascript"></script>

<!--HTML for the Contributors page-->
<div class="container-fluid">
    <img src="/images/contributors/CLO20b_Preeti_team_meeting_002.jpg" alt="team meeting">
    <div class="title">Solution Delivery Accelerator Contributors</div>
    <div class="custom-select" style="margin-top: 50px; float:right">
      <select id="id-filter-accelerators" class="toolkit-select" onchange="if (this.selectedIndex) doSomething();">
        <option value="-1" selected hidden disabled>Filter by accelerator</option>
        <option value="all">All</option>
        <option value="cars">cars</option>
        <option value="dstoolkit-anomaly-detection-ijungle">dstoolkit-anomaly-detection-ijungle</option>
      </select>
    </div>
    <div id="id-contributors-list" class="contributors-list">
        TODO:OverrideWithJS
        <!-- TEMPORARY- The filterable elements. Note that some have multiple class names (this can be used if they belong to multiple categories) -->
        <div class="filterDiv cars">BMW</div>
        <div class="filterDiv colors fruits">Orange</div>
        <div class="filterDiv cars">Volvo</div>
        <div class="filterDiv colors">Red</div>
        <div class="filterDiv cars animals">Mustang</div>
        <div class="filterDiv colors">Blue</div>
        <div class="filterDiv animals">Cat</div>
        <div class="filterDiv animals">Dog</div>
        <div class="filterDiv fruits">Melon</div>
        <div class="filterDiv fruits animals">Kiwi</div>
        <div class="filterDiv fruits">Banana</div>
        <div class="filterDiv fruits">Lemon</div>
        <div class="filterDiv animals dstoolkit-anomaly-detection-ijungle">dstoolkit-anomaly-detection-ijungle</div>
    </div>
    <div class="subtitle borders" style="margin-top:0px">
        <div class="see-more">
            <span>See more</span>
            <i class="material-icons" style="margin-bottom:0px">keyboard_arrow_down</i>
        </div>
    </div>
</div>

<!--TODO: Script to update contributors dynamically-->
<script>
    //static list of repos
    const listRepos = ["dstoolkit-anomaly-detection-ijungle",
        "dstoolkit-classification-solution-accelerator",
        "cai-advanced-processing-service",
        "glue",
        "dstoolkit-mlops-base",
        "dstoolkit-ml-ops-for-databricks",
        "dstoolkit-objectdetection-tensorflow-azureml",
        "verseagility"];



    var logContributorsAdded = [];
    var arrayContributors = [];


//reference: https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/#calling-multiple-apis-at-once
Promise.all([
	fetch('https://api.github.com/repos/microsoft/glue/contributors'),
	fetch('https://api.github.com/repos/microsoft/verseagility/contributors')
]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
        var data = response.json(); //get json of the response
        for (let i in data) {
            var githubAlias = data[i].login;
        
            //add to list of contributors, excluding bot accounts
            if (githubAlias != "dependabot[bot]" && githubAlias != 'microsoft-github-operations[bot]' && githubAlias != 'microsoftopensource')
            {
                var contributorAvatarURL = data[i].avatar_url;

                // // Add a separator between each repo
                // console.log('=========================');
            }
        }


		return response.json(); //add item to the new array
	})); //returns new array
}).then(function (data) {
	// Log the data to the console
	// You would do something with both sets of data here
	console.log(data);
    var array = data;
    console.log(array);
}).catch(function (error) {
	// if there's an error, log it
	console.log(error);
});




    // TODO --  script to filter div elements
    function doSomething() {
        //check what the current selection is
        var filter = document.getElementById("id-filter-accelerators");
        var currentSelection  = filter.options[filter.selectedIndex].value;
        alert("You selected " + currentSelection);
        filterSelection(currentSelection);
        //filter div elements for contributors based on the filter selection
    }
    
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
            // w3RemoveClass(x[i], "show");
            x[i].style.display = "none";
            if (x[i].className.indexOf(c) > -1) {
                // w3AddClass(x[i], "show");
                x[i].style.display = "block";
            } 
        }
    }


</script>