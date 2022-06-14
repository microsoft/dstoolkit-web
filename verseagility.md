---
layout: pageAccelerator
title: Verseagility Solution Accelerator
permalink: /verseagility/
---

<script>
    //TODO: These are variables that must be declared and overridden in the specific single accelerator page

    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "Verseagility Solution Accelerator";
    const htmlPageDescription = `Knowledge mining on unstructured data sets with no data labeling<br/><img src="/images/verseagility/verseagility.png" alt="verseagility">`;
    const srcHeaderImage = "/images/verseagility/MSC18_scenicsLiberia_002.jpg";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/verseagility";
    const listPrereqs = ["Access to an Azure Subscription",
        "Access to an Azure DevOps Subscription",
        "Service Principal Account"];
    const listIndustries = ["Horizontal solution that addresses cross-industry needs."];
    const listUseCases = ["Binary, multi-class & multi-label classification",
        "Named entity recognition",
        "Question answering"];
    const htmlAcceleratorDescription =
        `<p style="margin-top: 30px; text-decoration: none;">
            Verseagility is a Python-based toolkit to ramp up your custom natural language processing (NLP) task, allowing you to bring your own data, use your preferred frameworks and bring models into production. It is a central component of the Microsoft Data Science Toolkit.
            <img src="/images/verseagility/with-vs-without-toolkit.png" alt="with vs without toolkit">
        </p>`;

    const listAcceleratorGuidanceVideoURLs = ["https://www.youtube.com/embed/vwSYCy-NLqU", "https://www.youtube.com/embed/itfpdwh6x0E"];

    const listLinksRelatedAccelerators = ["https://github.com/microsoft/dstoolkit-km-solution-accelerator"];
    
    const linkContributingGuide = "n/a";

    const listTechnologies = ["Azure Machine Learning",
        "Azure DevOps",
        "Azure Key Vault",
        "Docker",
        "Azure Kubernetes Services"];

    const htmlArchitectureSection = `n/a`;
    const htmlBranchingStrategySection = `n/a`;
    const htmlAcceleratorComponents = `n/a`;
    const htmlKeyAcceleratorFiles = `n/a`;
    const htmlLiveDemoSection = `<a href="https://verseagility.azurewebsites.net/" target="_blank">https://verseagility.azurewebsites.net/</a>
        <img src="/images/verseagility/live-demo.png" alt="live demo">`;
    const htmlRepoStructureSection = `<img src="/images/verseagility/Repository-Structure.png" alt="repository structure">`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = false;
    const toHide_RelatedAccelerators = false;
    const toHide_ContributingGuide = true;
    const toHide_ArchitectureSection = true;
    const toHide_BranchingStrategySection = true;
    const toHide_AcceleratorComponents = true;
    const toHide_KeyAcceleratorFiles = true;
    const toHide_LiveDemoSection = false;
    const toHide_RepoStructureSection = false;
</script>

<script src="/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>