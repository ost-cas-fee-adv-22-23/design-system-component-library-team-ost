import React, { FC } from 'react';
import { IconProps } from '../icons/icon-props';
import { mergeClassNames } from './../../helpers/merge-class-names';

export enum IconButtonColors {
  slate = 'slate',
}

export enum IconButtonSizes {
  l = 'l',
}

export type IconButtonProps = {
  color: IconButtonColors;
  size: IconButtonSizes;
  icon: FC<IconProps>;
  onClick: () => void;
};

export const IconButton: FC<IconButtonProps> = ({ onClick, icon }) => {
  const color: IconButtonColors = IconButtonColors.slate;
  const size: IconButtonSizes = IconButtonSizes.l;

  const iconButtonBaseStyle = [
    'flex',
    'items-center',
    'rounded-full',
    'text-white',
    'border-0',
    'transition-all',
    'ease-in-out',
    'duration-350',
    'active:duration-300',
  ];

  const iconButtonColorStyles = {
    slate: [
      'bg-slate-600',
      'hover:bg-slate-700',
      'active:bg-slate-700',
      'outline-none',
      'outline-offset-0',
      'hover:outline-3',
      'hover:outline-slate-100',
      'active:outline-4',
      'active:outline-slate-200',
    ],
  };

  const iconButtonSizeStyles = {
    l: ['p-s'],
  };

  const classes = mergeClassNames([iconButtonBaseStyle, iconButtonColorStyles[color], iconButtonSizeStyles[size]]);
  return (
    <button className={classes} onClick={onClick}>
      <>{icon}</>
    </button>
  );
};
