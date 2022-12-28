import { FC, ReactNode } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';

export type NavigationProps = {
  children: ReactNode;
};

export const Navigation: FC<NavigationProps> = ({ children }) => {
  const navigationBaseStyle = ['flex', 'items-center', 'justify-center', 'bg-violet-600', 'gap-m', 'p-0'];

  return <nav className={mergeClassNames(navigationBaseStyle)}>{children}</nav>;
};
