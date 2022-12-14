import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { IconMumble } from '../icons/icon-mumble';
import { IconButton, IconButtonColors, IconButtonSizes } from './icon-button';

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      options: IconButtonColors,
      control: { type: 'radio' },
    },
    size: {
      options: IconButtonSizes,
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
  color: IconButtonColors.slate,
  size: IconButtonSizes.l,
  icon: <IconMumble />,
};
Slate.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const Slate1 = Template.bind({});
Slate1.args = {
  color: IconButtonColors.slate,
  size: IconButtonSizes.l,
  icon: 'Should not work', // IconProps weisst allerdings keine zwingenden Props auf. Warum schlägt hier der Compiler nicht an?
};
Slate1.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};
