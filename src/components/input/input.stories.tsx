import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Input, InputTypes } from './input';
import { LabelSizes } from '../text/label';
import { IconMumble } from '../icons/icon-mumble';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    labelSize: {
      options: LabelSizes,
      control: { type: 'select' },
    },
    type: {
      options: InputTypes,
      control: { type: 'select' },
    },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}></Input>;

export const InputWithoutIcon = Template.bind({});
InputWithoutIcon.args = {
  label: 'Name',
  labelSize: LabelSizes.m,
  type: InputTypes.text,
  required: true,
  placeholder: 'Dein Name hier',
  icon: <IconMumble />,
};
InputWithoutIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};
