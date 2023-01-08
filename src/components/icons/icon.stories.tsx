import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconMumble } from './icon-mumble';
import { IconSize, IconProps } from './icon-props';

export default {
  title: 'Components/Icon',
  component: IconMumble,
  argTypes: {
    size: {
      options: IconSize,
      control: { type: 'radio' },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof IconMumble>;

interface IconWithColor extends FC<IconProps> {
  color: string;
}

const Template: ComponentStory<IconWithColor> = (args) => (
  <div style={{ color: (args as unknown as IconWithColor).color }}>
    <IconMumble size={args.size} />
  </div>
);

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  color: '#0f172a',
  size: IconSize.m,
};
DefaultIcon.storyName = 'Icon';
(DefaultIcon.argTypes = {
  color: {
    control: {
      type: 'color',
      presetColors: [
        { color: '#0f172a', title: 'slate-900' },
        { color: '#DB2777', title: 'pink-600' },
        { color: '#7c3aed', title: 'violet-600' },
      ],
    },
    description: 'The color simulates the usage of the icon component and has to be set on the parent element -> See code.',
  },
}),
  (DefaultIcon.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=407%3A101&t=gXyCVQGdVEiiFJZB-1',
    },
  });
