import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TabNav } from './tab-nav';

export default {
  title: 'Components/TabNav',
  component: TabNav,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof TabNav>;

const Template: ComponentStory<typeof TabNav> = (args) => <TabNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  onTabChange: action('Tab Navigation change to tab'),
  tabNames: ['Tab 1', 'Tab 2', 'Tab 3'],
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=s6xM5WOtclNzotKV-1',
  },
};

export const MumbleSwitch = Template.bind({});
MumbleSwitch.args = {
  onTabChange: action('Tab Navigation change to tab'),
  tabNames: ['Deine Mumbles', 'Deine Likes'],
};
MumbleSwitch.storyName = '🐼 Switch';
MumbleSwitch.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=s6xM5WOtclNzotKV-1',
  },
};
