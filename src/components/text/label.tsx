import React, { FC, ReactNode } from 'react';

export enum LabelSizes {
    s = 's',
    m = 'm',
    l = 'l',
    xl = 'xl', 
    placeholder = 'placeholder',
}

export type LabelProps = {
    children: ReactNode;
    size: LabelSizes;
    htmlFor?: string;
  };

const classMap = {
    s: 'font-poppins font-semibold text-xs leading-none text-current',
    m: 'font-poppins font-semibold text-sm leading-none text-current',
    l: 'font-poppins font-semibold text-xl leading-none text-current',
    xl: 'font-poppins font-semibold text-2xl leading-none text-current',
    placeholder: 'font-poppins font-medium text-sm leading-none text-slate-300',
}

export const Label: FC<LabelProps> = ({ children, size = LabelSizes.m, htmlFor }) => (
    <label htmlFor={htmlFor} className={classMap[size]}>
        {children}
    </label>
);