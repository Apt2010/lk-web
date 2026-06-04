# assets/fonts/

Place any self-hosted font files here (optional).

Currently the project loads fonts from Google Fonts CDN (in index.html):
  - Playfair Display (700, 800, 900)
  - DM Sans (300, 400, 500, 600, 700)

To self-host fonts (for offline or performance reasons):
1. Download the font files from https://fonts.google.com
2. Place the .woff2 files here, e.g.:
   - playfair-display-bold.woff2
   - dm-sans-regular.woff2
3. Replace the Google Fonts <link> in index.html with @font-face rules in style.css

Example @font-face:
  @font-face {
    font-family: 'DM Sans';
    src: url('../fonts/dm-sans-regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
