import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph, ParagraphSizes, ParagraphProps } from './paragraph';

export default {
  title: 'Components/Typography',
  component: Paragraph,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Paragraph>;

interface ParagrpahWidthColor extends FC<ParagraphProps> {
  color: string;
}

const Template: ComponentStory<ParagrpahWidthColor> = (args) => (
  <div style={{ color: (args as unknown as ParagrpahWidthColor).color }}>
    <Paragraph size={args.size}>{args.children}</Paragraph>
  </div>
);

export const Paragraphs = Template.bind({});
Paragraphs.args = {
  children: 'Paragraph',
  size: ParagraphSizes.m,
};
(Paragraphs.argTypes = {
  color: {
    control: { type: 'color' },
    description:
      'The color simulates the usage of the paragraph component and has to be set on the parent element -> See code.',
  },
}),
  (Paragraphs.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=406%3A47&t=FA0Jm3Ru09rCucgV-1',
    },
  });
