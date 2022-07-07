---
layout: pageAccelerator
title: ML Ops for Databricks
permalink: /ml-ops-for-databricks/
---

<script>
    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "ML Ops for Databricks";
    const htmlPageDescription = `ML Ops support for Databricks`;
    const srcHeaderImage = "{{site.baseurl}}/images/ml-ops-for-databricks/CLO20b_Aline_cafe_outside_002.jpg";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/dstoolkit-ml-ops-for-databricks";
    const listPrereqs = ["Access to an Azure subscription",
        "Docker Desktop Installed",
        "VS Code installed",
        "Service Principal (valid Client ID and secret) which has the contributor permission the subscription"];
    const listIndustries = ["Horizontal solution that addresses cross-industry needs"];
    const listUseCases = ["Enterprise scale data engineering and data science development framework.",
        "ML Ops to help data science teams collaborate accross the organization.",
        "AI Solution Centre or Centre of Excellence."];
    const htmlAcceleratorDescription = 
            `<p style="margin-top: 30px; text-decoration: none;">The ML Ops for Data Bricks solution accelerator provides a deployable solution that can be used by data engineering and data science teams to:</p>
            <ul style="margin-top: 30px;">
                <li>Logging Framework using the <a href="https://github.com/census-instrumentation/opencensus-python/tree/master/contrib/opencensus-ext-azure" target="_blank">Opensensus Azure Monitor Exporters</a></li>
                <li>Support for Databricks development from VS Code IDE using the <a href="https://docs.microsoft.com/en-us/azure/databricks/dev-tools/databricks-connect#visual-studio-code" target="_blank">Databricks Connect</a> feature.</li>
                <li>continuous development with <a href="https://packaging.python.org/tutorials/packaging-projects/" target="_blank">Python Local Packaging</a></li>
                <li>Implementation of the Databricks utilities in VS Code such as dbutils, notebook execution, secret handling.</li>
                <li>Example Model file which uses the framework end to end.</li>
            </ul>
            <img src="/images/ml-ops-for-databricks/ML-Ops-for-Databricks-components.jfif" alt="ML Ops for Databricks components image">`;

    const listAcceleratorGuidanceVideoURLs = ["https://www.youtube.com/embed/fsP7xMYOCOo"];

    const listLinksRelatedAccelerators = ["/forecasting/"];
    
    const linkContributingGuide = "n/a";

    const listTechnologies = ["Azure Databricks",
        "Application Insights",
        "Log analytics workspace for the App Insight",
        "Azure Key Vault",
        "Azure Storage Account"];

    const htmlArchitectureSection = `n/a`;
    const htmlBranchingStrategySection = `n/a`;
    const htmlAcceleratorComponents = `n/a`;
    const htmlKeyAcceleratorFiles = `n/a`;
    const htmlLiveDemoSection = `n/a`;
    const htmlRepoStructureSection = `n/a`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = false;
    const toHide_RelatedAccelerators = false;
    const toHide_ContributingGuide = true;
    const toHide_ArchitectureSection = true;
    const toHide_BranchingStrategySection = true;
    const toHide_AcceleratorComponents = true;
    const toHide_KeyAcceleratorFiles = true;
    const toHide_LiveDemoSection = true;
    const toHide_RepoStructureSection = true;
</script>

<script src="{{site.baseurl}}/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>