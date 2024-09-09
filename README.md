# Portfolio3: A React Portfolio Website Template

When deciding to redesign my portfolio, I realized that it's unnecessarily time-consuming to hard-code projects. **Portfolio3** programmatically loads portfolio items from a config file rather than having the portfolio items hard-coded in.

The name "Portfolio3" simply reflects this project being my third portfolio iteration, with the second being an earlier version of this design with hard-coded content.

## Planned Features and Improvements (after finalising general components/design)

- [ ] Populate landing page info (name, social links, highlighted projects, etc) from config file to facilitate reusing 
- [ ] Generate long text content in a normal text-body, a scroll-view or a list view based on config parameters (as opposed to hard-coding in that e.g. section with key "tech stack" is a list)
- [ ] Set colors using config parameters
- [ ] Refactor and optimize sloppy parts of the code 
- [ ] Make proper documentation to facilitate reuse of the project 

## Setup
Assuming node and npm are already installed, you can clone the repo and set up the project using:

1. `git clone https://github.com/szstuff/portfolio3`
2. `cd portfolio3` 
3. install dependencies with `node install` 
4. run dev build with `node run dev`


## portfolioitems.json structure
All items should have an id, type and title. 

type: landingCard and filtersCard specify that the Landing/filters card should be created. other values are treated like a normal portfolio item card. 
title: prominent text in card and text displayed in header when item is in focus
applicableFilters: array of strings representing under which filters the card should be displayed
date: small text above title 
description: short text under title
body: long text, intended to be used as a full description
tech: dictionary with key-value pairs where keys are a subtitle and values are string arrays. Items are displayed as bullet points. 
links: dictionary with key-value pairs where keys denote the type of link (for styling) and values hold the link. Keys that don't use reserved names will instead have the key used as the button text. "read_more" is a special key and should have a blank string value if redirecting to the default template DetailCard component.  
media: array of arrays. Inner array must contain three strings (media description to show over the media, path to media, orientation). Description can be blank string. Orientation should be set to "l" for landscape, "s" for square or "p" for portrait. Undefined orientation might cause images to stretch or crop unexpectedly. 

{ 
    "portfolioitems": [
        {   "id": "0", "type": "landingCard",
            "name": "landingCard",
            "title": "Stilian Zagorov"
    }, 
        {   "id": "1", "type": "filtersCard",
            "name": "filtersCard",
            "title": ""
            }, 
        {
            "id": "2", "type": "portfolioItemCard", 
            "title": "Portfolio3",
            "applicableFilters": ["Design", "Software", "Favorites", "Published", "React"], 
            "date": "September 2024",
            "description": "The website you're on now!",
            "body": "Open Source portfolio website that programatically fills in portfolio items. Designed to be easily forkable and reusable creating a JSON file with the items to display. Customising other aspects such as the color palettes will also be done through a configuration file (soon).",
            "tech": {
                "": ["React", "Vite", "Tailwind", "Self-hosted"]
            }, 
            "links": {
                "github": "https://github.com/szstuff/portfolio3",
                "read_more": ""
            },
            "media": [
                ["", "snake.jpg", "s"]
            
            ]
        },
        ... 