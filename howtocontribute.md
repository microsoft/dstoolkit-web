---
layout: page
title: How to Contribute
permalink: /howtocontribute/
---

<div class="howtocontribute">
    <div class="container-fluid">
          <img src="/images/howtocontribute/MSC21_Getty_remoteWorkplace_1198541191.jpg" alt="logo">
          <!-- <div class="title howtocontribute">How can I contribute my work?</div> -->
    </div>
<div class="howtocontribute-body">
    <div class="sidenav">
        <a class="dropdown-btn">Getting Started
            <i class="material-icons">keyboard_arrow_down</i>
        </a>
        <div class="dropdown-container">
            <a class="howtocontribute-option" href="#prerequisites">Prerequisites</a>
            <a class="howtocontribute-option" href="#how-to-contribute">How to contribute</a>
        </div>
        <a class="dropdown-btn">List of Practices
            <i class="material-icons">keyboard_arrow_down</i>
        </a>
        <div class="dropdown-container">
            <a class="howtocontribute-option" href="#50-72-rule">The 50/72 rule</a>
            <a class="howtocontribute-option" href="#new-code-base">Checklist for a new code base</a>
            <a class="howtocontribute-option" href="#hierarchy-of-communication">Hierarchy of communication</a>
            <a class="howtocontribute-option" href="#justify-exceptions-from-the-rule">Justify exceptions from the rule</a>
            <a class="howtocontribute-option" href="#postel-law">Postel’s law</a>
            <a class="howtocontribute-option" href="#regularly-update-dependencies">Regularly update dependencies</a>
            <a class="howtocontribute-option" href="#review-code">Review code</a>
            <a class="howtocontribute-option" href="#semantic-versioning">Semantic Versioning</a>
        </div>
        <a class="dropdown-btn" href="#create-new-accelerator">Create a new Accelerator
        </a>
        <a class="dropdown-btn" href="#contribute-existing-accelerator">Contribute to an existing Accelerator
        </a>
        <a class="dropdown-btn" href="#sst-flow">SST Flow
        </a>
        <a class="dropdown-btn" href="#faq">FAQ
        </a>
    </div>
    <div class="sidenav-content">
        <p class="h3">Getting Started</p>
        <div id="prerequisites" class="howtocontribute-subtitle">Prerequisites</div>
        <span>You will need a GitHub account that is linked to the Microsoft GitHub Organization to start:
        <br><br>
        To create a GitHub account, navigate to https://github.com and follow the instructions to sign-up. (The GitHub account is your personal account and remains your account even after you stop working for Microsoft.
        <br><br>
        Once you have a GitHub account, instructions to link your GitHub and Microsoft account can be found here: https://repos.opensource.microsoft.com/ Linking will give you access to the Microsoft Organization on GitHub. (This is where all the IP is located.)
        </span>
        <div id="how-to-contribute" class="howtocontribute-subtitle">How to contribute</div>
        <ol>
            <li>Satisfy the prerequisites above</li>
            <li>Access the DS Toolkit repo with the accelerator of interest </li>
            <li>If you want to contribute to an existing one:
                <ol type="a">
                    <li>Check for open issues and choose one</li>
                    <li>Assign it to yourself</li>
                    <li>Create a branch with the feature/issue name (please pay attention nomenclature to avoid confusion) </li>
                    <li>Submit your branch for review</li>
                    <li>If approved, merge with master. If not, edit accordingly</li>
                    <li>If you found an issue but there is no existing one, create it and follow the above steps</li>
                </ol>
            </li>
            <li>If you want to create a new accelerator:
                <ol type="a">
                    <li>Contact us here to propose your IP for funding</li>
                    <li>If approved, we will help you test and review your IP</li>
                    <li>Go public!</li>
                </ol>
            </li>
        </ol>
        <!--How to contribute videos-->
        <div style="border-top: 1px solid #D2D2D2;margin-top: 50px;">
            <p class="h3" style="margin-top:50px">List of Practices</p>
            <div id="50-72-rule" style="font-weight: 600; margin-top: 30px;">The 50/72 rule</div>
            <span style="margin-top:30px; line-height: 35px;">Write conventional Git commit messages.</span>
            <ul style="line-height: 35px;">
                <li>Write a summary in the imperative, no wider than 50 characters.</li>
                <li>If you add more text, leave the next link blank.</li>
                <li>You can add as much extra text as you’d like, but format it no wider than 72 characters.</li>
                <li>Apart from the summary, focus on explaining why a changes was made, since what constitutes the change is already visible via Git’s diff view.</li>
            </ul>
            <div id="new-code-base" style="font-weight: 600; margin-top: 30px;">Checklist for a new code base</div>
            <span style="margin-top:30px; line-height: 35px;">When you create a new code base, or add a new ‘project’ to an existing code base, consider following a checklist. Here’s a suggestion:</span>
            <ul style="line-height: 35px;">
                <li>Use Git</li>
                <li>Automate the build</li>
                <li>Turn on all error messages</li>
            </ul>
            <div id="hierarchy-of-communication" style="font-weight: 600; margin-top: 30px;">Hierarchy of communication</div>
            <span style="margin-top:30px; line-height: 35px;">Write code for future readers; it may be yourself. Favour communicating behaviour and intent according to this prioritised list:</span>
            <ol style="line-height: 35px;">
                <li>Guide the reader by giving APIs distinct types.</li>
                <li>Guide the reader by giving methods helpful names.</li>
                <li>Guide the reader by writing good comments.</li>
                <li>Guide the reader by providing illustrative examples as automated tests.</li>
                <li>Guide the reader by writing helpful commit messages in Git.</li>
                <li>Guide the reader by writing good documentation.</li>
            </ol>     
            <span style="margin-top:30px; line-height: 35px;">The items on the top of the list are more important that the items at the bottom.</span>
            <div id="justify-exceptions-from-the-rule" style="font-weight: 600; margin-top: 30px;">Justify exceptions from the rule</div>
            <span style="margin-top:30px; line-height: 35px;">Good rules work well most of the time, but here are always occasions where a rule is in the way. It’s okay to deviate from a rule when circumstances require it, but justify and document the reason.</span>
            <br><br>
            <span style="margin-top:30px; line-height: 35px;">It’s a good idea to get a second opinion before you decide to deviate from a rule. Sometimes, you may not be able to see a good way to get what you want and  follow the rule, but a co-worker can.</span>
            <div id="postel-law" style="font-weight: 600; margin-top: 30px;">Postel’s law</div>
            <span style="margin-top:30px; line-height: 35px;">Keep Postel’s law in mind for pre- and postconditions.</span>
            <br><br>
            <div style="text-align: center"><em>Be conservative in what you send, be liberal in what you accept.</em></div>
            <br>
            <span style="line-height: 35px;">Methods should accept input as long as they can make sense of it, but no further. Return values should be as trustworthy as possible.</span>
            <div id="regularly-update-dependencies" style="font-weight: 600; margin-top: 30px;">Regularly update dependencies</div>
            <span style="margin-top:30px; line-height: 35px;">Don’t let your code base fall behind its dependencies. Check for updates at a regular schedule. It’s easy to forget, but if you fall too far behind, it could be difficult to catch up.</span>
            <div id="review-code" style="font-weight: 600; margin-top: 30px;">Review code</div>
            <span style="margin-top:30px; line-height: 35px;">It’s easy to make mistakes when you write code. Have another person perform a code review. It doesn’t capture all mistakes, but it’s one of the most effective quality assurance techniques we know of.</span>
            <br><br>
            <span style="margin-top:30px; line-height: 35px;">You can perform code reviews in many ways: continually, when pair or mob programming, or asynchronously as pull request reviews.</span>
            <br><br>
            <span style="margin-top:30px; line-height: 35px;">Reviews should be constructive, but rejection should be a real option. If you can’t reject a change, then a review is worth little.</span>
            <br><br>
            <span style="margin-top:30px; line-height: 35px;">Make code reviews part of your daily rhythm.</span>
            <div id="semantic-versioning" style="font-weight: 600; margin-top: 30px;">Semantic Versioning</div>
            <span style="margin-top:30px; line-height: 35px;">Consider using Semantic Versioning.</span>
        </div>
        <div style="border-top: 1px solid #D2D2D2;margin-top: 50px;">
            <p id="create-new-accelerator" class="h3" style="margin-top:50px">Workflow to create a new accelerator</p>
            <span style="margin-top:30px; line-height: 35px;">If you have great IP that can be packaged as a delivery accelerator, reach out to discuss your IP and see if it qualifies for funding. If your IP qualifies, you will get the following:</span>
            <ol style="line-height: 35px;">
                <li>Access to a funded internal Azure Subscription to help test and review your code.</li>
                <li>An internal project assignment, so you can log the time you spend curating your code. (funded with NBUE)</li>
                <li>Help to create your own GitHub Opensource repository (Private or Public) to store your code and build your own portfolio of evidence, to show the world what you have done.</li>
                <li>Marketing of your accelerator to sellers, delivery teams and Industry teams.</li>
                <li>Help, from others who have already published and reviewed code for solution accelerators that have been adopted in the Data Science Toolkit.</li>
                <li>Community recognition, we have won awards, you could be next.</li>
            </ol> 
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/tdFetGQuBls" title="YouTube video" allowfullscreen></iframe>
            </div>
        </div>
        <div style="border-top: 1px solid #D2D2D2;margin-top: 50px;">
            <p id="contribute-existing-accelerator" class="h3" style="margin-top:50px">Workflow for contributing to existing accelerators</p>
            <span style="margin-top:30px; line-height: 35px;">This section will describe how to contribute using the git workflow (from now on called the SST Flow) used for the different delivery accelerators in the Data Science Toolkit. The flow is an extension of the GitHub flow first described by Scott Chacon.
            <br>
            If you are new to git or feel like a brush-up, it is highly recommended to read Git in Practice by Mike McQuaid.
            <br>
            The workflow is simple because it essentially involves only two types of branches: the default master branch and feature branches. A feature branch is one that is used only for development of a single feature (or sometimes bug fix) and then deleted after being merged into another branch.
            </span>
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/itfpdwh6x0E" title="YouTube video" allowfullscreen></iframe>
            </div>
        </div>
        <div style="border-top: 1px solid #D2D2D2;margin-top: 50px;">
            <p id="sst-flow" class="h3" style="margin-top:50px">SST Flow</p>
                <div id="id-carousel-videos" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#id-carousel-videos" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#id-carousel-videos" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#id-carousel-videos" data-bs-slide-to="2"></button>
                    </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/rTIAN8slF1k" title="YouTube video player" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/mn_R6FEKz3k" title="YouTube video player" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/sRojP3bPcoc" title="YouTube video player" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#id-carousel-videos" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#id-carousel-videos" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
            </div>
            <div class="container-fluid" style="margin-top:50px">
                <img src="../images/howtocontribute/how-to-contribute.png" alt="logo">
            </div>   
        </div>
        <div style="border-top: 1px solid #D2D2D2;margin-top: 50px;">
            <p id="faq" class="h3" style="margin-top:50px">FAQ</p>
        </div>
    </div>
</div>
</div>


<script>
var dropdown = document.getElementsByClassName("dropdown-btn");
var howToContributeOption = document.getElementsByClassName("howtocontribute-option");
var i;
var j;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    if(dropdownContent.classList.contains("dropdown-container"))
    {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    };
  });
}

for(i = 0; i < howToContributeOption.length; i++) {
    howToContributeOption[i].addEventListener("click", function() {
        for(j = 0; j < howToContributeOption.length; j++) {
            howToContributeOption[j].classList.remove("active");
        };
        this.classList.toggle("active");
    });
}
</script>