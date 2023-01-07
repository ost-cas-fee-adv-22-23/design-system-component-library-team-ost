import React, { FC } from 'react';
import { NaviButton } from './navi-button';
import { ProfilePicture, ProfilePictureSizes } from '../../profile-picture/profile-picture';

export type ProfilePictureButtonProps = {
  /**
   * Provides alternative information for the profile picture if a user for some reason cannot view it.
   */
  alt: string;
  /**
   * Specifies the action, which is called as the user clicks on the profile picture button.
   */
  onClick: () => void;
  /**
   * Specifies the URL of the profile picture.
   */
  src: string;
};

export const ProfilePictureButton: FC<ProfilePictureButtonProps> = ({ alt, onClick, src }) => {
  return (
    <NaviButton onClick={onClick}>
      <ProfilePicture size={ProfilePictureSizes.s} alt={alt} src={src} />
    </NaviButton>
  );
};
