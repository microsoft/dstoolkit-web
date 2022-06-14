---
layout: pageAccelerator
title: ML Ops Solution Delivery Accelerator
permalink: /ml-ops/
---


<script>
    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "ML Ops Solution Delivery Accelerator";
    const htmlPageDescription = "Configurable CI/CD pipelines, AML pipelines, and compute resources for ML Ops";
    const srcHeaderImage = "/images/ml-ops/MDC19_cooling_002.jpg";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/dstoolkit-mlops-base";
    const listPrereqs = ["Access to an Azure Subscription",
        "Access to an Azure DevOps Subscription",
        "Service Principal Account"];
    const listIndustries = ["Horizontal solution that addresses cross-industry needs"];
    const listUseCases = ["Continuous integration and deployment of Machine Learning models. (CI/CD)",
        "ML Ops to help data science teams collaborate accross the organization.",
        "AI Solution Centre or Centre of Excellence."];
    const htmlAcceleratorDescription = 
            `<p style="margin-top: 30px; text-decoration: none;">The ML Ops solution accelerator provides a deployable 
                solution that can be used by development and data science teams to:</p>
            <ul style="margin-top: 30px;">
                <li> Develop & train model(s) with reusable ML pipelines</li>
                <li> Package model(s) using containers to capture runtime dependencies for inference</li>
                <li> Validate model behavior – functionally, in terms of responsiveness, in terms of regulatory compliance</li>
                <li> Deploy model(s) - to cloud & edge, for use in real-time / streaming / batch processing</li>
                <li> Monitor model behavior & business value, know when to replace / deprecate a stale model</li>
            </ul>
            <img src="/images/ml-ops/ML-Ops-process-description.png" alt="ML Ops process description image">`;

    const listLinksRelatedAccelerators = ["/classification-accelerator/"];

    const linkContributingGuide = "https://github.com/microsoft/dstoolkit-mlops-base/blob/main/CONTRIBUTING.md";

    const listTechnologies = ["Azure Machine Learning",
        "Azure DevOps",
        "Azure Key Vault",
        "Azure Compute Instance",
        "Azure Compute Cluster",
        "Azure Container Instance",
        "Azure Kubernetes Services"];

    const htmlArchitectureSection = `<img src="/images/ml-ops/Architecture.png" alt="Architecture image">`;
    const htmlBranchingStrategySection = `<img src="/images/ml-ops/Branching-Strategy.png" alt="Branching Strategy image">`;
    const htmlAcceleratorComponents = `<img src="/images/ml-ops/Code-blueprint.png" alt="Code blueprint image">`;
    const htmlKeyAcceleratorFiles = `n/a (should be hidden)`;
    const htmlLiveDemoSection = `n/a (should be hidden)`;
    const htmlRepoStructureSection = `n/a (should be hidden)`;
    
    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = true;
    const toHide_RelatedAccelerators = false;
    const toHide_ContributingGuide = false;
    const toHide_ArchitectureSection = false;
    const toHide_BranchingStrategySection = false;
    const toHide_AcceleratorComponents = false;
    const toHide_KeyAcceleratorFiles = true;
    const toHide_LiveDemoSection = true;
    const toHide_RepoStructureSection = true;
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
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tdFetGQuBls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</li>
                    <li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/itfpdwh6x0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    </div>
</div> -->