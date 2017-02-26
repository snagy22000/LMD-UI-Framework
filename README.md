# LMD Team 13 Hackathon:


## Executive Summary:

Overall, the hackathon went well. We used a combination of gitter.im for discussions, Trello for project management, and github for coding. We performed a final review using Floobits for pair-programming. We split the work fairly, set up expectations and communications to coordinate the time-zone differences (Charlie is in Argentina; Sebastian and Michel in Central Europe), and communicated well at every single step. Apart from the obvious room for improvement, we ended up having enough time to make our site and components responsive. 



### What We Did Well

Apart from being well coordinated and organized, each team member took a component to build. We prefixed all of our respective component styles with our initials to avoid merge conflicts later on. Each component's HTML/CSS was structured in a specific way to make placing in the site as easy and painless as possible: 

- Each component would be a separate `<section>`
- Each subsection of a component would be a separate `<article>` 
- Each component would have its own css, which would be imported into the site's main.css


The website was built using HTML5 and is responsive. The site structure is fairly modularized whereby each major section, such as the `<header>`, `<nav>`, `<main>`, and `<footer>`, has its own CSS. We also used normalize.css from Meyer and created a `root.css` to hold our color palette variables and a `base.css` for the base styles. You can see how we did it [by checking out our css folder](https://github.com/snagy22000/LMD-UI-Framework/blob/gh-pages/src/styles/css/main.css). 



### What Didn't Work Well 

**Availability**: We struggled with team member availability, which seems to be a normal thing with these hackathons. Given how well-communicated we were, availability was fairly well-mitigated. 



**Unexpected Things:**  Our fourth member, Obed Ampah, was a last minute arrival and struggled with availability.  It seems that his previous group disbanded, and that team's members were redistributed to existing teams. We made it work by having him work on a new component, but it seemed that this could have been avoided. 



### Suggestions for Improvement Next Time

We think that one or all of the following would help in the next hackathon: 

- **Pair Programming**: a pair-programming approach would have helped with availability, since any lack of availability from one member of a pair could be handled faster by someone with proper context. It would also improve code and knowledge transfer; 
- **Group Organization before kick-off**: To avoid any unexpected team issues, maybe a check-in process the day before start would be useful to filter people who drop-off or don't show up. Then any rearrangements could be made before the start time, avoiding re-work overhead for a late addition. Another option is to analyze the drop-offs and come up with a group size that could potentially absorb them. Or maybe a combination of the two. 





## Project Members:

* Sebastian Nagy - Project Management, Development
  - Components Card [Link](https://htmlpreview.github.io/?https://github.com/snagy22000/LMD-UI-Framework/blob/cp_cards/cards/index.html)
  - Components Form [Link](https://htmlpreview.github.io/?https://github.com/snagy22000/LMD-UI-Framework/blob/cp_formel/src/index.html)

* Michel Rossier - Product Manager, Development
  - Components Accordion

* Charlie Astrada - Development
  - Components Buttons [Link](https://htmlpreview.github.io/?https://github.com/snagy22000/LMD-UI-Framework/blob/cp_button/button/button.html)
  - Presentation Site [Link](https://snagy22000.github.io/LMD-UI-Framework/) 

## Scope:
Due the days of 24 - 26 the Team has to develop:

* At least 5 UI Components
* 1 Presentation Site

## Branches:

Guideline for Q & A -

* master - add and commit only after testing (one person responsible)



Every Component/Feature will have his own Branch

* cp_button - Branch for the component button
* cp_cards -  Branch for the component cards
* cp_accordion - Branch for the component accordion
* cp_tabs - Branch for the component tabs
* cp_formel - Branch for the component form_elements

* gh-pages - will be used for the Presentation Site


> ! Master Branches is only for Project Documentation.

## Git Development Workflow:


The Master Branch is only for production and will not be touched during the Development.
[GitHub Workflow](https://guides.github.com/introduction/flow/)

1. Each developer checks out the branch corresponding to his work (components or website)

        git checkout cp_button

        git checkout cp_cards


2. Adds commits to the branch 

        git commit -m " writing clear commit messages"

3. Opens a Pull Request  

4. Discusses and reviews the code

5. Deploys to production after successful review

6. Mergees work with master branch

## Color Palette Used

We defined color palette variables for use in our project. These were added to root.css which [can be found here](https://github.com/snagy22000/LMD-UI-Framework/blob/gh-pages/src/styles/css/root.css).  We originally created names based on the colors, but that's not a best practice, so we subsequently modified the names to ignore any specific attributes, like colors. 


## Hackathon Rules:

With the adjustments for our team from [this QA thread](https://qa.moderndeveloper.com/t/hackathon-teams-9-12-13-and-18/2509)

* Don’t copy any code from anywhere. Build your UI elements from scratch.
* Don’t use JavaScript unless you decide you absolutely need it.
* All UI elements must be responsive, but you can work on full responsiveness after the hackathon.
* You don’t have to complete the website during the hackathon. Try to build as many UI elements as possible first; if you have time to build the website or if you feel confident you can complete twenty elements and the website, do both.
* You must submit your project (a link to the GitHub repo and a link to a live webpage with the elements) before 9 p.m. EST on the last day of the hackathon.
* Don't use jQuery or any other library. You don't want to download a big library just to use a tooltip.
* Remember that each teammate must submit a writeup no later than 12 hours after you submit your project.

