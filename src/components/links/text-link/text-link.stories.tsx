import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TextLink } from './text-link';

export default {
  title: 'Components/Links/TextLink',
  component: TextLink,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
    actions: {
      handles: ['click a'],
    },
  },
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => <TextLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link Label',
  href: '#',
  newTab: false,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=qteS5dWoA222X5Uw-4',
  },
};
Default.storyName = 'TextLink';
