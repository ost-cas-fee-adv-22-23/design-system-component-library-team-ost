import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { PageHeader } from './page-header';
import { MumbleWhiteHorizontal } from '../../components/logos/mumble-white-horizontal';
import { ProfilePictureButton } from '../../components/buttons/profile-picture-button';
import { Navigation } from '../navigation/navigation';
import { SettingsButton } from '../../components/buttons/settings-button';
import { LogoutButton } from '../../components/buttons/logout-button';
import { Modal, ModalType } from '../../components/modal/modal';
import { Label, LabelSizes } from '../../components/text/label';
import { Input, InputTypes } from '../../components/form/form-input';
import { TextButton, TextButtonColors, TextButtonSizes, TextButtonDisplayModes } from '../../components/buttons/text-button';
import { IconCancel } from '../../components/icons/icon-cancel';
import { IconCheckmark } from '../../components/icons/icon-checkmark';

export default {
  title: 'Layouts/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

// todo: Animation des MumbleWhiteHorizontal Logos
export const Default: ComponentStory<typeof PageHeader> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageHeader>
      <div className="flex items-center justify-between gap-56">
        <div className="h-10">
          <MumbleWhiteHorizontal onClick={action('onLogoClick')} />
        </div>
        <Navigation>
          <ProfilePictureButton
            src={
              'https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw'
            }
            alt={'Robert Vogt'}
            onClick={action('onProfileButtonClick')}
          />
          <SettingsButton onClick={() => setIsOpen(true)} />
          <LogoutButton onClick={action('onLogoutButtonClick')} />
        </Navigation>
      </div>
      <Modal isOpen={isOpen} modalType={ModalType.settings} title="Einstellungen" onClose={() => setIsOpen(false)}>
        <Label size={LabelSizes.xl}>Persönliche Einstellungen</Label>
        {/** TODO Insert Form Component with Stack */}
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
        <div className="flex gap-xs">
          <TextButton
            color={TextButtonColors.slate}
            size={TextButtonSizes.m}
            icon={<IconCancel />}
            displayMode={TextButtonDisplayModes.fullWidth}
            onClick={() => setIsOpen(false)}
          >
            Abbrechen
          </TextButton>
          <TextButton
            color={TextButtonColors.violet}
            size={TextButtonSizes.m}
            icon={<IconCheckmark />}
            displayMode={TextButtonDisplayModes.fullWidth}
            onClick={() => setIsOpen(false)}
          >
            Speichern
          </TextButton>
        </div>
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
