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
  src: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
};
ProfilePicture.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};
