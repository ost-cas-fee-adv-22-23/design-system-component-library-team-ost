import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MumbleViolet } from './mumble-violet';

export default {
  title: 'Components/Logo',
  component: MumbleViolet,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof MumbleViolet>;

// todo: dynamisch das Icon in der Story auswählen
const Template: ComponentStory<typeof MumbleViolet> = () => <MumbleViolet />;

export const Logos = Template.bind({});
Logos.args = {};
Logos.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=437%3A1020&t=tlJtbjJyXZq0OW7Z-0',
  },
};
