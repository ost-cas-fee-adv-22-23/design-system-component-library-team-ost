import React, { FC, ReactNode } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { Stack, StackAlignItems, StackJustifyContent, StackSpacing } from '../stack/stack';

export type PageHeaderProps = {
  /**
   * Specifies the content of the page header.
   */
  children: ReactNode;
};

export const PageHeader: FC<PageHeaderProps> = ({ children }) => {
  // Gemäss Figma Style-Definition ist ein Padding Y von 12px vorgesehen. Da unser Design System keine Spacing Definition für 12px aufweist, wurde hier bewusst 16px (s) gewählt.
  const pageHeaderBaseStyle = ['sticky', 'top-0', 'z-[100]', 'bg-violet-600', 'py-s', 'px-l'];

  return (
    <header className={mergeClassNames(pageHeaderBaseStyle)}>
      <Stack spacing={StackSpacing.none} alignItems={StackAlignItems.center} justifyContent={StackJustifyContent.center}>
        {children}
      </Stack>
    </header>
  );
};
