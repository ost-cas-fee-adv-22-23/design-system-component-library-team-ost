import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form } from './form';

export default {
  title: 'Components/Form',
  component: Form,
  argTypes: {},
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Forms = Template.bind({});
Forms.args = {
  children: 'FormItems',
};
