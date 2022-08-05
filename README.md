# Fintual Jobs Scraping

This project was made for personal purposes, and it helps to constantly
watch for published jobs in [Fintual's jobs page](https://jobs.lever.co/fintual)

## TL;DR

```bash
# Clone project
git clone https://github.com/cristobalgvera/fintual-scraping.git
cd fintual-scraping

# Install dependencies
npm i # yarn

# Run project
npm run dev # yarn dev
```

## How it works

The Project looks in jobs page for a specific CSS class holding job position
information and list them.
After that, comes a filtering process based on custom words.
Those words can be manipulated inside [constants' folder](./src/constants).

The result will be a console output with all interesting jobs accordingly with
the previously defined filter.
All interesting jobs are listed showing his title and url.
