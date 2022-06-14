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

    const listLinksRelatedAccelerators = ["/ml-ops-for-databricks/"];
    
    const linkContributingGuide = "https://github.com/microsoft/dstoolkit-mlops-base/blob/main/CONTRIBUTING.md";

    const listTechnologies = ["Azure Synapse",
        "Azure Databricks",
        "Azure Data Lake",
        "Common Data Model (CDM)"];

    const htmlArchitectureSection = `<img src="/images/forecasting/Demand-forecasting-accelerator-logical-diagram.png" alt="Demand forecasting accelerator logical diagram">`;
    const htmlBranchingStrategySection = `n/a (should be hidden)`;
    const htmlAcceleratorComponents = `<img src="/images/forecasting/Repository-Folder-structure.jfif" alt="Repository Folder structure">`;
    const htmlKeyAcceleratorFiles = `n/a (should be hidden)`;
    const htmlLiveDemoSection = `n/a (should be hidden)`;
    const htmlRepoStructureSection = `n/a (should be hidden)`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = true;
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

<!--TODO: to replace below html with javascript above and inherit from pageAccelerator layout-->
<!-- //pending https://github.com/microsoft/dstoolkit-web/issues/24 - before spending more time - to be confirmed if we will be displaying those videos at all - if not displaying, then perhaps we'll remove this section
<div>
    <div class="accelerator-guidance-videos">
<div style="height: 100%; text-align: center">
			<div class="csslider infinity" id="slider1">
			<input type="radio" name="slides" checked="checked" id="slides_1"/>
			<input type="radio" name="slides" id="slides_2"/>
				<ul>
                    <li>
                        <iframe width="560" height="315" src="https://youtube.com/embed/Y_bdwJ7f6gA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</li>
                    <li>
                        <iframe width="560" height="315" src="https://youtube.com/embed/bdsnzp8nftA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>
				</ul>
					<div class="arrows">
						<label for="slides_1"></label>
						<label for="slides_2"></label>
						<label class="goto-first" for="slides_1"></label>
						<label class="goto-last" for="slides_10"></label>
					</div>
					<div class="navigation"> 
						<div>
							<label for="slides_1"></label>
							<label for="slides_2"></label>
						</div>
					</div>
			</div>
		</div>
    </div> -->