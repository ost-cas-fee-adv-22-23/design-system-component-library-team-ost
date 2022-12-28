import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState, FC } from 'react';
import { Input, InputTypes, InputProps } from './form-input';
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

interface InputWithContainerWidth extends FC<InputProps> {
  //Todo: Write containerWidth in camelCase -> Console Error.
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

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  containerwidth: 500,
  label: 'Name',
  labelSize: LabelSizes.m,
  type: InputTypes.text,
  required: true,
  placeholder: 'Dein Name hier',
  errorMessage: '',
  value: '',
  icon: <IconMumble />,
};
(InputWithIcon.argTypes = {
  containerwidth: { control: { type: 'range', min: 300, max: 800, step: 10 }, description: 'Only Demo Purpose' },
}),
  (InputWithIcon.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
    },
  });

export const InputWithoutIcon = Template.bind({});
InputWithoutIcon.args = {
  containerwidth: 500,
  label: 'Name',
  labelSize: LabelSizes.m,
  type: InputTypes.text,
  required: true,
  placeholder: 'Dein Name hier',
  errorMessage: '',
  value: '',
};
(InputWithoutIcon.argTypes = {
  containerwidth: { control: { type: 'range', min: 300, max: 800, step: 10 }, description: 'Only Demo Purpose' },
}),
  (InputWithoutIcon.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
    },
  });

export const InputWithErrorMessage = Template.bind({});
InputWithErrorMessage.args = {
  containerwidth: 500,
  label: 'Name',
  labelSize: LabelSizes.m,
  type: InputTypes.text,
  required: true,
  placeholder: 'Dein Name hier',
  errorMessage: 'Error-Message',
  value: '',
};
(InputWithErrorMessage.argTypes = {
  containerwidth: { control: { type: 'range', min: 300, max: 800, step: 10 }, description: 'Only Demo Purpose' },
}),
  (InputWithErrorMessage.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
    },
  });
