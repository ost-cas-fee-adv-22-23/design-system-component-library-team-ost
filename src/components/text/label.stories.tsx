import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from './label';

export default {
  title: 'Foundation/Typography',
  component: Label,
  argTypes: {
    size: {
      options: ['S', 'M', 'L', 'XL', 'Placeholder'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = ({ size, children }) => <Label size={size}>{children}</Label>;

export const Labels = Template.bind({});
Labels.args = {
  size: 'M',
  children: 'Label',
};
Labels.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=406%3A47&t=KwYX2EgXyjwXRi98-0',
  },
};
