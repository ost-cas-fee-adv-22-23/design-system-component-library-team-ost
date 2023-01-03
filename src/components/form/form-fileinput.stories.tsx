import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Fileinput } from './form-fileinput';

export default {
  title: 'Components/Form',
  component: Fileinput,
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

export const FileInput = Template.bind({});
FileInput.args = {
  title: 'Datei hierhin ziehen...',
  description: 'JPEG oder PNG, maximal 50 MB',
};
FileInput.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A56&t=WnTyZV030bId1F3o-4',
  },
};
