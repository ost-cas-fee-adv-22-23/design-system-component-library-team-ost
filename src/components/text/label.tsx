import React, { FC, ReactNode } from 'react';

export type LabelProps = {
    children: ReactNode;
    size: 'S' | 'M' | 'L' | 'XL' | 'Placeholder';
    htmlFor?: string;
  };

const classMap = {
    S: 'font-poppins text-xs text-current',
    M: 'font-poppins text-base text-slate-600',
    L: 'font-poppins text-xl text-slate-600',
    XL: 'font-poppins text-2xl text-slate-600',
    Placeholder: 'font-poppins text-base text-slate-300',
}

export const Label: FC<LabelProps> = ({ children, size = 'M', htmlFor }) => (
    <label htmlFor={htmlFor} className={classMap[size]}>
        {children}
    </label>
);