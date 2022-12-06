import React, { FC, ReactNode } from 'react';

export type HeadingProps = {
  children: ReactNode;
};

export const HeadingH1: FC<HeadingProps> = ({ children }) => <h1 className={'text-h1 text-slate-600'}>{children}</h1>;
