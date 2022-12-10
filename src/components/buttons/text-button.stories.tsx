import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { IconMumble } from '../../assets/icon-mumble';
import { TextButton, TextButtonColors, TextButtonSizes } from './text-button';

export default {
  title: 'Components/Buttons/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click button'],
    },
  },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args}></TextButton>;

export const Slate = Template.bind({});
Slate.args = {
  color: TextButtonColors.slate,
  size: TextButtonSizes.m,
  text: 'Button Label',
};
Slate.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const SlateWithIcon = Template.bind({});
SlateWithIcon.args = {
  color: TextButtonColors.slate,
  size: TextButtonSizes.m,
  text: 'Button Label',
  children: <IconMumble />,
};
SlateWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const Violet = Template.bind({});
Violet.args = {
  color: TextButtonColors.violet,
  size: TextButtonSizes.m,
  text: 'Button Label',
};
Violet.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const VioletWithIcon = Template.bind({});
VioletWithIcon.args = {
  color: TextButtonColors.violet,
  size: TextButtonSizes.m,
  text: 'Button Label',
  children: <IconMumble />,
};
VioletWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const Gradient = Template.bind({});
Gradient.args = {
  color: TextButtonColors.gradient,
  size: TextButtonSizes.m,
  text: 'Button Label',
};
Gradient.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const GradientWithIcon = Template.bind({});
GradientWithIcon.args = {
  color: TextButtonColors.gradient,
  size: TextButtonSizes.m,
  text: 'Button Label',
  children: <IconMumble />,
};
GradientWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};
