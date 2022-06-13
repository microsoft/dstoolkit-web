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
//TODO: if the boolean for showing this section is false, then don't display the elements for this section
// var element = document.getElementById("myDiv");
// element.style.display = "none";
//else, set the contents
//TODO: set the contents after being passed a list (array) of video URLs
//pending https://github.com/microsoft/dstoolkit-web/issues/24 - before spending more time - to be confirmed if we will be displaying those videos at all - if not displaying, then perhaps we'll remove this section

//<!--Link to Related Accelerator(s)-->
document.getElementById("id-link-related-accelerator").href = linkRelatedAccelerator;
document.getElementById("id-text-related-accelerator").textContent = nameRelatedAccelerator;

//<!--Link to Contributing Guide-->
document.getElementById("id-link-contributing-guide").href = linkContributingGuide;

//<!--Technologies-->
var htmltextTechnologies = ``;
for (let i = 0; i < listTechnologies.length; i++) {
    var technology = listTechnologies[i];
    var link = "None";
    if (technology == "Azure Machine Learning") {
        link = "https://azure.microsoft.com/services/machine-learning";
    } else if (technology == "Azure DevOps") {
        link = "https://azure.microsoft.com/services/devops/";
    } else if (technology == "Azure Key Vault") {
        link = "https://azure.microsoft.com/services/key-vault/";
    } else if (technology == "Azure Compute Instance" || technology == "Azure Compute Cluster") {
        link = "https://azure.microsoft.com/services/#compute";
    } else if (technology == "Azure Container Instance") {
        link = "https://azure.microsoft.com/services/container-instances/";
    } else if (technology == "Azure Kubernetes Services") {
        link = "https://azure.microsoft.com/services/kubernetes-service";
    } else if (technology == "") {

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
document.getElementById("id-collapsibleSectionArch").innerHTML = htmlArchitectureSection;

//<!--Branching Strategy-->
document.getElementById("id-collapsibleSectionBrStrat").innerHTML = htmlBranchingStrategySection;

//<!--Accelerator Components-->
document.getElementById("id-collapsibleSectionAccelComp").innerHTML = htmlAcceleratorComponents;

//<!--GitHub Aliases and Photos of Contributors-->
GetHtmlListContributorsForSingleAcceleratorPage(linkAccessAcceleratorRepo, function(parsed) {
    document.getElementById("id-accelerator-contributors").innerHTML = parsed;
});