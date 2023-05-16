import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfilePictureButton } from './profile-picture-button';

export default {
  title: 'Components/Buttons/Navi Buttons/ProfilePicture',
  component: ProfilePictureButton,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof ProfilePictureButton>;

const Template: ComponentStory<typeof ProfilePictureButton> = (args) => (
  <ProfilePictureButton {...args}></ProfilePictureButton>
);

export const ProfilePicture = Template.bind({});
ProfilePicture.args = {
  alt: 'Robert Vogt',
  ariaLabel: 'Edit profile picture',
  onClick: action('onClick'),
  src: 'https://res.cloudinary.com/smartive/image/upload/f_auto,c_limit,w_640,q_auto/v1676359202/Team/robert_wmi22t.jpg',
};
ProfilePicture.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};
