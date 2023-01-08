import React, { FC, ReactNode } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';

export type ProfileHeaderProps = {
  /**
   * Specifies the content of the profile header.
   */
  children: ReactNode;
};

export const ProfileHeader: FC<ProfileHeaderProps> = ({ children }) => {
  const profileHeaderBaseStyle = ['w-[680px]'];

  return <div className={mergeClassNames(profileHeaderBaseStyle)}>{children}</div>;
};
