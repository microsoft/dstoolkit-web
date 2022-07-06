---
layout: page
title: Home
---

<div class="container-fluid">
    <img src="../images/Edu16_STEM_11.png" alt="logo">
    <div class="title">What is the Data Science Toolkit?</div>   
    <div class="home-paragraph">The Data Science Toolkit provides everyone from professional background to Data Science enthusiasts with packaged, vetted and tested delivery accelerators, delivery guidance, and product backlogs for common machine learning scenarios.</div>  
    <!--Use the toolkit section-->
    <div class="row home-card">
        <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6" style="align-content: left; justify-content: center;">
            <img src="images/MSC18_quantum_010.png" alt="logo">
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6" style="padding: 25px; align-content: center; justify-content: center;">
            <p class="h1 text-center">Use the toolkit</p>
            <p class="text-center">
                Have you ever wished for a "push button" way to set up an Azure environment for ML, to get quickly past the boring stuff, and get to the exciting work of building/training a model?
            </p>
            <div class="d-grid">
                <a href="/toolkit/" class="btn btn-primary btn-lg btn-block" target="_blank" style="text-decoration:none;">Use the toolkit</a>
            </div>
        </div>
    </div>
    <!--Contribute section-->
    <div class="row home-card">        
        <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6" style="padding: 25px; align-content: center; justify-content: center;">
            <p class="h1 text-center">Contribute</p>
            <p class="text-center">
                Have you ever wanted to contributed back to IP and show the great work that has been done for your customer?
            </p>
            <div class="d-grid">
                <a href="/howtocontribute/" class="btn btn-primary btn-lg btn-block" target="_blank" style="text-decoration:none;">Contribute to the toolkit</a>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6" style="align-content: right; justify-content: center;">
            <img src="../images/EDU22_Hybrid_K12_Student_058.png" alt="logo">
        </div>
    </div>
    <!--Get in touch-->
    <div class="home-get-touch">
        <span class="home-get-touch-title">Get in touch</span>
        <div class="home-get-touch-content">
            <div class="home-get-touch-content-left">
                <span style="margin-top:20px;">Name</span>
                <input style="margin-top:22px; height:30px" type="text" name="name">
                <span style="margin-top:20px;">User type</span>
                    <div style="display:flex; margin-top:30px;">                
                        <input type="radio" id="customer" name="type" value="1" style="width: 20px;height: 20px;" checked>
                        <label for="customer" style="margin-left: 20px">Customer</label><br>
                    </div>
                     <div style="display:flex; margin-top:15px;">                
                        <input type="radio" id="partner" name="type" value="2" style="width: 20px;height: 20px;">
                        <label for="partner" style="margin-left: 20px">Partner</label><br>
                    </div>
                    <div style="display:flex; margin-top:15px;">                
                        <input type="radio" id="student" name="type" value="3" style="width: 20px;height: 20px;">
                        <label for="student" style="margin-left: 20px">Student</label><br>
                    </div>
                    <div style="display:flex; margin-top:15px;">                
                        <input type="radio" id="microsoft" name="type" value="4" style="width: 20px;height: 20px;">
                        <label for="microsoft" style="margin-left: 20px">Microsoft Employee</label><br>
                    </div>
            </div>
            <div class="home-get-touch-content-right">
                <span style="margin-top:21px;">Email</span>
                <input style="margin-top:20px; height:30px" type="text" name="name">
                <span style="margin-top:20px;">Message</span>
                <textarea style="resize:none; height: 150px;"></textarea>
            </div>
        </div>
        <span class="text-button get-touch-button">Send message</span>
    </div>
</div>
