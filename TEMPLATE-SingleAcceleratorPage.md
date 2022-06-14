---
layout: pageAccelerator
title: TEMPLATE Single Accelerator Page
permalink: /TEMPLATE-SingleAcceleratorPage/
---

<!--This .md file is meant to serve as a template for a Single Accelerator Page-->
<!--To use this template, simple make a copy of this file, rename it, and then update content above (title and permalink) and below (see TODO placeholders) -->
<!--See existing Single Accelerator Pages .md files for reference-->

<!-- <script src="/scripts/script-navbar.js" type="text/javascript"></script> TODO contributors script -->

<!-- How to  add scripts to update and set the content for each section, or hide a section that doesn't apply to a particular page! -->


<!--Example scripts below,:-->


<script>
    //Variables for this specific single accelerator page, to centralize re-used variables
    //These are variables that must be declared and overridden in the specific single accelerator page

    const textPageTitle = "TODO: Page Title";
    const htmlPageDescription = `<b>TODO:</b> Update the page description (html)`;
    const srcHeaderImage = "/images/TEMPLATE-SingleAcceleratorPage/demo-title-photo.jpg";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/dstoolkit-mlops-base";
    const listPrereqs = ["prerequisite1", "prerequisite2", "prerequisite3", "prerequisite4", "prerequisite5", "prerequisite6"];
    const listIndustries = ["industry1", "industry2", "industry3", "industry4", "industry5", "industry6"];
    const listUseCases = ["usecases1", "usecases2", "usecases3", "usecases4", "usecases5", "usecases6"];
    const htmlAcceleratorDescription = `<b>TODO:</b> Update the accelerator description (html)`;

    const nameRelatedAccelerator = "TODO: Name of Related Accelerator";
    const linkRelatedAccelerator = "/classification-accelerator/";
    
    const linkContributingGuide = "https://github.com/microsoft/dstoolkit-mlops-base/blob/main/CONTRIBUTING.md";

    const listTechnologies = ["technology1",
        "technology2",
        "technology3",
        "technology4",
        "technology5",
        "technology6"];

    const htmlArchitectureSection = `TODO: Update the Architecture section (html)`;
    const htmlBranchingStrategySection = `TODO: Update the Branching Strategy section (html)`;
    const htmlAcceleratorComponents = `TODO: Update the Accelerator Components section (html)`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = false;
    const toHide_ArchitectureSection = false;
    const toHide_BranchingStrategySection = false;
    const toHide_AcceleratorComponents = false;
</script>

<script src="/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>