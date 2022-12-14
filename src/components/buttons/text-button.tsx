import React, { FC } from 'react';
import { Label, LabelSizes } from '../text/label';
import { IconProps } from '../icons/icon-props';
import { mergeClassNames } from './../../helpers/merge-class-names';


export enum TextButtonColors {
  slate = 'slate',
  violet = 'violet',
  gradient = 'gradient',
}

export enum TextButtonSizes {
  m = 'm',
  l = 'l',
}

export enum TextButtonDisplayModes {
  inline = 'inline',
  fullWidth = 'fullWidth',
}

export type TextButtonProps = {
  color: TextButtonColors;
  size: TextButtonSizes;
  displayMode: TextButtonDisplayModes;
  icon?: FC<IconProps>;
  onClick: () => void;
  children: string;
};

export const TextButton: FC<TextButtonProps> = ({ color, size, displayMode, icon, onClick, children }) => {
  const textButtonBaseStyle = [
    'flex',
    'items-center',
    'justify-center',
    'rounded-lg',
    'text-white',
    'border-0',
    'transition-all',
    'ease-in-out',
    'duration-350',
    'active:duration-300',
  ];

  const textButtonColorStyles = {
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
    violet: [
      'bg-violet-600',
      'hover:bg-violet-700',
      'active:bg-violet-700',
      'outline-none',
      'outline-offset-0',
      'hover:outline-3',
      'hover:outline-violet-100',
      'active:outline-4',
      'active:outline-violet-200',
    ],
    gradient: [
      'bg-gradient-50-50',
      'from-pink-500',
      'to-violet-600',
      'hover:bg-gradient-30-70',
      'active:bg-gradient-20-80',
      'outline-none',
      'outline-offset-0',
      'hover:outline-3',
      'hover:outline-violet-100',
      'active:outline-4',
      'active:outline-violet-200',
    ],
  };

  const textButtonDisplayModeStyles = {
    inline: [],
    fullWidth: ['w-full'],
  };

  // Bei der Grösse M ist gemäss Figma Style-Definition ein Padding von 12px vorgesehen, bei der Grösse L ein gap von 12px. Da unser Design System keine Spacing Definition für 12px aufweist, wurde jeweils bewusst 8px (xs) gewählt.
  const textButtonSizeStyles = {
    m: ['p-xs', 'gap-xs'],
    l: ['py-s', 'px-m', 'gap-xs'],
  };

  const classes = mergeClassNames([
    textButtonBaseStyle,
    textButtonColorStyles[color],
    textButtonSizeStyles[size],
    textButtonDisplayModeStyles[displayMode],
  ]);

  return (
    <button className={classes} onClick={onClick}>
      <>
        <Label size={LabelSizes.m}>{children}</Label>
        {icon}
      </>
    </button>
  );
};
