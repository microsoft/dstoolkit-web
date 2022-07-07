---
layout: page
title: Contributors
permalink: /contributors/
---

<!-- TODO: Loading the methods to get contributors  -->
<script src="{{site.baseurl}}/scripts/script-getcontributors.js" type="text/javascript"></script>

<!--HTML for the Contributors page-->
<div class="container-fluid">
    <img src="{{site.baseurl}}/images/contributors/CLO20b_Preeti_team_meeting_002.jpg" alt="team meeting">
    <div class="title">Solution Delivery Accelerator Contributors</div>
    <div class="custom-select" style="margin-top: 50px; float:right">
      <select id="id-filter-accelerators" class="toolkit-select" onchange="if (this.selectedIndex) filterContributors();">
        <option value="-1" selected hidden disabled>Filter by accelerator</option>
        <option value="all">All</option>
        <option value="dstoolkit-anomaly-detection-ijungle">dstoolkit-anomaly-detection-ijungle</option>
        <option value="dstoolkit-classification-solution-accelerator">dstoolkit-classification-solution-accelerator</option>
        <option value="cai-advanced-processing-service">cai-advanced-processing-service</option>
        <option value="glue">glue</option>
        <option value="dstoolkit-mlops-base">dstoolkit-mlops-base</option>
        <option value="dstoolkit-ml-ops-for-databricks">dstoolkit-ml-ops-for-databricks</option>
        <option value="dstoolkit-objectdetection-tensorflow-azureml">dstoolkit-objectdetection-tensorflow-azureml</option>
        <option value="verseagility">verseagility</option>
        <option value="dstoolkit-vitastic">dstoolkit-vitastic</option>
        <option value="dstoolkit-km-solution-accelerator">dstoolkit-km-solution-accelerator</option>
      </select>
    </div>
    <div id="id-contributors-list" class="contributors-list">
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
        "verseagility",
        "dstoolkit-km-solution-accelerator",
        "dstoolkit-vitastic"];

    var logContributorsAdded = [];
    var arrayContributors = [];

    showAllContributors();

    function showAllContributors() {
        var htmlContributors = ``;
        for (let i = 0; i < listRepos.length; i++) {
            GetHtmlListContributorsForAllRepos(listRepos[i], function(parsed) {
                document.getElementById("id-contributors-list").innerHTML += parsed;
            });
        }   
    
    } 

    function filterContributors() {
        //check what the current selection is
        var filter = document.getElementById("id-filter-accelerators");
        var currentSelection  = filter.options[filter.selectedIndex].value;
        githubAliasArray = [];
        document.getElementById("id-contributors-list").innerHTML = "";
        if(currentSelection === 'all') {
            filterAllContributors();
        }
        else {
            filterContributorsByCategory(currentSelection);
        }
    }

    function filterAllContributors() {
        var parsedToHtml = ``;
        githubFilteredContributorsArray.forEach(e => {
            parsedToHtml += 
                `<div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                    <img src="${e.contributorAvatarURL}" alt="Photo of contributor ${e.githubAlias}">
                    <div class="contributor-name">${e.githubAlias}</div>
                </div>`;
        });
        document.getElementById("id-contributors-list").innerHTML += parsedToHtml;
    }

    function filterContributorsByCategory(repo) {
        var parsedToHtml = ``;
        githubContributorsArray.forEach(e => {
            if(e.repo === repo) {
                parsedToHtml += 
                    `<div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                        <img src="${e.contributorAvatarURL}" alt="Photo of contributor ${e.githubAlias}">
                        <div class="contributor-name">${e.githubAlias}</div>
                    </div>`;
            }
        });
        document.getElementById("id-contributors-list").innerHTML += parsedToHtml;

    }


</script>