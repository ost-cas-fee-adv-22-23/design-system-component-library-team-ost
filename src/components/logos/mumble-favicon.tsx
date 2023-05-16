import React, { FC } from 'react';
import { LogoProps } from './logo-props';

export const MumbleFavicon: FC<LogoProps<unknown>> = ({ ariaLabel, onClick }) => (
  <svg
    aria-label={ariaLabel}
    className={onClick ? 'cursor-pointer' : 'cursor-default'}
    onClick={onClick}
    width="100%"
    height="100%"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_437_1093)">
      <path
        d="M37.3333 40H26.6667C25.1406 40 23.7708 40.849 23.0885 42.2135C22.4062 43.5755 22.5521 45.1823 23.4661 46.3985L28.7995 53.513C29.5625 54.5287 30.7291 55.112 32 55.112C33.2709 55.112 34.4375 54.5287 35.2005 53.5104L40.5339 46.401C41.4479 45.1823 41.5938 43.5755 40.9115 42.2135C40.2292 40.849 38.8594 40 37.3333 40Z"
        fill="#475569"
      />
      <path
        d="M60.8958 25.7214C60.1877 23.8527 59.3084 21.9657 58.2887 20.1138C61.7077 18.3183 64 14.7352 64 10.6667C64 4.78387 59.2161 0 53.3333 0C49.492 0 45.9251 2.24267 43.9906 5.5568C40.4551 3.7544 36.4598 2.66667 32 2.66667C27.5402 2.66667 23.5451 3.75456 20.0094 5.5568C18.0749 2.24267 14.508 0 10.6667 0C4.78387 0 0 4.78387 0 10.6667C0 14.7347 2.29168 18.3177 5.70997 20.1133C4.68979 21.9653 3.81021 23.8525 3.10157 25.7214C0.109387 33.625 -2.22656 44.8281 3.64845 53.3359C8.53387 60.4115 18.0729 64 32 64C45.9271 64 55.4661 60.4115 60.3516 53.3359C66.2266 44.8281 63.888 33.625 60.8958 25.7214ZM55.9635 50.3047C52.1328 55.8542 44.0703 58.6667 32 58.6667C19.9297 58.6667 11.8672 55.8542 8.03645 50.3047C3.47656 43.7031 5.54947 34.3203 8.08853 27.612C9.33072 24.3359 16.3203 8 32 8C47.6797 8 54.6693 24.3359 55.9115 27.612C58.4505 34.3203 60.5234 43.7031 55.9635 50.3047Z"
        fill="#475569"
      />
      <path
        d="M25.7031 33.013C28.1094 29.5911 28.3177 28.2291 27.7161 25.875C26.5755 21.4089 23.7318 20.4713 21.5495 20.4713C16.1276 20.4713 11.8984 27.789 11.8463 31.4479C11.8151 33.6458 12.7031 35.9349 14.1693 37.4218C15.1979 38.4635 16.4062 39.0156 17.6666 39.0156C21.0339 39.0156 23.6198 35.9818 25.7031 33.013Z"
        fill="#475569"
      />
      <path
        d="M42.4505 20.4714C40.2682 20.4714 37.4245 21.4089 36.2839 25.875C35.6823 28.2292 35.8906 29.5911 38.2969 33.013C40.3802 35.9818 42.9662 39.0157 46.3333 39.0157C47.5938 39.0157 48.8021 38.4636 49.8307 37.4219C51.2969 35.9349 52.1849 33.6458 52.1536 31.4505C52.1016 27.7891 47.8724 20.4714 42.4505 20.4714Z"
        fill="#475569"
      />
    </g>
    <defs>
      <clipPath id="clip0_437_1093">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
