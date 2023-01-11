# Design System Component Library Team Ost

![Deploy Storybook](https://github.com/smartive-education/design-system-component-library-team-ost/actions/workflows/storybook.yml/badge.svg)
![Release Component Library](https://github.com/smartive-education/design-system-component-library-team-ost/actions/workflows/release.yml/badge.svg)

This Library is the result of the first part of the CAS Frontend Engineering
Advanced course. It will be used in the second part for building our very
own Twitter Clone - Mumble. It is configured to automatically provide GitHub
Actions to build and deploy the design system as a static page and the component
library to the GitHub package registry.

## Installation

### Create Next.js App

```console
npx create-next-app@latest --typescript
```

Additional information can be found [here](https://nextjs.org/docs/getting-started).

### Authenticating GitHub Registry

1. Create a personal GitHub access token.
2. Create a new ~/.npmrc file if one doesn't exist.
3. Include the following line, replacing TOKEN with your personal access token.

```console
@smartive-education:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN
```

Additional information can be found [here](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).

### Install Package from GitHub Registry

```console
npm install @smartive-education/design-system-component-library-team-ost@latest
```

### Setup Tailwind CSS

1. Install Tailwind CSS
2. Make your app use the Tailwind presets of this Design System. Include the following code snippet
   to the tailwind.config.js.

```javascript
presets: [
    require('@smartive-education/design-system-component-library-team-ost/tailwind-config')
],
```

3. Make this Component Library use the Tailwind CSS of the App. Include the following code snippet
   to the tailwind.config.js.

```javascript
content: [
    ...
    "./node_modules/@smartive-education/design-system-component-library-team-ost/**/*.{js,ts,jsx,tsx}"
],
```

Additional information can be found [here](https://tailwindcss.com/docs/guides/nextjs).

### Install Google Font

Add Google Font "Poppins", Medium, Semibold and Bold to the App. So you have the advantage of the built-in
[font optimization](https://nextjs.org/docs/basic-features/font-optimization) feature.

## Usage

Example usage of the TextButton Component:

```javascript
import { TextButton, TextButtonColors, TextButtonSizes } from '@smartive-education/design-system-component-library-team-ost';

const MyComponent = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-green-700 p-xxl">Hello World</h1>
      <TextButton
        color={TextButtonColors.slate}
        size={TextButtonSizes.l}
        onClick={() => {
          alert('onButtonClick');
        }}
      >
        Click me
      </TextButton>
    </>
  );
};

export default MyComponent;
```

## Development

### Getting started

To install the project run:
`npm install` or `npm ci`

This installs:

- storybook
- tailwindcss
- Typescript
- React and ReactDOM
- eslint, prettier
- husky, lint-staged as precommit hooks for linting/prettifying staged files
- dependency cruiser for validate and visualise dependencies

### Run Project

The local server runs on port 6006. All components with a stories file are compiled to the storybook collection:
`npm run storybook` starts local server: http://localhost:6006/
`npm run build-storybook` publishes the storybook to the dist folder

## Deployment

This repository is configured to automatically deploy the Design System
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

## Live Demo

The latest version of the Design System is available [here](https://smartive-education.github.io/design-system-component-library-team-ost).

## Maintainer

- Martin Thomann
- Nando Schär
