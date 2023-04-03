import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
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
   * Specifies a custom image component for the ProfilePicture, e.g. next/image.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageComponent?: FC<any>;
  /**
   * Specifies the arguments of the custom image component.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageComponentArgs?: Record<string, any>;
  /**
   * Specifies a custom link component, e.g. next/link.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  linkComponent?: FC<any>;
  /**
   * Specifies the arguments of the custom link component.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  linkComponentArgs?: Record<string, any>;
  /**
   * Specifies the action, which is called as the user clicks on the profile picture button.
   */
  onClick?: () => void;
  /**
   * Specifies if the profile picture button should render as a link component.
   */
  renderAsLink?: boolean;
  /**
   * Specifies the URL of the profile picture.
   */
  src: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const ProfilePictureButton: FC<ProfilePictureButtonProps> = ({
  alt,
  ariaLabel,
  imageComponent,
  imageComponentArgs,
  linkComponent,
  linkComponentArgs,
  onClick,
  renderAsLink = false,
  src,
  ...args
}) => {
  return (
    <NaviButton
      {...args}
      {...linkComponentArgs}
      aria-label={ariaLabel}
      onClick={onClick}
      linkComponent={linkComponent}
      renderAsLink={renderAsLink}
    >
      <ProfilePicture
        imageComponent={imageComponent}
        {...imageComponentArgs}
        size={ProfilePictureSize.s}
        alt={alt}
        src={src}
      />
    </NaviButton>
  );
};
