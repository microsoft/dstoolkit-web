---
layout: page
title: Conversational AI Advanced Pre-processing Service
permalink: /conversational-AI/
---

<div class="conversational-AI">
    <div class="title-photo">
          <img src="/images/conversational-ai/M365CO19_SMB_iPhone_245.jpg" alt="logo" height="300" style="width:100%;">
    </div>
    <div class="title">Conversational AI Advanced Pre-processing Service</div>
    <div class="paragraph">Collection of modules to help with validation, identification and authentication processes</div>
    <div class="category">Prerequisites</div>
    <div class="prerequisites">
        <div class="prerequisites-card">Access to an Azure subscription</div>
        <div class="prerequisites-card">Access to an Azure DevOps subscription</div>
        <div class="prerequisites-card">Service Principal Account</div>
    </div>
    <div style="width:100%; display: flex;">
        <div style="width:50%;">
            <div class="category">Access the Accelerator</div>            
            <div class="toolkit-checkbox" style="width:100%; margin-top: 30px;">
                <label class="label" style="font-size:16px;">Conversational AI Advanced Pre-processing Service</label>
                <p>
                    <a href="https://github.com/microsoft/cai-advanced-processing-service" target="_blank">https://github.com/microsoft/cai-advanced-processing-service</a>
                </p>   
            </div>
        </div>
        <div style="width:50%;">
            <div class="category">Industries</div>
            <ul  style="margin-top: 30px;">
                <li>Horizontal solution that addresses cross-industry needs.</li>
            </ul>  
        </div>
    </div>
    <div class="category">Use-case</div>
    <ul style="margin-top: 30px;">
        <li>Validation - entity extraction and data preparation for backend processing</li>
        <li>Identification - identify a user or asset</li>
        <li>Authentication - authenticate a user or asset</li>
    </ul>
    <div class="category" style="font-size:24px;">Accelerator description</div>
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
    <div class="category" style="font-size:24px;">Technologies</div>
    <ul style="margin-top: 30px;">
        <li>Azure Machine Learning</li>
        <li>Azure DevOps</li>
        <li>Azure Key Vault</li>
        <li>Azure Compute Instance</li>
        <li>Azure Compute Cluster</li>
        <li>Azure Container Instance</li>
        <li>Azure Kubernetes Services</li>
    </ul>
    <div style="margin-top:50px;"> 
        <div class="accelerator-acordeon">
            Architecture
            <i class="material-icons" style="margin-bottom:0px; cursor: pointer;">add_circle_outline</i>
        </div>
        <img src="/images/conversational-AI/High-level-Architecture.png" alt="High-level Architecture">
        <div class="accelerator-acordeon">
            Accelerator components
            <i class="material-icons" style="margin-bottom:0px; cursor: pointer;">add_circle_outline</i>
        </div>
        <img src="/images/conversational-AI/Technical-components-of-the-accelerator.png" alt="Technical components of the accelerator">
    </div>
    <div class="category" style="font-size:24px;">Contributors</div>
    <div class="accelerator-contributors">
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image"> 
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">jago</p>
            </div>
        </div>
    </div>
</div>
