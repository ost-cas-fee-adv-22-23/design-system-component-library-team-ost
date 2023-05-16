import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { IconMumble } from '../../icons/icon-mumble';
import { NaviButton } from './navi-button';

export default {
  title: 'Components/Buttons/Navi Buttons',
  component: NaviButton,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof NaviButton>;

const Template: ComponentStory<typeof NaviButton> = (args) => <NaviButton {...args}></NaviButton>;

export const Default = Template.bind({});
Default.args = {
  ariaLabel: undefined,
  children: 'Label',
  icon: <IconMumble />,
  onClick: action('onClick'),
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};
