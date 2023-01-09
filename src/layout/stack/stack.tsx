import React, { Children, FC, ReactNode } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';

export enum StackDirection {
  row = 'row',
  col = 'col',
}

export enum StackSpacing {
  none = 'none',
  xxs = 'xxs',
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  xxl = 'xxl',
}

export enum StackJustifyContent {
  flexstart = 'flexstart',
  center = 'center',
  flexend = 'flexend',
  spacebetween = 'spacebetween',
  spacearound = 'spacearound',
  spaceevenly = 'spaceevenly',
}

export enum StackAlignItems {
  flexstart = 'flexstart',
  center = 'center',
  flexend = 'flexend',
  baseline = 'baseline',
  stretch = 'stretch',
  unset = 'unset',
}

export type StackProps = {
  /**
   * Specifies the alignment of items on the Cross Axis.
   */
  alignItems?: StackAlignItems;
  /**
   * Specifies the content of the stack.
   */
  children: ReactNode;
  /**
   * Specifies the direction of the stack items.
   */
  direction?: StackDirection;
  /**
   * Defines how the browser distributes space between and around content items along the Main Axis.
   */
  justifyContent?: StackJustifyContent;
  /**
   * Defines the space between immediate children.
   */
  spacing?: StackSpacing;
  /**
   * Specifies if the items are divided by a divider.
   */
  withDivider?: boolean;
};

const printChildren = (withDivider: boolean, direction: StackDirection, children: ReactNode[]) => {
  if (Children.count(children) < 2 || withDivider !== true) {
    return children;
  }
  const mappedChildren = Children.map(children, (child, index) => {
    const isLast = index === children.length - 1;

    return (
      <>
        {child}{' '}
        {!isLast && (
          <span
            className={mergeClassNames([direction === StackDirection.row ? 'h-auto w-px' : 'h-px w-auto', 'bg-slate-100'])}
          ></span>
        )}
      </>
    );
  });

  return mappedChildren;
};

export const Stack: FC<StackProps> = ({
  alignItems: alignitems = StackAlignItems.unset,
  children,
  direction = StackDirection.row,
  justifyContent: justifycontent = StackJustifyContent.flexstart,
  spacing = StackSpacing.none,
  withDivider = false,
}) => {
  const stackBaseStyle = ['flex'];
  const childrenArray = Children.toArray(children);
  const stackDirectionsVariantStyles: Record<StackDirection, string[]> = {
    row: ['flex-row'],
    col: ['flex-col'],
  };
  const stackJustifyContentStyles: Record<StackJustifyContent, string[]> = {
    flexstart: ['justify-start'],
    center: ['justify-center'],
    flexend: ['justify-end'],
    spacebetween: ['justify-between'],
    spacearound: ['justify-around'],
    spaceevenly: ['justify-evenly'],
  };
  const stackAlignItemsStyles: Record<StackAlignItems, string[]> = {
    flexstart: ['items-start'],
    center: ['items-center'],
    flexend: ['items-end'],
    baseline: ['items-baseline'],
    stretch: ['items-stretch'],
    unset: ['unset'],
  };
  const stackSpacingsVariantStyles: Record<StackSpacing, string[]> = {
    none: ['gap-0'],
    xxs: ['gap-xxs'],
    xs: ['gap-xs'],
    s: ['gap-s'],
    m: ['gap-m'],
    l: ['gap-l'],
    xl: ['gap-xl'],
    xxl: ['gap-xxl'],
  };

  return (
    <div
      className={mergeClassNames([
        stackBaseStyle,
        stackDirectionsVariantStyles[direction],
        stackSpacingsVariantStyles[spacing],
        stackJustifyContentStyles[justifycontent],
        stackAlignItemsStyles[alignitems],
      ])}
    >
      {printChildren(withDivider, direction, childrenArray)}
    </div>
  );
};
