import React, { FC, ReactNode } from 'react';

export type ParagraphProps = {
  children: ReactNode;
  size: 'M' | 'L';
};

const classMap = {
  M: 'font-poppins font-medium text-current text-lg',
  L: 'font-poppins font-medium text-current text-2xl',
};

export const Paragraph: FC<ParagraphProps> = ({ children, size = 'M' }) => <p className={classMap[size]}>{children}</p>;
