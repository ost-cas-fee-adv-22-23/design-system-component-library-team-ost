import React, { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import { Label, LabelSize } from '../typography/label';
import { mergeClassNames } from './../../helpers/merge-class-names';

export enum TextButtonColor {
  slate = 'slate',
  violet = 'violet',
  gradient = 'gradient',
}

export enum TextButtonSize {
  m = 'm',
  l = 'l',
}

export enum TextButtonDisplayMode {
  inline = 'inline',
  fullWidth = 'fullWidth',
}

export type TextButtonProps = {
  /**
   * Optional aria-label (Verb + Noun) has to be set, if the text of the button does not describe the action
   */
  ariaLabel?: string;
  /**
   * Specifies the text which should be displayed in the button.
   */
  children: string;
  /**
   * Specifies the color of the button.
   */
  color: TextButtonColor;
  /**
   * Specifies how the button should be displayed.
   */
  displayMode?: TextButtonDisplayMode;
  /**
   * Specifies the icon which should be displayed in the button.
   */
  icon?: ReactElement;
  /**
   * Specifies the action, which is called as the user clicks on the button.
   */
  onClick: () => void;
  /**
   * Specifies the size of the button.
   */
  size: TextButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const TextButton: FC<TextButtonProps> = ({
  children,
  color,
  displayMode = TextButtonDisplayMode.inline,
  icon,
  onClick,
  size,
  ...args
}) => {
  const textButtonBaseStyle: string[] = [
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

  const textButtonColorStyles: Record<TextButtonColor, string[]> = {
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

  const textButtonDisplayModeStyles: Record<TextButtonDisplayMode, string[]> = {
    inline: [],
    fullWidth: ['w-full'],
  };

  // Bei der Grösse M ist gemäss Figma Style-Definition ein Padding von 12px vorgesehen, bei der Grösse L ein gap von 12px. Da unser Design System keine Spacing Definition für 12px aufweist, wurde jeweils bewusst 8px (xs) gewählt.
  const textButtonSizeStyles: Record<TextButtonSize, string[]> = {
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
    <button className={classes} onClick={onClick} {...args}>
      <>
        <Label size={LabelSize.m}>{children}</Label>
        {icon}
      </>
    </button>
  );
};
