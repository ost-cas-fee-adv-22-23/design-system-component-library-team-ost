import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TabNav } from './tab-nav';

export default {
  title: 'Components/Tab Navigation',
  component: TabNav,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof TabNav>;

const Template: ComponentStory<typeof TabNav> = (args) => <TabNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabNames: ['Tab 1', 'Tab 2', 'Tab 3'],
  tabChange: action('Tab Navigation change to tab'),
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=s6xM5WOtclNzotKV-1',
  },
};

export const MumbleSwitch = Template.bind({});
MumbleSwitch.args = {
  tabNames: ['Deine Mumbles', 'Deine Likes'],
  tabChange: action('Tab Navigation change to tab'),
};
MumbleSwitch.storyName = '🐼 Switch';
MumbleSwitch.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=s6xM5WOtclNzotKV-1',
  },
};
