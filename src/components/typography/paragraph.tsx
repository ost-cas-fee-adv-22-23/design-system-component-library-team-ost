import React, { FC, ReactNode, HTMLAttributes } from 'react';

export enum ParagraphSize {
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
  size: ParagraphSize;
} & HTMLAttributes<HTMLParagraphElement>;

const classMap: Record<ParagraphSize, string> = {
  m: 'font-poppins font-medium text-current text-base leading-snug',
  l: 'font-poppins font-medium text-current text-2xl leading-normal',
};

export const Paragraph: FC<ParagraphProps> = ({ children, size = ParagraphSize.m, ...args }) => (
  <p className={classMap[size]} {...args}>
    {children}
  </p>
);
