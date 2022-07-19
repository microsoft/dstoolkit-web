---
layout: pageAccelerator
title: Vitastic
permalink: /vitastic/
---

<!--This .md file is meant to serve as a demo for a Single Accelerator Page-->
<!--To create a new Single Accelerator page, simple make a copy of this file, rename it, and then update content above (title and permalink) and below (see TODO placeholders) -->
<!--See existing Single Accelerator Pages .md files for reference-->

<script>
    //TODO: These are variables that must be declared and overridden in the specific single accelerator page

    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "Vitastic";
    const htmlPageDescription = `Quickly build web-interfaces for object detection, segmentation and classification models.`;
    const srcHeaderImage = "{{site.baseurl}}/images/DEMO-SingleAcceleratorPage/demo-title-photo.jpg"; //TODO: create and add new header image
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/dstoolkit-vitastic";
    const listPrereqs = ["Access to an Azure subscription", "Access to an Azure DevOps subscription", "Service Principle"];
    const listIndustries = ["Horizontal solution that address cross-industry needs."];
    const listUseCases = ["Web interface for object detection, classification, semantic segmentation models."];
    const htmlAcceleratorDescription = `<p>Vitastic is a Javascript x Python based solution to quickly build web interface that serves object detection workloads. By leveraging Microsoft's themable React component library FluentUI powered by Python Flask backend, Vitastic allows you to build your own UI to demonstrate pre-trained image classification, object detection, or semantic segmentation models.</p>
    <img src="{{site.baseurl}}/images/vitastic/screencapture.png" alt="Vitastic UI light theme and dark theme image">`;

    const listAcceleratorGuidanceVideoURLs = ["https://www.youtube.com/embed/fEvM-OUbaKs"]; //TODO: add embed link for the video

    const listLinksRelatedAccelerators = ["/object-detection/"];
    
    const linkContributingGuide = "TODO";

    const listTechnologies = ["FuentUI",
        "Flask",
        "Python"];

    const htmlArchitectureSection = `<img src="{{site.baseurl}}/images/vitastic/architecture.png" alt="Architecture image">`;
    const htmlBranchingStrategySection = `TODO`;
    const htmlAcceleratorComponents = `<img src="{{site.baseurl}}/images/vitastic/accelerator_components.png" alt="Architecture image">`;
    const htmlKeyAcceleratorFiles = `TODO`;
    const htmlLiveDemoSection = `TODO`;
    const htmlRepoStructureSection = `TODO`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = false;
    const toHide_RelatedAccelerators = false;
    const toHide_ContributingGuide = true;
    const toHide_ArchitectureSection = false;
    const toHide_BranchingStrategySection = true;
    const toHide_AcceleratorComponents = false;
    const toHide_KeyAcceleratorFiles = true;
    const toHide_LiveDemoSection = true;
    const toHide_RepoStructureSection = true;
</script>

<script src="{{site.baseurl}}/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>