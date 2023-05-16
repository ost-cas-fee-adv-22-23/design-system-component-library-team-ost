import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { UserRecommendation } from './user-recommendation';

export default {
  title: 'Components/User/Recommendation',
  component: UserRecommendation,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof UserRecommendation>;

const Template: ComponentStory<typeof UserRecommendation> = (args) => <UserRecommendation {...args} />;

export const Recommendation = Template.bind({});
Recommendation.args = {
  alt: 'Robert Vogt',
  displayName: 'Robert Vogt',
  hrefProfile: '#',
  onFollowClick: action('onFollowClick'),
  src: 'https://res.cloudinary.com/smartive/image/upload/f_auto,c_limit,w_640,q_auto/v1676359202/Team/robert_wmi22t.jpg',
  username: 'robertvogt',
};
Recommendation.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};
