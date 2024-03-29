import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC } from 'react';
import { ImageContainer, ImageContainerProps } from './image-container';

export default {
  title: 'Components/ImageContainer',
  component: ImageContainer,
  argTypes: {
    containerwidth: {
      control: { type: 'range', min: 300, max: 800, step: 10 },
      description: 'The container width simulates the usage of the image container and is not a property of the component.',
    },
    alt: { control: 'text' },
    src: { control: 'text' },
  },
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof ImageContainer>;

interface ImageContainerWithContainerWidth extends FC<ImageContainerProps<unknown>> {
  containerwidth: number;
}

const Template: ComponentStory<ImageContainerWithContainerWidth> = (args) => {
  return (
    <div style={{ width: (args as unknown as ImageContainerWithContainerWidth).containerwidth + 'px' }}>
      <ImageContainer {...args} />
    </div>
  );
};

export const WithPictureJpg = Template.bind({});
WithPictureJpg.args = {
  alt: 'View of St. Gallen',
  containerwidth: 590,
  onClick: action('onClick'),
  src: 'https://newinzurich.com/wp-content/uploads/2013/09/55769975_2481568891894108_3190627635357024256_o-compressed.jpg',
};
WithPictureJpg.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=427%3A524&t=cRJ318aLvInTEJn4-4',
  },
};

export const WithPictureGif = Template.bind({});
WithPictureGif.args = {
  alt: 'Goal celebration',
  containerwidth: 590,
  onClick: action('onClick'),
  src: 'https://media.tenor.com/y1sRmAq2Mp0AAAAd/fcsg-football.gif',
};
WithPictureGif.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=427%3A524&t=cRJ318aLvInTEJn4-4',
  },
};

export const WithWrongSrc = Template.bind({});
WithWrongSrc.args = {
  alt: 'View of St. Gallen',
  containerwidth: 590,
  onClick: action('onClick'),
  src: 'canNotLoad',
};
WithWrongSrc.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=427%3A524&t=cRJ318aLvInTEJn4-4',
  },
};

export const LoadingWithoutPicture = Template.bind({});
LoadingWithoutPicture.args = {
  alt: undefined,
  containerwidth: 590,
  onClick: action('onClick'),
  src: undefined,
};
LoadingWithoutPicture.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=427%3A524&t=cRJ318aLvInTEJn4-4',
  },
};
LoadingWithoutPicture.storyName = 'Loading / Without Picture';
