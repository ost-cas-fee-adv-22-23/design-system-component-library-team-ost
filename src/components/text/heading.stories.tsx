import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './heading';

export default {
  title: 'Foundation/Typography',
  component: Heading,
  argTypes: {
    headingLevel: {
      options: ['h1', 'h2', 'h3', 'h4'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args}>Überschrift</Heading>;

export const Headings = Template.bind({});
Headings.args = {
  headingLevel: 'h1',
  children: 'Überschrift',
};
Headings.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=406%3A47&t=KwYX2EgXyjwXRi98-0',
  },
};
