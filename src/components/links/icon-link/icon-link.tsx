import React, { AnchorHTMLAttributes, cloneElement, FC, ReactElement } from 'react';
import { IconSize } from '../../icons/icon-props';
import { Label, LabelSize } from '../../typography/label';
import { mergeClassNames } from '../../../helpers/merge-class-names';

export enum IconLinkColor {
  slate = 'slate',
  violet = 'violet',
}

export type IconLinkProps<T> = {
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
   * Specifies a custom link component, e.g. next/link.
   */
  linkComponent?: FC<T>;
  /**
   * Specifies if the linkd document opens in a new tab.
   */
  newTab?: boolean;
} & Omit<T, 'className' | 'target' | 'rel'>;

export function IconLink<
  T extends {
    className?: string;
    rel?: string;
    target?: string;
  } = AnchorHTMLAttributes<HTMLElement>
>({ children, color, href, icon, linkComponent, newTab = false, ...args }: IconLinkProps<T>): JSX.Element {
  const LinkComponent = linkComponent || 'a';

  const iconLinkBaseStyle = [
    'flex',
    'items-center',
    'gap-xxs',
    'transition-all',
    'ease-in-out',
    'duration-350',
    'cursor-pointer',
  ];

  const iconLinkColorVariantStyles: Record<IconLinkColor, string[]> = {
    slate: ['text-slate-400', 'hover:text-slate-600'],
    violet: ['text-violet-600', 'hover:text-violet-900'],
  };

  const classes = mergeClassNames([iconLinkBaseStyle, iconLinkColorVariantStyles[color]]);

  return (
    <LinkComponent
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(args as any)}
      // eslint-disable-next-line react/forbid-component-props
      className={classes}
      href={href}
      {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {cloneElement(icon, { size: IconSize.s })}
      <Label size={LabelSize.s}>{children}</Label>
    </LinkComponent>
  );
}
