import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading, HeadingSizes, HeadingProps } from './heading';

export default {
  title: 'Components/Typography',
  component: Heading,
  argTypes: {
    headingLevel: {
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
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

export const Headings = Template.bind({});
Headings.args = {
  children: 'Überschrift',
  headingLevel: HeadingSizes.h1,
};
(Headings.argTypes = {
  color: {
    control: { type: 'color' },
    description:
      'The color simulates the usage of the heading component and has to be set on the parent element -> See code.',
  },
}),
  (Headings.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=406%3A47&t=FA0Jm3Ru09rCucgV-1',
    },
  });
