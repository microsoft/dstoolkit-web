---
layout: pageAccelerator
title: Detection Solution Accelerator
permalink: /object-detection/
---

<script>
    //TODO: These are variables that must be declared and overridden in the specific single accelerator page

    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "Detection Solution Accelerator";
    const htmlPageDescription = `Uses computer vision for object or defect detection and includes edge deployment capabilities`;
    const srcHeaderImage = "{{site.baseurl}}/images/object-detection/CLO19_azureKinectDK_008.jpg";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/dstoolkit-objectdetection-tensorflow-azureml";
    const listPrereqs = ["Access to an Azure Subscription",
        "Access to an Azure DevOps Subscription",
        "Service Principal Account"];
    const listIndustries = ["Manufacturing",
        "Retail",
        "Health",
        "Aviation"];
    const listUseCases = ["Computer Vision object detection use-cases, with cloud or edge model deployment requirements:",
        "Quality control",
        "Defect detection",
        "Object detection"];
    const htmlAcceleratorDescription = 
        `<p style="margin-top: 30px; text-decoration: none;">
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
        "Azure Kubernetes Services",
        "TensorFlow"];

    const htmlArchitectureSection = `<img src="{{site.baseurl}}/images/object-detection/Architecture.png" alt="architecture">`;
    const htmlBranchingStrategySection = `<img src="{{site.baseurl}}/images/object-detection/Branching-Strategy.png" alt="Branching Strategy">`;
    const htmlAcceleratorComponents = `<img src="{{site.baseurl}}/images/object-detection/Code-blueprint.png" alt="Code blueprint">`;
    const htmlKeyAcceleratorFiles = `n/a`;
    const htmlLiveDemoSection = `n/a`;
    const htmlRepoStructureSection = `n/a`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = true;
    const toHide_RelatedAccelerators = true;
    const toHide_ContributingGuide = true;
    const toHide_ArchitectureSection = false;
    const toHide_BranchingStrategySection = false;
    const toHide_AcceleratorComponents = false;
    const toHide_KeyAcceleratorFiles = true;
    const toHide_LiveDemoSection = true;
    const toHide_RepoStructureSection = true;
</script>

<script src="{{site.baseurl}}/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>