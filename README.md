# CSAI Docs

## Intention

The one stop shop for CSAI documentation and onboarding. We want to make information accessible throughout the club and provide members with the tools to ramp up quickly and get to work on the team of their choosing.

## Contributing

If you have knowledge to share or you've got a bug to squash, please submit a PR!

### Setup:

Lets get you up and running! If you haven't already, [install node](https://nodejs.org/en/) before proceeding.

1. Clone the repo:

```
git clone [repo]
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

For more info on document formatting, see the [Docz docs](https://www.docz.site/docs/getting-started#develop).
