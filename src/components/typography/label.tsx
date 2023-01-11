import React, { FC, ReactNode } from 'react';

export enum LabelSize {
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  placeholder = 'placeholder',
}

export type LabelProps = {
  /**
   * Label text
   */
  children: ReactNode;
  /**
   * For attribute for the label
   */
  htmlFor?: string;
  /**
   * Label font size
   */
  size: LabelSize;
};

const classMap: Record<LabelSize, string> = {
  s: 'font-poppins font-semibold text-xs leading-none text-current cursor-inherit',
  m: 'font-poppins font-semibold text-sm leading-none text-current cursor-inherit',
  l: 'font-poppins font-semibold text-lg leading-none text-current cursor-inherit',
  xl: 'font-poppins font-semibold text-2xl leading-none text-current cursor-inherit',
  placeholder: 'font-poppins font-medium text-sm leading-none text-slate-300',
};

export const Label: FC<LabelProps> = ({ children, size = LabelSize.m, htmlFor }) => (
  <label htmlFor={htmlFor} className={classMap[size]}>
    {children}
  </label>
);
