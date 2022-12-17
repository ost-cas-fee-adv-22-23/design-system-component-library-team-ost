# Template for CAS FEE ADV Design System

This is a template repository for the CAS FEE ADV design system part.
It is configured to automatically provide GitHub Actions to build and deploy
your design system as a static page and your component library to the
GitHub package registry.

## Getting started

To install the project run:
`npm install` or `npm ci`

This installs:
- storybook
- tailwindcss
- Typescript
- React and ReactDOM
- eslint, prettier
- husky, lint-staged as precommit hooks for linting/prettifying staged files

## Run Project
The local server runs on port 6006. All components with a stories file are compiled to the storybook collection:
`npm run storybook` starts local server: http://localhost:6006/
`npm run build-storybook` publishes the storybook to the dist folder  

## Deployment

This repository is configured to automatically deploy your design system
to GitHub Pages and the component library to the GitHub package registry.

Please ensure the following prerequisites are met:

- Storybook
  - Your `package.json` contains a `build-storybook` script
  - The resulting build is located in the `storybook-static` directory
- Component Library
  - Your `package.json` contains a `build` script
  - When trying with `npm pack`, all your required files are included in the resulting tarball
  - Your `package.json` file contains the correct _scope_ for your package (`@smartive-education`)
  - The `package.json` file contains the correct registry
