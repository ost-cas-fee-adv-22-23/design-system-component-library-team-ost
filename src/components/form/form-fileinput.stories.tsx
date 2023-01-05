import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Fileinput } from './form-fileinput';

export default {
  title: 'Components/Form/Fileinput',
  component: Fileinput,
  argTypes: {
    errorMessage: { control: 'text' },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Fileinput>;

const Template: ComponentStory<typeof Fileinput> = (args) => {
  const [fileinput, setFileInput] = useState('');
  action(fileinput);

  return <Fileinput {...args} onAddFile={(file: File) => setFileInput(file.name)} />;
};

export const Default = Template.bind({});
Default.args = {
  description: 'JPEG oder PNG, maximal 50 MB',
  errorMessage: '',
  onAddFile: null,
  title: 'Datei hierhin ziehen...',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=521%3A3177&t=FA0Jm3Ru09rCucgV-1',
  },
};

export const WithError = Template.bind({});
WithError.args = {
  description: 'JPEG oder PNG, maximal 50 MB',
  errorMessage: 'Error Message',
  onAddFile: null,
  title: 'Datei hierhin ziehen...',
};
WithError.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=521%3A3177&t=FA0Jm3Ru09rCucgV-1',
  },
};
