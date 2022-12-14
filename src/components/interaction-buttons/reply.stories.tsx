import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Reply } from './reply';

export default {
  title: 'Components/Interaction Buttons/Reply',
  component: Reply,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Reply>;

const Template: ComponentStory<typeof Reply> = (args) => <Reply {...args} />;

export const Default = Template.bind({});
Default.args = {
  repliesCount: 0,
  withReaction: true,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=GQzfpikOJavswzO7-4',
  },
};

export const WithoutReaction = Template.bind({});
WithoutReaction.args = {
  repliesCount: 0,
  withReaction: false,
};
WithoutReaction.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=GQzfpikOJavswzO7-4',
  },
};
