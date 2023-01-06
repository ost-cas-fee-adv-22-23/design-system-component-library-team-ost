import React, { FC } from 'react';
import { ProfilePicture, ProfilePictureSizes } from '../../profile-picture/profile-picture';
import { Label, LabelSizes } from '../../typography/label';
import { TextButton, TextButtonColors, TextButtonDisplayModes, TextButtonSizes } from '../../buttons/text-button';
import { IconMumble } from '../../icons/icon-mumble';
import { IconLink, IconLinkColor } from '../../links/icon-link/icon-link';
import { IconProfile } from '../../icons/icon-profile';

// todo: Sollen für die Props src und alt jeweils ein Interface ProfilePicture erstellt werden?
export type UserRecommendationProps = {
  onFollowClick: () => void;
  displayName?: string;
  src?: string;
  alt: string;
  username: string;
  hrefProfile?: string;
};

export const UserRecommendation: FC<UserRecommendationProps> = ({
  onFollowClick,
  displayName,
  src,
  alt,
  username,
  hrefProfile,
}) => {
  return (
    <div className="flex flex-col gap-s p-s items-center bg-white rounded-2xl">
      <ProfilePicture size={ProfilePictureSizes.l} src={src} alt={alt} />

      <Label size={LabelSizes.l}>{displayName}</Label>

      <IconLink color={IconLinkColor.violet} href={hrefProfile ?? '#'} icon={<IconProfile />} target="_self">
        {username}
      </IconLink>

      <TextButton
        color={TextButtonColors.violet}
        size={TextButtonSizes.m}
        icon={<IconMumble />}
        displayMode={TextButtonDisplayModes.fullWidth}
        onClick={onFollowClick}
      >
        Follow
      </TextButton>
    </div>
  );
};
