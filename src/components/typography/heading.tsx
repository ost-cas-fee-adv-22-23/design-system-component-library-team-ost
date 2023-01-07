import React, { ReactNode, HTMLAttributes, createElement } from 'react';

export enum HeadingSizes {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}
export type HeadingProps = {
  /**
   * Heading text
   */
  children: ReactNode;
  /**
   * Heading level which defines the html element and the size
   */
  headingLevel: HeadingSizes;
} & HTMLAttributes<HTMLHeadingElement>;

const classMap: Record<HeadingSizes, string> = {
  h1: 'font-poppins text-current text-5xl leading-tight font-bold',
  h2: 'font-poppins text-current text-4xl leading-tight font-bold',
  h3: 'font-poppins text-current text-3xl leading-tight font-semibold',
  h4: 'font-poppins text-current text-2xl leading-tight font-semibold',
};

export const Heading = ({ headingLevel = HeadingSizes.h1, children }: HeadingProps) => {
  const HeadingElement = ({ ...args }: HTMLAttributes<HTMLHeadingElement>) => createElement(headingLevel, args, children);

  // eslint-disable-next-line react/forbid-component-props -- HeadingElement is a html element and not a component.
  return <HeadingElement className={classMap[headingLevel]}>{children}</HeadingElement>;
};
