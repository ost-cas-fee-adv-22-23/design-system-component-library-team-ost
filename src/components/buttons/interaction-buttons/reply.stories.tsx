import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Reply } from './reply';

export default {
  title: 'Components/Buttons/Interaction Buttons/Reply',
  component: Reply,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Reply>;

const Template: ComponentStory<typeof Reply> = (args) => <Reply {...args} />;

export const WithoutReaction = Template.bind({});
WithoutReaction.args = {
  onClick: action('onClick'),
  repliesCount: 0,
  withReaction: false,
};
WithoutReaction.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=GQzfpikOJavswzO7-4',
  },
};

export const WithoutReactionAndMultipleReplies = Template.bind({});
WithoutReactionAndMultipleReplies.args = {
  onClick: action('onClick'),
  repliesCount: 42,
  withReaction: false,
};
WithoutReactionAndMultipleReplies.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=GQzfpikOJavswzO7-4',
  },
};

export const WithReaction = Template.bind({});
WithReaction.args = {
  onClick: action('onClick'),
  repliesCount: 1,
  withReaction: true,
};
WithReaction.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=GQzfpikOJavswzO7-4',
  },
};

export const WithReactionAndMultipleReplies = Template.bind({});
WithReactionAndMultipleReplies.args = {
  onClick: action('onClick'),
  repliesCount: 42,
  withReaction: true,
};
WithReactionAndMultipleReplies.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=GQzfpikOJavswzO7-4',
  },
};
