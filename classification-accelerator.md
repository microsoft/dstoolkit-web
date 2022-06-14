---
layout: pageAccelerator
title: Binary Classification Accelerator
permalink: /classification-accelerator/
---

<script>
    //TODO: These are variables that must be declared and overridden in the specific single accelerator page

    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "Binary Classification Accelerator";
    const htmlPageDescription = `Binary classification, with parameter based auto algorithm selection`;
    const srcHeaderImage = "/images/classification-accelerator/PCA22_OceanPlasticMouse_Feature_06_RGB.jpg";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/dstoolkit-classification-solution-accelerator";
    const listPrereqs = ["Access to an Azure Subscription",
        "Access to an Azure DevOps Subscription",
        "Service Principal Account"];
    const listIndustries = ["Retail",
        "Consumer Goods",
        "FMCG",
        "Manufacturing",
        "Financial Services"];
    const listUseCases = ["Any yes / no question requirement including:",
        "defaulting on a loan,",
        "clicking on an ad,",
        "terminating a subscription,",
        "quality control of products, processes or services,",
        "medical testing"];
    const htmlAcceleratorDescription = 
        `<p style="margin-top: 30px; text-decoration: none;">
            Binary classification models are perhaps the most common use-case in predictive analytics. The reason is that many key client actions across a wide range of industries are binary in nature, such as: 
            <ul>
                <li>defaulting on a loan, </li>
                <li>clicking on an ad, </li>
                <li>terminating a subscription, </li>
                <li>quality control of products, processes or services, </li>
                <li>medical testing, </li>
                <li>and so on. </li>
            </ul>
            Because of this broad commonality, this accelerator will prove optimal in many data science-based engagements, streamlining time to value.
            <br/><br/>
            Details of the accelerator:
            <ul>
                <li>Leverages the <a href="/ml-ops/" target="_blank">ML Ops accelerator</a> to provide a configurable and re-usable solution accelerator for binary classification cases. </li>
                <li>Auto selects the best classification algorithm for the dataset based on user defined criteria (parameters). </li>
                <li>Uses Azure ML and Azure Dev Ops </li>
            </ul>
        </p>`;
    
    const listAcceleratorGuidanceVideoURLs = ["https://youtube.com/embed/stHa_ZvSapk"];

    const listLinksRelatedAccelerators = ["/ml-ops/"];
    
    const linkContributingGuide = "n/a";

    const listTechnologies = ["Azure Machine Learning",
        "Azure DevOps",
        "Azure Key Vault",
        "Azure Compute Instance",
        "Azure Compute Cluster",
        "Azure Container Instance",
        "Azure Kubernetes Services"];

    const htmlArchitectureSection = `<img src="/images/classification-accelerator/Solution-Accelerator-Architecture.png" alt="Solution Accelerator Architecture">`;
    const htmlBranchingStrategySection = `<img src="/images/classification-accelerator/Branching-Strategy.png" alt="Branching Strategy">`;
    const htmlAcceleratorComponents = `<img src="/images/classification-accelerator/Code-Blueprint.png" alt="Code Blueprint">`;
    const htmlKeyAcceleratorFiles = 
        `<ul>
            <li><a href="https://github.com/microsoft/dstoolkit-classification-solution-accelerator/blob/main/configuration/configuration-aml.variables.yml" target="_blank">Configuration-aml.variables.yml</a></li>
            <li><a href="https://github.com/microsoft/dstoolkit-classification-solution-accelerator/blob/main/src/train_1_classifier.py" target="_blank">src/train_1_classifier.py</a></li>
            <li><a href="https://github.com/microsoft/dstoolkit-classification-solution-accelerator/blob/main/src/train_n_classifier.py" target="_blank">src/train_n_classifier.py</a></li>
        </ul>`;
    const htmlLiveDemoSection = `n/a`;
    const htmlRepoStructureSection = `n/a`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = false;
    const toHide_RelatedAccelerators = false;
    const toHide_ContributingGuide = true;
    const toHide_ArchitectureSection = false;
    const toHide_BranchingStrategySection = false;
    const toHide_AcceleratorComponents = false;
    const toHide_KeyAcceleratorFiles = false;
    const toHide_LiveDemoSection = true;
    const toHide_RepoStructureSection = true;
</script>

<script src="/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>