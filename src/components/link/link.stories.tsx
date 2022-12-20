import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Link, LinkType } from './link';

export default {
  title: 'Components/Link',
  component: Link,
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
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: LinkType.text,
  href: '#',
  target: '_blank',
  children: 'Link Label',
};
Text.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=qteS5dWoA222X5Uw-4',
  },
};

export const Profile = Template.bind({});
Profile.args = {
  type: LinkType.profile,
  href: '#',
  target: '_blank',
  children: 'Username',
};
Profile.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=qteS5dWoA222X5Uw-4',
  },
};

export const Joined = Template.bind({});
Joined.args = {
  type: LinkType.joined,
  href: '#',
  target: '_blank',
  children: 'Joined',
};
Joined.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=qteS5dWoA222X5Uw-4',
  },
};

export const Location = Template.bind({});
Location.args = {
  type: LinkType.location,
  href: '#',
  target: '_blank',
  children: 'Location',
};
Location.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=qteS5dWoA222X5Uw-4',
  },
};

export const Timestamp = Template.bind({});
Timestamp.args = {
  type: LinkType.timestamp,
  href: '#',
  target: '_blank',
  children: 'Timestamp',
};
Timestamp.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=qteS5dWoA222X5Uw-4',
  },
};
