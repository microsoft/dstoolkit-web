---
layout: page
title: Detection Solution Accelerator
permalink: /object-detection/
---

<div class="object-detection">
    <div class="title">Detection Solution Accelerator</div>
    <div class="title-description">Uses computer vision for object or defect detection and includes edge deployment capabilities.</div>
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
                <label class="label" style="font-size:16px;">Detection Solution Accelerator</label>
                <p>
                    <a href="https://github.com/microsoft/dstoolkit-objectdetection-tensorflow-azureml" target="_blank">https://github.com/microsoft/dstoolkit-objectdetection-tensorflow-azureml</a>
                </p>   
            </div>
        </div>
        <div style="width:50%;">
            <div class="category">Industries</div>
            <ul  style="margin-top: 30px;">
                <li>Manufacturing</li>
                <li>Retail</li>
                <li>Health</li>
                <li>Aviation</li>
            </ul>  
        </div>
    </div>
    <div class="category">Use-case</div>
    Computer Vision object detection use-cases, with cloud or edge model deployment requirements.
    <ul style="margin-top: 30px;">
        <li>Quality control</li>
        <li>Defect detection</li>
        <li>Object detection</li>
    </ul>
    <div class="category" style="font-size:24px;">Accelerator description</div>
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
    <div style="width:100%; display: flex;">
        <div style="width:50%;">
            <div class="category">Related Accelerators</div>
            <div class="toolkit-checkbox" style="width:100%; margin-top: 30px;">
                <label style="font-size:16px;">
                    <a href="/ml-ops/" target="_blank">ML Ops solution accelerator</a>
                </label>
            </div>
        </div>
    </div>
    <div class="category" style="font-size:24px;">Technologies</div>
    <ul style="margin-top: 30px;">
        <li>Azure Machine Learning</li>
        <li>Azure DevOps</li>
        <li>Azure Key Vault</li>
        <li>Azure Compute Instance</li>
        <li>Azure Compute Cluster</li>
        <li>Azure Container Instance</li>
        <li>Azure Kubernetes Services</li>
        <li>TensorFlow</li>
    </ul>
    <div style="margin-top:50px;"> 
        <div class="accelerator-acordeon">
            Architecture
            <i class="material-icons" style="margin-bottom:0px; cursor: pointer;">add_circle_outline</i>
        </div>
        <img src="/images/object-detection/Architecture.png" alt="architecture">
        <div class="accelerator-acordeon">
            Branching Strategy
            <i class="material-icons" style="margin-bottom:0px; cursor: pointer;">add_circle_outline</i>
        </div>
        <img src="/images/object-detection/Branching-Strategy.png" alt="Branching Strategy">
        <div class="accelerator-acordeon">
            Accelerator components
            <i class="material-icons" style="margin-bottom:0px; cursor: pointer;">add_circle_outline</i>
        </div>
        <img src="/images/object-detection/Code-blueprint.png" alt="Code blueprint">
    </div>
    <div class="category" style="font-size:24px;">Contributors</div>
    <div class="accelerator-contributors">
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image"> 
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">mish</p>
            </div>
        </div>
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image"> 
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">frst</p>
            </div>
        </div>
    </div>
</div>
