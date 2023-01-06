import React, { FC } from 'react';
import { ProfilePicture, ProfilePictureSizes } from '../../profile-picture/profile-picture';
import { Label, LabelSizes } from '../../typography/label';
import { Link, LinkType } from '../../link/link';
import { TextButton, TextButtonColors, TextButtonDisplayModes, TextButtonSizes } from '../../buttons/text-button';
import { IconMumble } from '../../icons/icon-mumble';

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
      <Link type={LinkType.profile} href={hrefProfile ?? '#'} target="_self">
        {username}
      </Link>

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
