import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconMumble } from './icon-mumble';
import { IconSizes } from './icon-props';

export default {
  title: 'Components/Icon',
  component: IconMumble,
  argTypes: {
    size: {
      options: IconSizes,
      control: { type: 'select' },
    },
    // color: { control: { type: 'color', presetColors: ['#0f172a', '#f1f5f9', '#7c3aed'] } },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof IconMumble>;

// todo: dynamisch das Icon in der Story auswählen
const Template: ComponentStory<typeof IconMumble> = ({ size }) => (
  <div style={{ color: "#475569" }}>
    <IconMumble size={size} />
  </div>
);

export const Icons = Template.bind({});
Icons.args = {
  size: IconSizes.m,
};
Icons.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=407%3A101&t=QJIVy1VLDZMd7xuN-4',
  },
};
