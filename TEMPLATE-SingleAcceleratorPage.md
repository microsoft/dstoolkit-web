---
layout: pageAccelerator
title: TEMPLATE Single Accelerator Page
permalink: /TEMPLATE-SingleAcceleratorPage/
---

<!--This .md file is meant to serve as a template for a Single Accelerator Page-->
<!--To use this template, simple make a copy of this file, rename it, and then update content above (title and permalink) and below (see TODO placeholders) -->
<!--See existing Single Accelerator Pages .md files for reference-->

<script>
    //TODO: These are variables that must be declared and overridden in the specific single accelerator page

    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "TODO: Page Title";
    const htmlPageDescription = `<b>TODO:</b> Update the page description (html)`;
    const srcHeaderImage = "/images/TEMPLATE-SingleAcceleratorPage/demo-title-photo.jpg";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/dstoolkit-mlops-base";
    const listPrereqs = ["prerequisite1", "prerequisite2", "prerequisite3", "prerequisite4", "prerequisite5", "prerequisite6"];
    const listIndustries = ["industry1", "industry2", "industry3", "industry4", "industry5", "industry6"];
    const listUseCases = ["usecases1", "usecases2", "usecases3", "usecases4", "usecases5", "usecases6"];
    const htmlAcceleratorDescription = `<b>TODO:</b> Update the accelerator description (html)`;

    const listLinksRelatedAccelerators = ["link1", "link2"];
    
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
    const toHide_RelatedAccelerators = false;
    const toHide_ContributingGuide = false;
    const toHide_ArchitectureSection = false;
    const toHide_BranchingStrategySection = false;
    const toHide_AcceleratorComponents = false;
</script>

<script src="/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>