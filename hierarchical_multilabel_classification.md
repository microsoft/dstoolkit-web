---
layout: pageAccelerator
title: Hierarchical Multilabel Classification
permalink: /hierarchical_multilabel_classification/
---

<!--This .md file is meant to serve as a demo for a Single Accelerator Page-->
<!--To create a new Single Accelerator page, simple make a copy of this file, rename it, and then update content above (title and permalink) and below (see TODO placeholders) -->
<!--See existing Single Accelerator Pages .md files for reference-->

<script>
    //TODO: These are variables that must be declared and overridden in the specific single accelerator page

    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "Hierarchical Multilabel Classification";
    const htmlPageDescription = `The Hierarchical Multi-label classification accelerator can be applied to a variety of use-cases where classes are hierarchically structured, and object can be assigned to multiple paths of the class hierarchy at the same time. Applications include text classification, image annotation, and in bioinformatics problems such as a protein function prediction.`;
    const srcHeaderImage = "{{site.baseurl}}/images/hierarchical_multilabel_classification/hierarchical_multilabel_classification.jpg";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/dstoolkit-hierarchical-multilabel-classification";
    const listPrereqs = ["Python", "Jupyter Notebooks"];
    const listIndustries = ["Finance Operations", "Oil and Gas", "Healthcare", "Manufacturing"];
    const listUseCases = ["Root-cause analysis for finance budget deviations or forecast deviations", "Analyses of non-productive drilling platforms", "Multiclass, multilabel, text classification", "Image annotation", "Bio-informatics"];
    const htmlAcceleratorDescription = `<p style="margin-top: 30px; text-decoration: none;">
    <h2>Hierarchical Multi-Level Classification</h2>

The Hierarchical Multi-label classification accelerator can be applied to a variety of use-cases where classes are hierarchically structured, and object can be assigned to multiple paths of the class hierarchy at the same time. Applications include text classification, image annotation, and in bioinformatics problems such as a protein function prediction. <br>

<br>Text classification problems can be described as, when given a text, classify the text into one of the labels for example:

<li>Website articles - > Sports, Politics, etc.</li>
<li>Clauses in a contract - > Termination, Indemnity, etc.</li>
<li>Sentiment analysis etc.</li>

<br>When more than one label is to be provided, it becomes multi-label classification. A single label, multi-class has one label, but more than 2 classes. Multi-label classification has multiple labels provided, each could have 2 or more classes.<br>


<br>Example.<br>

<li>Level 1 Sentiment. DS Toolkit. Say Very Good, ..., …., …, …, Very Bad</li>
<li>Level 2. Feature being commented upon. Say, ease of deployment.</li>
<li>Level 3. Specific attribute of the feature commented. Say, Deployment on Azure / GCP / AWS</li>

​​​​<br>​​​Hierarchical multilabel classification can therefore be applied to:<br>

<li>Determine root cause analysis of budget variations in Finance.</li>
<li>Determining the most profitable product configurations for industrial manufacturing equipment.</li>
<li>Classification of subject matter</li>
<li>Product classification based on reviews.</li>
<li>Offensiveness classification of tweets.</li>
<li>Classification of legislation into themes</li>
<li>Classification of geo-chemical layers of a region.</li>

        </p>`;

    // const listAcceleratorGuidanceVideoURLs = ["https://www.youtube.com/embed/fEvM-OUbaKs", "https://www.youtube.com/embed/fEvM-OUbaKs", "https://www.youtube.com/embed/fEvM-OUbaKs"];

    const listLinksRelatedAccelerators = ["/ml-ops/"];
    
    const linkContributingGuide = "TODO";

    const listTechnologies = ["Azure Machine Learning",
        "Synapse",
        "Azure Databricks"];

    const htmlArchitectureSection = `TODO`;
    const htmlBranchingStrategySection = `TODO`;
    const htmlAcceleratorComponents = `Datasets: <br> Amazon Reviews<br> Bushveld<Br> DBPedia<br>`;
    const htmlKeyAcceleratorFiles = `<a href="{{site.baseurl}}/images/hierarchical_multilabel_classification/HMLC_accelerator_overview.pdf" target="_blank">HMLC Accelerator Overview</a>
    <br><a href="{{site.baseurl}}/images/hierarchical_multilabel_classification/KOC_case_study.pdf" target="_blank">KOC Case Study</a>`;
    const htmlLiveDemoSection = `TODO`;
    const htmlRepoStructureSection = `TODO`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = true;
    const toHide_RelatedAccelerators = false;
    const toHide_ContributingGuide = true;
    const toHide_ArchitectureSection = true;
    const toHide_BranchingStrategySection = true;
    const toHide_AcceleratorComponents = false;
    const toHide_KeyAcceleratorFiles = false;
    const toHide_LiveDemoSection = true;
    const toHide_RepoStructureSection = true;
</script>

<script src="{{site.baseurl}}/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>