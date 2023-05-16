import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LogoutButton } from './logout-button';

export default {
  title: 'Components/Buttons/Navi Buttons/Logout',
  component: LogoutButton,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof LogoutButton>;

const Template: ComponentStory<typeof LogoutButton> = (args) => <LogoutButton {...args}></LogoutButton>;

export const Logout = Template.bind({});
Logout.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};
