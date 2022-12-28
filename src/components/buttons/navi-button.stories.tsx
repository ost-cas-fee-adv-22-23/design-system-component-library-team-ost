import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { IconMumble } from '../icons/icon-mumble';
import { NaviButton } from './navi-button';

export default {
  title: 'Components/Buttons/NaviButton',
  component: NaviButton,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof NaviButton>;

const Template: ComponentStory<typeof NaviButton> = (args) => <NaviButton {...args}></NaviButton>;

export const Default = Template.bind({});
Default.args = {
  icon: <IconMumble />,
  children: 'Label',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};
