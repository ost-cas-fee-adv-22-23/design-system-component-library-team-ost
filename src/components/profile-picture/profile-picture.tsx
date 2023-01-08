import React, { FC } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { IconButton } from '../buttons/icon-button';
import { IconEdit } from '../icons/icon-edit';
import { NoProfilePicture } from './no-profile-picture';

export enum ProfilePictureSize {
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export type ProfilePictureBaseProps = {
  /**
   * Alt Attribute for the profile picture. It provides alternative information if a user for some reason cannot view it.
   */
  alt: string;
  /**
   * Specifies if the user can edit the profile picture. Could only be set if size is "XL".
   */
  canEdit?: boolean;
  /**
   * Specifies the action, which is called as the user clicks on the edit icon. Could only be set if size is "XL".
   */
  onEditClick?: () => void;
  /**
   * Specifies the size of the profile picture.
   */
  size: ProfilePictureSize;
  /**
   * Specifies the URL of the profile picture.
   */
  src?: string;
};

type WithoutSizeXL = {
  canEdit?: never;
  onEditClick?: never;
  size: ProfilePictureSize.l | ProfilePictureSize.m | ProfilePictureSize.s;
};

type WithSizeXL = {
  canEdit?: boolean;
  onEditClick?: () => void;
  size: ProfilePictureSize.xl;
};

type ProfilePictureProps = (ProfilePictureBaseProps & WithoutSizeXL) | (ProfilePictureBaseProps & WithSizeXL);

export const ProfilePicture: FC<ProfilePictureProps> = ({ size, alt, canEdit = false, src, onEditClick }) => {
  const profilePictureBaseStyle = ['flex', 'items-center', 'justify-center', 'rounded-full', 'overflow-hidden'];

  if (size === ProfilePictureSize.l) {
    profilePictureBaseStyle.push('hover:rounded-4xl');
  }

  const profilePictureSizeStyles: Record<ProfilePictureSize, string[]> = {
    s: ['h-10', 'w-10'],
    m: ['h-16', 'w-16', 'outline', 'outline-slate-100', 'outline-6'],
    l: ['h-24', 'w-24', 'outline', 'outline-slate-100', 'outline-6'],
    xl: ['h-40', 'w-40', 'outline', 'outline-slate-100', 'outline-6'],
  };

  const profilePictureBorderStyles: Record<ProfilePictureSize, string[]> = {
    s: [],
    m: ['outline', 'outline-slate-100', 'outline-6'],
    l: ['outline', 'outline-slate-100', 'outline-6'],
    xl: ['outline-slate-100', 'outline-6'],
  };

  const profilePictureAnimationStyles: Record<ProfilePictureSize, string[]> = {
    s: ['hover:scale-125', 'group-hover:scale-125', 'ease-in-out', 'duration-300', 'object-cover'],
    m: ['hover:scale-125', 'group-hover:scale-125', 'ease-in-out', 'duration-300', 'object-cover'],
    l: ['hover:scale-125', 'group-hover:scale-125', 'ease-in-out', 'duration-300', 'object-cover'],
    xl: ['object-cover'],
  };

  return (
    <div className="relative">
      <div
        className={mergeClassNames([
          profilePictureBaseStyle,
          profilePictureSizeStyles[size],
          profilePictureBorderStyles[size],
          src === undefined || src === '' ? ['bg-violet-600'] : [],
        ])}
      >
        {src ? (
          <img src={src} alt={alt} className={mergeClassNames(profilePictureAnimationStyles[size])} />
        ) : (
          <div className="flex items-center justify-center h-3/5 w-3/5">
            <NoProfilePicture />
          </div>
        )}
      </div>
      {canEdit && onEditClick && size === ProfilePictureSize.xl && (
        <div className="absolute bottom-0 right-0">
          <IconButton icon={<IconEdit />} onClick={onEditClick} />
        </div>
      )}
    </div>
  );
};
