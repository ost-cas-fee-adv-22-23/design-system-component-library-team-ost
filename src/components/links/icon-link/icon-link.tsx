import React, { AnchorHTMLAttributes, cloneElement, FC, ReactElement } from 'react';
import { IconSize } from '../../icons/icon-props';
import { Label, LabelSize } from '../../typography/label';
import { mergeClassNames } from '../../../helpers/merge-class-names';

export enum IconLinkColor {
  slate = 'slate',
  violet = 'violet',
}

export type IconLinkProps = {
  /**
   * Specifies the display text.
   */
  children: string;
  /**
   * Specifies the color of the link.
   */
  color: IconLinkColor;
  /**
   * Specifies the URL of the page the link goes to.
   */
  href: string;
  /**
   * Specifies the icon of the link. Size of the icon will be overwritten and set to IconSize.s.
   */
  icon: ReactElement;
  /**
   * Specifies where to open the linked document.
   */
  target?: '_blank' | '_self';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const IconLink: FC<IconLinkProps> = ({ children, color, icon, href, target = '_blank', ...args }) => {
  const iconLinkBaseStyle = ['flex', 'items-center', 'gap-xxs', 'transition-all', 'ease-in-out', 'duration-350'];

  const iconLinkColorVariantStyles: Record<IconLinkColor, string[]> = {
    slate: ['text-slate-400', 'hover:text-slate-600'],
    violet: ['text-violet-600', 'hover:text-violet-900'],
  };

  const classes = mergeClassNames([iconLinkBaseStyle, iconLinkColorVariantStyles[color]]);

  return (
    <a className={classes} href={href} target={target} {...args}>
      {cloneElement(icon, { size: IconSize.s })}
      <Label size={LabelSize.s}>{children}</Label>
    </a>
  );
};
