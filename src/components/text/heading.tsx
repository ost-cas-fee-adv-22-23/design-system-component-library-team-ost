import React, { ReactNode, HTMLAttributes, createElement } from 'react';

export enum HeadingSizes {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel: HeadingSizes;
  children: ReactNode;
}

const baseStyles = ['font-'];

const classMap = {
  h1: 'font-poppins text-current text-5xl leading-tight font-bold',
  h2: 'font-poppins text-current text-4xl leading-tight font-bold',
  h3: 'font-poppins text-current text-3xl leading-tight font-semibold',
  h4: 'font-poppins text-current text-2xl leading-tight font-semibold',
};

export const Heading = ({ headingLevel = HeadingSizes.h1, children }: HeadingProps) => {
  const HeadingElement = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) => createElement(headingLevel, props, children);

  return <HeadingElement className={classMap[headingLevel]}>{children}</HeadingElement>;
};
