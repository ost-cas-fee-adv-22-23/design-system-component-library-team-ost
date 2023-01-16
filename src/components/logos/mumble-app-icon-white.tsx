import React, { FC } from 'react';
import { LogoProps } from './logo-props';

export const MumbleAppIconWhite: FC<LogoProps> = ({ ariaLabel, onClick }) => (
  <svg
    aria-label={ariaLabel}
    className={onClick ? 'cursor-pointer' : 'cursor-default'}
    onClick={onClick}
    width="100%"
    height="100%"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 64C0 41.5979 0 30.3968 4.35974 21.8404C8.19467 14.3139 14.3139 8.19467 21.8404 4.35974C30.3968 0 41.5979 0 64 0H96C118.402 0 129.603 0 138.16 4.35974C145.686 8.19467 151.805 14.3139 155.64 21.8404C160 30.3968 160 41.5979 160 64V96C160 118.402 160 129.603 155.64 138.16C151.805 145.686 145.686 151.805 138.16 155.64C129.603 160 118.402 160 96 160H64C41.5979 160 30.3968 160 21.8404 155.64C14.3139 151.805 8.19467 145.686 4.35974 138.16C0 129.603 0 118.402 0 96V64Z"
      fill="white"
    />
    <g clipPath="url(#clip0_437_1105)">
      <path
        d="M86.6667 90H73.3333C71.4258 90 69.7135 91.0612 68.8607 92.7669C68.0078 94.4694 68.1901 96.4779 69.3327 97.9981L75.9993 106.891C76.9531 108.161 78.4114 108.89 80 108.89C81.5886 108.89 83.0469 108.161 84.0007 106.888L90.6673 98.0013C91.8099 96.4779 91.9922 94.4694 91.1393 92.7669C90.2865 91.0612 88.5742 90 86.6667 90Z"
        fill="url(#paint0_linear_437_1105)"
      />
      <path
        d="M116.12 72.1517C115.235 69.8159 114.136 67.4571 112.861 65.1422C117.135 62.8979 120 58.419 120 53.3333C120 45.9798 114.02 40 106.667 40C101.865 40 97.4064 42.8033 94.9882 46.946C90.5688 44.693 85.5747 43.3333 80 43.3333C74.4253 43.3333 69.4314 44.6932 65.0118 46.946C62.5936 42.8033 58.135 40 53.3333 40C45.9798 40 40 45.9798 40 53.3333C40 58.4184 42.8646 62.8971 47.1375 65.1416C45.8622 67.4567 44.7628 69.8157 43.877 72.1517C40.1367 82.0313 37.2168 96.0352 44.5606 106.67C50.6673 115.514 62.5911 120 80 120C97.4089 120 109.333 115.514 115.439 106.67C122.783 96.0352 119.86 82.0313 116.12 72.1517ZM109.954 102.881C105.166 109.818 95.0879 113.333 80 113.333C64.9121 113.333 54.834 109.818 50.0456 102.881C44.3457 94.6289 46.9368 82.9004 50.1107 74.515C51.6634 70.4199 60.4004 50 80 50C99.5996 50 108.337 70.4199 109.889 74.515C113.063 82.9004 115.654 94.6289 109.954 102.881Z"
        fill="url(#paint1_linear_437_1105)"
      />
      <path
        d="M72.1289 81.2663C75.1367 76.9889 75.3971 75.2864 74.6452 72.3437C73.2194 66.7611 69.6647 65.5892 66.9368 65.5892C60.1595 65.5892 54.873 74.7363 54.8079 79.3099C54.7689 82.0573 55.8789 84.9186 57.7116 86.7773C58.9974 88.0794 60.5078 88.7695 62.0833 88.7695C66.2923 88.7695 69.5247 84.9772 72.1289 81.2663Z"
        fill="url(#paint2_linear_437_1105)"
      />
      <path
        d="M93.0632 65.5892C90.3353 65.5892 86.7806 66.7611 85.3548 72.3438C84.6029 75.2865 84.8633 76.9889 87.8711 81.2663C90.4753 84.9772 93.7077 88.7696 97.9167 88.7696C99.4922 88.7696 101.003 88.0795 102.288 86.7774C104.121 84.9186 105.231 82.0573 105.192 79.3132C105.127 74.7363 99.8405 65.5892 93.0632 65.5892Z"
        fill="url(#paint3_linear_437_1105)"
      />
    </g>
    <defs>
      <linearGradient id="paint0_linear_437_1105" x1="40" y1="80" x2="120" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="paint1_linear_437_1105" x1="40" y1="80" x2="120" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="paint2_linear_437_1105" x1="40" y1="80" x2="120" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="paint3_linear_437_1105" x1="40" y1="80" x2="120" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <clipPath id="clip0_437_1105">
        <rect width="80" height="80" fill="white" transform="translate(40 40)" />
      </clipPath>
    </defs>
  </svg>
);
