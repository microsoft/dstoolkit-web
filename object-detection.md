---
layout: page
title: Detection Solution Accelerator
permalink: /object-detection/
---

<div>
    <div class="title-photo">
          <img src="/images/object-detection/CLO19_azureKinectDK_008.jpg" alt="logo" height="300" style="width:100%;">
    </div>
    <div class="title">Detection Solution Accelerator</div>
    <div class="paragraph">Uses computer vision for object or defect detection and includes edge deployment capabilities</div>
    <div class="category">Prerequisites</div>
    <div class="prerequisites">
        <div class="prerequisites-card">
            <span class="prerequisites-text">Access to an Azure Subscription</span>
        </div>
        <div class="prerequisites-card">
            <span class="prerequisites-text">Access to an Azure DevOps Subscription</span>
        </div>
        <div class="prerequisites-card">
            <span class="prerequisites-text">Service Principal Account</span>
        </div>
    </div>
    <div class="toolkit-cards">
        <div class="toolkit-row">
            <div class="toolkit-card left">
                <img src="/images/CLO18_programmingCode_001.jpg" alt="logo" height="170" style="width:100%;">
                <span class="toolkit-card-title">Access the Accelerator</span>
                <span class="toolkit-card-content">
                    Detection Solution Accelerator <a href="https://github.com/microsoft/dstoolkit-objectdetection-tensorflow-azureml" target="_blank">https://github.com/microsoft/dstoolkit-objectdetection-tensorflow-azureml</a>
                </span>
            </div>
            <div class="toolkit-card right">
                <img src="/images/MSC19_paddingtonOffice_019.jpg" alt="logo" height="170" style="width:100%;">
                <span class="toolkit-card-title">Industries</span>
                <span class="toolkit-card-content" style="text-align: start">
                    <ul>
                        <li>Manufacturing</li>
                        <li>Retail</li>
                        <li>Health</li>
                        <li>Aviation</li>
                    </ul>  
                </span>
            </div>
        </div>
    </div>
     <div class="solution-accelerator-use-case">
        <div style="width: 50%;">
            <span style="font-weight:600; margin-right:50px;">Use Case</span>
            <br><br>
                Computer Vision object detection use-cases, with cloud or edge model deployment requirements.
                <ul style="margin-top: 30px;">
                    <li>Quality control</li>
                    <li>Defect detection</li>
                    <li>Object detection</li>
                </ul>
        </div>
    </div>
    <div class="category">Accelerator description</div>
    <div style="display:flex; margin-top: 50px; box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.25);">
        <img src="/images/CLO20_ConferenceRoom_003.jpg" alt="logo" height="630" width="400">
        <div class="accelerator-description">
          <p style="margin-top: 30px; text-decoration: none;">
        The detection solution accelerator provides a pre-packaged solution to train, deploy and monitor custom object detection models using the TensorFlow object detection framework within Azure ML.
        <br/><br/>
        The aim is to bring State-of-the-art (SOTA) object detection models quickly into production scenarios particularly around the use of defect detection as seen in many quality control scenarios.
        <br/><br/>
        Image Recognition aims to recognize and identify objects in images as well as understanding the content and context. TensorFlow object recognition algorithms classify and identify arbitrary objects within larger images. This is usually used in engineering applications such as social networks for photo tagging. By analyzing thousands of photos of trees for example, the technology can learn to identify a tree in an image it has never seen before. 
        <br/><br/>
        Details of the accelerator:
<ul>
    <li>Leverages the <a href="/ml-ops/" target="_blank">ML Ops accelerator</a> to provide a configurable and re-usable solution accelerator for computer vision detection use-cases.</li>
    <li>Can deploy the computer vision model as a consumable service endpoint in the cloud (Azure). </li>
    <li>Train models using <a href="https://github.com/tensorflow/models/tree/master/research/object_detection" target="_blank">TensorFlow Object Detection API</a> leveraging transfer learning with <a href="https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/tf2_detection_zoo.md" target="_blank">model zoo</a> pre-trained models. </li>
    <li>Uses Azure ML, Azure DevOps and TensorFlow. </li>
</ul>
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
        <span><a href="https://www.tensorflow.org/" target="_blank">TensorFlow</a></span>
    </div>
    <div class="subtitle borders" style="margin-top:0px">
    <!--Architecture-->
    <button type="button" class="btn" data-toggle="collapse" data-target="#collapsibleSectionArch">
        <div class="accelerator-buttons">
            <div style="width: 100%; text-align: center;">
                <span class="see-more-text">Architecture</span>
            </div>
            <i class="material-icons" style="margin-bottom:0px; font-size: 42px; border-left: 3px solid white; padding-left: 10px;">add</i>
        </div>
    </button>
    <div id="collapsibleSectionArch" class="collapse">
        <img src="/images/object-detection/Architecture.png" alt="architecture">
    </div>
    <!--Branching Strategy-->
    <button type="button" class="btn" data-toggle="collapse" data-target="#collapsibleSectionBrStrat">
        <div class="accelerator-buttons">
            <div style="width: 100%; text-align: center;">
                <span class="see-more-text">Branching Strategy</span>
            </div>
            <i class="material-icons" style="margin-bottom:0px; font-size: 42px; border-left: 3px solid white; padding-left: 10px;">add</i>
        </div>
    </button>
    <div id="collapsibleSectionBrStrat" class="collapse">
        <img src="/images/object-detection/Branching-Strategy.png" alt="Branching Strategy">
    </div>
    <!--Accelerator Components-->
    <button type="button" class="btn" data-toggle="collapse" data-target="#collapsibleSectionAccelComp">
        <div class="accelerator-buttons">
            <div style="width: 100%; text-align: center;">
                <span class="see-more-text">Accelerator Components</span>
            </div>
            <i class="material-icons" style="margin-bottom:0px; font-size: 42px; border-left: 3px solid white; padding-left: 10px;">add</i>
        </div>
    </button>
    <div id="collapsibleSectionAccelComp" class="collapse">
        <img src="/images/object-detection/Code-blueprint.png" alt="Code blueprint">
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
