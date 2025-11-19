# GitHub Actions Workflows

This directory contains GitHub Actions workflows for building and deploying the site.

## Workflows

### `deploy.yml` - Production Deployment

Automatically deploys the site to GitHub Pages when code is merged to the `main` branch.

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Environment:**
- Deployed to: `github-pages` environment
- URL: `https://<username>.github.io/<repo-name>/`

### `preview.yml` - PR Preview Deployment

Creates preview deployments for pull requests, allowing you to review changes before merging.

**Triggers:**
- Pull request opened
- New commits pushed to PR
- Pull request reopened

**Features:**
- Each PR gets its own preview URL: `https://<username>.github.io/<repo-name>/pr-<number>/`
- Automatic comment on PR with preview link
- Preview updates automatically with new commits
- Preview artifacts retained for 7 days

## Setup Instructions

To enable GitHub Pages for this repository:

1. Go to repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The site will be automatically deployed when you push to `main`

### Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `static/` directory with your domain name
2. Update `svelte.config.js` to remove the `BASE_PATH` configuration:
   ```js
   paths: {
     base: ''
   }
   ```
3. Configure your DNS provider to point to GitHub Pages

### Required Permissions

The workflows require the following permissions (already configured):
- `contents: read` - Read repository contents
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - Authenticate with GitHub Pages
- `pull-requests: write` - Comment on PRs (preview workflow)

## Local Development

To test the build locally:

```bash
npm run build
npm run preview
```

To test with the same base path as production:

```bash
BASE_PATH=/clay.frrs.dev_new npm run build
npm run preview
```
