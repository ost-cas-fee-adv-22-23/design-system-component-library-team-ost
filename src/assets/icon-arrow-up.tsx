import React, { FC } from 'react';
import { IconProps } from './icon-props';

export const IconArrowUp: FC<IconProps> = ({ size = '16' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_426_315)">
      <path
        d="M8.78138 0.374966C8.68413 0.26339 8.56411 0.173946 8.42939 0.112656C8.29467 0.051366 8.14838 0.0196533 8.00038 0.0196533C7.85237 0.0196533 7.70608 0.051366 7.57136 0.112656C7.43664 0.173946 7.31662 0.26339 7.21938 0.374966L3.21938 5.37497C3.10161 5.52206 3.02779 5.69944 3.00644 5.88665C2.98509 6.07387 3.01707 6.26331 3.09869 6.43315C3.18032 6.60298 3.30827 6.7463 3.4678 6.84658C3.62733 6.94687 3.81194 7.00004 4.00038 6.99997H7.00038V15C7.00038 15.2652 7.10573 15.5195 7.29327 15.7071C7.48081 15.8946 7.73516 16 8.00038 16C8.26559 16 8.51995 15.8946 8.70748 15.7071C8.89502 15.5195 9.00038 15.2652 9.00038 15V6.99997H12.0004C12.1888 7.00004 12.3734 6.94687 12.533 6.84658C12.6925 6.7463 12.8204 6.60298 12.9021 6.43315C12.9837 6.26331 13.0157 6.07387 12.9943 5.88665C12.973 5.69944 12.8991 5.52206 12.7814 5.37497L8.78138 0.374966Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_426_315">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
