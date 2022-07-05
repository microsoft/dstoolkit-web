---
layout: pageAccelerator
title: Knowledge Mining
permalink: /knowledgemining/
---

<!--This .md file is meant to serve as a demo for a Single Accelerator Page-->
<!--To create a new Single Accelerator page, simple make a copy of this file, rename it, and then update content above (title and permalink) and below (see TODO placeholders) -->
<!--See existing Single Accelerator Pages .md files for reference-->

<script>
    //TODO: These are variables that must be declared and overridden in the specific single accelerator page

    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "Data Science Toolkit - Knowledge Mining Solution Accelerator";
    const htmlPageDescription = `Knowledge mining (KM) is an emerging discipline in artificial intelligence (AI) that uses a combination of intelligent services to quickly learn from vast amounts of information. It allows organizations to deeply understand and easily explore information, uncover hidden insights, and find relationships and patterns at scale.`;
    const srcHeaderImage = "/images/knowledge-mining/Banner.png";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/dstoolkit-km-solution-accelerator";
    const listPrereqs = ["Access to an Azure subscription / Resource Group", "Azure Functions Core tools v4.x", "AZ CLI", "PowerShell Core 7", ".NET Core 6.0"];
    const listIndustries = ["Automotive, Mobility & Transportation", "Energy", "Financial Services", "Healthcare & Lifescience", "Manufacturing & Supply chain", "Media & Communications", "Sustainability", "Public Sector"];
    const listUseCases = ["AI-driven Data & Web Exploration", "Unstructured data insights extraction", "AI-Driven Strategy planning tool", "Enterprise Semantic Search portal", "R&D tool for data discovery, patterns extraction & patents exploration"];
    const htmlAcceleratorDescription = `This KM solution accelerator aims to provide you with a workable end-to-end Knowledge Mining solution composed of : 
- Ingestion
    - Data ingestion from Azure Data Lake
- Enrichment
    - Data enrichment with Azure Applied AI and Cognitive Services
- Exploration
    - Keyword and Semantic search
    - Support for multiples search indexes
    - Content security model (permissions)
    - Modular User Interface 

With this cloud-based accelerator you will get an end-to-end solution with the tools to deploy, extend, operate & monitor it.

In that respect, the solution provides 
- Azure Web App Authentication support 
- High configurability (json)
- Full Extensibility 
- Operations (PowerShell-based)
- Azure Pipelines for CI/CD 
- Deployment framework (manual or through CI/CD)`;

    const listAcceleratorGuidanceVideoURLs = ["N/A"];
 
    const listLinksRelatedAccelerators = ["/anomaly-detection/", "/verseagility/","/object-detection/"];
   
    const linkContributingGuide = "N/A";
 
    const listTechnologies = ["Azure Cognitive Search",
        "Azure Cognitives Services",
        "Azure Functions",
        "Azure Web Applications",
        "Python",
        "Apache Tika"];
 
    const htmlArchitectureSection = `<img src="/images/knowledge-mining/Architecture.png" alt="Solution Accelerator Architecture">`;
    const htmlBranchingStrategySection = `N/A`;
    const htmlAcceleratorComponents = `N/A`;
    const htmlKeyAcceleratorFiles = `N/A`;
    const htmlLiveDemoSection = `https://kmsolacui.azurewebsites.net/`;
    const htmlRepoStructureSection = `<img src="/images/knowledge-mining/Repository.png" alt="Repository Structure">`;
 
    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = true;
    const toHide_RelatedAccelerators = false;
    const toHide_ContributingGuide = false;
    const toHide_ArchitectureSection = false;
    const toHide_BranchingStrategySection = true;
    const toHide_AcceleratorComponents = true;
    const toHide_KeyAcceleratorFiles = true;
    const toHide_LiveDemoSection = false;
    const toHide_RepoStructureSection = true;
</script>

<script src="/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>