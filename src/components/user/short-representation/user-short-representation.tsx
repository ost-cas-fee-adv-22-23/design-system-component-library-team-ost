import React, { FC } from 'react';
import { IconProfile } from '../../icons/icon-profile';
import { IconTime } from '../../icons/icon-time';
import { IconCalendar } from '../../icons/icon-calendar';
import { IconLink, IconLinkColor } from '../../links/icon-link/icon-link';
import { IconSettings } from '../../icons/icon-settings';
import { ProfilePicture, ProfilePictureSizes } from '../../profile-picture/profile-picture';
import { Heading, HeadingSizes } from '../../typography/heading';
import { Label, LabelSizes } from '../../typography/label';
import { IconLocation } from '../../icons/icon-location';

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
        {
          <div className="flex gap-s">
            <IconLink color={IconLinkColor.violet} href={hrefProfile ?? '#'} icon={<IconProfile />} target="_self">
              {username}
            </IconLink>
            {(size === UserShortRepresentationSizes.s ||
              size === UserShortRepresentationSizes.m ||
              size === UserShortRepresentationSizes.l) &&
              timestamp && (
                <IconLink color={IconLinkColor.slate} href="#" icon={<IconTime />} target="_self">
                  {timestamp}
                </IconLink>
              )}

            {size === UserShortRepresentationSizes.xl && location && (
              <IconLink color={IconLinkColor.slate} href="#" icon={<IconLocation />} target="_self">
                {location}
              </IconLink>
            )}
            {size === UserShortRepresentationSizes.xl && joined && (
              <IconLink color={IconLinkColor.slate} href="#" icon={<IconCalendar />} target="_self">
                {joined}
              </IconLink>
            )}
          </div>
        }
      </div>
    </div>
  );
};
