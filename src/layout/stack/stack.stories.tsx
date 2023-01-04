import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Stack, StackDirections, StackSpacings } from './stack';

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
    layout: 'centered',
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <div className="flex items-center justify-center w-16 h-16 rounded-md bg-violet-600 text-white font-bold">A</div>
    <div className="flex items-center justify-center w-16 h-16 rounded-md bg-violet-600 text-white font-bold">B</div>
    <div className="flex items-center justify-center w-16 h-16 rounded-md bg-violet-600 text-white font-bold">C</div>
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
  direction: StackDirections.row,
  spacing: StackSpacings.m,
  withDivider: false,
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  direction: StackDirections.row,
  spacing: StackSpacings.m,
  withDivider: true,
};
