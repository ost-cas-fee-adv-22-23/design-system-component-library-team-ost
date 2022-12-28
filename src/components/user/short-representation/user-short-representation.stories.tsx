import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { UserShortRepresentation, UserShortRepresentationSizes } from './user-short-representation';

export default {
  title: 'Components/User/ShortRepresentation',
  component: UserShortRepresentation,
  argTypes: {
    showSettings: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
    actions: {
      handles: ['click a'],
    },
  },
} as ComponentMeta<typeof UserShortRepresentation>;

const Template: ComponentStory<typeof UserShortRepresentation> = (args) => <UserShortRepresentation {...args} />;

export const SizeS = Template.bind({});
SizeS.args = {
  size: UserShortRepresentationSizes.s,
  alt: 'Robert Vogt',
  src: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
  displayName: 'Robert Vogt',
  username: 'robertvogt',
  timestamp: 'vor 42 Minuten',
};
SizeS.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};

export const SizeM = Template.bind({});
SizeM.args = {
  size: UserShortRepresentationSizes.m,
  displayName: 'Robert Vogt',
  username: 'robertvogt',
  timestamp: 'vor 42 Minuten',
};
SizeM.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};

export const SizeL = Template.bind({});
SizeL.args = {
  size: UserShortRepresentationSizes.l,
  displayName: 'Robert Vogt',
  username: 'robertvogt',
  timestamp: 'vor 42 Minuten',
};
SizeL.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};

export const SizeXl = Template.bind({});
SizeXl.args = {
  size: UserShortRepresentationSizes.xl,
  showSettings: true,
  displayName: 'Robert Vogt',
  username: 'robertvogt',
  location: 'St. Gallen',
  joined: 'Mitglied seit 4 Wochen',
};
SizeXl.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};

export const NewUser = Template.bind({});
NewUser.args = {
  size: UserShortRepresentationSizes.xl,
  showSettings: true,
};
NewUser.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};
