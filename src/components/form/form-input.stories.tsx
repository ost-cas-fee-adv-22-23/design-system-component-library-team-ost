import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Input, InputTypes } from './form-input';
import { LabelSizes } from '../text/label';
import { IconMumble } from '../icons/icon-mumble';

export default {
  title: 'Components/Form',
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
    errorMessage: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setInput(args.value);
  }, [args.value]);

  useEffect(() => {
    setError(args.errorMessage ? args.errorMessage : '');
  }, [args.errorMessage]);

  return <Input {...args} value={input} errorMessage={error} onChange={(e) => setInput(e.currentTarget.value)}></Input>;
};

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  label: 'Name',
  labelSize: LabelSizes.m,
  type: InputTypes.text,
  required: true,
  placeholder: 'Dein Name hier',
  errorMessage: '',
  value: '',
  icon: <IconMumble />,
};
InputWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const InputWithoutIcon = Template.bind({});
InputWithoutIcon.args = {
  label: 'Name',
  labelSize: LabelSizes.m,
  type: InputTypes.text,
  required: true,
  placeholder: 'Dein Name hier',
  errorMessage: '',
  value: '',
};
InputWithoutIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const InputWithErrorMessage = Template.bind({});
InputWithErrorMessage.args = {
  label: 'Name',
  labelSize: LabelSizes.m,
  type: InputTypes.text,
  required: true,
  placeholder: 'Dein Name hier',
  errorMessage: 'Error-Message',
  value: '',
};
InputWithErrorMessage.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};
