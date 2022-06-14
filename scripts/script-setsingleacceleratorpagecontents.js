/*
This javascript snippet is intended for use by the single accelerator pages (pages that inherit the layout, pageAccelerator)
*/

//<!--Header Image-->
document.getElementById("id-title-photo").src = srcHeaderImage;

//<!--Page Title-->
document.getElementById("id-title").innerText = textPageTitle;

//<!--Page brief description-->
document.getElementById("id-page-description").innerHTML = htmlPageDescription;

//<!--Prerequisites-->
//iterate through the list of prerequisites (listPrereqs) and create a prerequisites card in html for each
var htmltextPrerequisites = ``;
for (let i = 0; i < listPrereqs.length; i++) {
    htmltextPrerequisites += 
        `<div class="prerequisites-card">
            <span class="prerequisites-text">` + listPrereqs[i] + `</span>
        </div>`;
}
document.getElementById("id-prerequisites").innerHTML = htmltextPrerequisites;

//<!--Access the Accelerator-->
document.getElementById("id-text-access-accelerator").textContent = textPageTitle;
document.getElementById("id-link-access-accelerator").href = linkAccessAcceleratorRepo;
document.getElementById("id-link-access-accelerator").textContent = linkAccessAcceleratorRepo;

//<!--Industries-->
var htmltextIndustries = `<ul>`;
for (let i = 0; i < listIndustries.length; i++) {
    htmltextIndustries += `<li>`;
    htmltextIndustries += listIndustries[i];
    htmltextIndustries += `</li>`;
}
htmltextIndustries += `</ul>`;
document.getElementById("id-industries").innerHTML = htmltextIndustries;

//<!--Use Case-->
var htmltextUseCases = `<ul>`;
for (let i = 0; i < listUseCases.length; i++) {
    htmltextUseCases += `<li>`;
    htmltextUseCases += listUseCases[i];
    htmltextUseCases += `</li>`;
}
htmltextUseCases += `</ul>`;
document.getElementById("id-usecases").innerHTML = htmltextUseCases;

//<!--Accelerator description-->
document.getElementById("id-accelerator-description").innerHTML = htmlAcceleratorDescription;

//<!--Accelerator guidance (Videos)--> (can be hidden)
//Note: the URLs in the array, listAcceleratorGuidanceVideoURLs, should be video embed links such as https://www.youtube.com/embed/
if (toHide_AcceleratorGuidanceSection == true) {
    document.getElementById("id-accelerator-guidance-Section").style.display = "none";
}
else {
    var numVideos = listAcceleratorGuidanceVideoURLs.length;
    var htmlVideos = `<div style="height: 100%; text-align: center">`;
    htmlVideos += `<div class="csslider infinity" id="slider1">`;
    htmlVideos += `<input type="radio" name="slides" checked="checked" id="slides_1"/>`;

    for (let i = 2; i <= numVideos; i++) {
        htmlVideos += `<input type="radio" name="slides" id="slides_` + i + `"/>`;
    }

    htmlVideos += `<ul>`;
    for (let i = 0; i < numVideos; i++) {
        htmlVideos += `<li>`;
        htmlVideos += `<iframe width="560" height="315" src="` + listAcceleratorGuidanceVideoURLs[i] + `" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        htmlVideos += `</li>`;
    }
    htmlVideos += `</ul>`;

    var labelSlides = ``;
    for (let i = 1; i <= numVideos; i++) {
        labelSlides += `<label for="slides_` + i + `"></label>`;
    }
    htmlVideos += `<div class="arrows">`;
    htmlVideos += labelSlides;
    htmlVideos += `<label class="goto-first" for="slides_1"></label>`;
    htmlVideos += `<label class="goto-last" for="slides_10"></label>`;
    htmlVideos += `</div>`;
    htmlVideos += `<div class="navigation">`;
    htmlVideos += `<div>`;
    htmlVideos += labelSlides;
    htmlVideos += `</div>`;
    htmlVideos += `</div>`;

    //todo: ending divs
    htmlVideos += `</div>`;
    htmlVideos += `</div>`;

    document.getElementById("id-accelerator-guidance-videos").innerHTML = htmlVideos;
}

//<!--Link to Related Accelerator(s)-->
if (toHide_RelatedAccelerators == false) {
    var htmlRelatedAccelerators = `<span style="font-weight:600">Related Accelerator(s)</span>`;
    for (let i = 0; i < listLinksRelatedAccelerators.length; i++) {
        var link = listLinksRelatedAccelerators[i];
        var displayName = "";
        if (link == "/classification-accelerator/") {
            displayName = "Binary Classification Accelerator";
        } else if (link == "/conversational-AI/") {
            displayName = "Conversational AI Advanced Pre-Processing Service";
        } else if (link == "/forecasting/") {
            displayName = "Forecasting Accelerator";
        } else if (link == "/ml-ops/") {
            displayName = "ML Ops solution accelerator";
        } else if (link == "/ml-ops-for-databricks/") {
            displayName = "ML Ops for Databricks";
        } else if (link == "https://github.com/microsoft/dstoolkit-km-solution-accelerator") {
            displayName = "Knowledge Mining";
        } else {
            displayName = link;
        }

        htmlRelatedAccelerators += 
            `<a href="` + link + `" target="_blank" style="text-decoration:none">
                <div class="text-button accelerator-button">` + displayName + `</div>
            </a>`;
    }
    document.getElementById("id-related-accelerators-Section").innerHTML = htmlRelatedAccelerators;
} else {
    document.getElementById("id-related-accelerator-Section").style.display = "none";
}

//<!--Link to Contributing Guide-->
if (toHide_ContributingGuide == false) {
    document.getElementById("id-link-contributing-guide").href = linkContributingGuide;
} else {
    document.getElementById("id-contributing-guide-Section").style.display = "none";
}

//<!--Technologies-->
var htmltextTechnologies = ``;
for (let i = 0; i < listTechnologies.length; i++) {
    var technology = listTechnologies[i];
    var link = "None";
    if (technology == "Azure Compute Instance" || technology == "Azure Compute Cluster") {
        link = "https://azure.microsoft.com/services/#compute";
    } else if (technology == "Azure Container Instance") {
        link = "https://azure.microsoft.com/services/container-instances/";
    } else if (technology == "Azure Data Lake") {
        link = "https://azure.microsoft.com/services/data-lake-analytics";
    } else if (technology == "Azure Databricks") {
        link = "https://azure.microsoft.com/services/databricks/";
    } else if (technology == "Azure DevOps") {
        link = "https://azure.microsoft.com/services/devops/";
    } else if (technology == "Azure Key Vault") {
        link = "https://azure.microsoft.com/services/key-vault/";
    } else if (technology == "Azure Kubernetes Services") {
        link = "https://azure.microsoft.com/services/kubernetes-service";
    } else if (technology == "Azure Machine Learning") {
        link = "https://azure.microsoft.com/services/machine-learning";
    } else if (technology == "Application Insights" || technology == "Log analytics workspace for the App Insight") {
        link = "https://azure.microsoft.com/services/monitor/";
    } else if (technology == "Azure Storage Account") {
        link = "https://azure.microsoft.com/services/storage/";
    } else if (technology == "Azure Synapse") {
        link = "https://azure.microsoft.com/services/synapse-analytics";
    } else if (technology == "Docker") {
        link = "https://www.docker.com/";
    } else if (technology == "Common Data Model (CDM)") {
        link = "https://github.com/microsoft/CDM";
    } else if (technology == "TensorFlow") {
        link = "https://www.tensorflow.org/";
    } else if (technology == "") {

    } else if (technology == "") {

    } else if (technology == "") {

    } else if (technology == "") {

    } else if (technology == "") {

    } else if (technology == "") {

    } else if (technology == "") {

    }

    if (link != "None") {
        htmltextTechnologies += `<span><a href="` + link + `" target="_blank">` + technology + `</a></span>`;
    }
    else {
        htmltextTechnologies += `<span>` + technology + `</span>`;
    }
}
document.getElementById("id-technologies").innerHTML = htmltextTechnologies;

//<!--Architecture-->
if (toHide_ArchitectureSection == false) {
    document.getElementById("id-collapsibleSectionArch").innerHTML = htmlArchitectureSection;
} else {
    document.getElementById("id-collapsibleSectionArch").style.display = "none";
    document.getElementById("id-button-collapsibleSectionArch").style.display = "none";
}

//<!--Branching Strategy-->
if (toHide_BranchingStrategySection == false) {
    document.getElementById("id-collapsibleSectionBrStrat").innerHTML = htmlBranchingStrategySection;
} else {
    document.getElementById("id-collapsibleSectionBrStrat").style.display = "none";
    document.getElementById("id-button-collapsibleSectionBrStrat").style.display = "none";
}

//<!--Accelerator Components-->
if (toHide_AcceleratorComponents == false) {
    document.getElementById("id-collapsibleSectionAccelComp").innerHTML = htmlAcceleratorComponents;
} else {
    document.getElementById("id-collapsibleSectionAccelComp").style.display = "none";
    document.getElementById("id-button-collapsibleSectionAccelComp").style.display = "none";
}

//<!--Key Accelerator Files-->
if (toHide_KeyAcceleratorFiles == false) {
    document.getElementById("id-collapsibleSectionKeyAcc").innerHTML = htmlKeyAcceleratorFiles;
} else {
    document.getElementById("id-collapsibleSectionKeyAcc").style.display = "none";
    document.getElementById("id-button-collapsibleSectionKeyAcc").style.display = "none";
}

//<!--Live Demo-->
if (toHide_LiveDemoSection == false) {
    document.getElementById("id-collapsibleSectionLiveDemo").innerHTML = htmlLiveDemoSection;
} else {
    document.getElementById("id-collapsibleSectionLiveDemo").style.display = "none";
    document.getElementById("id-button-collapsibleSectionLiveDemo").style.display = "none";
}

//<!--Repository Structure-->
if (toHide_RepoStructureSection == false) {
    document.getElementById("id-collapsibleSectionRepoStructure").innerHTML = htmlRepoStructureSection;
} else {
    document.getElementById("id-collapsibleSectionRepoStructure").style.display = "none";
    document.getElementById("id-button-collapsibleSectionRepoStructure").style.display = "none";
}

//<!--GitHub Aliases and Photos of Contributors-->
GetHtmlListContributorsForSingleAcceleratorPage(linkAccessAcceleratorRepo, function(parsed) {
    document.getElementById("id-accelerator-contributors").innerHTML = parsed;
});