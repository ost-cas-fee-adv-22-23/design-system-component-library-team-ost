import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { IconMumble } from '../icons/icon-mumble';
import { IconButton, IconButtonColor, IconButtonSize } from './icon-button';

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      options: IconButtonColor,
      control: { type: 'radio' },
    },
    size: {
      options: IconButtonSize,
      control: { type: 'radio' },
    },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args}></IconButton>;

export const Slate = Template.bind({});
Slate.args = {
  ariaLabel: 'Start mumble',
  color: IconButtonColor.slate,
  icon: <IconMumble />,
  size: IconButtonSize.l,
};
Slate.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};
