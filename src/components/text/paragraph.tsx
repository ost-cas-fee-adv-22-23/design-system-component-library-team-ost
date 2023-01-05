import React, { FC, ReactNode, HTMLAttributes } from 'react';

export enum ParagraphSizes {
  m = 'm',
  l = 'l',
}

export type ParagraphProps = {
  /**
   * Paragraph text
   */
  children: ReactNode;
  /**
   * Paragraph font size
   */
  size: ParagraphSizes;
} & HTMLAttributes<HTMLParagraphElement>;

const classMap = {
  m: 'font-poppins font-medium text-current text-base leading-snug',
  l: 'font-poppins font-medium text-current text-2xl leading-normal',
};

export const Paragraph: FC<ParagraphProps> = ({ children, size = ParagraphSizes.m, ...props }) => (
  <p className={classMap[size]} {...props}>
    {children}
  </p>
);
