import { Children, FC, ReactNode } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';

export enum StackDirections {
  row = 'row',
  col = 'col',
}

export enum StackSpacings {
  none = 'none',
  xxs = 'xxs',
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  xxl = 'xxl',
}

// alignItems? justifyContent?
export type StackProps = {
  direction?: StackDirections;
  spacing: StackSpacings;
  withDivider?: boolean;
  children: ReactNode;
};

const printChildren = (withDivider: boolean, direction: StackDirections, children: ReactNode[]) => {
  if (Children.count(children) < 2 || withDivider !== true) {
    return children;
  }
  const mappedChildren = Children.map(children, (child, index) => {
    const isLast = index === children.length - 1;

    // todo: Divider als eigene Component implementieren und konfigurierbar machen
    return (
      <>
        {child}{' '}
        {!isLast && (
          <span
            className={mergeClassNames([direction === StackDirections.row ? 'h-auto w-px' : 'h-px w-auto', 'bg-slate-100'])}
          ></span>
        )}
      </>
    );
  });

  return mappedChildren;
};

export const Stack: FC<StackProps> = ({
  direction = StackDirections.row,
  spacing = StackSpacings.none,
  withDivider = false,
  children,
}) => {
  const stackBaseStyle = ['flex'];
  const childrenArray = Children.toArray(children);
  const stackDirectionsVariantStyles = {
    row: ['flex-row'],
    col: ['flex-col'],
  };

  const stackSpacingsVariantStyles = {
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
      ])}
    >
      {printChildren(withDivider, direction, childrenArray)}
    </div>
  );
};
