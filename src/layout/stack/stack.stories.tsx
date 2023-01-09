import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Stack, StackAlignItems, StackDirection, StackJustifyContent, StackSpacing } from './stack';

export default {
  title: 'Layouts/Stack',
  component: Stack,
  argTypes: {
    withDivider: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    backgrounds: { default: 'surface' },
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <div className="flex items-center justify-center w-16 h-16 rounded-md bg-violet-600 text-white font-bold">A</div>
    <div className="flex items-center justify-center w-16 h-24 rounded-md bg-violet-600 text-white font-bold">B</div>
    <div className="flex items-center justify-center w-16 h-32 rounded-md bg-violet-600 text-white font-bold">C</div>
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
  alignItems: StackAlignItems.unset,
  direction: StackDirection.row,
  justifyContent: StackJustifyContent.flexstart,
  spacing: StackSpacing.m,
  withDivider: false,
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  direction: StackDirection.row,
  spacing: StackSpacing.m,
  withDivider: true,
};
