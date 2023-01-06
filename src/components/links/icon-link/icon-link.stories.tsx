import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { IconLink, IconLinkColor } from './icon-link';
import { IconMumble } from '../../icons/icon-mumble';
import { IconProfile } from '../../icons/icon-profile';
import { IconTime } from '../../icons/icon-time';
import { IconLocation } from '../../icons/icon-location';
import { IconCalendar } from '../../icons/icon-calendar';

export default {
  title: 'Components/Links/IconLink',
  component: IconLink,
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
} as ComponentMeta<typeof IconLink>;

const Template: ComponentStory<typeof IconLink> = (args) => <IconLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link Label',
  color: IconLinkColor.slate,
  href: '#',
  icon: <IconMumble />,
  target: '_blank',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=qteS5dWoA222X5Uw-4',
  },
};

export const Profile = Template.bind({});
Profile.args = {
  children: 'Username',
  href: '#',
  target: '_blank',
  color: IconLinkColor.violet,
  icon: <IconProfile />,
};
Profile.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=qteS5dWoA222X5Uw-4',
  },
};

export const Joined = Template.bind({});
Joined.args = {
  children: 'Joined',
  href: '#',
  target: '_blank',
  color: IconLinkColor.slate,
  icon: <IconCalendar />,
};
Joined.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=qteS5dWoA222X5Uw-4',
  },
};

export const Location = Template.bind({});
Location.args = {
  children: 'Location',
  href: '#',
  target: '_blank',
  color: IconLinkColor.slate,
  icon: <IconLocation />,
};
Location.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=qteS5dWoA222X5Uw-4',
  },
};

export const Timestamp = Template.bind({});
Timestamp.args = {
  children: 'Timestamp',
  href: '#',
  target: '_blank',
  color: IconLinkColor.slate,
  icon: <IconTime />,
};
Timestamp.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=qteS5dWoA222X5Uw-4',
  },
};
