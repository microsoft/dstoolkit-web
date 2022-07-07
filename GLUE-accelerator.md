---
layout: pageAccelerator
title: GLUE - Azure Cognitive Services Accelerator
permalink: /GLUE-accelerator/
---

<script>
    //Variables for this specific single accelerator page, to centralize re-used variables
    const textPageTitle = "GLUE - Azure Cognitive Services Accelerator";
    const htmlPageDescription = `GLUE is a lightweight, Python-based collection of scripts to support you at succeeding with speech and text`;
    const srcHeaderImage = "{{site.baseurl}}/images/GLUE-accelerator/CLO20b_Sylvie_office_night_001.jpg";
    const linkAccessAcceleratorRepo = "https://github.com/microsoft/glue";
    const listPrereqs = [`<a href="https://www.python.org/downloads/" target="_blank">Python</a> (required, Version >=3.8 is recommended).`,
        `<a href="https://code.visualstudio.com/" target="_blank">VSCode</a> (recommended), but you can also run the scripts using PowerShell, Bash etc.`,
        "Stable connection for installing your environment and scoring the files.",
        `<a href="https://github.com/BtbN/FFmpeg-Builds/releases" target="_blank">ffmpeg</a> for audio file conversion (only for TTS use cases):`,
        `If you are using Windows, download it from <a href="https://ffmpeg.org/download.html#build-windows" target="_blank">here</a> and see the description <a href="https://github.com/microsoft/glue/blob/main/GET_YOUR_KEYS.md" target="_blank">here</a>.`,
        "In case you are using Linux, you can install it via command line using a package manager, such as apt-get install ffmpeg."];
    const listIndustries = ["Horizontal solution that addresses cross-industry needs"];
    const listUseCases = ["Automatized generation of synthetic speech-model training data.",
        "Batch-transcription of audio files and evaluation given an existing reference transcript.",
        "Scoring of STT-transcriptions on an existing LUIS-model."];
    const htmlAcceleratorDescription = 
        `<p style="margin-top: 30px; text-decoration: none;">
            GLUE is a lightweight, Python-based collection of scripts to support you at succeeding with speech and text use-cases based on <a href="https://azure.microsoft.com/en-us/services/cognitive-services/" target="_blank">Microsoft Azure Cognitive Services</a>. It not only allows you to batch-process data, but also glues together the services of your choice in one place and ensures an end-to-end view on the training and testing process.
            <h1>Modules</h1>
            GLUE consists of multiple modules, which either can be executed separately or ran as a central pipeline:
            <ul>
                <li>Batch-transcribe audio files to text transcripts using <a href="https://azure.microsoft.com/en-us/services/cognitive-services/speech-to-text/" target="_blank">Microsoft Speech to Text Service (STT)</a>.</li>
                <li>Batch-synthesize text data using <a href="https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/" target="_blank">Microsoft Text to Speech Service (TTS)</a>. </li>
                <li>Batch-evaluate reference transcriptions and recognitions. </li>
                <li>Batch-score text strings on an existing, pre-trained <a href="https://luis.ai/" target="_blank">Microsoft LUIS</a>-model. </li>
            </ul>
        </p>`;

    const listAcceleratorGuidanceVideoURLs = ["https://youtube.com/embed/LIWxa4532v8"];

    const listLinksRelatedAccelerators = ["/conversational-AI/"];
    
    const linkContributingGuide = "n/a";

    const listTechnologies = ["technology1",
        "technology2",
        "technology3",
        "technology4",
        "technology5",
        "technology6"];

    const htmlArchitectureSection = 
        `<p>
            This section describes the single components of GLUE, which can either be ran autonomously or, ideally, using the central orchestrator.
            <br/><br/>
            glue.py 
            <ul>
                <li>Central application orchestrator of the toolkit.</li>
                <li>Glues together the single modules in one place as needed. </li>
                <li>Reads input files and writes output files. </li>
            </ul>
            stt.py 
            <ul>
                <li>Batch-transcription of audio files using <a href="https://azure.microsoft.com/en-us/services/cognitive-services/speech-to-text/" target="_blank">Microsoft Speech to Text API</a>.</li>
                <li>Allows baseline models as well as custom endpoints. </li>
                <li>Functionality is limited to the languages and locales listed on the language support page. </li>
            </ul>
            tts.py 
            <ul>
                <li>Batch-synthetization of text strings using <a href="https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/" target="_blank">Microsoft Text to Speech API</a>. </li>
                <li>Supports Speech Synthesis Markup Language (SSML) to fine-tune and customize the pronunciation, as described in the <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=python" target="_blank">documentation</a>. </li>
                <li>Retrieves high-quality audio file from the API and converts it to the Microsoft speech format as well as a version underlaid by the noise of a telephone line. </li>
                <li>Functionality is limited to the languages and fonts listed on the <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support#text-to-speech" target="_blank">language support page</a>.</li>
                <li>Make sure the voice of your choice is available in the respective Azure region (<a href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/rest-text-to-speech#standard-and-neural-voices" target="_blank">see documentation</a>).</li>
            </ul>
            luis.py 
            <ul>
                <li>Batch-scoring of intent-text combinations using an existing LUIS model. </li>
                <li>See the following <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-get-started-create-app" target="_blank">quickstart documentation</a> in case you need some inspiration for your first LUIS-app. </li>
                <li>Configureable scoring treshold, if predictions only want to be accepted given a certain confidence score returned by the API. </li>
                <li>Writes scoring report as comma-separated file. </li>
                <li>Returns classification report and confusion matrix based on <a href="https://github.com/scikit-learn/scikit-learn" target="_blank">scikit-learn</a>. </li>
            </ul>
            evaluate.py 
            <ul>
                <li>Evaluation of transcription results by comparing them with reference transcripts. </li>
                <li>Calculates metrics such as <a href="https://en.wikipedia.org/wiki/Word_error_rate" target="_blank">Word Error Rate (WER)</a>, Sentence Error Rate (SER), Word Recognition Rate (WRR). </li>
                <li>Implementation based on <a href="https://github.com/belambert/asr-evaluation" target="_blank">github.com/belambert/asr-evaluation.</a></li>
                <li>See some hints on <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/how-to-custom-speech-evaluate-data" target="_blank">how to improve your Custom Speech accuracy.</a></li>
            </ul>
            params.py 
            <ul>
                <li>Collects API and configuration parameters from the command line (ArgumentParser) and the config.ini.</li>
            </ul>
            helper.py 
            <ul>
                <li>Collection of helper functions which do not have a purpose on their own, rather complementing the orchestrator and keeping the code neat and clean. </li>
                <li>In case there is a need for custom components, we recommend to add them to this module. </li>
                <li>Creates folder for every run using the naming convention YYYYMMDD-[unique ID]. </li>
            </ul>
        </p>`;
    const htmlBranchingStrategySection = `n/a`;
    const htmlAcceleratorComponents = `n/a`;
    const htmlKeyAcceleratorFiles = `n/a`;
    const htmlLiveDemoSection = `n/a`;
    const htmlRepoStructureSection = `n/a`;

    //boolean variables to show / hide sections of the page
    const toHide_AcceleratorGuidanceSection = false;
    const toHide_RelatedAccelerators = false;
    const toHide_ContributingGuide = true;
    const toHide_ArchitectureSection = false;
    const toHide_BranchingStrategySection = true;
    const toHide_AcceleratorComponents = true;
    const toHide_KeyAcceleratorFiles = true;
    const toHide_LiveDemoSection = true;
    const toHide_RepoStructureSection = true;
</script>

<script src="{{site.baseurl}}/scripts/script-setsingleacceleratorpagecontents.js" type="text/javascript"></script>