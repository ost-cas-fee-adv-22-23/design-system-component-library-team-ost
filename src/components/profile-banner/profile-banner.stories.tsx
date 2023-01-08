import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfileBanner } from './profile-banner';

export default {
  title: 'Components/ProfileBanner',
  component: ProfileBanner,
  argTypes: {
    alt: { control: 'text' },
    canEdit: { control: 'boolean' },
    src: { control: 'text' },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof ProfileBanner>;

const Template: ComponentStory<typeof ProfileBanner> = (args) => <ProfileBanner {...args} />;

export const WithPicture = Template.bind({});
WithPicture.args = {
  alt: 'Robert Vogt',
  src: 'https://newinzurich.com/wp-content/uploads/2013/09/55769975_2481568891894108_3190627635357024256_o-compressed.jpg',
};
WithPicture.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=478%3A1499&t=GYyU89WF87tdGyeo-4',
  },
};

export const WithPictureCanEdit = Template.bind({});
WithPictureCanEdit.args = {
  alt: 'Robert Vogt',
  canEdit: true,
  src: 'https://newinzurich.com/wp-content/uploads/2013/09/55769975_2481568891894108_3190627635357024256_o-compressed.jpg',
};
WithPictureCanEdit.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=478%3A1499&t=GYyU89WF87tdGyeo-4',
  },
};

export const WithoutPictureCanEdit = Template.bind({});
WithoutPictureCanEdit.args = {
  canEdit: true,
};
WithoutPictureCanEdit.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=478%3A1499&t=GYyU89WF87tdGyeo-4',
  },
};
