import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form } from './form';
import { Label, LabelSizes } from '../text/label';
import { StackDirections, StackSpacings } from '../../layout/stack/stack';
import { Input, InputTypes } from './form-input';

export default {
  title: 'Components/Form',
  component: Form,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Form>;

export const FormExample: ComponentStory<typeof Form> = () => {
  return (
    <div className="text-slate-700">
      <Form stackDir={StackDirections.col} stackSpacing={StackSpacings.s}>
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
