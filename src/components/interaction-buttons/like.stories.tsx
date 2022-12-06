import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Like } from './like';

export default {
  title: 'Components/Interaction Buttons/Like',
  component: Like,
  // argTypes: {
  //   type: {
  //     options: ['primary', 'secondary'],
  //     control: { type: 'select' },
  //   },
  // },
} as ComponentMeta<typeof Like>;

const Template: ComponentStory<typeof Like> = (args) => <Like {...args} />;

export const Default = Template.bind({});
Default.args = {
  likesCount: 0,
  withReaction: true,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=GQzfpikOJavswzO7-4',
  },
};
