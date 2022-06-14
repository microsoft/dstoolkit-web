---
layout: pageAccelerator
title: Forecasting Solution Accelerator
permalink: /forecasting/
---

<script>
    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "Forecasting Solution Accelerator";
    const htmlPageDescription = `Pre-configured engine for demand forecasting, map data into the existing model to generate a forecast`;
    const srcHeaderImage = "/images/forecasting/CLO18_cafeWork_003.jpg";
    const linkAccessAcceleratorRepo = "TBD";
    const listPrereqs = ["Azure Databricks",
        "Power BI"];
    const listIndustries = ["Retail",
        "Consumer Goods",
        "FMCG",
        "Manufacturing",
        "Financial Services"];
    const listUseCases = ["Demand forecasting",
        "Inventory forecasting",
        "Cash-flow forecasting",
        "AR / COGS forecasting"];
    const htmlAcceleratorDescription = 
        `<p style="margin-top: 30px; text-decoration: none;">
            Demand forecasting is a method by which businesses predict customer demand in order to optimize supply planning and management. The perennial challenge of forecasting is that aggregate level forecasts out-perform the accuracy of forecasts that are more fine-grained, e.g. drill down to region, store, sku. Yet, it is the fine-grained forecast that drives effective optimization. Fine-grained forecast accuracy matters.
            <br/><br/>
            The <i>Demand Forecasting solution accelerator</i> provides the core functionality required in a demand forecasting solution and thus gives you the ability to customize, scale, and perform fine-grain forecasts. The ultimate goal of this accelerator is to be extensible, enabling you to customize it to meet your customer requirements and accelerate the customer's speed to value.
        </p>`;

    const listAcceleratorGuidanceVideoURLs = ["https://youtube.com/embed/Y_bdwJ7f6gA", "https://youtube.com/embed/bdsnzp8nftA"];

    const listLinksRelatedAccelerators = ["/ml-ops-for-databricks/"];
    
    const linkContributingGuide = "https://github.com/microsoft/dstoolkit-mlops-base/blob/main/CONTRIBUTING.md";

    const listTechnologies = ["Azure Synapse",
        "Azure Databricks",
        "Azure Data Lake",
        "Common Data Model (CDM)"];

    const htmlArchitectureSection = `<img src="/images/forecasting/Demand-forecasting-accelerator-logical-diagram.png" alt="Demand forecasting accelerator logical diagram">`;
    const htmlBranchingStrategySection = `n/a`;
    const htmlAcceleratorComponents = `<img src="/images/forecasting/Repository-Folder-structure.jfif" alt="Repository Folder structure">`;
    const htmlKeyAcceleratorFiles = `n/a`;
    const htmlLiveDemoSection = `n/a`;
    const htmlRepoStructureSection = `n/a`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = false;
    const toHide_RelatedAccelerators = false;
    const toHide_ContributingGuide = false;
    const toHide_ArchitectureSection = false;
    const toHide_BranchingStrategySection = true;
    const toHide_AcceleratorComponents = false;
    const toHide_KeyAcceleratorFiles = true;
    const toHide_LiveDemoSection = true;
    const toHide_RepoStructureSection = true;
</script>

<script src="/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>