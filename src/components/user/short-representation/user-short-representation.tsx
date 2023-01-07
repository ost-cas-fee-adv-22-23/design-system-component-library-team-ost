import React, { FC, ReactElement } from 'react';
import { IconProfile } from '../../icons/icon-profile';
import { IconTime } from '../../icons/icon-time';
import { IconCalendar } from '../../icons/icon-calendar';
import { IconLink, IconLinkColor } from '../../links/icon-link/icon-link';
import { IconSettings } from '../../icons/icon-settings';
import { ProfilePicture, ProfilePictureSizes } from '../../profile-picture/profile-picture';
import { Heading, HeadingSizes } from '../../typography/heading';
import { Label, LabelSizes } from '../../typography/label';
import { IconLocation } from '../../icons/icon-location';
import { Stack, StackAlignItems, StackDirections, StackSpacings } from '../../../layout/stack/stack';

export enum UserShortRepresentationProfilePictureSize {
  s = 's',
  m = 'm',
}

export enum UserShortRepresentationLabelType {
  s = 's',
  m = 'm',
  l = 'l',
  h3 = 'h3',
}

// type UserShortRepresentationProps = {
//   size: UserShortRepresentationSizes;
//   displayName?: string;
//   src?: string;
//   alt?: string;
//   timestamp?: string;
//   location?: string;
//   joined?: string;
//   username?: string;
//   hrefProfile?: string;
// } & ({ onSettingsClick: () => void } | { showSettings: boolean });

// type UserShortRepresentationProps = {
//   /**
//    * Provides alternative information for the profile picture if a user for some reason cannot view it.
//    */
//   alt?: string;
//   /**
//    * Specifies the name to display in the label.
//    */
//   displayName?: string;
//   /**
//    * Specifies the URL of the page the profile icon link goes to.
//    */
//   hrefProfile?: string;
//   /**
//    * Specifies when the user has joined.
//    */
//   joined?: string;
//   /**
//    * Specifies the label which shows the displayName.
//    */
//   labelType: UserShortRepresentationLabelType;
//   /**
//    * Specifies the location where the user is from.
//    */
//   location?: string;
//   /**
//    * Specifies the action, when the user clicks on the settings icon.
//    */
//   onSettingsClick: () => void;
//   /**
//    * Specifies the size of the profile picture.
//    */
//   profilePictureSize?: UserShortRepresentationProfilePictureSize;
//   /**
//    * Specifies if the settings icon is visible.
//    */
//   showSettings: boolean;
//   /**
//    * Specifies the URL of the profile picture.
//    */
//   src?: string;
//   /**
//    * Specifies the timestamp when the user took action.
//    */
//   timestamp?: string;
//   /**
//    * Specifies the username.
//    */
//   username?: string;
// };

type UserShortRepresentationBaseProps = {
  /**
   * Provides alternative information for the profile picture if a user for some reason cannot view it.
   */
  alt?: string;
  /**
   * Specifies the name to display in the label.
   */
  displayName?: string;
  /**
   * Specifies the URL of the page the profile icon link goes to.
   */
  hrefProfile?: string;
  /**
   * Specifies when the user has joined.
   */
  joined?: string;
  /**
   * Specifies the label which shows the displayName.
   */
  labelType: UserShortRepresentationLabelType;
  /**
   * Specifies the location where the user is from.
   */
  location?: string;
  /**
   * Specifies the action, when the user clicks on the settings icon.
   */
  onSettingsClick?: () => void;
  /**
   * Specifies the size of the profile picture.
   */
  profilePictureSize?: UserShortRepresentationProfilePictureSize;
  /**
   * Specifies if the settings icon is visible.
   */
  showSettings?: boolean;
  /**
   * Specifies the URL of the profile picture.
   */
  src?: string;
  /**
   * Specifies the timestamp when the user took action.
   */
  timestamp?: string;
  /**
   * Specifies the username.
   */
  username?: string;
};

type WithoutProfilePictureProps = {
  alt?: never;
  profilePictureSize?: never;
  src?: never;
};

type WithProfilePictureProps = {
  alt: string;
  profilePictureSize: UserShortRepresentationProfilePictureSize;
  src: string;
};

type WithoutSettingsProps = {
  showSettings?: never;
  onSettingsClick?: never;
};

type WithSettingsProps = {
  showSettings: boolean;
  onSettingsClick: () => void;
};

type A = UserShortRepresentationBaseProps & WithoutProfilePictureProps & WithoutSettingsProps;
type B = UserShortRepresentationBaseProps & WithProfilePictureProps & WithoutSettingsProps;
type C = UserShortRepresentationBaseProps & WithoutProfilePictureProps & WithSettingsProps;
type D = UserShortRepresentationBaseProps & WithProfilePictureProps & WithSettingsProps;

type UserShortRepresentationProps = A | B | C | D;

export const UserShortRepresentation: FC<UserShortRepresentationProps> = (
  props
  //   {
  //   alt,
  //   displayName = 'Neuer User',
  //   hrefProfile,
  //   joined = 'Joined',
  //   labelType,
  //   location = 'Location',
  //   onSettingsClick,
  //   profilePictureSize,
  //   showSettings,
  //   src,
  //   timestamp,
  //   username = 'neueruser',
  // }
) => {
  // typeguards?
  const {
    alt,
    displayName,
    hrefProfile,
    joined,
    labelType,
    location,
    onSettingsClick,
    profilePictureSize,
    showSettings,
    src,
    timestamp,
    username,
  } = props;

  const profilePictureVariantStyles: Record<UserShortRepresentationProfilePictureSize, ProfilePictureSizes> = {
    s: ProfilePictureSizes.s,
    m: ProfilePictureSizes.m,
  };

  const labelVariantStyles: Record<UserShortRepresentationLabelType, ReactElement> = {
    s: <Label size={LabelSizes.s}>{displayName}</Label>,
    m: <Label size={LabelSizes.m}>{displayName}</Label>,
    l: <Label size={LabelSizes.l}>{displayName}</Label>,
    h3: <Heading headingLevel={HeadingSizes.h3}>{displayName}</Heading>,
  };

  return (
    <Stack spacing={StackSpacings.xs} alignitems={StackAlignItems.center}>
      {profilePictureSize && alt && (
        <ProfilePicture size={profilePictureVariantStyles[profilePictureSize]} src={src} alt={alt} />
      )}

      <Stack direction={StackDirections.col} spacing={StackSpacings.xs}>
        <Stack spacing={StackSpacings.xs} alignitems={StackAlignItems.center}>
          {labelVariantStyles[labelType]}

          {showSettings && onSettingsClick && (
            <span className="text-violet-600 cursor-pointer" onClick={onSettingsClick}>
              <IconSettings />
            </span>
          )}
        </Stack>
        <Stack spacing={StackSpacings.s}>
          {username && hrefProfile && (
            <IconLink color={IconLinkColor.violet} href={hrefProfile} icon={<IconProfile />} target="_self">
              {username}
            </IconLink>
          )}
          {location && (
            <IconLink color={IconLinkColor.slate} href="#" icon={<IconLocation />} target="_self">
              {location}
            </IconLink>
          )}
          {joined && (
            <IconLink color={IconLinkColor.slate} href="#" icon={<IconCalendar />} target="_self">
              {joined}
            </IconLink>
          )}
          {timestamp && (
            <IconLink color={IconLinkColor.slate} href="#" icon={<IconTime />} target="_self">
              {timestamp}
            </IconLink>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
