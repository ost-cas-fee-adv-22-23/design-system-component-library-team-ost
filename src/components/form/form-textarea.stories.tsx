import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState, FC } from 'react';
import { Textarea, TextareaProps } from './form-textarea';
import { LabelSizes } from '../text/label';

export default {
  title: 'Components/Form',
  component: Textarea,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    labelSize: {
      options: LabelSizes,
      control: { type: 'select' },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Textarea>;

interface TextareaWithContainerWidth extends FC<TextareaProps> {
  //Todo: Write containerWidth in camelCase -> Console Error.
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
  label: '',
  required: true,
  placeholder: 'Was gibt es neues?',
  ariaLabel: 'Was gibt es neues?',
  rows: 5,
  cols: 20,
  errorMessage: '',
  value: '',
};
(TextareaWithAriaLabel.argTypes = {
  containerwidth: { control: { type: 'range', min: 300, max: 800, step: 10 }, description: 'Only Demo Purpose' },
}),
  (TextareaWithAriaLabel.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
    },
  });

export const TextareaWithErrorMessage = Template.bind({});
TextareaWithErrorMessage.args = {
  containerwidth: 500,
  label: '',
  required: true,
  placeholder: 'Was gibt es neues?',
  ariaLabel: 'Was gibt es neues?',
  rows: 5,
  cols: 20,
  errorMessage: 'Error-Message',
  value: '',
};
(TextareaWithErrorMessage.argTypes = {
  containerwidth: { control: { type: 'range', min: 300, max: 800, step: 10 }, description: 'Only Demo Purpose' },
}),
  (TextareaWithErrorMessage.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
    },
  });

export const TextareaWithLabel = Template.bind({});
TextareaWithLabel.args = {
  containerwidth: 500,
  label: 'Textarea Label',
  labelSize: LabelSizes.m,
  ariaLabel: 'Was gibt es neues?',
  required: true,
  placeholder: 'Was gibt es neues?',
  rows: 5,
  cols: 20,
  errorMessage: '',
  value: '',
};
(TextareaWithLabel.argTypes = {
  containerwidth: { control: { type: 'range', min: 300, max: 800, step: 10 }, description: 'Only Demo Purpose' },
}),
  (TextareaWithLabel.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
    },
  });
