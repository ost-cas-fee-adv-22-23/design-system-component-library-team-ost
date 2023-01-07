import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form } from './form';
import { Label, LabelSizes } from '../typography/label';
import { Stack, StackDirections, StackSpacings } from '../../layout/stack/stack';
import { Input, InputTypes } from './form-input';
import { TextButton, TextButtonColors, TextButtonDisplayModes, TextButtonSizes } from '../buttons/text-button';
import { IconCancel } from '../icons/icon-cancel';
import { IconCheckmark } from '../icons/icon-checkmark';

export default {
  title: 'Components/Form',
  component: Form,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Form>;

export const ExampleForm: ComponentStory<typeof Form> = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    city: '',
    biography: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="text-slate-700">
      <Form handleSubmit={action('Handle form submit')} stackDir={StackDirections.col} stackSpacing={StackSpacings.s}>
        <Label size={LabelSizes.xl}>Persönliche Einstellungen</Label>
        <Input
          errorMessage="Error-Message"
          label="Name Vorname"
          labelSize={LabelSizes.s}
          name="name"
          onChange={handleChange}
          type={InputTypes.text}
          value={form.name}
        />
        <Input
          label="E-Mail-Adresse"
          labelSize={LabelSizes.s}
          name="email"
          onChange={handleChange}
          placeholder="E-Mail"
          type={InputTypes.email}
          value={form.email}
        />
        <Input
          label="Ortschaft"
          labelSize={LabelSizes.s}
          name="city"
          onChange={handleChange}
          type={InputTypes.text}
          value={form.city}
        />
        <Input
          label="Biografie"
          labelSize={LabelSizes.s}
          name="biography"
          onChange={handleChange}
          type={InputTypes.text}
          value={form.biography}
        />
        <Stack direction={StackDirections.row} spacing={StackSpacings.xs}>
          <TextButton
            color={TextButtonColors.slate}
            size={TextButtonSizes.m}
            icon={<IconCancel />}
            displayMode={TextButtonDisplayModes.fullWidth}
            onClick={() => action('Form cancel')}
          >
            Abbrechen
          </TextButton>
          <TextButton
            color={TextButtonColors.violet}
            size={TextButtonSizes.m}
            icon={<IconCheckmark />}
            displayMode={TextButtonDisplayModes.fullWidth}
            onClick={() => action('Form submit')}
          >
            Speichern
          </TextButton>
        </Stack>
      </Form>
    </div>
  );
};
