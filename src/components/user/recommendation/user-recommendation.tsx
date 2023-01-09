import React, { FC } from 'react';
import { ProfilePicture, ProfilePictureSize } from '../../profile-picture/profile-picture';
import { Label, LabelSizes } from '../../typography/label';
import { TextButton, TextButtonColor, TextButtonDisplayMode, TextButtonSize } from '../../buttons/text-button';
import { IconMumble } from '../../icons/icon-mumble';
import { IconLink, IconLinkColor } from '../../links/icon-link/icon-link';
import { IconProfile } from '../../icons/icon-profile';
import { Stack, StackAlignItems, StackDirection, StackSpacing } from '../../../layout/stack/stack';

export type UserRecommendationProps = {
  /**
   * Provides alternative information for the profile picture if a user for some reason cannot view it.
   */
  alt: string;
  /**
   * Specifies the name to display in the label.
   */
  displayName: string;
  /**
   * Specifies the URL of the page the profile icon link goes to.
   */
  hrefProfile: string;
  /**
   * Specifies the action, which is called as the user clicks on the Follow Button.
   */
  onFollowClick: () => void;
  /**
   * Specifies the URL of the profile picture.
   */
  src: string;
  /**
   * Specifies the username.
   */
  username: string;
};

export const UserRecommendation: FC<UserRecommendationProps> = ({
  alt,
  displayName,
  hrefProfile,
  onFollowClick,
  src,
  username,
}) => {
  return (
    <div className="p-s bg-white rounded-2xl">
      <Stack spacing={StackSpacing.s} direction={StackDirection.col} alignItems={StackAlignItems.center}>
        <ProfilePicture size={ProfilePictureSize.l} src={src} alt={alt} />

        <Stack spacing={StackSpacing.xs} direction={StackDirection.col} alignItems={StackAlignItems.center}>
          <Label size={LabelSizes.l}>{displayName}</Label>
          <IconLink color={IconLinkColor.violet} href={hrefProfile} icon={<IconProfile />} target="_self">
            {username}
          </IconLink>
        </Stack>

        <TextButton
          color={TextButtonColor.violet}
          size={TextButtonSize.m}
          icon={<IconMumble />}
          displayMode={TextButtonDisplayMode.fullWidth}
          onClick={onFollowClick}
        >
          Follow
        </TextButton>
      </Stack>
    </div>
  );
};
