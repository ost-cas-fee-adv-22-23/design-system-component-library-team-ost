import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState, FC } from 'react';
import { Input, InputTypes, InputProps } from './form-input';
import { LabelSizes } from '../typography/label';
import { IconMumble } from '../icons/icon-mumble';
import { IconEye } from '../icons/icon-eye';

export default {
  title: 'Components/Form/Input',
  component: Input,
  argTypes: {
    containerwidth: {
      control: { type: 'range', min: 300, max: 800, step: 10 },
      description: 'The container width simulates the usage of the input and is not a property of the component.',
    },
    errorMessage: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    labelSize: {
      control: { type: 'select' },
    },
    name: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    type: {
      control: { type: 'radio' },
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

interface InputWithContainerWidth extends FC<InputProps> {
  containerwidth: number;
}

const Template: ComponentStory<InputWithContainerWidth> = (args) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setInput(args.value);
  }, [args.value]);

  useEffect(() => {
    setError(args.errorMessage ? args.errorMessage : '');
  }, [args.errorMessage]);

  return (
    <div style={{ width: (args as unknown as InputWithContainerWidth).containerwidth + 'px' }}>
      <Input {...args} value={input} errorMessage={error} onChange={(e) => setInput(e.currentTarget.value)} />
    </div>
  );
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  containerwidth: 500,
  errorMessage: '',
  icon: <IconMumble />,
  label: 'Name',
  labelSize: LabelSizes.m,
  name: 'name',
  onChange: null,
  placeholder: 'Dein Name hier',
  required: true,
  type: InputTypes.text,
  value: '',
};
WithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=BktLD5E2WcBsJoka-1',
  },
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  containerwidth: 500,
  errorMessage: '',
  icon: null,
  label: 'Name',
  labelSize: LabelSizes.m,
  name: 'name',
  onChange: null,
  placeholder: 'Dein Name hier',
  required: true,
  type: InputTypes.text,
  value: '',
};
WithoutIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=BktLD5E2WcBsJoka-1',
  },
};

export const Password = Template.bind({});
Password.args = {
  containerwidth: 500,
  errorMessage: '',
  icon: <IconEye />,
  label: 'Password',
  labelSize: LabelSizes.m,
  name: 'password',
  onChange: null,
  placeholder: 'Dein Passwort',
  required: true,
  type: InputTypes.password,
  value: '',
};
Password.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=BktLD5E2WcBsJoka-1',
  },
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  containerwidth: 500,
  errorMessage: 'Error-Message',
  icon: null,
  label: 'Name',
  labelSize: LabelSizes.m,
  name: 'name',
  onChange: null,
  placeholder: 'Dein Name hier',
  required: true,
  type: InputTypes.text,
  value: '',
};
ErrorMessage.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=BktLD5E2WcBsJoka-1',
  },
};
