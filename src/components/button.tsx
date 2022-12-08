import React, { FC, ReactNode } from 'react';
import { IconHeartFilled } from '../assets/icon-heart-filled';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

export type ButtonProps = {
  type: ButtonType;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ type, children }) => (
  <button className={type === ButtonType.primary ? 'flex justify-center gap-m bg-green-500 text-white' : 'bg-blue-200 text-black'}>
    {children}
    <IconHeartFilled size="24" />
  </button>
);
