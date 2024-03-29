import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC } from 'react';
import { ProfileBanner, ProfileBannerProps } from './profile-banner';

export default {
  title: 'Components/ProfileBanner',
  component: ProfileBanner,
  argTypes: {
    alt: { control: 'text' },
    canEdit: { control: 'boolean' },
    containerwidth: {
      control: { type: 'range', min: 300, max: 800, step: 10 },
      description: 'The container width simulates the usage of the profile banner and is not a property of the component.',
    },
    src: { control: 'text' },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof ProfileBanner>;

interface ProfileBannerWithContainerWidth extends FC<ProfileBannerProps> {
  containerwidth: number;
}

const Template: ComponentStory<ProfileBannerWithContainerWidth> = (args) => {
  return (
    <div style={{ width: (args as unknown as ProfileBannerWithContainerWidth).containerwidth + 'px' }}>
      <ProfileBanner {...args} />
    </div>
  );
};
export const WithPicture = Template.bind({});
WithPicture.args = {
  alt: 'Robert Vogt',
  canEdit: undefined,
  containerwidth: 590,
  onEditClick: undefined,
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
  containerwidth: 590,
  onEditClick: action('onEditClick'),
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
  alt: undefined,
  canEdit: true,
  containerwidth: 590,
  onEditClick: action('onEditClick'),
  src: undefined,
};
WithoutPictureCanEdit.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=478%3A1499&t=GYyU89WF87tdGyeo-4',
  },
};
