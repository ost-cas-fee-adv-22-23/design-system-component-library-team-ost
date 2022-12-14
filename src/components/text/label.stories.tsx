import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label, LabelSizes } from './label';

export default {
  title: 'Components/Typography',
  component: Label,
  argTypes: {
    size: {
      options: LabelSizes,
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

const Template: ComponentStory<typeof Label> = ({ size, children, htmlFor }) => (
  <div className="text-slate-600">
    <Label size={size} htmlFor={htmlFor}>
      {children}
    </Label>
  </div>
);

export const Labels = Template.bind({});
Labels.args = {
  size: LabelSizes.m,
  children: 'Label',
  htmlFor: 'input-id',
};
Labels.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=406%3A47&t=KwYX2EgXyjwXRi98-0',
  },
};
