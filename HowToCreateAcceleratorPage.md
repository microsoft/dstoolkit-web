![banner](images/data-science-toolkit-banner.jpg)

# Guide on How to Create a New Accelerator Page

## Purpose

- Add a new accelerator page to the toolkit web site. Insure it shows on on the Toolkit page and make sure the contributors are displayed, both on the actual accelerator page and on the contributor's page.
- Show how to set up a local environment, so the page/site can be tested locally. It is important to ensure all looks good and is working before pushing your new branch to GitHub and creating a new Pull Request (to be reviewed and merged into the main branch).

This guide is not a git tuturial. It assumes a working knowledge of git. On the actual [site](https://microsoft.github.io/dstoolkit-web) there are a couple of instruction videos that will explain topics such as how to install git (and an editor) as well as how to clone a repo etc. There will be a few hints/guidelines along the way to ensure the reader can follow along.

## Create Page
Log into *GitHub* and go to the site repo found here: [microsoft/dstoolkit-web](https://github.com/microsoft/dstoolkit-web).

To go the *Code* tab

![Menu](images/howtocreateacceleratorpage/menubar.png)

Create a new branch. This can either be done from the web site as shown below. Make sure you create the new branch from the main branch called *gh-pages*. Enter the name and click the *Create branch* button/link.

![Create Branch](images/howtocreateacceleratorpage/createbranch.png)

>It is recommended to work locally.

Start by cloning the repo to your local disk. This is done using the command `git clone https://github.com/microsoft/dstoolkit-web`.

![Clone repo](images/howtocreateacceleratorpage/gitclone.png)

To create a new branch from the commandline open e.g. git bash. Make sure the main branch is checkout out (the *gh-pages* branch) and that you have pulled the latest code. Enter the commands

```
git checkout gh-pages
git pull
git checkout -b "ks/feature/coolest_acc"
```

as shown below

![Checkout Main](images/howtocreateacceleratorpage/checkoutmain.png)

![Pull latest](images/howtocreateacceleratorpage/gitpull.png)

![Create Branch](images/howtocreateacceleratorpage/createbranch_cmd.png)

If you have created the branch on your own machine it should now be checked out. If you are not switch to the branch using the command `git checkout coolest_acc` or `git switch coolest_acc`.

![Switch to Branch](images/howtocreateacceleratorpage/switchtobranch.png)

Create a new page by making a copy of the template file *DEMO-SingleAcceleratorPage.md*. Rename the file to the (short) name of your accelerator, e.g. *coolest_accelerator.md*

Using the command

```
git status
```

You can check that the page is created. It is still untracked by git as you have not yet added it to git (nor committed the change).

![New Page](images/howtocreateacceleratorpage/newpage.png)

Now add and commit the file to git using the commands:

```
git add .
git commit -m "Add new accelerator page for Coolest Accelerator"
```

![Add and Commit](images/howtocreateacceleratorpage/addcommit.png)

> If you have not read the pages on the [Toolkit-site](https://microsoft.github.io/dstoolkit-web/howtocontribute/) on recommendations on how to contribute, now is the time. 

> Especially the section that explains the *SST Git Flow* as well as the *List Of Practices*

The new file and subsequent changes should be pushed to the repo on GitHub.

This is done using the command `git push`.

![Push](images/howtocreateacceleratorpage/gitpush.png)

Please note, that you may be asked to set the upstream location. You will be told and if so just past the command shown and execute it. The command will look like this:

```
git push --set-upstream origin ks/feature/coolest_acc
```

Load the new accelerator page into an editor. Notepad++ or VS Code or Notepad if that is your prefered choice.

At the top of the page you will find three options:

- layout
- title
- permalink

The *layout* you should keep as is (pageAccelerator).

The *title* should be set to the name of our accelerator, e.g. *Coolest Accelerator*.

The *permalink* should be set to the name of the accelerator page you are currently working on inside /.../ , e.g. */coolest_accelerator/*

So it would look something like this:

```
---
layout: pageAccelerator
title: Coolest Accelerator
permalink: /coolest_accelerator/
---
```

At this point in time you can view the page locally. If you follow the instructions below. Note, that as the page is not yet linked to the Toolkit-page, you will have to enter the permalink in the address bar. In our case it would be `http://localhost:4000/dstoolkit-web/coolest_accelerator`

If the page loads you should see a lot of 'TODO' fields and other template text. Adding and amending the accelerator page you have just created will change this.

> Some variables/placeholders are in double quotes and some are in single quotes; these are prefixed by 'html'. 

Depending on where the variable or placeholder is used the value will be in single or double quotes. It is very important to maintain these as the page will otherwise not display correctly.




## Update Toolkit Page

## Setup local test environment

