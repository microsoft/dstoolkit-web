---
layout: pageAccelerator
title: ML Ops for Databricks
permalink: /ml-ops-for-databricks/
---

<script>
    //Variables for this specific single accelerator page, to centralize re-used variables
    //These are variables that must be declared and overridden in the specific single accelerator page

    const textPageTitle = "ML Ops for Databricks";
    const htmlPageDescription = `ML Ops support for Databricks`;
    const srcHeaderImage = "/images/ml-ops-for-databricks/CLO20b_Aline_cafe_outside_002.jpg";
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

    const nameRelatedAccelerator = "Forecasting Accelerator";
    const linkRelatedAccelerator = "/forecasting/";
    
    const linkContributingGuide = "https://github.com/microsoft/dstoolkit-mlops-base/blob/main/CONTRIBUTING.md";

    const listTechnologies = ["Azure Databricks",
        "Application Insights",
        "Log analytics workspace for the App Insight",
        "Azure Key Vault",
        "Azure Storage Account"];

    const htmlArchitectureSection = `n/a (should be hidden)`;
    const htmlBranchingStrategySection = `n/a (should be hidden)`;
    const htmlAcceleratorComponents = `n/a (should be hidden)`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = false;
    const toHide_ArchitectureSection = true;
    const toHide_BranchingStrategySection = true;
    const toHide_AcceleratorComponents = true;
</script>

<script src="/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>

<!--TODO: to replace below html with javascript above and inherit from pageAccelerator layout-->
<!-- //pending https://github.com/microsoft/dstoolkit-web/issues/24 - before spending more time - to be confirmed if we will be displaying those videos at all - if not displaying, then perhaps we'll remove this section
<div>
    <div class="category">Accelerator guidance</div>
    <div class="accelerator-guidance-videos">
<div style="height: 100%; text-align: center">
			<div class="csslider infinity" id="slider1">
			<input type="radio" name="slides" checked="checked" id="slides_1"/>
			<input type="radio" name="slides" id="slides_2"/>
				<ul>
                    <li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fsP7xMYOCOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</li>
				</ul>
					<div class="arrows">
						<label for="slides_1"></label>
						<label class="goto-first" for="slides_1"></label>
						<label class="goto-last" for="slides_10"></label>
					</div>
					<div class="navigation"> 
						<div>
							<label for="slides_1"></label>
						</div>
					</div>
			</div>
		</div>
    </div> -->