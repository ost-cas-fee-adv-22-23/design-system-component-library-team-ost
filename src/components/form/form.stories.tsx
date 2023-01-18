import { action } from '@storybook/addon-actions';
import React, { useState, ChangeEvent } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form } from './form';
import { Label, LabelSize } from '../typography/label';
import { Stack, StackDirection, StackSpacing } from '../../layout/stack/stack';
import { Input, InputTypes } from './form-input';
import { TextButton, TextButtonColor, TextButtonDisplayMode, TextButtonSize } from '../buttons/text-button';
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="text-slate-700">
      <Form handleSubmit={action('Handle form submit')} stackDir={StackDirection.col} stackSpacing={StackSpacing.s}>
        <Label size={LabelSize.xl}>Persönliche Einstellungen</Label>
        <Input
          errorMessage="Error-Message"
          label="Name Vorname"
          labelSize={LabelSize.s}
          name="name"
          onChange={handleChange}
          type={InputTypes.text}
          value={form.name}
        />
        <Input
          label="E-Mail-Adresse"
          labelSize={LabelSize.s}
          name="email"
          onChange={handleChange}
          placeholder="E-Mail"
          type={InputTypes.email}
          value={form.email}
        />
        <Input
          label="Ortschaft"
          labelSize={LabelSize.s}
          name="city"
          onChange={handleChange}
          type={InputTypes.text}
          value={form.city}
        />
        <Input
          label="Biografie"
          labelSize={LabelSize.s}
          name="biography"
          onChange={handleChange}
          type={InputTypes.text}
          value={form.biography}
        />
        <Stack direction={StackDirection.row} spacing={StackSpacing.xs}>
          <TextButton
            color={TextButtonColor.slate}
            size={TextButtonSize.m}
            icon={<IconCancel />}
            displayMode={TextButtonDisplayMode.fullWidth}
            onClick={() => action('Form cancel')}
          >
            Abbrechen
          </TextButton>
          <TextButton
            color={TextButtonColor.violet}
            size={TextButtonSize.m}
            icon={<IconCheckmark />}
            displayMode={TextButtonDisplayMode.fullWidth}
            onClick={() => action('Form submit')}
          >
            Speichern
          </TextButton>
        </Stack>
      </Form>
    </div>
  );
};
ExampleForm.storyName = '🐼 Form';
