// MyComponent.story.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading } from './heading';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Foundation/Typography',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const HeadingH1: ComponentStory<typeof Heading> = () => <Heading headingLevel='h1'>Überschrift H1</Heading>;
export const HeadingH2: ComponentStory<typeof Heading> = () => <Heading headingLevel='h2'>Überschrift H2</Heading>;
export const HeadingH3: ComponentStory<typeof Heading> = () => <Heading headingLevel='h3'>Überschrift H3</Heading>;
export const HeadingH4: ComponentStory<typeof Heading> = () => <Heading headingLevel='h4'>Überschrift H4</Heading>;