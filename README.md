# damianevans.net

My personal website, built with [Astro](https://astro.build) and published on GitHub Pages.

## Editing

Every page is a Markdown file in `src/pages/`. The file's path is its address, so `src/pages/writing/phd.md` is `damianevans.net/writing/phd/`. The block at the top of each file sets the title, the description search engines show, and an optional `intro` line and `date`.

Images, audio and PDFs go in `public/media/` and are linked as `/media/file-name.jpg`.

A note that sits in the margin on wide screens is written as `<span class="sidenote">…</span>`.

The look of the whole site is in `src/styles/global.css` (colours are at the top) and `src/layouts/Base.astro` (header, menu, footer).

## Previewing

    npm install      # once
    npm run dev      # then open http://localhost:4321

## Publishing

Push to `main`. GitHub builds the site and publishes it within a minute or two (see the Actions tab).
