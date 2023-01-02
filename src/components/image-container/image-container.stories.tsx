import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ImageContainer } from './image-container';

export default {
  title: 'Components/ImageContainer',
  component: ImageContainer,
  argTypes: {
    alt: { control: 'text' },
    src: { control: 'text' },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof ImageContainer>;

const Template: ComponentStory<typeof ImageContainer> = (args) => <ImageContainer {...args} />;

export const WithPictureJpg = Template.bind({});
WithPictureJpg.args = {
  alt: 'View of St. Gallen',
  src: 'https://newinzurich.com/wp-content/uploads/2013/09/55769975_2481568891894108_3190627635357024256_o-compressed.jpg',
};
WithPictureJpg.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A56&t=WnTyZV030bId1F3o-4',
  },
};

export const WithPictureGif = Template.bind({});
WithPictureGif.args = {
  alt: 'Goal celebration',
  src: 'https://media.tenor.com/y1sRmAq2Mp0AAAAd/fcsg-football.gif',
};
WithPictureGif.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A56&t=WnTyZV030bId1F3o-4',
  },
};

export const WithWrongSrc = Template.bind({});
WithWrongSrc.args = {
  alt: 'View of St. Gallen',
  src: 'canNotLoad',
};
WithWrongSrc.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A56&t=WnTyZV030bId1F3o-4',
  },
};

export const LoadingWithoutPicture = Template.bind({});
LoadingWithoutPicture.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=418%3A56&t=WnTyZV030bId1F3o-4',
  },
};
LoadingWithoutPicture.storyName = 'Loading / Without Picture';
