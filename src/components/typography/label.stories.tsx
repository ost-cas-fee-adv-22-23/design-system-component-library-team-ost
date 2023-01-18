import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label, LabelSize, LabelProps } from './label';

export default {
  title: 'Components/Typography',
  component: Label,
  argTypes: {
    size: {
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
    htmlFor: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Label>;

interface LabelWithColor extends FC<LabelProps> {
  color: string;
}

const Template: ComponentStory<LabelWithColor> = (args) => (
  <div style={{ color: (args as unknown as LabelWithColor).color }}>
    <Label size={args.size} htmlFor={args.htmlFor}>
      {args.children}
    </Label>
  </div>
);

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  children: 'Label',
  color: '#0f172a',
  htmlFor: 'input-id',
  size: LabelSize.m,
};
DefaultLabel.storyName = 'Label';
DefaultLabel.argTypes = {
  color: {
    control: {
      type: 'color',
      presetColors: [
        { color: '#0f172a', title: 'slate-900' },
        { color: '#DB2777', title: 'pink-600' },
        { color: '#7c3aed', title: 'violet-600' },
      ],
    },
    description: 'The color simulates the usage of the label component and has to be set on the parent element -> See code.',
  },
};
DefaultLabel.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=406%3A47&t=FA0Jm3Ru09rCucgV-1',
  },
};
