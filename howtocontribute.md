---
layout: page
title: How to Contribute
permalink: /howtocontribute/
---

<div class="howtocontribute">
    <div class="container-fluid">
          <img src="/images/howtocontribute/MSC21_Getty_remoteWorkplace_1198541191.jpg" alt="logo">
          <div class="title howtocontribute">How can I contribute my work?</div>
    </div>
<div class="howtocontribute-body">
    <div class="sidenav">
        <button class="dropdown-btn">Existing workflow 
            <i class="material-icons">keyboard_arrow_down</i>
        </button>
        <div class="dropdown-container">
            <span class="howtocontribute-option">Link 1</span>
            <span class="howtocontribute-option">Link 2</span>
            <span class="howtocontribute-option">Link 3</span>
        </div>
        <button class="dropdown-btn">New workflow
            <i class="material-icons">keyboard_arrow_down</i>
        </button>
        <div class="dropdown-container">
            <span class="howtocontribute-option">Link 1</span>
            <span class="howtocontribute-option">Link 2</span>
            <span class="howtocontribute-option">Link 3</span>
        </div>
        <button class="dropdown-btn">SST Flow 
            <i class="material-icons">keyboard_arrow_down</i>
        </button>
        <div class="dropdown-container">
            <span class="howtocontribute-option">Link 1</span>
            <span class="howtocontribute-option">Link 2</span>
            <span class="howtocontribute-option">Link 3</span>
        </div>
        <button class="dropdown-btn">Best Practices
            <i class="material-icons">keyboard_arrow_down</i>
        </button>
        <div class="dropdown-container">
            <span class="howtocontribute-option">The 50/72 rule</span>
            <span class="howtocontribute-option">Checklist for a new code base</span>
            <span class="howtocontribute-option">Hierarchy of communication</span>
            <span class="howtocontribute-option">Justify exceptions from the rule</span>
            <span class="howtocontribute-option">Postel’s law</span>
            <span class="howtocontribute-option">Review code</span>
            <span class="howtocontribute-option">Semantic Versioning</span>
        </div>
    </div>
    <div class="sidenav-content">
        <!--How to contribute videos-->
        <p class="h1">List of best practices</p>
        <!-- Carousel -->
        <div id="id-carousel-videos" class="carousel slide" data-bs-ride="carousel">
            <!-- Indicators/dots -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#id-carousel-videos" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#id-carousel-videos" data-bs-slide-to="1"></button>
            </div>
            <!-- The slideshow/carousel -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/tdFetGQuBls" title="YouTube video" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/itfpdwh6x0E" title="YouTube video" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <!-- Left and right controls/icons -->
            <button class="carousel-control-prev" type="button" data-bs-target="#id-carousel-videos" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#id-carousel-videos" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>        
        <div style="display: flex; flex-direction: column; border-top: 1px solid #D2D2D2;margin-top: 50px;">
            <div style="font-weight: 600; margin-top: 30px;">The 50/72 rule</div>
            <span style="margin-top:30px; line-height: 35px;">Write conventional Git commit messages.</span>
            <ul style="line-height: 35px;">
                <li>Write a summary in the imperative, no wider than 50 characters.</li>
                <li>If you add more text, leave the next link blank.</li>
                <li>You can add as much extra text as you’d like, but format it no wider than 72 characters.</li>
            </ul>
            <span style="margin-top:30px; line-height: 35px;">Apart from the summary, focus on explaining why a changes was made, since what constitutes the change is already visible via Git’s diff view.</span>            
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
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
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