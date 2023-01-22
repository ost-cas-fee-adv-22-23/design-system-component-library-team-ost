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
  src: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
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
  src: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
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
  src: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
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
  src: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
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
  src: 'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw',
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
