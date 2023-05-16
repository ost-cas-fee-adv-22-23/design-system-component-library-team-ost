import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MumbleViolet } from './mumble-violet';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Logo',
  component: MumbleViolet,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof MumbleViolet>;

const Template: ComponentStory<typeof MumbleViolet> = (args) => <MumbleViolet {...args} />;

export const LogoWithClick = Template.bind({});
LogoWithClick.args = {
  ariaLabel: 'Go to mumble',
  onClick: action('onLogoClick'),
};
LogoWithClick.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=437%3A1020&t=tlJtbjJyXZq0OW7Z-0',
  },
};

export const LogoWithoutClick = Template.bind({});
LogoWithoutClick.args = {
  ariaLabel: undefined,
  onClick: undefined,
};
LogoWithoutClick.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=437%3A1020&t=tlJtbjJyXZq0OW7Z-0',
  },
};
