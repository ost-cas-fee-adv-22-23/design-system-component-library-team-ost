import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState, FC } from 'react';
import { Textarea, TextareaProps } from './form-textarea';
import { LabelSize } from '../typography/label';

export default {
  title: 'Components/Form/Textarea',
  component: Textarea,
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
    },
    containerwidth: {
      control: { type: 'range', min: 300, max: 800, step: 10 },
      description: 'The container width simulates the usage of the textarea and is not a property of the component.',
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
    rows: {
      control: { type: 'number' },
      description: 'Specifies the visible height of a text area, in lines.',
    },
    value: {
      control: { type: 'text' },
    },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Textarea>;

interface TextareaWithContainerWidth extends FC<TextareaProps> {
  containerwidth: number;
}

const Template: ComponentStory<TextareaWithContainerWidth> = (args) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setInput(args.value);
  }, [args.value]);

  useEffect(() => {
    setError(args.errorMessage ? args.errorMessage : '');
  }, [args.errorMessage]);

  return (
    <div style={{ width: (args as unknown as TextareaWithContainerWidth).containerwidth + 'px' }}>
      <Textarea {...args} value={input} errorMessage={error} onChange={(e) => setInput(e.currentTarget.value)} />
    </div>
  );
};

export const WithAriaLabel = Template.bind({});
WithAriaLabel.args = {
  ariaLabel: 'Was gibt es neues?',
  containerwidth: 500,
  errorMessage: '',
  label: '',
  labelSize: null,
  name: 'new',
  onChange: null,
  placeholder: 'Was gibt es neues?',
  required: true,
  rows: 5,
  value: '',
};
WithAriaLabel.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=427%3A334&t=BktLD5E2WcBsJoka-1',
  },
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  ariaLabel: 'Was gibt es neues?',
  containerwidth: 500,
  errorMessage: 'Error-Message',
  label: '',
  labelSize: null,
  name: 'new',
  onChange: null,
  placeholder: 'Was gibt es neues?',
  required: true,
  rows: 5,
  value: '',
};
WithErrorMessage.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=427%3A334&t=BktLD5E2WcBsJoka-1',
  },
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ariaLabel: 'Was gibt es neues?',
  containerwidth: 500,
  errorMessage: '',
  label: 'Textarea Label',
  labelSize: LabelSize.m,
  name: 'new',
  onChange: null,
  placeholder: 'Was gibt es neues?',
  required: true,
  rows: 5,
  value: '',
};
WithLabel.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=427%3A334&t=BktLD5E2WcBsJoka-1',
  },
};
