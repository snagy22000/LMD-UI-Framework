# LMD Team Hackathon:
## Project Members:
* Sebastian Nagy - Project Management, Development
* Michel Rossier - Product Manager, Development
* Carlos Astrada - Development
* Alexandrix Ikechukwu - Development

## Scope:
Due the days of 24 - 26 the Team has to develop:

* 5 UI Components
* 1 Presentation Site

## Branch`s:

Guideline for Q & A -

* master - add and commit only after testing (one person responsible)
* develop - copy of the master - will be used for development staging

* component -  will be used to develop the HTML  and CSS components
* presentation_site - this branch will be used to create the website

> ! Master Branches are only after all component's had been tested successfully.

## Git Development Workflow:

![](http://i.imgur.com/fi7Nqeq.jpg)

The Master Branch is only for production and will not be touched due the Development.

The Develop Branch is a copy of the Master and will be used due Development.

1. Checkout you branch which corespondent to your work (components or website)
    
        git checkout components

        git checkout presentation_site
        
2. After Development and Testing  merge your work with Develop branch
       
           git checkout develop

           git merge components|presentation_site (one of both)
       
3. Control after merging process if eveything works fine.
        
        Same testing as before, inform team collegues about the changes in develop branch



## Rules:

* Don’t copy any code from anywhere. Build your UI elements from scratch.
* Don’t use JavaScript unless you decide you absolutely need it.
* All UI elements must be responsive, but you can work on full responsiveness after the hackathon.
* You don’t have to complete the website during the hackathon. Try to build as many UI elements as possible first; if you have time to build the website or if you feel confident you can complete twenty elements and the website, do both.
* You must submit your project (a link to the GitHub repo and a link to a live webpage with the elements) before 9 p.m. EST on the last day of the hackathon.
* Don't use jQuery or any other library. You don't want to download a big library just to use a tooltip.
* Each team must submit at least two innovative elements; see the details below.
* Remember that each teammate must submit a writeup no later than 12 hours after you submit your project.

## Project Scope:

1. The Presentation Site needs to be responsive on all devices
2. To get familiar with the newest web features/technologies the idea is to use CSS Variables (detail soon)
3. Floobit is as a draft for pair programming (tbd)
4. ...

