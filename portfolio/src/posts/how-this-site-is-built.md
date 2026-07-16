---
title: "How this site is built"
date: "2026-07-10"
excerpt: "The stack behind this site, and why I picked a markdown-file blog over a CMS."
---

A few people have asked what this site runs on, so here's the short version.

## The stack

- **Vite + React** for the build tooling and components
- **Tailwind CSS v4** for styling, using its new CSS-first `@theme` configuration
  instead of a `tailwind.config.js`
- **Framer Motion** for the scroll reveals and the small hover interactions
- **React Router**, added specifically so this blog could have real, shareable URLs
  per post instead of everything living on one page

## Why markdown files instead of a CMS

I didn't want to stand up a database or pay for a headless CMS just to publish the
occasional post. Every post here is a plain `.md` file with a small frontmatter block
at the top for the title, date, and excerpt. Adding a new post means adding a new file
— nothing else in the site needs to change.

It's not going to scale to hundreds of posts with tags, search, and pagination. It
doesn't need to. It scales to exactly what a personal blog needs.

## Deployment

The site builds to static files and deploys two places: GitHub Pages (via Actions,
on every push to `main`) and Vercel. Same build, two hosts — mostly redundancy, partly
because I like comparing how each one handles things.
