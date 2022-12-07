import React, { ReactNode, HTMLAttributes, createElement } from 'react';
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4';
  children: ReactNode;
}

const classMap = {
  h1: 'text-h1 font-poppins text-slate-600',
  h2: 'text-h2 font-poppins text-slate-600',
  h3: 'text-h3 font-poppins text-slate-600',
  h4: 'text-h4 font-poppins text-slate-600',
};

export const Heading = ({ headingLevel = 'h1', children }: HeadingProps) => {
  const HeadingElement = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) => createElement(headingLevel, props, children);

  return <HeadingElement className={classMap[headingLevel]}>{children}</HeadingElement>;
};
