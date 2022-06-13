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
//first, get variable with list of prerequisites
//then, use a for each loop to iterate through the list of prerequisites and create a prerequisites card for each



//<!--Access the Accelerator-->
document.getElementById("id-text-access-accelerator").textContent = textPageTitle;
document.getElementById("id-link-access-accelerator").href = linkAccessAcceleratorRepo;
document.getElementById("id-link-access-accelerator").textContent = linkAccessAcceleratorRepo;

//<!--Industries-->

//<!--Use Case-->
//     <!--Accelerator description-->



//     <!--Accelerator guidance (Videos)--> (can be hidden)
//if the boolean for showing this section is false, then don't display the elements for this section
// var element = document.getElementById("myDiv");
// element.style.display = "none";
//else, set the contents


//         <!--Link to Related Accelerator(s)-->
//         <!--Link to Contributing Guide-->
//     <!--Technologies-->
//     <!--Architecture-->
//     <!--Branching Strategy-->
//     <!--Accelerator Components-->


//   <!--GitHub Aliases and Photos of Contributors-->
GetHtmlListContributorsForSingleAcceleratorPage(linkAccessAcceleratorRepo, function(parsed) {
    document.getElementById("id-accelerator-contributors").innerHTML = parsed;
});