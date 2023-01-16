import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React, { ChangeEvent, useState } from 'react';
import { PageHeader } from './page-header';
import { MumbleWhiteHorizontal } from '../../components/logos/mumble-white-horizontal';
import { ProfilePictureButton } from '../../components/buttons/navi-buttons/profile-picture-button';
import { Navigation } from '../navigation/navigation';
import { SettingsButton } from '../../components/buttons/navi-buttons/settings-button';
import { LogoutButton } from '../../components/buttons/navi-buttons/logout-button';
import { Modal, ModalType } from '../../components/modal/modal';
import { Label, LabelSize } from '../../components/typography/label';
import { Form } from '../../components/form/form';
import { Stack, StackDirection, StackSpacing } from '../stack/stack';
import { Input, InputTypes } from '../../components/form/form-input';
import { Textarea } from '../../components/form/form-textarea';
import { TextButton, TextButtonColor, TextButtonSize, TextButtonDisplayMode } from '../../components/buttons/text-button';
import { IconCancel } from '../../components/icons/icon-cancel';
import { IconCheckmark } from '../../components/icons/icon-checkmark';
import { Fileinput } from '../../components/form/form-fileinput';

export default {
  title: 'Layouts/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => (
  <PageHeader {...args}>
    <div className="flex items-center justify-center w-16 h-16 bg-slate-700 text-white font-bold">Item A</div>
  </PageHeader>
);

export const Default = Template.bind({});
Default.argTypes = {
  children: {
    control: { disable: true },
  },
};

export const MumblePageHeader: ComponentStory<typeof PageHeader> = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isOpenFileUpload, setIsOpenFileUpload] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    city: '',
    biography: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageHeader>
      <div className="flex items-center justify-between gap-56">
        <div className="h-10">
          <MumbleWhiteHorizontal ariaLabel="Go to mumble" onClick={action('onLogoClick')} />
        </div>
        <Navigation>
          <ProfilePictureButton
            alt="Robert Vogt"
            aria-label="Edit profilepicture"
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
          <Textarea
            ariaLabel="biography"
            label="Biografie"
            labelSize={LabelSize.s}
            name="biography"
            onChange={handleChange}
            rows={2}
            value={form.biography}
          />
          <Stack direction={StackDirection.row} spacing={StackSpacing.xs}>
            <TextButton
              color={TextButtonColor.slate}
              displayMode={TextButtonDisplayMode.fullWidth}
              icon={<IconCancel />}
              onClick={() => setIsOpenSettings(false)}
              size={TextButtonSize.m}
            >
              Abbrechen
            </TextButton>
            <TextButton
              color={TextButtonColor.violet}
              displayMode={TextButtonDisplayMode.fullWidth}
              icon={<IconCheckmark />}
              onClick={() => action('Form submit')}
              size={TextButtonSize.m}
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
        <Form handleSubmit={action('Handle form submit')} stackDir={StackDirection.col} stackSpacing={StackSpacing.s}>
          <Fileinput
            description="JPEG oder PNG, maximal 50 MB"
            onAddFile={(file) => action(file.name)}
            title="Datei hierhin ziehen"
          ></Fileinput>
          <Stack direction={StackDirection.row} spacing={StackSpacing.xs}>
            <TextButton
              color={TextButtonColor.slate}
              displayMode={TextButtonDisplayMode.fullWidth}
              icon={<IconCancel />}
              onClick={() => setIsOpenFileUpload(false)}
              size={TextButtonSize.m}
            >
              Abbrechen
            </TextButton>
            <TextButton
              color={TextButtonColor.violet}
              displayMode={TextButtonDisplayMode.fullWidth}
              icon={<IconCheckmark />}
              onClick={() => setIsOpenFileUpload(false)}
              size={TextButtonSize.m}
            >
              Speichern
            </TextButton>
          </Stack>
        </Form>
      </Modal>
    </PageHeader>
  );
};

MumblePageHeader.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=447%3A780&t=dW7d9mR1MQqmSsA6-4',
  },
};
MumblePageHeader.storyName = '🐼 Mumble PageHeader';
