---
layout: pageAccelerator
title: Retail Analytics
permalink: /retail-analytics/
---



<script>
    //TODO: These are variables that must be declared and overridden in the specific single accelerator page

    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "Retail Analytics";
    const htmlPageDescription = `Customer Segmentation, Churn and Lifetime Value Prediction`;
    const srcHeaderImage = "{{site.baseurl}}/images/retail-analytics/retail_analytics.png";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/dstoolkit-retail-analytics";
    const listPrereqs = ["Access to an Azure subscription", "Access to an Azure DevOps subscription", "Service Principal Account"];
    const listIndustries = ["Retail", "Consumer Packed Goods (CPG)", "Fast Moving Consumer Goods (FMCG)"];
    const listUseCases = ["Customer Segmentation", "Customer Churn", "Customer Lifetime Value", "Sales Forecast", "A/B Testing"];
    const htmlAcceleratorDescription = `<br> Retail Analytics contain a collection of machine learning use-cases, often requested by customers. <br>
    <br>
    These analytics use-cases can easily be applied to verticals other than retail and marketing. For example, the Churn analytics use-case can be utilized for numerous organizations belonging to any industry vertical. The idea is to present a generic hands-on use-case along with some sample open-sourced datasets so that a developer can understand the different steps that are involved in the machine learning exploration and development of such a use case.`;

    const listAcceleratorGuidanceVideoURLs = ["n/a"];

    const listLinksRelatedAccelerators = ["/ml-ops/"];
    
    const linkContributingGuide = "n/a";

    const listTechnologies = ["Azure Machine Learning",
        "Azure DevOps",
        "Azure Key Vault",
        "Azure Compute Instance",
        "Azure Container Instance",
        "Azure Kubernetes Services"];

    const htmlArchitectureSection = `<img src="{{site.baseurl}}/images/retail-analytics/retail_analytics_architecture.png">`;
    const htmlBranchingStrategySection = `<img src="{{site.baseurl}}/images/retail-analytics/retail_analytics_branching_strategy.png">`;
    const htmlAcceleratorComponents = `<br> <ul style="margin-bottom: 20px;">
        Python Notebooks <br> 
         Sample Data
        </ul>`;
    const htmlKeyAcceleratorFiles = `n/a`;
    const htmlLiveDemoSection = `n/a`;
    const htmlRepoStructureSection = `n/a`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = true;
    const toHide_RelatedAccelerators = false;
    const toHide_ContributingGuide = true;
    const toHide_ArchitectureSection = false;
    const toHide_BranchingStrategySection = false;
    const toHide_AcceleratorComponents = false;
    const toHide_KeyAcceleratorFiles = true;
    const toHide_LiveDemoSection = true;
    const toHide_RepoStructureSection = true;
</script>

<script src="{{site.baseurl}}/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>