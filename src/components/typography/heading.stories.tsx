import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading, HeadingSize, HeadingProps } from './heading';

export default {
  title: 'Components/Typography',
  component: Heading,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    headingLevel: {
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Heading>;

interface HeadingWithColor extends FC<HeadingProps> {
  color: string;
}

const Template: ComponentStory<HeadingWithColor> = (args) => (
  <div style={{ color: (args as unknown as HeadingWithColor).color }}>
    <Heading headingLevel={args.headingLevel}>{args.children}</Heading>
  </div>
);

export const DefaultHeading = Template.bind({});
DefaultHeading.args = {
  children: 'Überschrift',
  color: '#0f172a',
  headingLevel: HeadingSize.h1,
};
DefaultHeading.storyName = 'Heading';
DefaultHeading.argTypes = {
  color: {
    control: {
      type: 'color',
      presetColors: [
        { color: '#0f172a', title: 'slate-900' },
        { color: '#DB2777', title: 'pink-600' },
        { color: '#7c3aed', title: 'violet-600' },
      ],
    },
    description:
      'The color simulates the usage of the heading component and has to be set on the parent element -> See code.',
  },
};
DefaultHeading.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=406%3A47&t=FA0Jm3Ru09rCucgV-1',
  },
};
