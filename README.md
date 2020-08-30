# CSAI Docs

**[Check out the live site](https://kind-lichterman-90f7d9.netlify.app)**

## Intention

The one stop shop for CSAI documentation and onboarding. We want to make information accessible throughout the club and provide members with the tools to ramp up quickly and get to work on the team of their choosing.

## Contributing

If you have knowledge to share or you've got a bug to squash, please submit a PR!

### Setup:

Lets get you up and running! If you haven't already, [install node](https://nodejs.org/en/) before proceeding.

1. Clone the repo:

```
git clone https://github.com/calpoly-csai/csai-docs.git
```

2. Navigate to project:

```
cd csai-docs
```

3. Install associated libraries:

```
npm install
```

4. Start the dev server:

```
npm run dev
```

5. Look in the readout from the previous command and find the `localhost` link. Copy and paste it into your favorite browser.

From here, you can make changes to the project files in a code editor and see the updates render live! Writing pages is as easy as creating a `.mdx` file and defining the associated title and route in the document header:

```
---
name: React Poem
route: /react-poem
---

# React Oh How I Love Thee - A Web Developer Poem:
lorem ipsum :)

```

### Useful Resources

This page is built on a powerful stack of React-based packages that you can leverage in you documentation:

- For more info on document formatting and site structure, see the [Docz docs](https://www.docz.site/docs/getting-started#develop).
- For design system and theme information, see [Theme UI](https://theme-ui.com/getting-started)
- For CSS-In-JS styling, use [Emotion](https://emotion.sh/docs/introduction)
- Wanna dive into the deep end and tweak some static site config, check out [Gatsby](https://www.gatsbyjs.com/)

You can import these packages directly into your page or component to expose some desired functionality:

```
/** @jsx jsx */ // Comment used to enable Theme UI sx styling
import { useState, useEffect, useRef, useCallback } from "react"; // Some boilerplate react functionality
import { css, keyframes } from "@emotion/core"; // Pull in emotion for some styling
import { jsx } from "theme-ui"; // Theme UI for some theming :P
```

### Tips and Tricks

#### File Aliases

Accessing components or resources from a page with a relative path is a pain, so I added a couple aliases to make the job easier:

| alias  | definition        | example                                                  |
| ------ | ----------------- | -------------------------------------------------------- |
| @      | /src directory    | import Project from "@/components/Project"               |
| public | /public directory | import tensorflowIcon from "public/icons/tensorflow.png" |

### FAQ

**_After adding/deleting a file, the build broke:_**

1. Try restarting the `npm run dev` process.
2. Could be a caching problem. Delete the `/.docz/.cache` folder and restart dev server.

**_My code edits aren't showing up on the localhost dev server:_**

1. Try restarting the `npm run dev` process.
2. Browsers will often cache pages to avoid unnecessary fetches. To bust the cache, you can reload the page, open the page in a new window or restart your entire browser.
