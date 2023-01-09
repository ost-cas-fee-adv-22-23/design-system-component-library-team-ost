import React, { FC, ReactElement } from 'react';
import { IconProfile } from '../../icons/icon-profile';
import { IconTime } from '../../icons/icon-time';
import { IconCalendar } from '../../icons/icon-calendar';
import { IconLink, IconLinkColor } from '../../links/icon-link/icon-link';
import { IconSettings } from '../../icons/icon-settings';
import { ProfilePicture, ProfilePictureSize } from '../../profile-picture/profile-picture';
import { Heading, HeadingSizes } from '../../typography/heading';
import { Label, LabelSizes } from '../../typography/label';
import { IconLocation } from '../../icons/icon-location';
import { Stack, StackAlignItems, StackDirection, StackSpacing } from '../../../layout/stack/stack';

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

type UserShortRepresentationBaseProps = {
  /**
   * Provides alternative information for the profile picture if a user for some reason cannot view it.
   * To display the profile picture the following properties are required: "profilePictureSize", "src" and "alt".
   */
  alt?: string;
  /**
   * Specifies the name to display in the label.
   */
  displayName: string;
  /**
   * Specifies the URL of the page the profile icon link goes to.
   * To display the profile icon link the following properties are required: "username" and "hrefProfile".
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
   * Specifies the action, which is called as the user clicks on the settings icon.
   * To display the settings icon the following properties are required: "showSettings" and "onSettingsClick".
   */
  onSettingsClick?: () => void;
  /**
   * Specifies the size of the profile picture. To display the profile picture the following properties are required: "profilePictureSize", "src" and "alt".
   */
  profilePictureSize?: UserShortRepresentationProfilePictureSize;
  /**
   * Specifies if the settings icon is visible.
   * To display the settings icon the following properties are required: "showSettings" and "onSettingsClick".
   */
  showSettings?: boolean;
  /**
   * Specifies the URL of the profile picture.
   * To display the profile picture the following properties are required: "profilePictureSize", "src" and "alt".
   */
  src?: string;
  /**
   * Specifies the timestamp when the user took action.
   */
  timestamp?: string;
  /**
   * Specifies the username.
   * To display the profile icon link the following properties are required: "username" and "hrefProfile".
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

type BaseWithoutProfilePictureWithoutSettings = UserShortRepresentationBaseProps &
  WithoutProfilePictureProps &
  WithoutSettingsProps;
type BaseWithProfilePictureWithoutSettings = UserShortRepresentationBaseProps &
  WithProfilePictureProps &
  WithoutSettingsProps;
type BaseWithoutProfilePictureWithSettings = UserShortRepresentationBaseProps &
  WithoutProfilePictureProps &
  WithSettingsProps;
type BaseWithProfilePictureWithSettings = UserShortRepresentationBaseProps & WithProfilePictureProps & WithSettingsProps;

type UserShortRepresentationProps =
  | BaseWithoutProfilePictureWithoutSettings
  | BaseWithProfilePictureWithoutSettings
  | BaseWithoutProfilePictureWithSettings
  | BaseWithProfilePictureWithSettings;

export const UserShortRepresentation: FC<UserShortRepresentationProps> = ({
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
}) => {
  const profilePictureVariantStyles: Record<UserShortRepresentationProfilePictureSize, ProfilePictureSize> = {
    s: ProfilePictureSize.s,
    m: ProfilePictureSize.m,
  };

  const labelVariantStyles: Record<UserShortRepresentationLabelType, ReactElement> = {
    s: <Label size={LabelSizes.s}>{displayName}</Label>,
    m: <Label size={LabelSizes.m}>{displayName}</Label>,
    l: <Label size={LabelSizes.l}>{displayName}</Label>,
    h3: <Heading headingLevel={HeadingSizes.h3}>{displayName}</Heading>,
  };

  return (
    <Stack spacing={StackSpacing.xs} alignItems={StackAlignItems.center}>
      {profilePictureSize && src && alt && (
        <ProfilePicture size={profilePictureVariantStyles[profilePictureSize]} src={src} alt={alt} />
      )}

      <Stack direction={StackDirection.col} spacing={StackSpacing.xs}>
        <Stack spacing={StackSpacing.xs} alignItems={StackAlignItems.center}>
          {labelVariantStyles[labelType]}

          {showSettings && onSettingsClick && (
            <span className="text-violet-600 cursor-pointer" onClick={onSettingsClick}>
              <IconSettings />
            </span>
          )}
        </Stack>
        <Stack spacing={StackSpacing.s}>
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
