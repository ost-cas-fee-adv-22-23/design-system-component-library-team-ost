import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading, HeadingSizes } from './heading';

export default {
  title: 'Components/Typography',
  component: Heading,
  argTypes: {
    headingLevel: {
      options: HeadingSizes,
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = ({ headingLevel, children }) => (
  <div style={{ color: '#475569' }}>
    <Heading headingLevel={headingLevel}>{children}</Heading>
  </div>
);

export const Headings = Template.bind({});
Headings.args = {
  headingLevel: HeadingSizes.h1,
  children: 'Überschrift',
};
Headings.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=406%3A47&t=KwYX2EgXyjwXRi98-0',
  },
};
