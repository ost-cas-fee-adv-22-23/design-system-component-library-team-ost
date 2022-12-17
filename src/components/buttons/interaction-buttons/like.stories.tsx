import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Like } from './like';

export default {
  title: 'Components/Buttons/Interaction Buttons/Like',
  component: Like,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Like>;

const Template: ComponentStory<typeof Like> = (args) => <Like {...args} />;

export const WithoutReaction = Template.bind({});
WithoutReaction.args = {
  likesCount: 0,
  withReaction: false,
};
WithoutReaction.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=GQzfpikOJavswzO7-4',
  },
};

export const WithoutReactionAndMultipleLikes = Template.bind({});
WithoutReactionAndMultipleLikes.args = {
  likesCount: 42,
  withReaction: false,
};
WithoutReactionAndMultipleLikes.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=GQzfpikOJavswzO7-4',
  },
};

export const WithReaction = Template.bind({});
WithReaction.args = {
  likesCount: 1,
  withReaction: true,
};
WithReaction.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=GQzfpikOJavswzO7-4',
  },
};

export const WithReactionAndMultipleLikes = Template.bind({});
WithReactionAndMultipleLikes.args = {
  likesCount: 42,
  withReaction: true,
};
WithReactionAndMultipleLikes.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=GQzfpikOJavswzO7-4',
  },
};
