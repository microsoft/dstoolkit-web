---
layout: page
title: Contributors
permalink: /contributors/
---

<!-- TODO: Loading the methods to get contributors
<script src="/scripts/script-getcontributors.js" type="text/javascript"></script> -->

<!--HTML for the Contributors page-->
<div>
    <div class="title-photo" style="position:relative;">
          <img src="/images/contributors/CLO20b_Preeti_team_meeting_002.jpg" alt="team meeting" height="300" style="width:100%;">
          <div class="title" style="position:absolute; color:white; top: 60%;
    left: 30%; font-size:42px;">Solution Delivery Accelerator Contributors</div>
    </div>
    <div class="custom-select" style="margin-top: 50px; float:right">
      <select class="toolkit-select">
        <option value="" selected disabled hidden>Filter by accelerator</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
    <div id="id-contributors-list" class="contributors-list">
        <div class="contributor-card">
            <img src="https://avatars.githubusercontent.com/u/18333502?v=4" alt="Photo of contributor" height="300" style="width:100%;">
            <div class="contributor-name">mariamedp</div>
        </div>
        <div class="contributor-card">
            <img src="https://avatars.githubusercontent.com/u/33233311?v=4" alt="Photo of contributor" height="300" style="width:100%;">
            <div class="contributor-name">FlorianPydde</div>
        </div>
        <div class="contributor-card">
            <img src="TODO" alt="Photo of contributor" height="300" style="width:100%;">
            <div class="contributor-name">GitHub Alias</div>
        </div>
        <div class="contributor-card">
            <img src="TODO" alt="Photo of contributor" height="300" style="width:100%;">
            <div class="contributor-name">GitHub Alias</div>
        </div>
        <div class="contributor-card">
            <img src="TODO" alt="Photo of contributor" height="300" style="width:100%;">
            <div class="contributor-name">GitHub Alias</div>
        </div>
        <div class="contributor-card">
            <img src="TODO" alt="Photo of contributor" height="300" style="width:100%;">
            <div class="contributor-name">GitHub Alias</div>
        </div>
        <div class="contributor-card">
            <img src="TODO" alt="Photo of contributor" height="300" style="width:100%;">
            <div class="contributor-name">GitHub Alias</div>
        </div>
        <div class="contributor-card">
            <img src="TODO" alt="Photo of contributor" height="300" style="width:100%;">
            <div class="contributor-name">GitHub Alias</div>
        </div>
        <div class="contributor-card">
            <img src="TODO" alt="Photo of contributor" height="300" style="width:100%;">
            <div class="contributor-name">GitHub Alias</div>
        </div>
    </div>
    <div class="subtitle borders" style="margin-top:0px">
        <div class="see-more">
            <span>See more</span>
            <i class="material-icons" style="margin-bottom:0px">keyboard_arrow_down</i>
        </div>
    </div>
</div>

<!--TODO: Script to update contributors dynamically-->
<!-- <script>
    const listRepos = ["https://github.com/microsoft/dstoolkit-anomaly-detection-ijungle",
        "https://github.com/microsoft/dstoolkit-classification-solution-accelerator",
        "https://github.com/microsoft/cai-advanced-processing-service",
        "https://github.com/microsoft/glue",
        "https://github.com/microsoft/dstoolkit-mlops-base",
        "https://github.com/microsoft/dstoolkit-ml-ops-for-databricks",
        "https://github.com/microsoft/dstoolkit-objectdetection-tensorflow-azureml",
        "https://github.com/microsoft/verseagility"];
    
    var htmlContributors = ``;
    for (let i = 0; i < listRepos.length; i++) {
        GetHtmlListContributorsForContributorsPage(repo, function(parsed) {
                htmlContributors += parsed;
        });
    }
    
    document.getElementById("id-contributors-list").innerHTML = "temmp";

</script> -->