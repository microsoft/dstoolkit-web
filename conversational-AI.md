---
layout: pageAccelerator
title: Conversational AI Advanced Pre-processing Service
permalink: /conversational-AI/
---

<script>
    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "Conversational AI Advanced Pre-processing Service";
    const htmlPageDescription = `Collection of modules to help with validation, identification and authentication processes`;
    const srcHeaderImage = "{{site.baseurl}}/images/conversational-AI/M365CO19_SMB_iPhone_245.jpg";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/cai-advanced-processing-service";
    const listPrereqs = ["Access to an Azure subscription",
        "Access to an Azure DevOps subscription",
        "Service Principal Account"];
    const listIndustries = ["Horizontal solution that addresses cross-industry needs"];
    const listUseCases = ["Validation - entity extraction and data preparation for backend processing",
        "Identification - identify a user or asset",
        "Authentication - authenticate a user or asset"];
    const htmlAcceleratorDescription = 
        `<p style="margin-top: 30px;">
            The Conversational AI - Advanced Processing Service consists of a series of APIs the simplify common validation, identification and authentication tasks when implementing conversational AI solutions. 
            <h1>Why this is Important</h1>
            Among the key activities in conversational AI interactions are validation, identification and authentication of the user.  By creating an accelerator, we not only drive speed in delivery, but we also ensure consistent processing approach to these important activities.
            <br/><br/>
            <h1>Details of the Accelerator</h1>        
            This solution accelerator is designed for use with intelligent applications with text-and speech input, such as chat bots or voice bots.
            <ul>
                <li>The accelerator provides a modular and extensible pre/post processing service, </li>
                <li>Enables greater flexibility for user input options in conversational scenarios </li>
                <li>Enables extended, context-based understanding of user input </li>
                <li>Uses a channel-based approach where appropriate </li>
                <li>Provides process / UX flow best practices for common scenarios </li>
            </ul>
            <h1><u>Validation, Identification and Authentication – Definitions and Examples:</u></h1>
            <div class="table-responsive">
                <table class="table">
                    <tr>
                        <th></th>
                        <th>Validation</th>
                        <th>Identification</th>
                        <th>Authentication</th>
                    </tr>
                    <tr>
                        <td>Definition</td>
                        <td>Entity extraction + data preparation for backend processing</td>
                        <td>Identify a user or asset</td>
                        <td>Authenticate a user or asset</td>
                    </tr>
                    <tr>
                        <td>Example</td>
                        <td>
                            - License plate format is valid 
                            <br/>
                            - Customer number format is valid
                        </td>
                        <td>
                            - License plate is known in backend system
                            <br/>
                            - Customer number exists in customer database
                        </td>
                        <td>- Combination of validated entities from user input which are verified with authentication database</td>
                    </tr>
                    <tr>
                        <td>Technological approaches</td>
                        <td>- Via pre/post processing functions based on entities (speech + text input)</td>
                        <td>- Via pre/post processing functions based on entities (speech + text input)</td>
                        <td>
                            - Via Authentication processing functions based on entities (speech input)
                            <br/>
                            - Via Oauth/Identity Provider validated login (e.g. AAD, etc.)
                        </td>
                    </tr>
                </table>
            </div>            
        </p>`;
    
    const listAcceleratorGuidanceVideoURLs = ["n/a"];

    const listLinksRelatedAccelerators = ["n/a"];
    
    const linkContributingGuide = "n/a";

    const listTechnologies = ["Azure Machine Learning",
        "Azure DevOps",
        "Key Vault",
        "Azure Compute Instance",
        "Azure Compute Cluster",
        "Azure Container Instance",
        "Azure Kubernetes Services"];

    const htmlArchitectureSection = `<img src="{{site.baseurl}}/images/conversational-AI/High-level-Architecture.png" alt="High-level Architecture">`;
    const htmlBranchingStrategySection = `n/a`;
    const htmlAcceleratorComponents = `<img src="{{site.baseurl}}/images/conversational-AI/Technical-components-of-the-accelerator.png" alt="High-level Architecture">`;
    const htmlKeyAcceleratorFiles = `n/a`;
    const htmlLiveDemoSection = `n/a`;
    const htmlRepoStructureSection = `n/a`;
    
    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = true;
    const toHide_RelatedAccelerators = true;
    const toHide_ContributingGuide = true;
    const toHide_ArchitectureSection = false;
    const toHide_BranchingStrategySection = true;
    const toHide_AcceleratorComponents = false;
    const toHide_KeyAcceleratorFiles = true;
    const toHide_LiveDemoSection = true;
    const toHide_RepoStructureSection = true;
</script>

<script src="{{site.baseurl}}/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>