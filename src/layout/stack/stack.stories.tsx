import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Stack, StackDirections, StackSpacings } from './stack';
import { Input, InputTypes } from '../../components/form/form-input';
import { Label, LabelSizes } from '../../components/text/label';
import { Form } from '../../components/form/form';

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

export const FormExample: ComponentStory<typeof Stack> = () => {
  return (
    <div className="text-slate-700">
      <Form stackdir={StackDirections.col} stackspacing={StackSpacings.s}>
        <Label size={LabelSizes.xl}>Persönliche Einstellungen</Label>
        <Input
          label="Name Vorname"
          labelSize={LabelSizes.s}
          value="Input"
          type={InputTypes.text}
          errorMessage="Error-Message"
        />
        <Input label="E-Mail-Adresse" labelSize={LabelSizes.s} value="" type={InputTypes.text} placeholder="Placeholder" />
        <Input label="Ortschaft" labelSize={LabelSizes.s} value="" type={InputTypes.text} />
        <Input label="Biografie" labelSize={LabelSizes.s} value="" type={InputTypes.text} />
      </Form>
    </div>
  );
};
