import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { PageHeader } from './page-header';
import { MumbleWhiteHorizontal } from '../../components/logos/mumble-white-horizontal';
import { ProfilePictureButton } from '../../components/buttons/profile-picture-button';
import { Navigation } from '../navigation/navigation';
import { SettingsButton } from '../../components/buttons/settings-button';
import { LogoutButton } from '../../components/buttons/logout-button';

export default {
  title: 'Layouts/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

// todo: Animation des MumbleWhiteHorizontal Logos
export const Default: ComponentStory<typeof PageHeader> = () => (
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
        <SettingsButton onClick={action('onSettingsButtonClick')} />
        <LogoutButton onClick={action('onLogoutButtonClick')} />
      </Navigation>
    </div>
  </PageHeader>
);

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=447%3A780&t=dW7d9mR1MQqmSsA6-4',
  },
};
