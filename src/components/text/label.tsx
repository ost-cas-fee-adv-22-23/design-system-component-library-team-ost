import React, { FC, ReactNode } from 'react';

export type LabelProps = {
  children: ReactNode;
  size: 'S' | 'M' | 'L' | 'XL' | 'Placeholder';
  htmlFor?: string;
};

const classMap = {
  S: 'font-poppins font-semibold text-xs text-current cursor-inherit',
  M: 'font-poppins font-semibold text-base text-current cursor-inherit',
  L: 'font-poppins font-semibold text-xl text-current cursor-inherit',
  XL: 'font-poppins font-semibold text-2xl text-current cursor-inherit',
  Placeholder: 'font-poppins font-medium text-base text-slate-300 cursor-inherit',
};

export const Label: FC<LabelProps> = ({ children, size = 'M', htmlFor }) => (
  <label htmlFor={htmlFor} className={classMap[size]}>
    {children}
  </label>
);
