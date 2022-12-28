import React, { FC } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { SettingsButton } from '../../components/buttons/settings-button';
import { LogoutButton } from '../../components/buttons/logout-button';
import { ProfilePictureButton } from '../buttons/profile-picture-button';

export type NavigationProps = {
  src: string;
  alt: string;
  onProfilePictureClick: () => void;
  onSettingsClick: () => void;
  onLogoutClick: () => void;
};

export const Navigation: FC<NavigationProps> = ({ src, alt, onProfilePictureClick, onSettingsClick, onLogoutClick }) => {
  const navigationBaseStyle = ['flex', 'items-center', 'justify-center', 'bg-violet-600', 'gap-m', 'p-0'];

  return (
    <nav className={mergeClassNames(navigationBaseStyle)}>
      <ProfilePictureButton src={src} alt={alt} onClick={onProfilePictureClick} />
      <SettingsButton onClick={onSettingsClick} />
      <LogoutButton onClick={onLogoutClick} />
    </nav>
  );
};
