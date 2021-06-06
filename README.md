# Notion to Next single page

A simple template to convert your notion page into a webpage.

**This template can only convert a single page at once.**

(Below are instructions, but my grammar sucks!. Sorry for my bad English)

## Setup

### Notion API

<https://www.notion.so/my-integrations>

Create new integration on the link above. Don't forget to copy the token.

Then head to the page you want to convert. Click share and select the integration you created.

**WARNING! If your page is nested, please invite integration for the parent page, not the child page!** Otherwise, the page data cannot be fetched!

```
https://www.notion.so/XXXXX/PAGE_TITLE-YOUR_PAGE_ID_HERE
```

Next, copy the page id in the URL.

### Deploy website

Click the button below, and you'll see deploy settings on vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fsasigume%2Fnotion-to-next-single-page)

Edit the environment variables on the deploy screen.

```
NOTION_TOKEN: <YOUR NOTION TOKEN HERE>
NOTION_PAGE_ID: <YOUR NOTION PAGE ID HERE>
```

Then click "deploy."

## Special Thanks

### An excellent package for rendering Notion blocks

https://www.npmjs.com/package/@9gustin/react-notion-render
