

//for use in Contributors page
//Create method to get contributors from list of repos
//const cars = ["Saab", "Volvo", "BMW"];
//has for each loop to iterate thorugh list of repos
//for i in range(len(items)):





//create method just to capture the api callling for one git repo
//that returns the list of contributors
//for use in Single Accelerator page
//create a method 
//this script should retrieve the github link(s) to the specific git repo under the current page's "Access the Accelerator" section
//and then calls get list of contributors
//returns list of contribtuors
// Call function passing in 'facebook' as GitHub username
//requestUserRepos('facebook');
function GetHtmlListContributorsForSingleAcceleratorPage(repoLink, callback)  {

    
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
    
        var stringhtmltest = ``;
        // Parse API data into JSON
        const data = JSON.parse(this.response);        
        
        // Log the response
        console.log(data);
        
        // Loop over each object in data array
        for (let i in data) {
            var githubAlias = data[i].login;
        
            //add to list of contributors, excluding bot accounts
            if (githubAlias != "dependabot[bot]" && githubAlias != 'microsoft-github-operations[bot]' && githubAlias != 'microsoftopensource')
            {
                var contributorAvatarURL = data[i].avatar_url;

                stringhtmltest +=
                    `<div class="accelerator-contributor">
                        <div class="accelerator-contributor-image"> 
                            <img src="${contributorAvatarURL}" alt="${githubAlias} photo" height="100" width="100">
                        </div>
                        <div style="margin-left:10px;">
                            <p class="accelerator-contributor-text">${githubAlias}</p>
                        </div>
                    </div>`;
                
                // Add a separator between each repo
                console.log('=========================');
            }
        }
        console.log(stringhtmltest);
        callback(stringhtmltest);
    }

    // Send the request to the server
    xhr.send();
}