import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { UserRecommendation } from './user-recommendation';

export default {
  title: 'Components/User/Recommendation',
  component: UserRecommendation,
  argTypes: {
    showSettings: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof UserRecommendation>;

const Template: ComponentStory<typeof UserRecommendation> = (args) => <UserRecommendation {...args} />;

export const Recommendation = Template.bind({});
Recommendation.args = {
  alt: 'Robert Vogt',
  src: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
  displayName: 'Robert Vogt',
  username: 'robertvogt',
};
Recommendation.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};
