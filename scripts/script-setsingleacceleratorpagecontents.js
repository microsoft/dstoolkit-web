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

// use linkAccessAcceleratorRepo variable to call public github api on this
dictContributors = GetListContributors(linkAccessAcceleratorRepo);
//now tha tyou have contributors list, for each, add to Contribbutors section

const htmlContributors = `to add html ${linkAccessAcceleratorRepo}`;

for (var i=0; i<dictContributors.length; i++) {
    const githubAlias = dictContributors[i].githubAlias;
    const avatarurl = dictContributors[i].avatar_url;
    console.log('githubAlias:', githubAlias);
    console.log('avatar_url:', avatarurl);

    htmlContributors =
        `<div class="accelerator-contributor">
            <div class="accelerator-contributor-image"> 
                <img src="${avatarurl}" alt="${githubAlias} photo" height="100" width="100">
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">${githubAlias}</p>
            </div>
        </div>`;
}

document.getElementById("id-accelerator-contributors").innerHTML = htmlContributors;