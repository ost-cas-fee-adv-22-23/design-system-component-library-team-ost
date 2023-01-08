import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React, { ChangeEvent, useState } from 'react';
import { PageHeader } from './page-header';
import { MumbleWhiteHorizontal } from '../../components/logos/mumble-white-horizontal';
import { ProfilePictureButton } from '../../components/buttons/profile-picture-button';
import { Navigation } from '../navigation/navigation';
import { SettingsButton } from '../../components/buttons/settings-button';
import { LogoutButton } from '../../components/buttons/logout-button';
import { Modal, ModalType } from '../../components/modal/modal';
import { Label, LabelSizes } from '../../components/typography/label';
import { Form } from '../../components/form/form';
import { Stack, StackDirections, StackSpacings } from '../stack/stack';
import { Input, InputTypes } from '../../components/form/form-input';
import { TextButton, TextButtonColors, TextButtonSizes, TextButtonDisplayModes } from '../../components/buttons/text-button';
import { IconCancel } from '../../components/icons/icon-cancel';
import { IconCheckmark } from '../../components/icons/icon-checkmark';
import { Fileinput } from '../../components/form/form-fileinput';

export default {
  title: 'Layouts/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

// todo: Animation des MumbleWhiteHorizontal Logos
export const Default: ComponentStory<typeof PageHeader> = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isOpenFileUpload, setIsOpenFileUpload] = useState(false);

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
    <PageHeader>
      <div className="flex items-center justify-between gap-56">
        <div className="h-10">
          <MumbleWhiteHorizontal onClick={action('onLogoClick')} />
        </div>
        <Navigation>
          <ProfilePictureButton
            alt="Robert Vogt"
            onClick={() => setIsOpenFileUpload(true)}
            src="https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw"
          />
          <SettingsButton onClick={() => setIsOpenSettings(true)} />
          <LogoutButton onClick={action('onLogoutButtonClick')} />
        </Navigation>
      </div>
      {/* MODAL for Settings */}
      <Modal
        isOpen={isOpenSettings}
        modalType={ModalType.narrow}
        onClose={() => setIsOpenSettings(false)}
        title="Einstellungen"
      >
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
              onClick={() => setIsOpenSettings(false)}
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
      </Modal>
      {/* MODAL for Image Upload */}
      <Modal
        isOpen={isOpenFileUpload}
        modalType={ModalType.wide}
        title="Bild hochladen"
        onClose={() => setIsOpenFileUpload(false)}
      >
        <Form handleSubmit={action('Handle form submit')} stackDir={StackDirections.col} stackSpacing={StackSpacings.s}>
          <Fileinput
            title="Datei hierhin ziehen"
            description="JPEG oder PNG, maximal 50 MB"
            onAddFile={(file) => action(file.name)}
          ></Fileinput>
          <Stack direction={StackDirections.row} spacing={StackSpacings.xs}>
            <TextButton
              color={TextButtonColors.slate}
              size={TextButtonSizes.m}
              icon={<IconCancel />}
              displayMode={TextButtonDisplayModes.fullWidth}
              onClick={() => setIsOpenFileUpload(false)}
            >
              Abbrechen
            </TextButton>
            <TextButton
              color={TextButtonColors.violet}
              size={TextButtonSizes.m}
              icon={<IconCheckmark />}
              displayMode={TextButtonDisplayModes.fullWidth}
              onClick={() => setIsOpenFileUpload(false)}
            >
              Speichern
            </TextButton>
          </Stack>
        </Form>
      </Modal>
    </PageHeader>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=447%3A780&t=dW7d9mR1MQqmSsA6-4',
  },
};
Default.storyName = 'PageHeader';
