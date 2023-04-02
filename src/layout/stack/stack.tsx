import React, { Children, FC, ReactNode } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';

export enum StackDirection {
  row = 'row',
  col = 'col',
}

const isStackDirection = (dir: unknown): dir is StackDirection => {
  return typeof dir === 'string';
};

export type ViewPort = 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type StackDirectionResponsive = {
  [viewPort in ViewPort]?: StackDirection;
};

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

const stackDirectionsVariantStyles: Record<StackDirection, string[]> = {
  row: ['flex-row'],
  col: ['flex-col'],
};

const stackDirectionResponsiveVariantStyles: Record<ViewPort, Record<StackDirection, string>> = {
  default: {
    row: 'flex-row',
    col: 'flex-col',
  },
  sm: {
    row: 'sm:flex-row',
    col: 'sm:flex-col',
  },
  md: {
    row: 'md:flex-row',
    col: 'md:flex-col',
  },
  lg: {
    row: 'lg:flex-row',
    col: 'lg:flex-col',
  },
  xl: {
    row: 'xl:flex-row',
    col: 'xl:flex-col',
  },
  '2xl': {
    row: '2xl:flex-row',
    col: '2xl:flex-col',
  },
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

const dividerVariantStyles: Record<StackDirection, string[]> = {
  row: ['h-auto', 'w-px'],
  col: ['h-px', 'w-auto'],
};

const dividerResponsiveVariantStyles: Record<ViewPort, Record<StackDirection, string>> = {
  default: {
    row: 'h-auto w-px',
    col: 'h-px w-auto',
  },
  sm: {
    row: 'sm:h-auto sm:w-px',
    col: 'sm:h-px sm:w-auto',
  },
  md: {
    row: 'md:h-auto md:w-px',
    col: 'md:h-px md:w-auto',
  },
  lg: {
    row: 'lg:h-auto lg:w-px',
    col: 'lg:h-px lg:w-auto',
  },
  xl: {
    row: 'xl:h-auto xl:w-px',
    col: 'xl:h-px xl:w-auto',
  },
  '2xl': {
    row: '2xl:h-auto 2xl:w-px',
    col: '2xl:h-px 2xl:w-auto',
  },
};

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
  direction?: StackDirection | StackDirectionResponsive;
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

const printChildren = (
  withDivider: boolean,
  direction: StackDirection | StackDirectionResponsive,
  children: ReactNode[]
) => {
  if (Children.count(children) < 2 || withDivider !== true) {
    return children;
  }
  const mappedChildren = Children.map(children, (child, index) => {
    const isLast = index === children.length - 1;

    const dividerClasses = isStackDirection(direction)
      ? dividerVariantStyles[direction]
      : buildResponsiveDividerClasses(direction);

    return (
      <>
        {child} {!isLast && <span className={mergeClassNames([dividerClasses, 'bg-slate-100'])}></span>}
      </>
    );
  });

  return mappedChildren;
};

const buildResponsiveDirectionClasses = (direction: StackDirectionResponsive): string => {
  let dirClasses = '';
  for (const [viewPort, stackDirection] of Object.entries(direction)) {
    if (viewPort !== undefined && stackDirection !== undefined) {
      dirClasses = `${dirClasses} ${
        stackDirectionResponsiveVariantStyles[viewPort as ViewPort][stackDirection as StackDirection]
      }`;
    }
  }

  return dirClasses.trim();
};

const buildResponsiveDividerClasses = (direction: StackDirectionResponsive): string => {
  let dirClasses = '';
  for (const [viewPort, stackDirection] of Object.entries(direction)) {
    if (viewPort !== undefined && stackDirection !== undefined) {
      dirClasses = `${dirClasses} ${dividerResponsiveVariantStyles[viewPort as ViewPort][stackDirection as StackDirection]}`;
    }
  }

  return dirClasses.trim();
};

export const Stack: FC<StackProps> = ({
  alignItems = StackAlignItems.unset,
  children,
  direction = StackDirection.row,
  justifyContent = StackJustifyContent.flexstart,
  spacing = StackSpacing.none,
  withDivider = false,
}) => {
  const stackBaseStyle = ['flex'];
  const childrenArray = Children.toArray(children);
  const stackDirectionClasses = isStackDirection(direction)
    ? stackDirectionsVariantStyles[direction]
    : buildResponsiveDirectionClasses(direction);

  return (
    <div
      className={mergeClassNames([
        stackBaseStyle,
        stackDirectionClasses,
        stackSpacingsVariantStyles[spacing],
        stackJustifyContentStyles[justifyContent],
        stackAlignItemsStyles[alignItems],
      ])}
    >
      {printChildren(withDivider, direction, childrenArray)}
    </div>
  );
};
