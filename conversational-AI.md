---
layout: page
title: Conversational AI Advanced Pre-processing Service
permalink: /conversational-AI/
---

<div>
    <div class="title-photo">
          <img src="/images/conversational-AI/M365CO19_SMB_iPhone_245.jpg" alt="logo" height="300" style="width:100%;">
    </div>
    <div class="title">Conversational AI Advanced Pre-processing Service</div>
    <div class="paragraph">Collection of modules to help with validation, identification and authentication processes</div>
    <div class="category">Prerequisites</div>
    <div class="prerequisites">
        <div class="prerequisites-card">
            <span class="prerequisites-text">Access to an Azure subscription</span>
    </div>
        <div class="prerequisites-card">
            <span class="prerequisites-text">Access to an Azure DevOps subscription</span></div>
        <div class="prerequisites-card">
            <span class="prerequisites-text">Service Principal Account</span></div>
    </div>
    <div class="toolkit-cards">
        <div class="toolkit-row">
            <div class="toolkit-card left">
                <img src="/images/CLO18_programmingCode_001.jpg" alt="logo" height="170" style="width:100%;">
                <span class="toolkit-card-title">Access the Accelerator</span>
                <span class="toolkit-card-content">
                    Conversational AI Advanced Pre-processing Service <a href="https://github.com/microsoft/cai-advanced-processing-service" target="_blank">https://github.com/microsoft/cai-advanced-processing-service</a>
                </span>
            </div>
            <div class="toolkit-card right">
                <img src="/images/MSC19_paddingtonOffice_019.jpg" alt="logo" height="170" style="width:100%;">
                <span class="toolkit-card-title">Industries</span>
                <span class="toolkit-card-content">Horizontal solution that addresses cross-industry needs</span>
            </div>
        </div>
    </div>
    <div class="solution-accelerator-use-case">
        <div style="width: 50%;">
            <span style="font-weight:600; margin-right:50px;">Use Case</span>
            <ul style="margin-top: 30px;">
                <li>Validation - entity extraction and data preparation for backend processing</li>
                <li>Identification - identify a user or asset</li>
                <li>Authentication - authenticate a user or asset</li>
            </ul>
        </div>
    </div>
    <div class="category">Accelerator description</div>
    <div style="display:flex; margin-top: 50px; box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.25);">
        <div class="accelerator-description">
    <p style="margin-top: 30px;">
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
        <table>
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
        </p>
        </div>
    </div>
    <div class="category" style="margin-bottom: 30px;">Technologies</div>
        <div class="technologies">
            <span><a href="https://azure.microsoft.com/services/machine-learning" target="_blank">Azure Machine Learning</a></span>
            <span><a href="https://azure.microsoft.com/services/devops/" target="_blank">Azure DevOps</a></span>
            <span><a href="https://azure.microsoft.com/services/key-vault/" target="_blank">Azure Key Vault</a></span>
            <span><a href="https://azure.microsoft.com/services/#compute" target="_blank">Azure Compute Instance </a></span>
            <span><a href="https://azure.microsoft.com/services/#compute" target="_blank">Azure Compute Cluster </a></span>
            <span><a href="https://azure.microsoft.com/services/container-instances/" target="_blank">Azure Container Instance</a></span>
            <span><a href="https://azure.microsoft.com/services/kubernetes-service/" target="_blank">Azure Kubernetes Services</a></span>
    </div>
    <div class="subtitle borders" style="margin-top:0px">
        <button type="button" class="btn" data-toggle="collapse" data-target="#collapsibleSectionArch">
        <div class="accelerator-buttons">
            <div style="width: 100%; text-align: center;">
                <span class="see-more-text">Architecture</span>
            </div>
            <i class="material-icons" style="margin-bottom:0px; font-size: 42px; border-left: 3px solid white; padding-left: 10px;">add</i>
        </div>
        </button>
        <div id="collapsibleSectionArch" class="collapse">
            <img src="/images/conversational-AI/High-level-Architecture.png" alt="High-level Architecture">
        </div>
        <button type="button" class="btn" data-toggle="collapse" data-target="#collapsibleSectionAccComp">
        <div class="accelerator-buttons">
            <div style="width: 100%; text-align: center;">
                <span class="see-more-text">Accelerator components</span>
            </div>
            <i class="material-icons" style="margin-bottom:0px; font-size: 42px; border-left: 3px solid white; padding-left: 10px;">add</i>
        </div>
        </button>
        <div id="collapsibleSectionAccComp" class="collapse">
            <img src="/images/conversational-AI/Technical-components-of-the-accelerator.png" alt="High-level Architecture">
        </div>
    </div>
    <div class="category">Contributors</div>
    <div class="accelerator-contributors">
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image"> 
                <img src="TODO" alt="contributor photo" height="100" width="100">
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">flpy</p>
            </div>
        </div>
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image">
                <img src="TODO" alt="contributor photo" height="100" width="100">
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">mame</p>
            </div>
        </div>
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image">
                <img src="TODO" alt="contributor photo" height="100" width="100">
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">trng</p>
            </div>
        </div>
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image"> 
                <img src="TODO" alt="contributor photo" height="100" width="100">
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">lina</p>
            </div>
        </div>
    </div>
</div>
