import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC } from 'react';
import { IconMumble } from '../icons/icon-mumble';
import { TextButton, TextButtonColor, TextButtonDisplayMode, TextButtonProps, TextButtonSize } from './text-button';

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
  ariaLabel: 'Start mumble',
  children: 'Button Label',
  color: TextButtonColor.slate,
  size: TextButtonSize.m,
};
Slate.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const SlateWithIcon = Template.bind({});
SlateWithIcon.args = {
  ariaLabel: 'Start mumble',
  children: 'Button Label',
  color: TextButtonColor.slate,
  icon: <IconMumble />,
  size: TextButtonSize.m,
};
SlateWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const Violet = Template.bind({});
Violet.args = {
  ariaLabel: 'Start mumble',
  children: 'Button Label',
  color: TextButtonColor.violet,
  size: TextButtonSize.m,
};
Violet.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const VioletWithIcon = Template.bind({});
VioletWithIcon.args = {
  ariaLabel: 'Start mumble',
  children: 'Button Label',
  color: TextButtonColor.violet,
  icon: <IconMumble />,
  size: TextButtonSize.m,
};
VioletWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const Gradient = Template.bind({});
Gradient.args = {
  ariaLabel: 'Start mumble',
  children: 'Button Label',
  color: TextButtonColor.gradient,
  size: TextButtonSize.m,
};
Gradient.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

export const GradientWithIcon = Template.bind({});
GradientWithIcon.args = {
  ariaLabel: 'Start mumble',
  children: 'Button Label',
  color: TextButtonColor.gradient,
  icon: <IconMumble />,
  size: TextButtonSize.m,
};
GradientWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
  },
};

interface TextButtonWithContainerWidth extends FC<TextButtonProps> {
  /**
   * Specifies the width of the parent component. It's not a property of the TextButton Component and only
   * for demo purposes.
   */
  containerWidth: number;
}

const TemplateFullWidth: ComponentStory<TextButtonWithContainerWidth> = (args) => (
  <div style={{ width: (args as unknown as TextButtonWithContainerWidth).containerWidth + 'px' }}>
    <TextButton {...args}></TextButton>
  </div>
);

export const SlateWithIconFullWidth = TemplateFullWidth.bind({});
SlateWithIconFullWidth.args = {
  ariaLabel: 'Start mumble',
  children: 'Button Label',
  color: TextButtonColor.slate,
  containerWidth: 500,
  displayMode: TextButtonDisplayMode.fullWidth,
  icon: <IconMumble />,
  size: TextButtonSize.m,
};
(SlateWithIconFullWidth.argTypes = {
  containerWidth: {
    control: { type: 'range', min: 200, max: 1000, step: 10 },
    description:
      "Specifies the width of the parent component. It's not a property of the TextButton Component and only for demo purposes.",
  },
}),
  (SlateWithIconFullWidth.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413%3A288&t=QJIVy1VLDZMd7xuN-4',
    },
  });
