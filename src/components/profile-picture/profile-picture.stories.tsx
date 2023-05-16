import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfilePicture, ProfilePictureSize } from './profile-picture';

export default {
  title: 'Components/ProfilePicture',
  component: ProfilePicture,
  argTypes: {
    canEdit: { control: 'boolean' },
    size: { control: 'select' },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof ProfilePicture>;

const Template: ComponentStory<typeof ProfilePicture> = (args) => <ProfilePicture {...args} />;

export const SizeS = Template.bind({});
SizeS.args = {
  alt: 'Robert Vogt',
  canEdit: undefined,
  onEditClick: undefined,
  size: ProfilePictureSize.s,
  src: 'https://res.cloudinary.com/smartive/image/upload/f_auto,c_limit,w_640,q_auto/v1676359202/Team/robert_wmi22t.jpg',
};
SizeS.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A56&t=WnTyZV030bId1F3o-4',
  },
};

export const SizeM = Template.bind({});
SizeM.args = {
  alt: 'Robert Vogt',
  canEdit: undefined,
  onEditClick: undefined,
  size: ProfilePictureSize.m,
  src: 'https://res.cloudinary.com/smartive/image/upload/f_auto,c_limit,w_640,q_auto/v1676359202/Team/robert_wmi22t.jpg',
};
SizeM.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A56&t=WnTyZV030bId1F3o-4',
  },
};

export const SizeL = Template.bind({});
SizeL.args = {
  alt: 'Robert Vogt',
  canEdit: undefined,
  onEditClick: undefined,
  size: ProfilePictureSize.l,
  src: 'https://res.cloudinary.com/smartive/image/upload/f_auto,c_limit,w_640,q_auto/v1676359202/Team/robert_wmi22t.jpg',
};
SizeL.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A56&t=WnTyZV030bId1F3o-4',
  },
};

export const SizeXL = Template.bind({});
SizeXL.args = {
  alt: 'Robert Vogt',
  canEdit: undefined,
  onEditClick: undefined,
  size: ProfilePictureSize.xl,
  src: 'https://res.cloudinary.com/smartive/image/upload/f_auto,c_limit,w_640,q_auto/v1676359202/Team/robert_wmi22t.jpg',
};
SizeXL.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A56&t=WnTyZV030bId1F3o-4',
  },
};

export const SizeXLWithEditButton = Template.bind({});
SizeXLWithEditButton.args = {
  alt: 'Robert Vogt',
  canEdit: true,
  onEditClick: action('onEditClick'),
  size: ProfilePictureSize.xl,
  src: 'https://res.cloudinary.com/smartive/image/upload/f_auto,c_limit,w_640,q_auto/v1676359202/Team/robert_wmi22t.jpg',
};
SizeXLWithEditButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A56&t=WnTyZV030bId1F3o-4',
  },
};

export const WithoutPicture = Template.bind({});
WithoutPicture.args = {
  alt: 'Neuer User',
  canEdit: true,
  onEditClick: action('onEditClick'),
  size: ProfilePictureSize.xl,
  src: undefined,
};
WithoutPicture.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A56&t=WnTyZV030bId1F3o-4',
  },
};
