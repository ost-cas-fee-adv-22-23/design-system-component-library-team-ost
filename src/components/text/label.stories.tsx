import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label, LabelSizes, LabelProps } from './label';

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

export const Labels = Template.bind({});
Labels.args = {
  size: LabelSizes.m,
  children: 'Label',
  htmlFor: 'input-id',
};
(Labels.argTypes = {
  color: {
    control: { type: 'color' },
    description: 'The color simulates the usage of the label component and has to be set on the parent element -> See code.',
  },
}),
  (Labels.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=406%3A47&t=FA0Jm3Ru09rCucgV-1',
    },
  });
