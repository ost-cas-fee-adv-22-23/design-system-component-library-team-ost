import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState, FC } from 'react';
import { Textarea, TextareaProps } from './form-textarea';
import { LabelSizes } from '../text/label';

export default {
  title: 'Components/Form',
  component: Textarea,
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
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

export const TextareaWithAriaLabel = Template.bind({});
TextareaWithAriaLabel.args = {
  containerwidth: 500,
  ariaLabel: 'Was gibt es neues?',
  errorMessage: '',
  label: '',
  labelSize: null,
  onChange: null,
  placeholder: 'Was gibt es neues?',
  required: true,
  rows: 5,
  value: '',
};
(TextareaWithAriaLabel.argTypes = {
  containerwidth: {
    control: { type: 'range', min: 300, max: 800, step: 10 },
    description: 'The container width simulates the usage of the input and is not a propertie of the component.',
  },
}),
  (TextareaWithAriaLabel.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=427%3A334&t=BktLD5E2WcBsJoka-1',
    },
  });

export const TextareaWithErrorMessage = Template.bind({});
TextareaWithErrorMessage.args = {
  containerwidth: 500,
  ariaLabel: 'Was gibt es neues?',
  errorMessage: 'Error-Message',
  label: '',
  labelSize: null,
  onChange: null,
  placeholder: 'Was gibt es neues?',
  required: true,
  rows: 5,
  value: '',
};
(TextareaWithErrorMessage.argTypes = {
  containerwidth: {
    control: { type: 'range', min: 300, max: 800, step: 10 },
    description: 'The container width simulates the usage of the input and is not a propertie of the component.',
  },
}),
  (TextareaWithErrorMessage.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=427%3A334&t=BktLD5E2WcBsJoka-1',
    },
  });

export const TextareaWithLabel = Template.bind({});
TextareaWithLabel.args = {
  containerwidth: 500,
  ariaLabel: 'Was gibt es neues?',
  errorMessage: '',
  label: 'Textarea Label',
  labelSize: LabelSizes.m,
  onChange: null,
  placeholder: 'Was gibt es neues?',
  required: true,
  rows: 5,
  value: '',
};
(TextareaWithLabel.argTypes = {
  containerwidth: {
    control: { type: 'range', min: 300, max: 800, step: 10 },
    description: 'The container width simulates the usage of the input and is not a propertie of the component.',
  },
}),
  (TextareaWithLabel.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=427%3A334&t=BktLD5E2WcBsJoka-1',
    },
  });
