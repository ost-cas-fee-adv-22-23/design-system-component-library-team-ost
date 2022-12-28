import React, { FC } from 'react';
import { NaviButton } from './navi-button';
import { ProfilePicture, ProfilePictureSizes } from '../profile-picture/profile-picture';

export type ProfilePictureButtonProps = {
  src: string;
  alt: string;
  onClick: () => void;
};

export const ProfilePictureButton: FC<ProfilePictureButtonProps> = ({ src, alt, onClick }) => {
  return (
    <NaviButton onClick={onClick}>
      <ProfilePicture size={ProfilePictureSizes.s} src={src} alt={alt} />
    </NaviButton>
  );
};
