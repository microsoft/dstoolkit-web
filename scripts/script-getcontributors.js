//for use in Single Accelerator page (in the script, script-setsingleacceleratorpagecontent.js) to populate the Contributors section with the list of contributors for the passed in git repo
function GetHtmlListContributorsForSingleRepo(repoLink, callback)  {
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    var splitLink = repoLink.split(".com/");
    var repo = splitLink[1];

    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/repos/${repo}/contributors`;

    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);
    
    // When request is received, process using this method
    xhr.onload = function() {
        //Variable to hold the contents of the contributors list in the html format
        var parsedToHtml = ``;

        // Parse API data into JSON
        const data = JSON.parse(this.response);        
        
        parsedToHtml += `<div class="row">`;

        // Loop over each object in data array
        var numLoops = 0;
        for (let i in data) {
            var githubAlias = data[i].login;
        
            //add to list of contributors, excluding bot accounts
            if (githubAlias != "dependabot[bot]" && githubAlias != 'microsoft-github-operations[bot]' && githubAlias != 'microsoftopensource')
            {
                var contributorAvatarURL = data[i].avatar_url;

                //HTML template for a single contributor cell in the Contributors section of a single accelerator page
                // parsedToHtml +=
                //     `<div class="accelerator-contributor">
                //         <div class="accelerator-contributor-image"> 
                //             <img src="${contributorAvatarURL}" alt="${githubAlias} photo" height="100" width="100">
                //         </div>
                //         <div style="margin-left:10px;">
                //             <p class="accelerator-contributor-text">${githubAlias}</p>
                //         </div>
                //     </div>`;

                if (numLoops == 4) { parsedToHtml += `<div class="row">`; }

                parsedToHtml += 
                    `<div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <img src="${contributorAvatarURL}" alt="Photo of contributor ${githubAlias}">
                        <div class="contributor-name">${githubAlias}</div>
                    </div>`;

                if (numLoops == 4) {
                    parsedToHtml += `</div>`;
                    numLoops = 0; //reset counter
                }
                
                // Add a separator between each repo
                console.log('=========================');
            }
        }

        parsedToHtml += `</div>`;

        //send data to callback method
        callback(parsedToHtml);
    }

    // Send the request to the server
    xhr.send();
}

var githubAliasArray = [];

function GetHtmlListContributorsForAllRepos(repo, callback)  {
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/repos/${repo}/contributors`;

    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);
    
    // When request is received, process using this method
    xhr.onload = function() {
        //Variable to hold the contents of the contributors list in the html format
        var parsedToHtml = ``;

        // Parse API data into JSON
        const data = JSON.parse(this.response);        
        
        // Log the response
        //parsedToHtml += `<div class="row">`;

        // Loop over each object in data array
        for (let i in data) {
            var githubAlias = data[i].login;

            if(!githubAliasArray.includes(githubAlias))
            {
                githubAliasArray.push(githubAlias);
                if (githubAlias != "dependabot[bot]" && githubAlias != 'microsoft-github-operations[bot]' && githubAlias != 'microsoftopensource')
                {
                    var contributorAvatarURL = data[i].avatar_url;
    
                    parsedToHtml += 
                        `<div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                            <img src="${contributorAvatarURL}" alt="Photo of contributor ${githubAlias}">
                            <div class="contributor-name">${githubAlias}</div>
                        </div>`;
    
                }
            }
        
        }


        //send data to callback method
        callback(parsedToHtml);
    }

    // Send the request to the server
    xhr.send();
}
