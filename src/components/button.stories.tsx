import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button, ButtonType } from './button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Hello World</Button>;

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  type: ButtonType.primary,
};
ButtonComponent.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
};
