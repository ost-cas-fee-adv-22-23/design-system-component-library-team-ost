import React, { FC, ImgHTMLAttributes } from 'react';
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

export type ProfilePictureBaseProps<T> = {
  /**
   * Alt Attribute for the profile picture. It provides alternative information if a user for some reason cannot view it.
   */
  alt: string;
  /**
   * Specifies if the user can edit the profile picture. Could only be set if size is "XL".
   */
  canEdit?: boolean;
  /**
   * Specifies a custom image component, e.g. next/image.
   */
  imageComponent?: FC<T>;
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
} & Omit<T, 'className' | 'src'>;

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

type ProfilePictureProps<T> = (ProfilePictureBaseProps<T> & WithoutSizeXL) | (ProfilePictureBaseProps<T> & WithSizeXL);

export function ProfilePicture<T = ImgHTMLAttributes<HTMLImageElement>>({
  size,
  alt,
  canEdit = false,
  imageComponent,
  src,
  onEditClick,
  ...args
}: Omit<ProfilePictureProps<T>, 'className'>): JSX.Element {
  const ImageComponent = imageComponent || 'img';

  const profilePictureBaseStyle = ['relative', 'flex', 'items-center', 'justify-center', 'rounded-full', 'overflow-hidden'];

  if (size === ProfilePictureSize.l) {
    profilePictureBaseStyle.push('hover:rounded-4xl');
  }

  const profilePictureSizeStyles: Record<ProfilePictureSize, string[]> = {
    s: ['h-10', 'w-10'],
    m: ['h-16', 'w-16'],
    l: ['h-24', 'w-24'],
    xl: ['h-40', 'w-40'],
  };

  const profilePictureBorderStyles: Record<ProfilePictureSize, string[]> = {
    s: [],
    m: ['outline', 'outline-slate-100', 'outline-6'],
    l: ['outline', 'outline-slate-100', 'outline-6'],
    xl: ['outline-slate-100', 'outline-6'],
  };

  const profilePictureAnimationStyles: Record<ProfilePictureSize, string[]> = {
    s: ['hover:scale-125', 'group-hover:scale-125', 'ease-in-out', 'duration-300', 'w-full', 'h-full', 'object-cover'],
    m: ['hover:scale-125', 'group-hover:scale-125', 'ease-in-out', 'duration-300', 'w-full', 'h-full', 'object-cover'],
    l: ['hover:scale-125', 'group-hover:scale-125', 'ease-in-out', 'duration-300', 'w-full', 'h-full', 'object-cover'],
    xl: ['w-full', 'h-full', 'object-cover'],
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
          <ImageComponent
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...(args as any)}
            // eslint-disable-next-line react/forbid-component-props
            className={mergeClassNames(profilePictureAnimationStyles[size])}
            src={src}
            alt={alt}
          />
        ) : (
          <div className="flex items-center justify-center h-3/5 w-3/5">
            <NoProfilePicture />
          </div>
        )}
      </div>
      {canEdit && onEditClick && size === ProfilePictureSize.xl && (
        <div className="absolute bottom-0 right-0">
          <IconButton ariaLabel="Edit profilepicture" icon={<IconEdit />} onClick={onEditClick} />
        </div>
      )}
    </div>
  );
}
