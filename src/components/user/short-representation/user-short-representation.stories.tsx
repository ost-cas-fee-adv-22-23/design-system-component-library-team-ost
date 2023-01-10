import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {
  UserShortRepresentation,
  UserShortRepresentationLabelType,
  UserShortRepresentationProfilePictureSize,
} from './user-short-representation';

export default {
  title: 'Components/User/ShortRepresentation',
  component: UserShortRepresentation,
  argTypes: {
    alt: {
      control: { type: 'text' },
    },
    displayName: {
      control: { type: 'text' },
    },
    hrefProfile: {
      control: { type: 'text' },
    },
    joined: {
      control: { type: 'text' },
    },
    labelType: {
      control: { type: 'select' },
    },
    location: {
      control: { type: 'text' },
    },
    showSettings: {
      control: { type: 'boolean' },
    },
    src: {
      control: { type: 'text' },
    },
    timestamp: {
      control: { type: 'text' },
    },
    username: {
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
} as ComponentMeta<typeof UserShortRepresentation>;

const Template: ComponentStory<typeof UserShortRepresentation> = (args) => <UserShortRepresentation {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: 'Robert Vogt',
  displayName: 'Robert Vogt',
  hrefProfile: '#',
  joined: 'Mitglied seit 4 Wochen',
  labelType: UserShortRepresentationLabelType.m,
  location: 'St. Gallen',
  onSettingsClick: action('onSettingsClick'),
  profilePictureSize: UserShortRepresentationProfilePictureSize.s,
  showSettings: true,
  src: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
  timestamp: 'vor 42 Minuten',
  username: 'robertvogt',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};

export const SizeS = Template.bind({});
SizeS.args = {
  alt: 'Robert Vogt',
  displayName: 'Robert Vogt',
  hrefProfile: '#',
  labelType: UserShortRepresentationLabelType.s,
  profilePictureSize: UserShortRepresentationProfilePictureSize.s,
  src: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
  timestamp: 'vor 42 Minuten',
  username: 'robertvogt',
};
SizeS.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};
SizeS.storyName = '🐼 Size S';

export const SizeM = Template.bind({});
SizeM.args = {
  displayName: 'Robert Vogt',
  hrefProfile: '#',
  labelType: UserShortRepresentationLabelType.m,
  timestamp: 'vor 42 Minuten',
  username: 'robertvogt',
};
SizeM.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};
SizeM.storyName = '🐼 Size M';

export const SizeL = Template.bind({});
SizeL.args = {
  displayName: 'Robert Vogt',
  hrefProfile: '#',
  labelType: UserShortRepresentationLabelType.l,
  timestamp: 'vor 42 Minuten',
  username: 'robertvogt',
};
SizeL.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};
SizeL.storyName = '🐼 Size L';

export const SizeXl = Template.bind({});
SizeXl.args = {
  displayName: 'Robert Vogt',
  hrefProfile: '#',
  joined: 'Mitglied seit 4 Wochen',
  labelType: UserShortRepresentationLabelType.h3,
  location: 'St. Gallen',
  onSettingsClick: action('onSettingsClick'),
  showSettings: true,
  username: 'robertvogt',
};
SizeXl.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};
SizeXl.storyName = '🐼 Size XL';

export const NewUser = Template.bind({});
NewUser.args = {
  displayName: 'Neuer User',
  hrefProfile: '#',
  joined: 'Joined',
  labelType: UserShortRepresentationLabelType.h3,
  location: 'Location',
  onSettingsClick: action('onSettingsClick'),
  showSettings: true,
  username: 'neueruser',
};
NewUser.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A135&t=vb5ZoC3oO12VDJQW-4',
  },
};
NewUser.storyName = '🐼 New User';
