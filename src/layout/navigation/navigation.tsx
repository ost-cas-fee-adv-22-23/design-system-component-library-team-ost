import React, { FC, ReactNode } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { Stack, StackAlignItems, StackJustifyContent, StackSpacings } from '../stack/stack';

export type NavigationProps = {
  /**
   * Specifies the content of the navigation.
   */
  children: ReactNode;
};

export const Navigation: FC<NavigationProps> = ({ children }) => {
  return (
    <nav className={mergeClassNames(['bg-violet-600', 'p-0'])}>
      <Stack spacing={StackSpacings.m} justifycontent={StackJustifyContent.center} alignitems={StackAlignItems.center}>
        {children}
      </Stack>
    </nav>
  );
};
