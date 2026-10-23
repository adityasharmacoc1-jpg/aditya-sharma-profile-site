# Aditya Sharma — Profile Site

[webpage](https://adityasharmacoc1-jpg.github.io/aditya-sharma-profile-site/)

A responsive, self-contained profile site that works from a local folder without a build step or network dependencies.

## Run the folder version

Keep `index.html`, `styles.css`, `script.js`, `data.js`, and `images/` together. Open `index.html` in a modern browser. The site runs locally; contact links open only when a visitor selects one.

## Design

The site keeps the current light blue profile design. Its layout, portrait glow, animated headings, and social icon links adapt to mobile and desktop screens.

## Customize the profile and gallery

Edit `data.js` to change the name, tagline, portrait, profile text, education, experience, project entries, apps and websites, contact details, and footer. Add project cards to the `projects` array within the right group/category in `SITE.projectGroups`. Add app or website cards to `SITE.appsAndWebsites`. Location and languages live in `SITE.about.personalDetails`.

### Add project screenshots

Copy screenshots into `images/` and attach them to a project or category in `data.js`. They appear as tall preview tiles; selecting a tile opens a larger view that can be closed with Escape or the close button. Example on a category:

```js
{ title: "Excel Project", logo: "excel", screenshots: [
  { src: "images/excel-dashboard.png", alt: "Excel dashboard", caption: "Monthly finance dashboard" },
  { src: "images/excel-report.png", alt: "Excel report", caption: "Summary report" }
], projects: [] }
```

You can also add `screenshots: [{ src: "images/project-page.png", caption: "Project preview" }]` to an individual project entry. Use local image files for offline viewing and for the standalone HTML build.

To use your own gallery photos, copy image files into `images/`, then add entries to `SITE.gallery` in `data.js`, for example:

```js
gallery: [
  { src: "images/morning-run.jpg", caption: "Morning run" },
  { src: "images/study-desk.jpg", caption: "Study desk" }
],
```

Your photos replace the built-in gallery artwork in the Neo-Brutalism theme. Leave `gallery: []` to use the built-in illustrations. Keep images reasonably compressed for faster loading and for the single-file version.

## Print

Use your browser's Print command (Ctrl+P on Windows/Linux or Command+P on macOS), then choose a paper size and destination in the print dialog. Use the Current theme for a clean, light print; enable background graphics if you want theme colors. The Liquid Glass theme also includes print rules that remove navigation and controls.

## Publish on GitHub Pages

1. Create a GitHub repository and upload the complete `my-profile-site` folder contents, keeping the `themes/` and `images/` folders in place.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the branch containing the site and the repository root as the folder, then save.
4. Wait for GitHub Pages to publish and open the URL shown in the Pages settings.

## Contact links

Edit the email address and social profile URLs in `SITE.contact` in `data.js`. The icons are drawn locally, so the site does not fetch logos from the internet.

No external fonts, scripts, analytics, or images are required.
