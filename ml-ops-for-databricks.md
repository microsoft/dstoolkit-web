---
layout: page
title: ML Ops for Databricks
permalink: /ml-ops-for-databricks/
---

<div>
    <div class="title-photo">
          <img src="/images/ml-ops-for-databricks/CLO20b_Aline_cafe_outside_002.jpg" alt="logo" height="300" style="width:100%;">
    </div>
    <div class="title">ML Ops for Databricks</div>
    <div class="paragraph">ML Ops support for Databricks</div>
    <div class="category">Prerequisites</div>
    <div class="prerequisites">
        <div class="prerequisites-card">
        <span class="prerequisites-text">Access to an Azure subscription</span>
        </div>
        <div class="prerequisites-card">
        <span class="prerequisites-text">Docker Desktop Installed</span>
        </div>
        <div class="prerequisites-card">
        <span class="prerequisites-text">VS Code installed.</span>
        </div>
    </div>
    <div class="prerequisites">
        <div class="prerequisites-card">
            <span class="prerequisites-text">Service Principal (valid Client ID and secret) which has the contributor permission the subscription.</span>
        </div>
    </div>
    <div class="toolkit-cards">
        <div class="toolkit-row">
            <div class="toolkit-card left">
                <img src="/images/CLO18_programmingCode_001.jpg" alt="logo" height="170" style="width:100%;">
                <span class="toolkit-card-title">Access the Accelerator</span>
                <span class="toolkit-card-content">
                    ML Ops Solution Accelerator <a href="https://github.com/microsoft/dstoolkit-ml-ops-for-databricks" target="_blank">https://github.com/microsoft/dstoolkit-ml-ops-for-databricks</a>
                </span>
            </div>
            <div class="toolkit-card right">
                <img src="/images/MSC19_paddingtonOffice_019.jpg" alt="logo" height="170" style="width:100%;">
                <span class="toolkit-card-title">Industries</span>
                <span class="toolkit-card-content">Horizontal solution that addresses cross-industry needs</span>
            </div>
        </div>
    </div>
    <div class="solution-accelerator-use-case">
        <div style="width: 50%;">
            <span style="font-weight:600; margin-right:50px;">Use Case</span>
            <ul style="margin-top: 30px;">
                <li> Enterprise scale data engineering and data science development framework.</li>
                <li> ML Ops to help data science teams collaborate accross the organization.</li>
                <li> AI Solution Centre or Centre of Excellence.</li>
            </ul>
        </div>
    </div>
    <div class="category">Accelerator description</div>
    <div style="display:flex; margin-top: 50px; box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.25);">
        <img src="/images/CLO20_ConferenceRoom_003.jpg" alt="logo" height="570" width="370">
        <div class="accelerator-description">
            <p style="margin-top: 30px; text-decoration: none;">The ML Ops for Data Bricks solution accelerator provides a deployable solution that can be used by data engineering and data science teams to:</p>
            <ul style="margin-top: 30px;">
                <li>Logging Framework using the <a href="https://github.com/census-instrumentation/opencensus-python/tree/master/contrib/opencensus-ext-azure" target="_blank">Opensensus Azure Monitor Exporters</a></li>
                <li>Support for Databricks development from VS Code IDE using the <a href="https://docs.microsoft.com/en-us/azure/databricks/dev-tools/databricks-connect#visual-studio-code" target="_blank">Databricks Connect</a> feature.</li>
                <li>continuous development with <a href="https://packaging.python.org/tutorials/packaging-projects/" target="_blank">Python Local Packaging</a></li>
                <li>Implementation of the Databricks utilities in VS Code such as dbutils, notebook execution, secret handling.</li>
                <li>Example Model file which uses the framework end to end.</li>
            </ul>
            <img src="/images/ml-ops-for-databricks/ML-Ops-for-Databricks-components.jfif" alt="ML Ops for Databricks components image">
        </div>
    </div>
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
    </div>
    <div style="width:100%; display: flex; justify-content:space-between; margin-top:50px; border-bottom: 1px solid #D2D2D2; padding-bottom: 50px;">
        <div style="display:flex; align-items:center; width:49%; height: 120px; box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.25);">
            <img src="../images/related-accelerators.png" alt="logo" height="70" width="70" style="margin-left:20px;">
                <div style="display:flex; flex-direction:column; justify-content: space-between; margin-left: 20px;">
                    <span style="font-weight:600">Related Accelerators</span>
                    <a href="/forecasting/" target="_blank" style="text-decoration:none">
                        <div class="text-button accelerator-button">Forecasting Accelerator</div>
                    </a>
                </div>
        </div>
        <div style="display:flex; align-items:center; width:49%; height: 120px; box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.25);">
            <img src="../images/contributing-guide.png" alt="logo" height="70" width="70" style="margin-left:20px;">
                <div style="display:flex; flex-direction:column; justify-content: space-between; margin-left: 20px;">
                    <span style="font-weight:600">Contributing Guide</span>
                    <a href="https://github.com/microsoft/dstoolkit-mlops-base/blob/main/CONTRIBUTING.md" target="_blank" style="text-decoration:none">
                        <div class="text-button accelerator-button">Contribution guideline</div>
                    </a>
                </div>
        </div>
    </div>
    <div class="category" style="margin-bottom: 30px;">Technologies</div>
        <div class="technologies">
        <span><a href="https://azure.microsoft.com/services/databricks/" target="_blank">Azure Databricks</a></span>
        <span><a href="https://azure.microsoft.com/services/monitor/" target="_blank">Application Insights</a></span>
        <span><a href="https://azure.microsoft.com/services/monitor/" target="_blank">Log analytics workspace for the App Insight</a></span>
        <span><a href="https://azure.microsoft.com/services/key-vault/" target="_blank">Azure Key Vault</a></span>
        <span><a href="https://azure.microsoft.com/services/storage/" target="_blank">Azure Storage Account</a></span>
    </div>
<div class="category">Contributors</div>
    <div class="accelerator-contributors">
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image"> 
                <img src="TODO" alt="contributor photo" height="100" width="100">
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">flpy</p>
            </div>
        </div>
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image">
                <img src="TODO" alt="contributor photo" height="100" width="100">
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">mame</p>
            </div>
        </div>
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image">
                <img src="TODO" alt="contributor photo" height="100" width="100">
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">trng</p>
            </div>
        </div>
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image"> 
                <img src="TODO" alt="contributor photo" height="100" width="100">
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">lina</p>
            </div>
        </div>
    </div>
</div>
