import React, { FC, ReactNode } from 'react';
import { mergeClassNames } from './../../helpers/merge-class-names';

export enum IconButtonColor {
  slate = 'slate',
}

export enum IconButtonSize {
  l = 'l',
}

export type IconButtonProps = {
  /**
   * Specifies the color of the icon button.
   */
  color?: IconButtonColor;
  /**
   * Specifies the icon which should be displayed in the button.
   */
  icon: ReactNode;
  /**
   * Specifies the action, which is called as the user clicks on the icon button.
   */
  onClick: () => void;
  /**
   * Specifies the size of the icon button.
   */
  size?: IconButtonSize;
};

export const IconButton: FC<IconButtonProps> = ({
  color = IconButtonColor.slate,
  icon,
  onClick,
  size = IconButtonSize.l,
}) => {
  const iconButtonBaseStyle: string[] = [
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

  const iconButtonColorStyles: Record<IconButtonColor, string[]> = {
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

  const iconButtonSizeStyles: Record<IconButtonSize, string[]> = {
    l: ['p-s'],
  };

  const classes = mergeClassNames([iconButtonBaseStyle, iconButtonColorStyles[color], iconButtonSizeStyles[size]]);
  return (
    <button className={classes} onClick={onClick}>
      <>{icon}</>
    </button>
  );
};
