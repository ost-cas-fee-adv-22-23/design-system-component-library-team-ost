import React, { FC, ReactNode } from 'react';
import { Label, LabelSizes } from '../text/label';

export enum TextButtonColors {
  slate = 'slate',
  violet = 'violet',
  gradient = 'gradient',
}

export enum TextButtonSizes {
  m = 'm',
  l = 'l',
}

export type TextButtonProps = {
  color: TextButtonColors;
  size: TextButtonSizes;
  text: string;
  onClick: () => void;
  children: ReactNode; // todo: können ReactNodes typisiert werden. Kann sichergestellt werden, dass nur Icons als Children reingereicht werden?
};

export const TextButton: FC<TextButtonProps> = ({ color, size, text, onClick, children }) => {
  const textButtonBaseStyle = [
    'flex items-center rounded-lg text-white border-0 transition-all ease-in-out duration-350 active:duration-300',
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

  // todo: 12px=p-3 passen nicht ins designsystem. Daher wurde p-xs=8px gewählt
  const textButtonSizeStyles = {
    m: ['p-xs', 'gap-xs'],
    l: ['py-s', 'px-m', 'gap-xs'],
  };

  const classes = [...textButtonBaseStyle, ...textButtonColorStyles[color], ...textButtonSizeStyles[size]].join(' ');
  // todo: icon dynamisch setzen oder von aussen als children mitgeben?
  return (
    <button className={classes} onClick={onClick}>
      <Label size={LabelSizes.m}>{text}</Label>
      {children}
    </button>
  );
};
