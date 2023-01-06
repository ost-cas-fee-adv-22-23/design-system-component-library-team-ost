import React, { FC } from 'react';
import { IconSettings } from '../../icons/icon-settings';
import { ProfilePicture, ProfilePictureSizes } from '../../profile-picture/profile-picture';
import { Heading, HeadingSizes } from '../../typography/heading';
import { Label, LabelSizes } from '../../typography/label';
import { Link, LinkType } from '../../link/link';

export enum UserShortRepresentationSizes {
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

// todo: Sollen für die Props src und alt jeweils ein Interface ProfilePicture erstellt werden?
export type UserShortRepresentationProps = {
  size: UserShortRepresentationSizes;
  showSettings?: boolean;
  onSettingsClick?: () => void;
  displayName?: string;
  src?: string;
  alt?: string;
  username?: string;
  timestamp?: string;
  location?: string;
  joined?: string;
  hrefProfile?: string;
};

export const UserShortRepresentation: FC<UserShortRepresentationProps> = ({
  size = UserShortRepresentationSizes.m,
  showSettings = false,
  onSettingsClick,
  displayName = 'Neuer User',
  src,
  alt,
  username = 'neueruser',
  timestamp,
  location = 'Location',
  joined = 'Joined',
  hrefProfile,
}) => {
  const labelVariantStyles = {
    s: <Label size={LabelSizes.s}>{displayName}</Label>,
    m: <Label size={LabelSizes.m}>{displayName}</Label>,
    l: <Label size={LabelSizes.l}>{displayName}</Label>,
    xl: <Heading headingLevel={HeadingSizes.h3}>{displayName}</Heading>,
  };

  return (
    <div className="flex gap-xs">
      {size === UserShortRepresentationSizes.s && alt && <ProfilePicture size={ProfilePictureSizes.s} src={src} alt={alt} />}
      <div className="flex flex-col gap-xs">
        <div className="flex gap-xs items-center">
          {labelVariantStyles[size]}
          {showSettings && (
            <span className="text-violet-600 cursor-pointer" onClick={onSettingsClick}>
              <IconSettings />
            </span>
          )}
        </div>
        <div className="flex gap-s">
          <Link type={LinkType.profile} href={hrefProfile ?? '#'} target="_self">
            {username}
          </Link>
          {(size === UserShortRepresentationSizes.s ||
            size === UserShortRepresentationSizes.m ||
            size === UserShortRepresentationSizes.l) &&
            timestamp && (
              <Link type={LinkType.timestamp} href="#" target="_self">
                {timestamp}
              </Link>
            )}

          {size === UserShortRepresentationSizes.xl && location && (
            <Link type={LinkType.location} href="#" target="_self">
              {location}
            </Link>
          )}
          {size === UserShortRepresentationSizes.xl && joined && (
            <Link type={LinkType.joined} href="#" target="_self">
              {joined}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
