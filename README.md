# Portfolio3: A React Portfolio Website Template

**Note:** This project is still under development. The code is not fully polished and commented, so forking at this time might require some more tinkering. This README is also incomplete.

When deciding to redesign my portfolio, I realized that it's unnecessarily time-consuming to hard-code projects. **Portfolio3** programmatically loads portfolio items from a config file rather than having the portfolio items hard-coded in. I am working on updating the fixed code (e.g. for the "What I'm working on now" card on the landing page, colors, etc.) to instead load from a config file as well.

The name "Portfolio3" reflects this project being my third portfolio iteration, with the second being an earlier version of this design with hard-coded content.

## Setup

Assuming node and npm are already installed, you can clone the repo and set up the project using:

1. `git clone https://github.com/szstuff/portfolio3`
2. `cd portfolio3`
3. Install dependencies with `npm install`
4. Run the development build with `npm run dev`

## `portfolioitems.json` Structure

All items should have an `id`, `type`, and `title`.

- `type`: "landingCard" and "filtersCard" specify that the Landing/Filters card should be created. Other values are treated as normal portfolio item cards.
- `title`: Prominent text in the card and text displayed in the header when the item is in focus.
- `applicableFilters`: Array of strings representing under which filters the card should be displayed.
- `date`: Small text above the title.
- `description`: Short text under the title.
- `body`: Long text, intended to be used as a full description.
- `tech`: Dictionary with key-value pairs where keys are subtitles and values are string arrays. Items are displayed as bullet points.
- `links`: Dictionary with key-value pairs where keys denote the type of link (for styling) and values hold the link. "read_more" is a special key and should have a blank string value if redirecting to the default template `DetailCard` component.
- `media`: Array of arrays. Inner array must contain three strings (media description, path to media, orientation). Orientation should be "l" for landscape, "s" for square, or "p" for portrait. Undefined orientation might cause images to stretch or crop unexpectedly.

```json
{
    "portfolioitems": [
        {
            "id": "0",
            "type": "landingCard",
            "name": "landingCard",
            "title": "Stilian Zagorov"
        },
        {
            "id": "1",
            "type": "filtersCard",
            "name": "filtersCard",
            "title": ""
        },
        {
            "id": "2",
            "type": "portfolioItemCard",
            "title": "Portfolio3",
            "applicableFilters": ["Design", "Software", "Favorites", "Published", "React"],
            "date": "September 2024",
            "description": "The website you're on now!",
            "body": "Open Source portfolio website that programmatically fills in portfolio items. Designed to be easily forkable and reusable by creating a JSON file with the items to display. Customizing other aspects such as color palettes will also be done through a configuration file (soon).",
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
        }
    ]
}
```
