import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC } from 'react';
import { IconMumble } from '../icons/icon-mumble';
import { TextButton, TextButtonColors, TextButtonDisplayModes, TextButtonProps, TextButtonSizes } from './text-button';

export default {
  title: 'Components/Buttons/TextButton',
  component: TextButton,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args}></TextButton>;

export const Slate = Template.bind({});
Slate.args = {
  color: TextButtonColors.slate,
  size: TextButtonSizes.m,
  children: 'Button Label',
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
  icon: <IconMumble />,
  children: 'Button Label',
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
  children: 'Button Label',
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
  icon: <IconMumble />,
  children: 'Button Label',
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
  children: 'Button Label',
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
  icon: <IconMumble />,
  children: 'Button Label',
};
GradientWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

interface TextButtonWithContainerWidth extends FC<TextButtonProps> {
  containerWidth: number;
}

const TemplateFullWidth: ComponentStory<TextButtonWithContainerWidth> = (args) => (
  <div style={{ width: (args as unknown as TextButtonWithContainerWidth).containerWidth + 'px' }}>
    <TextButton {...args}></TextButton>
  </div>
);

export const SlateWithIconFullWidth = TemplateFullWidth.bind({});
SlateWithIconFullWidth.args = {
  containerWidth: 500,
  color: TextButtonColors.slate,
  size: TextButtonSizes.m,
  displayMode: TextButtonDisplayModes.fullWidth,
  icon: <IconMumble />,
  children: 'Button Label',
};
(SlateWithIconFullWidth.argTypes = { containerWidth: { control: { type: 'range', min: 200, max: 1000, step: 10 } } }),
  (SlateWithIconFullWidth.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
    },
  });
