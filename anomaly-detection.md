---
layout: pageAccelerator
title: Anomaly Detection Solution Accelerator
permalink: /anomaly-detection/
---

<script>
    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "Anomaly Detection Solution Accelerator";
    const htmlPageDescription = `Detect anomalies on very large structured data sets`;
    const srcHeaderImage = "{{site.baseurl}}/images/anomaly-detection/MDC19_tapeTight_002.jpg";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/dstoolkit-anomaly-detection-ijungle";
    const listPrereqs = ["Azure Machine Learning (Ubuntu Linux compute)"];
    const listIndustries = ["IT Security",
        "Tax Authorities / Revenue Services",
        "Financial Departments",
        "Financial Services"];
    const listUseCases = ["Credit Card or Financial Transaction Fraud.",
        "Failure events of a server or machine.",
        "Cyber-attach events from security log file data.",
        "Variations in financial transactions."];
    const htmlAcceleratorDescription = 
        `<p style="margin-top: 30px; text-decoration: none;">
            Anomaly Detection is the technique of identifying rare events or observations which can raise suspicions by being statistically different from the rest of the observations. Such “anomalous” behavior typically translates to some kind of a problem like a
            <ul>
                <li>credit card fraud,</li>
                <li>failing machine in a server,</li>
                <li>a cyber-attack,</li>
                <li>variation in financial transactions,</li>
                <li>and so on. </li>
            </ul>
            Common Anomaly Detection techniques are difficult to implement on very large sets of Data. The Anomaly Detection Accelerator, leverages the iJungle technique from Dr. Ricardo Castro, which solves this challenge, enabling anomaly detection on large sets of data. 
        </p>`;
    
    const listAcceleratorGuidanceVideoURLs = ["n/a"];

    const listLinksRelatedAccelerators = ["/ml-ops/", "/ml-ops-for-databricks/"];

    const linkContributingGuide = "n/a";

    const listTechnologies = ["Azure Machine Learning"];

    const htmlArchitectureSection = `n/a`;
    const htmlBranchingStrategySection = `n/a`;
    const htmlAcceleratorComponents = `<img src="{{site.baseurl}}/images/anomaly-detection/Accelerator-components.png" alt="Accelerator components image">`;
    const htmlKeyAcceleratorFiles = `n/a`;
    const htmlLiveDemoSection = `n/a`;
    const htmlRepoStructureSection = `n/a`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = true;
    const toHide_RelatedAccelerators = false;
    const toHide_ContributingGuide = true;
    const toHide_ArchitectureSection = true;
    const toHide_BranchingStrategySection = true;
    const toHide_AcceleratorComponents = false;
    const toHide_KeyAcceleratorFiles = true;
    const toHide_LiveDemoSection = true;
    const toHide_RepoStructureSection = true;
</script>

<script src="{{site.baseurl}}/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>