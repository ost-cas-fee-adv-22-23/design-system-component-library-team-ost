import React, { FC } from 'react';
import { IconProps, IconSizes } from './icon-props';

export const IconHeartFilled: FC<IconProps> = ({ size = IconSizes.m }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_413_275)">
      <path
        d="M11.6 0C10.1 0 8.8 0.8 8 2C7.2 0.8 5.9 0 4.4 0C2 0 0 2 0 4.4C0 8.8 8 15.3 8 15.3C8 15.3 16 8.8 16 4.4C16 2 14 0 11.6 0Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_413_275">
        <rect width={size} height={size} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
