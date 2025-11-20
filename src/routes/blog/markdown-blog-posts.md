---
title: 'Writing Blog Posts in Markdown'
description: 'How to set up a markdown-powered blog with SvelteKit and mdsvex'
date: '2025-01-18'
---

# Writing Blog Posts in Markdown

Markdown is the perfect format for writing blog posts. It's simple, readable, and easy to convert to HTML.

## Why Markdown?

Markdown offers several advantages for blogging:

- **Simple Syntax**: Easy to learn and write
- **Portable**: Plain text files work everywhere
- **Version Control Friendly**: Perfect for Git
- **Focus on Content**: No distraction from formatting

## Setting Up mdsvex

To use markdown in SvelteKit, we use [mdsvex](https://mdsvex.com/), which allows us to write Svelte components in markdown files.

Installation is straightforward:

```bash
npm install -D mdsvex
```

Then configure it in your `svelte.config.js`:

```javascript
import { mdsvex } from 'mdsvex';

const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md']
    })
  ]
};
```

## Frontmatter for Metadata

Use YAML frontmatter to add metadata to your posts:

```yaml
---
title: 'Post Title'
description: 'Post description'
date: '2025-01-18'
---
```

This metadata can be accessed in your Svelte components to create rich blog listing pages.

## The Result

With this setup, you get:

1. Easy content authoring
2. Full Svelte component support in markdown
3. Automatic syntax highlighting
4. Fast, static builds

Perfect for a personal blog!
