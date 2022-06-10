//for use in Single Accelerator page
//create a method 
//this script should retrieve the github link(s) to the specific git repo under the current page's "Access the Accelerator" section
//and then calls get list of contributors
//returns list of contribtuors
// Call function passing in 'facebook' as GitHub username
//requestUserRepos('facebook');

//for use in Contributors page
//Create method to get contributors from list of repos
//const cars = ["Saab", "Volvo", "BMW"];
//has for each loop to iterate thorugh list of repos
//for i in range(len(items)):

//create method just to capture the api callling for one git repo
//that returns the list of contributors
function GetListContributors(repoLink)  {
    //create object dictionary for the contributors
    var contributorsDictionaries = [];

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
    
        // Parse API data into JSON
        const data = JSON.parse(this.response);        
        
        // Log the response
        console.log(data);
        
        // Loop over each object in data array
        for (let i in data) {
            contributorUsername = data[i].login;
        
            //add to list of contributors, excluding bot accounts
            if (contributorUsername != "dependabot[bot]" || username != 'microsoft-github-operations[bot]' || username != 'microsoftopensource')
            {
                contributorAvatarURL = data[i].avatar_url;              

                var contributor = {
                    githubAlias: contributorUsername,
                    avatar_url: contributorAvatarURL                    
                }

                //Add to dictionary
                contributorsDictionaries.push(contributor);

                // Add a separator between each repo
                console.log('=========================')
            }
        }

    }
    
    // Send the request to the server
    xhr.send();

    //return contributors information as array of objects
    return contributorsDictionaries;
}