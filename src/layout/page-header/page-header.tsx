import React, { FC, ReactNode } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';

export type PageHeaderProps = {
  children: ReactNode;
};

export const PageHeader: FC<PageHeaderProps> = ({ children }) => {
  // Gemäss Figma Style-Definition ist ein Padding Y von 12px vorgesehen. Da unser Design System keine Spacing Definition für 12px aufweist, wurde hier bewusst 16px (s) gewählt.
  const pageHeaderBaseStyle = ['flex', 'items-center', 'justify-center', 'bg-violet-600', 'gap-xs', 'py-s', 'px-l'];

  return <div className={mergeClassNames(pageHeaderBaseStyle)}>{children}</div>;
};
