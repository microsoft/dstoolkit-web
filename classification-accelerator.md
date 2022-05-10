---
layout: page
title: Binary Classification Accelerator
permalink: /classification-accelerator/
---

<div class="classification-accelerator">
    <div class="title-photo">
          <img src="/images/classification-accelerator/PCA22_OceanPlasticMouse_Feature_06_RGB.jpg" alt="logo" height="300" style="width:100%;">
    </div>
    <div class="title">Binary Classification Accelerator</div>
    <div class="paragraph">Binary classification, with parameter based auto algorithm selection</div>
    <div class="category">Prerequisites</div>
    <div class="prerequisites">
        <div class="prerequisites-card">Access to an Azure subscription</div>
        <div class="prerequisites-card">Access to an Azure DevOps subscription</div>
        <div class="prerequisites-card">Service Principal Account</div>
    </div>
    <div style="width:100%; display: flex;">
        <div style="width:50%;">
            <div class="category">Access the Accelerator</div>            
            <div class="toolkit-checkbox" style="width:100%; margin-top: 30px;">
                <label class="label" style="font-size:16px;">Classification Solution Accelerator</label>
                <p>
                    <a href="https://github.com/microsoft/dstoolkit-classification-solution-accelerator" target="_blank">https://github.com/microsoft/dstoolkit-classification-solution-accelerator</a>
                </p>   
            </div>
        </div>
        <div style="width:50%;">
            <div class="category">Industries</div>
            <ul  style="margin-top: 30px;">
                <li>Retail</li>
                <li>Consumer Goods</li>
                <li>FMCG</li>
                <li>Manufacturing</li>
                <li>Financial Services</li>
            </ul>  
        </div>
    </div>
    <div class="category">Use-case</div>
    Any yes / no question requirement including:
    <ul style="margin-top: 30px;">
        <li>defaulting on a loan,</li>
        <li>clicking on an ad,</li>
        <li>terminating a subscription,</li>
        <li>quality control of products, processes or services,</li>
        <li>medical testing</li>
    </ul>
    <div class="category" style="font-size:24px;">Accelerator description</div>
    <p style="margin-top: 30px; text-decoration: none;">
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
    </p>
    <div class="category" style="font-size:24px;">Accelerator guidance</div>
    <div class="accelerator-guidance-videos">
<div style="height: 100%; text-align: center">
			<div class="csslider infinity" id="slider1">
			<input type="radio" name="slides" checked="checked" id="slides_1"/>
			<input type="radio" name="slides" id="slides_2"/>
				<ul>
                    <li>
                        <iframe width="560" height="315" src="https://youtube.com/embed/stHa_ZvSapk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    <div style="width:100%; display: flex;">
        <div style="width:50%;">
            <div class="category">Related Accelerators</div>
            <div class="toolkit-checkbox" style="width:100%; margin-top: 30px;">
                <label style="font-size:16px;">
                    <a href="/ml-ops/" target="_blank">ML Ops solution accelerator</a>
                </label>
            </div>
        </div>
    </div>
    <div class="category" style="font-size:24px;">Technologies</div>
    <ul style="margin-top: 30px;">
        <li>Azure Machine Learning</li>
        <li>Azure DevOps</li>
        <li>Azure Key Vault</li>
        <li>Azure Compute Instance</li>
        <li>Azure Compute Cluster</li>
        <li>Azure Container Instance</li>
        <li>Azure Kubernetes Services</li>
    </ul>
    <div style="margin-top:50px;"> 
        <div class="accelerator-acordeon">
            Architecture
            <i class="material-icons" style="margin-bottom:0px; cursor: pointer;">add_circle_outline</i>
        </div>
        <img src="/images/classification-accelerator/Solution-Accelerator-Architecture.png" alt="Solution Accelerator Architecture">
        <div class="accelerator-acordeon">
            Branching Strategy
            <i class="material-icons" style="margin-bottom:0px; cursor: pointer;">add_circle_outline</i>
        </div>
        <img src="/images/classification-accelerator/Branching-Strategy.png" alt="Branching Strategy">
        <div class="accelerator-acordeon">
            Accelerator components
            <i class="material-icons" style="margin-bottom:0px; cursor: pointer;">add_circle_outline</i>
        </div>
        <img src="/images/classification-accelerator/Code-Blueprint.png" alt="Code Blueprint">
        <div class="accelerator-acordeon">
            Key Accelerator Files
            <i class="material-icons" style="margin-bottom:0px; cursor: pointer;">add_circle_outline</i>
        </div>
        <ul>
            <li><a href="https://github.com/microsoft/dstoolkit-classification-solution-accelerator/blob/main/configuration/configuration-aml.variables.yml" target="_blank">Configuration-aml.variables.yml</a></li>
            <li><a href="https://github.com/microsoft/dstoolkit-classification-solution-accelerator/blob/main/src/train_1_classifier.py" target="_blank">src/train_1_classifier.py</a></li>
            <li><a href="https://github.com/microsoft/dstoolkit-classification-solution-accelerator/blob/main/src/train_n_classifier.py" target="_blank">src/train_n_classifier.py</a></li>
        </ul>
    </div>
    <div class="category" style="font-size:24px;">Contributors</div>
    <div class="accelerator-contributors">
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image"> 
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">chwa</p>
            </div>
        </div>
        <div class="accelerator-contributor">
            <div class="accelerator-contributor-image"> 
            </div>
            <div style="margin-left:10px;">
                <p class="accelerator-contributor-text">nabr</p>
            </div>
        </div>
    </div>
</div>
