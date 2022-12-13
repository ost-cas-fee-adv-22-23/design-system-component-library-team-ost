import React, { FC, ReactNode } from 'react';

export enum IconButtonColors {
  slate = 'slate',
}

export enum IconButtonSizes {
  l = 'l',
}

export type IconButtonProps = {
  color: IconButtonColors;
  size: IconButtonSizes;
  onClick: () => void;
  children: ReactNode; // todo: können ReactNodes typisiert werden. Kann sichergestellt werden, dass nur Icons als Children reingereicht werden? FC<IconProps>; IconProps, weisst allerdings nur ein Prop size auf, welches optional ist. Best Practise?
};

export const IconButton: FC<IconButtonProps> = ({ onClick, children }) => {
  const color: IconButtonColors = IconButtonColors.slate;
  const size: IconButtonSizes = IconButtonSizes.l;

  const iconButtonBaseStyle = [
    'flex items-center rounded-full text-white border-0 transition-all ease-in-out duration-350 active:duration-300',
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

  const classes = [...iconButtonBaseStyle, ...iconButtonColorStyles[color], ...iconButtonSizeStyles[size]].join(' ');
  // todo: icon dynamisch setzen oder von aussen als children mitgeben?
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
