import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconMumble } from '../assets/icon-mumble';

export default {
  title: 'Components/Icon',
  component: IconMumble,
  argTypes: {
    color: { control: { type: 'color', presetColors: ['#0f172a', '#f1f5f9', '#7c3aed'] } },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof IconMumble>;

// todo: dynamisch das Icon in der Story auswählen
const Template: ComponentStory<typeof IconMumble> = ({ size, color }) => (
  <div style={{ color: color }}>
    <IconMumble size={size} />
  </div>
);

export const Icon = Template.bind({});
Icon.args = {
  size: '16',
  color: '#0f172a',
};
Icon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=407%3A101&t=QJIVy1VLDZMd7xuN-4',
  },
};
