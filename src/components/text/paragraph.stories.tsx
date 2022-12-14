import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph, ParagraphSizes } from './paragraph';

export default {
  title: 'Components/Typography',
  component: Paragraph,
  argTypes: {
    size: {
      options: ParagraphSizes,
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = ({ size, children }) => (
  <div className="text-slate-600">
    <Paragraph size={size}>{children}</Paragraph>
  </div>
);

export const Paragraphs = Template.bind({});
Paragraphs.args = {
  size: ParagraphSizes.m,
  children: 'Paragraph',
};
Paragraphs.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=406%3A47&t=KwYX2EgXyjwXRi98-0',
  },
};
