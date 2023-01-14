import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { LogoutButton } from '../../components/buttons/navi-buttons/logout-button';
import { ProfilePictureButton } from '../../components/buttons/navi-buttons/profile-picture-button';
import { SettingsButton } from '../../components/buttons/navi-buttons/settings-button';
import { Navigation } from './navigation';

export default {
  title: 'Layouts/Navigation',
  component: Navigation,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args}>
    <div className="flex items-center justify-center w-16 h-16 bg-slate-700 text-white font-bold">Item A</div>
    <div className="flex items-center justify-center w-16 h-16 bg-slate-700 text-white font-bold">Item B</div>
    <div className="flex items-center justify-center w-16 h-16 bg-slate-700 text-white font-bold">Item C</div>
    <div className="flex items-center justify-center w-16 h-16 bg-slate-700 text-white font-bold">Item D</div>
    <div className="flex items-center justify-center w-16 h-16 bg-slate-700 text-white font-bold">Item E</div>
  </Navigation>
);

export const Default = Template.bind({});
Default.argTypes = {
  children: {
    control: { disable: true },
  },
};

export const MumbleNavigation: ComponentStory<typeof Navigation> = () => {
  return (
    <Navigation>
      <ProfilePictureButton
        alt="Robert Vogt"
        aria-label="Edit profilepicture"
        onClick={action('onProfileButtonClick')}
        src="https://media.licdn.com/dms/image/D4E03AQEXHsHgH4BwJg/profile-displayphoto-shrink_800_800/0/1666815812197?e=2147483647&v=beta&t=Vx6xecdYFjUt3UTCmKdh2U-iHvY0bS-fcxlp_LKbxYw"
      />
      <SettingsButton onClick={action('onSettingsButtonClick')} />
      <LogoutButton onClick={action('onLogoutButtonClick')} />
    </Navigation>
  );
};
MumbleNavigation.storyName = '🐼 Mumble Navigation';
