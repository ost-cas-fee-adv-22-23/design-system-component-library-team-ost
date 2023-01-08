import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SettingsButton } from './settings-button';

export default {
  title: 'Components/Buttons/Navi Buttons/Settings',
  component: SettingsButton,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof SettingsButton>;

const Template: ComponentStory<typeof SettingsButton> = (args) => <SettingsButton {...args}></SettingsButton>;

export const Settings = Template.bind({});
Settings.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};
