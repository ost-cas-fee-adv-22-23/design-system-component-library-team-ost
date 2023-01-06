import React, { FC, ReactNode } from 'react';
import { Label, LabelSizes } from '../typography/label';
import { mergeClassNames } from '../../helpers/merge-class-names';

export type NaviButtonProps = {
  icon?: ReactNode;
  onClick: () => void;
  children?: ReactNode;
};

export const NaviButton: FC<NaviButtonProps> = ({ icon, onClick, children }) => {
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
    <button className={classes} onClick={onClick}>
      <>
        {icon}
        <Label size={LabelSizes.s}>{children}</Label>
      </>
    </button>
  );
};
