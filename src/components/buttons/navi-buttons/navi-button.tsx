import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Label, LabelSizes } from '../../typography/label';
import { mergeClassNames } from '../../../helpers/merge-class-names';

export type NaviButtonProps = {
  /**
   * Specifies the text to display in the label.
   */
  children?: ReactNode;
  /**
   * Specifies the icon to display in the navi button.
   */
  icon?: ReactNode;
  /**
   * Specifies the action, which is called as the user clicks on the navi button.
   */
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const NaviButton: FC<NaviButtonProps> = ({ children, icon, onClick, ...args }) => {
  const naviButtonBaseStyle = [
    'flex',
    'items-center',
    'justify-center',
    'flex-col',
    'rounded-lg',
    'text-white',
    'transition-all',
    'ease-in-out',
    'duration-300',
    'bg-violet-600',
    'hover:bg-violet-700',
    'p-xs',
    'gap-xxs',
    'group',
  ];

  const classes = mergeClassNames(naviButtonBaseStyle);

  return (
    <button className={classes} onClick={onClick} {...args}>
      <>
        {icon}
        <Label size={LabelSizes.s}>{children}</Label>
      </>
    </button>
  );
};
