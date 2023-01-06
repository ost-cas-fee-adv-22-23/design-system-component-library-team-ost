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

export const DefaultParagraph = Template.bind({});
DefaultParagraph.args = {
  children:
    'Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni.',
  size: ParagraphSizes.m,
  color: '#0f172a',
};
DefaultParagraph.storyName = 'Paragraph';
(DefaultParagraph.argTypes = {
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
      'The color simulates the usage of the paragraph component and has to be set on the parent element -> See code.',
  },
}),
  (DefaultParagraph.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=406%3A47&t=FA0Jm3Ru09rCucgV-1',
    },
  });
