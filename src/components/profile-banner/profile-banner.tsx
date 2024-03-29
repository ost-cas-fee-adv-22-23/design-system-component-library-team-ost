import React, { FC, ImgHTMLAttributes } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { IconEdit } from '../icons/icon-edit';
import { IconSize } from '../icons/icon-props';

export type ProfileBannerProps<T> = {
  /**
   * Alt Attribute for the picture. It provides alternative information if a user for some reason cannot view it.
   */
  alt?: string;
  /**
   *  Specifies if the user can edit the profile banner.
   */
  canEdit?: boolean;
  /**
   * Specifies a custom image component, e.g. next/image.
   */
  imageComponent?: FC<T>;
  /**
   * Specifies the action, which is called as the user clicks on the edit icon. It is only relevant if the user can edit the profile banner.
   */
  onEditClick?: () => void;
  /**
   * Specifies the URL of the profile banner.
   */
  src?: string;
} & Omit<T, 'className' | 'src'> &
  ImgHTMLAttributes<HTMLImageElement>;

export function ProfileBanner<T = ImgHTMLAttributes<HTMLImageElement>>({
  alt,
  canEdit = false,
  imageComponent,
  onEditClick,
  src,
  ...args
}: Omit<ProfileBannerProps<T>, 'className'>): JSX.Element {
  const ImageComponent = imageComponent || 'img';

  const profileBannerBaseStyle = [
    'flex',
    'items-center',
    'justify-center',
    'relative',
    'w-full',
    'aspect-16/9',
    'overflow-hidden',
    'rounded-2xl',
    'bg-violet-100',
  ];

  const profileBannerOverlayStyle = [
    'group',
    'absolute',
    'top-0',
    'right-0',
    'bottom-0',
    'left-0',
    'cursor-pointer',
    'bg-violet-600',
    'opacity-0',
    'hover:opacity-50',
    'transition-all',
    'ease-in-out',
    'duration-300',
  ];

  const profileBannerEditIconStyle = [
    'absolute',
    'top-1/2',
    'left-1/2',
    'transform',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'text-white',
    'group-hover:rotate-0',
    'transition-all',
    'ease-in-out',
    'rotate-15',
    'duration-300',
  ];

  const profileBannerImageStyle = ['w-full', 'object-cover', 'object-center'];

  return (
    <div className={mergeClassNames(profileBannerBaseStyle)}>
      {canEdit && (
        <div className={mergeClassNames(profileBannerOverlayStyle)} onClick={onEditClick}>
          <div className={mergeClassNames(profileBannerEditIconStyle)}>
            <IconEdit size={IconSize.l} />
          </div>
        </div>
      )}

      {src && (
        <ImageComponent
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(args as any)}
          // eslint-disable-next-line react/forbid-component-props
          className={mergeClassNames(profileBannerImageStyle)}
          src={src}
          alt={alt}
          role="img"
        />
      )}
    </div>
  );
}
