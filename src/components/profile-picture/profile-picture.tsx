import { FC } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { IconButton } from '../buttons/icon-button';
import { IconEdit } from '../icons/icon-edit';
import { NoProfilePicture } from './no-profile-picture';

export enum ProfilePictureSizes {
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export type ProfilePictureProps = {
  size: ProfilePictureSizes;
  alt: string;
  src?: string;
  canEdit?: boolean;
  onEditClick: () => void;
};

export const ProfilePicture: FC<ProfilePictureProps> = ({ size, alt, src, canEdit = false, onEditClick }) => {
  const profilePictureBaseStyle = ['flex', 'items-center', 'justify-center', 'rounded-full', 'overflow-hidden'];

  const profilePictureSizeStyles = {
    s: ['h-10', 'w-10'],
    m: ['h-16', 'w-16', 'outline', 'outline-slate-100', 'outline-6'],
    l: ['h-24', 'w-24', 'outline', 'outline-slate-100', 'outline-6'],
    xl: ['h-40', 'w-40', 'outline', 'outline-slate-100', 'outline-6'],
  };

  const profilePictureBorderStyles = {
    s: [],
    m: ['outline', 'outline-slate-100', 'outline-6'],
    l: ['outline', 'outline-slate-100', 'outline-6'],
    xl: ['outline-slate-100', 'outline-6'],
  };

  const profilePictureAnimationStyles = {
    s: ['hover:scale-125', 'ease-in-out', 'duration-300', 'object-cover'],
    m: ['hover:scale-125', 'ease-in-out', 'duration-300', 'object-cover'],
    l: ['object-cover'],
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
      {canEdit && size === ProfilePictureSizes.xl && (
        <div className="absolute bottom-0 right-0">
          <IconButton icon={<IconEdit />} onClick={onEditClick} />
        </div>
      )}
    </div>
  );
};
