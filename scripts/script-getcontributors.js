/*
'''
With an API call, retrieves all DSToolkit repos, then for each repo it gets
the contributors, filters out bot accounts and creates 3 json files:
- user_profiles.json: user name and profile image url
- contributors_per_repo.json: repo name and contributors
- unique_contributors.json: contributors
'''

# imports
import json
import requests

# initialise
i = 0
j = 0
dicts = {}
contributors = []
profile = {}

# api request returns repos with topic:dstoolkit
repositories = requests.get(
    "https://api.github.com/search/repositories?q=topic%3Adstoolkit%20in:name+org:microsoft&per_page=100").json()
items = repositories.get("items")

# retrieve contributors for each repository
for i in range(len(items)):
    repo = items[i]['name']
    url = (f"https://api.github.com/repos/microsoft/{repo}/contributors")
    contributor = requests.get(url).json()
    usernames = []
    for j in range(len(contributor)):
        username = contributor[j]['login']
        # remove bot accounts
        if (username == 'dependabot[bot]' or
            username == 'microsoft-github-operations[bot]' or
                username == 'microsoftopensource'):
            continue
        else:
            avatar_url = contributor[j]['avatar_url']
            usernames.append(username)
            contributors.append(username)
            dicts[repo] = usernames
            profile[username] = avatar_url

# create / update json file for contributor per repo
with open('./contributors_per_repo.json', 'w') as fp:
    json.dump(dicts, fp, indent=4)

contributors = list(set(contributors))

# create / update json file for unique list of contributors
with open('./unique_contributors.json', 'w') as fp:
    json.dump(contributors, fp, indent=4)

# create / update json file for unique list of contributors with profile img
with open('./user_profiles.json', 'w') as fp:
    json.dump(profile, fp, indent=4)
*/