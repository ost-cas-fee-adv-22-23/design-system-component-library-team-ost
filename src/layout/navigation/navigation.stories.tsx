import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { LogoutButton } from '../../components/buttons/logout-button';
import { ProfilePictureButton } from '../../components/buttons/profile-picture-button';
import { SettingsButton } from '../../components/buttons/settings-button';
import { Navigation } from './navigation';

export default {
  title: 'Layouts/Navigation',
  component: Navigation,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Navigation>;

export const Default: ComponentStory<typeof Navigation> = () => (
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
);
Default.storyName = 'Navigation';
