---
layout: page
title: Toolkit
permalink: /toolkit/
---

<div class="container-fluid">
  <img src="{{site.baseurl}}/images/toolkit/MSC19_paddingtonOffice_015.jpg" alt="logo">
  <div class="title">Data Science Toolkit</div>
  <div class="home-paragraph">
  You can use the delivery accelerators, delivery guides and product backlogs listed below in your delivery engagements. You can also contribute new material or update existing material or simply browse through the content. Please don't forget to reach out with any comments or contributions.</div>
  <div class="subtitle toolkit-borders">Delivery Accelerators Repositories 
    <div class="dropdowns-container">
    <div class="custom-select">
      <select id="id-filter-technology" class="toolkit-select"
      onchange="if (this.selectedIndex) filterTechnologies()">
        <option value="-1" selected disabled hidden>Filter by technology</option>
        <option value="all">All</option>
        <option value="Azure Machine Learning">Azure Machine Learning</option>
        <option value="Azure DevOps">Azure DevOps</option>
        <option value="Key Vault">Key Vault</option>
        <option value="Azure Compute Instance">Azure Compute Instance</option>
        <option value="Azure Compute Cluster">Azure Compute Cluster</option>
        <option value="Azure Container Instance">Azure Container Instance</option>
        <option value="Azure Kubernetes Services">Azure Kubernetes Services</option>
        <option value="Azure Databricks">Azure Databricks</option>
        <option value="Application Insights">Application Insights</option>
        <option value="Azure Key Vault">Azure Key Vault</option>
        <option value="Azure Storage Account">Azure Storage Account</option>
        <option value="Jupyter Notebooks">Jupyter Notebooks</option>
        <option value="Python">Python</option>
        <option value="PowerBI">PowerBI</option>
        <option value="Fuent UI">Fuent UI</option>
        <option value="Flask">Flask</option>
        <option value="TensorFlow">TensorFlow</option>
        <option value="Typescript">Typescript</option>
        <option value="Streamlit">Streamlit</option>
        <option value="Azure Cognitive Services">Azure Cognitive Services</option>
        <option value="Microsoft Speech to Text Service">Microsoft Speech to Text Service</option>
        <option value="Microsoft LUIS">Microsoft LUIS</option>
        <option value="Power Virtual Agents">Power Virtual Agents</option>
        <option value="Azure Functions">Azure Functions</option>
        <option value="Power Automate">Power Automate</option>
        <option value="AudioCodes Voice AI Connect Cloud">AudioCodes Voice AI Connect Cloud</option>
        <option value="spaCy">spaCy</option>
        <option value="Azure QnA Maker">Azure QnA Maker</option>
        <option value="Audio Generation Function">Audio Generation Function</option>
        <option value="Speech Batch Testing App">Speech Batch Testing App</option>
      </select>
    </div>
    <div class="custom-select">
      <select id="id-filter-domains" class="toolkit-select"
      onchange="if (this.selectedIndex) filterDomains();">
        <option value="-1" selected disabled hidden>Filter by DS domains</option>
        <option value="all">All</option>
        <option value="ML Ops">ML Ops</option>
        <option value="Machine Learning">Machine Learning</option>
        <option value="UI">UI</option>
        <option value="Computer Vision">Computer Vision</option>
        <option value="Knowledge Mining">Knowledge Mining</option>
        <option value="Conversational AI">Conversational AI</option>
      </select>
    </div>
  </div>
  </div>
  <div class="container">    
    <div class="row g-2" style="margin-top: 30px;">
      <!--ML Ops-->
      <div id="dstoolkit-mlops-base" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/ml-ops/MDC19_cooling_002.jpg" alt="white pipes">
          <p class="toolkit-card-title">ML Ops</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/ml-ops/">Configurable CI/CD pipelines, AML pipelines, and compute resources for ML Ops</a></p>
        </div>
      </div>
      <!--ML Ops for Databricks-->
      <div id="dstoolkit-ml-ops-for-databricks" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/ml-ops-for-databricks/CLO20b_Aline_cafe_outside_002.jpg" alt="brick walls">
          <p class="toolkit-card-title">ML Ops for Databricks</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/ml-ops-for-databricks/">ML Ops for Databricks</a></p>
        </div>
      </div>
      <!--Conversational AI-->
      <div id="cai-advanced-processing-service" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/conversational-AI/M365CO19_SMB_iPhone_245.jpg" alt="logo">
          <p class="toolkit-card-title">Conversational AI (CAI) Advanced Processing Service</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/conversational-AI/">Collection of modules to help with validation, identification and authentication processes</a></p>
        </div>
      </div>
      <!--GLUE-->
      <div id="glue" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/GLUE-accelerator/CLO20b_Sylvie_office_night_001.jpg" alt="logo">
          <p class="toolkit-card-title">GLUE - Cognitive Services Accelerator</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/GLUE-accelerator/">GLUE is a lightweight, Python-based collection of scripts to support you at succeeding with speech and text</a></p>
        </div>
      </div>
      <!--Anomaly detection-->
      <div id="dstoolkit-anomaly-detection-ijungle" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/anomaly-detection/MDC19_tapeTight_002.jpg" alt="logo">
          <p class="toolkit-card-title">Anomaly Detection</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/anomaly-detection/">Detect anomalies on very large structured data sets</a></p>
        </div>
      </div>
      <!--Forecasting-->
      <div id="dstoolkit-forecasting" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/forecasting/CLO18_cafeWork_003.jpg" alt="logo">
          <p class="toolkit-card-title">Forecasting</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/forecasting/">Pre-configured engine for demand forecasting, map data into the existing model to generate a forecast</a></p>
        </div>
      </div>
      <!--Classification-->
      <div id="dstoolkit-classification-solution-accelerator" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/classification-accelerator/PCA22_OceanPlasticMouse_Feature_06_RGB.jpg" alt="logo">
          <p class="toolkit-card-title">Classification Accelerator</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/classification-accelerator/">Binary classification, with parameter based auto algorithm selection</a></p>
        </div>
      </div>
      <!--Object Detection-->
      <div id="dstoolkit-objectdetection-tensorflow-azureml" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/object-detection/CLO19_azureKinectDK_008.jpg" alt="logo">
          <p class="toolkit-card-title">Object Detection</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/object-detection/">Uses computer vision for object or defect detection and includes edge deployment capabilities</a></p>
        </div>
      </div>
      <!--Verseagility-->
      <div id="verseagility" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/verseagility/MSC18_scenicsLiberia_002.jpg" alt="logo">
          <p class="toolkit-card-title">Knowledge Mining (Verseagility)</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/verseagility/">Knowledge mining on unstructured data sets with no data labeling</a></p>
        </div>
      </div>
      <!--Vitastic-->
      <div id="dstoolkit-vitastic" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/toolkit/MSC19_paddingtonOffice_015.jpg" alt="logo"> <!--TODO update with link to image for vitastic-->
          <p class="toolkit-card-title">Vitastic</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/vitastic/">Quickly build web-interfaces for object detection, segmentation and classification models.</a></p>
        </div>
      </div>
      <!--Knowledge Mining-->
      <div id="dstoolkit-km-solution-accelerator" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/toolkit/MSC19_paddingtonOffice_015.jpg" alt="logo"> <!--TODO update with link to image for vitastic-->
          <p class="toolkit-card-title">Knowledge Mining</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/knowledgemining/">This KM solution accelerator aims to provide you with a workable end-to-end Knowledge Mining solution.</a></p>
        </div>
      <!--hierarchical_multilabel_classification-->
      </div>
      <div id="dstoolkit-hierarchical-multilabel-classification" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/hierarchical_multilabel_classification/hierarchical_multilabel_classification.jpg" alt="logo"> <!--TODO update with link to image for vitastic-->
          <p class="toolkit-card-title">Hierarchical Multilabel Classification</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/hierarchical_multilabel_classification/">This solution classifies a given input in multiple levels, with a hierarchy amongst them.</a></p>
        </div>
      </div>
      <!--Retail Analytics-->
      <div id="dstoolkit-retail-analytics" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 toolkit-card show-toolkit-card">
        <div class="shadow">
          <img src="{{site.baseurl}}/images/retail-analytics/retail_analytics.png" alt="shopping karts">
          <p class="toolkit-card-title">Retail Analytics</p>
          <p class="toolkit-card-content"><a href="{{site.baseurl}}/retail-analytics/">Customer Segmentation, Churn and Lifetime Value Prediction</a></p>
        </div>
      </div>
      <!--Placeholder for delivery accelerator toolkit card on right-->
    </div>
  </div>

  <div class="subtitle borders" style="margin-top:0px">
    <!--Placeholder for See More drop-down to expand toolkit rows-->
    <!--TODO: to implement functionality per above toolkit rows and limit number of toolkit rows shown by default to 3 rows-->
    <div class="see-more">
      <span class="see-more-text">See more</span>
      <i class="material-icons" style="margin-bottom:0px; font-size: 42px; border-left: 3px solid white; padding-left: 10px;">keyboard_arrow_down</i>
    </div>
  </div>

  <div class="subtitle">
    Delivery Accelerators in Development
  </div>

<div class="row g-2 delivery-accelerators">
  <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 delivery-accelerators-card">
      <img src="../images/synapse.png" alt="logo">
      <p class="toolkit-card-content">ML Ops for Synapse</p>
  </div>
  <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 delivery-accelerators-card">
      <img src="../images/satellite.png" alt="logo">
      <p class="toolkit-card-content">Satellite Image Processing Accelerator</p>
  </div>
  <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 delivery-accelerators-card">
      <img src="../images/behavior-analytics.png" alt="logo">
      <p class="toolkit-card-content">Behavior Analytics</p>
  </div>
  <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 delivery-accelerators-card">
      <img src="../images/root-cause.png" alt="logo">
      <p class="toolkit-card-content">Root cause analytics (Hierarchical Multi-label Classficiation)</p>
  </div>
</div>
</div>

<script>

  const listContainers = [
    {
      id: "dstoolkit-mlops-base",
      domain: "ML Ops",
      technology: ["Azure Machine Learning", "Azure DevOps", "Key Vault","Azure Compute Instance", "Azure Compute Cluster", "Azure Container Instance", "Azure Kubernetes Services"]
    },
    {
      id: "dstoolkit-ml-ops-for-databricks",
      domain: "ML Ops",
      technology: ["Azure Databricks", "Application Insights", "Azure Key Vault", "Azure Storage Account"]
    },
    {
      id: "dstoolkit-fuzzymatching",
      domain: "Machine Learning",
      technology: ["Azure Machine Learning", "Azure DevOps", "Key Vault", "Jupyter Notebooks"]
    },
    {
      id: "dstoolkit-classification-solution-accelerator",
      domain: "Machine Learning",
      technology: ["Azure Machine Learning", "Azure DevOps", "Key Vault", "Azure Compute Instance","Azure Compute Cluster", "Azure Container Instance", "Azure Kubernetes Services", "Python"]
    },
    {
      id: "dstoolkit-forecasting",
      domain: "Machine Learning",
      technology: ["Jupyter Notebooks", "Python", "PowerBI"]
    },
    {
      id: "dstoolkit-anomaly-detection-ijungle",
      domain: "Machine Learning",
      technology: ["Jupyter Notebooks", "Python"]
    },
    {
      id: "dstoolkit-hierarchical-multilabel-classification",
      domain: "Machine Learning",
      technology: ["Jupyter Notebooks", "Python"]
    },
    {
      id: "dstoolkit-vitastic",
      domain: "UI",
      technology: ["Fuent UI", "Flask", "Python"]
    },
    {
      id: "dstoolkit-km-solution-accelerator",
      domain: "Knowledge Mining",
      technology: ["Azure Cognitive Search", "Azure Cognitives Services", "Azure Functions", "Azure Web Applications", "Python", "Apache Tika"]
    },
    {
      id: "dstoolkit-objectdetection-tensorflow-azureml",
      domain: "Computer Vision",
      technology: ["Azure Machine Learning", "Azure DevOps", "Key Vault", "Azure Compute Instance","Azure Compute Cluster", "Azure Container Instance", "Azure Kubernetes Services", "TensorFlow"]
    },
    {
      id: "dstoolkit-retail-analytics",
      domain: "Machine Learning",
      technology: ["Jupyter Notebooks"]
    },
    {
      id: "verseagility",
      domain: "Knowledge Mining",
      technology: ["Jupyter Notebooks", "Python", "Typescript", "Streamlit", "Azure Cognitive Services"]
    },
    {
      id: "glue",
      domain: "Conversational AI",
      technology: ["Azure Cognitive Services", "Microsoft Speech to Text Service", "Microsoft LUIS","Python"]
    },
    {
      id: "dstoolkit-pva-audiocodes-cc",
      domain: "Conversational AI",
      technology: ["Power Virtual Agents", "Power Automate", "Azure Functions", "Azure Storage Account", "AudioCodes Voice AI Connect Cloud"]
    },
    {
      id: "cai-advanced-processing-service",
      domain: "Conversational AI",
      technology: ["Azure Functions", "Python", "spaCy"]
    },
    {
      id: "cai-test-training-tool",
      domain: "Conversational AI",
      technology: ["Azure QnA Maker", "Audio Generation Function", "Speech Batch Testing App"]
    }, 
    {
      id: "dstoolkit-retail-analytics",
      domain: "Machine Learning",
      technology: ["Azure Machine Learning", "Azure DevOps", "Azure Key Vault", "Azure Compute Instance", "Azure Container Instance", "Azure Kubernetes Services"]
    }
  ]

  technologySelected = 'all';
  domainSelected = 'all';
  
  function filterTechnologies() {
        var filter = document.getElementById("id-filter-technology");
        technologySelected = filter.options[filter.selectedIndex].value;
        filterContainers();
  }

  function filterDomains() {
        var filter = document.getElementById("id-filter-domains");
        domainSelected = filter.options[filter.selectedIndex].value;
        filterContainers();
  }

  function filterContainers() {
    displayAllContainers();
    
    if (technologySelected !== 'all' & domainSelected === 'all')
      {
        listContainers.forEach(e => {
          if(!e.technology.includes(technologySelected)){
            var element = document.getElementById(e.id);
            element?.classList.remove("show-toolkit-card");
          }
        });
      }
    else {
      if(technologySelected === 'all' & domainSelected !== 'all')
      {
        listContainers.forEach(e => {
          if(e.domain !== domainSelected){
            var element = document.getElementById(e.id);
            element?.classList.remove("show-toolkit-card");
          }
        });
      }
      else {
        if(technologySelected !== 'all' & domainSelected !== 'all')
        {
          listContainers.forEach(e => {
            if(!e.technology.includes(technologySelected) || e.domain !== domainSelected){
              var element = document.getElementById(e.id);
              element?.classList.remove("show-toolkit-card");
            }
          });
        }
      }
    }
  }

  function displayAllContainers() {
    listContainers.forEach(e => {
        var element = document.getElementById(e.id);
        element?.classList.add("show-toolkit-card");
      });
  }

</script>
