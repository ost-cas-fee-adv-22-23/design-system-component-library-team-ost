import React, { FC } from 'react';
import { ProfilePicture, ProfilePictureSize } from '../../profile-picture/profile-picture';
import { Label, LabelSize } from '../../typography/label';
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
   * Specifies the URL of the page the profile icon link goes to.
   */
  hrefProfile: string;
  /**
   * Specifies a custom link component for the profile icon link, e.g. next/link.
   */
  // todo: muss noch mit dem korrekten type ergänzt werden
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  linkComponent?: FC<any>;
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
  imageComponent,
  imageComponentArgs,
  hrefProfile,
  linkComponent,
  onFollowClick,
  src,
  username,
}) => {
  return (
    <div className="p-s bg-white rounded-2xl">
      <Stack spacing={StackSpacing.s} direction={StackDirection.col} alignItems={StackAlignItems.center}>
        <ProfilePicture
          imageComponent={imageComponent}
          {...imageComponentArgs}
          size={ProfilePictureSize.l}
          src={src}
          alt={alt}
        />

        <Stack spacing={StackSpacing.xs} direction={StackDirection.col} alignItems={StackAlignItems.center}>
          <Label size={LabelSize.l}>{displayName}</Label>
          <IconLink color={IconLinkColor.violet} href={hrefProfile} icon={<IconProfile />} linkComponent={linkComponent}>
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
