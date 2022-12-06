import React, { HTMLAttributes, createElement } from 'react';

// Interface to declare the possible heading levels
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export const Heading = ({ headingLevel = 'p', children }: HeadingProps) => {
  const HeadingElement = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) => createElement(headingLevel, props, children);

  return <HeadingElement className={`text-${headingLevel} font-poppins text-slate-600`}>{children}</HeadingElement>;
};
