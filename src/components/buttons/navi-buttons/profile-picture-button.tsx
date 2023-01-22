import React, { FC, ButtonHTMLAttributes } from 'react';
import { NaviButton } from './navi-button';
import { ProfilePicture, ProfilePictureSize } from '../../profile-picture/profile-picture';

export type ProfilePictureButtonProps = {
  /**
   * Optional aria-label (Verb + Noun) has to be set, if no inner text is set or the text of the button does not describe the action.
   */
  ariaLabel?: string;
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
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ProfilePictureButton: FC<ProfilePictureButtonProps> = ({ alt, ariaLabel, onClick, src, ...args }) => {
  return (
    <NaviButton aria-label={ariaLabel} onClick={onClick} {...args}>
      <ProfilePicture size={ProfilePictureSize.s} alt={alt} src={src} />
    </NaviButton>
  );
};
