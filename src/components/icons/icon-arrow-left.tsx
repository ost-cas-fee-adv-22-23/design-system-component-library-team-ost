import React, { FC } from 'react';
import { IconProps, IconSizes } from './icon-props';

export const IconArrowLeft: FC<IconProps> = ({ size = IconSizes.m }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_426_314)">
      <path
        d="M15.0005 7.00001H7.00047V4.00001C7.00054 3.81158 6.94737 3.62696 6.84709 3.46743C6.7468 3.3079 6.60349 3.17995 6.43365 3.09833C6.26382 3.0167 6.07438 2.98472 5.88716 3.00607C5.69994 3.02743 5.52256 3.10124 5.37547 3.21901L0.375469 7.21901C0.258315 7.31269 0.163737 7.43153 0.0987423 7.56673C0.0337473 7.70192 0 7.85 0 8.00001C0 8.15002 0.0337473 8.2981 0.0987423 8.43329C0.163737 8.56849 0.258315 8.68733 0.375469 8.78101L5.37547 12.781C5.52256 12.8988 5.69994 12.9726 5.88716 12.9939C6.07438 13.0153 6.26382 12.9833 6.43365 12.9017C6.60349 12.8201 6.7468 12.6921 6.84709 12.5326C6.94737 12.3731 7.00054 12.1884 7.00047 12V9.00001H15.0005C15.2657 9.00001 15.52 8.89465 15.7076 8.70712C15.8951 8.51958 16.0005 8.26523 16.0005 8.00001C16.0005 7.73479 15.8951 7.48044 15.7076 7.2929C15.52 7.10537 15.2657 7.00001 15.0005 7.00001Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_426_314">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
