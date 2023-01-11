import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC } from 'react';
import { MumbleInTimeline } from '../card/card.stories';
import { Stack, StackAlignItems, StackDirection, StackJustifyContent, StackProps, StackSpacing } from './stack';

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
  alignItems: StackAlignItems.unset,
  direction: StackDirection.row,
  justifyContent: StackJustifyContent.flexstart,
  spacing: StackSpacing.m,
  withDivider: true,
};

interface StackWithContainerWidth extends FC<StackProps> {
  /**
   * Specifies the width of the parent component. It's not a property of the Stack Component and only
   * for demo purposes.
   */
  containerWidth: number;
}

const MumblesInTimelineTemplate: ComponentStory<StackWithContainerWidth> = (args) => {
  MumbleInTimeline.args.containerWidth = (args as unknown as StackWithContainerWidth).containerWidth;

  return (
    <div style={{ width: (args as unknown as StackWithContainerWidth).containerWidth + 'px' }}>
      <Stack direction={StackDirection.col} spacing={StackSpacing.s}>
        {[...Array(7)].map((value: undefined, index: number) => (
          <MumbleInTimeline id={index + 1} key={index} {...MumbleInTimeline.args}></MumbleInTimeline>
        ))}
      </Stack>
    </div>
  );
};
export const MumblesInTimeline = MumblesInTimelineTemplate.bind({});
MumblesInTimeline.args = {
  containerWidth: 680,
};
MumblesInTimeline.argTypes = {
  alignItems: { table: { disable: true } },
  children: { table: { disable: true } },
  containerWidth: {
    control: { type: 'range', min: 200, max: 1000, step: 10 },
    description:
      "Specifies the width of the parent component. It's not a property of the Stack Component and only for demo purposes.",
  },
  direction: { table: { disable: true } },
  justifyContent: { table: { disable: true } },
  spacing: { table: { disable: true } },
  withDivider: { table: { disable: true } },
};
MumblesInTimeline.parameters = {
  backgrounds: { default: 'background' },
  layout: 'centered',
};
MumblesInTimeline.storyName = '🐼 Mumbles In Timeline';
