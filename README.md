# Daybook

A single-page website with live weather, top news headlines, and a stopwatch — all in one clean, dark-themed UI. No backend, no build step, no API keys required.

## Features

### 🌤️ Weather
- Search any city and get live weather instantly
- Shows current temperature, condition, humidity, wind speed, and local time
- Powered by the free [Open-Meteo](https://open-meteo.com/) API (no API key needed)

### 📰 News
- Displays the latest top headlines
- Click any headline to open the full article on its source site
- Powered by a free, key-free public headlines feed

### ⏱️ Stopwatch
- Start / Pause / Reset controls
- Lap tracking with a scrollable lap list
- Millisecond-accurate display

## Tech Stack

- Pure HTML, CSS, and vanilla JavaScript — a single `index.html` file
- No frameworks, no npm install, no build tools
- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

## Getting Started

### Run locally
1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. That's it — no installation needed

### Deploy on GitHub Pages
1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under "Build and deployment", set **Source** to `Deploy from a branch`
4. Select the `main` branch and `/ (root)` folder, then **Save**
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## Project Structure

```
.
├── index.html   # The entire website (HTML + CSS + JS)
└── README.md    # This file
```

## Notes

- An internet connection is required for the weather and news sections to load data.
- If a city isn't found, double-check the spelling and try again.
- Default city on load is Multan — change the default value in the search box inside `index.html` if you'd like a different one.

## License

Free to use, modify, and share.
