import React, { AnchorHTMLAttributes, FC } from 'react';
import { Label, LabelSize } from '../../typography/label';
import { mergeClassNames } from '../../../helpers/merge-class-names';

export type TextLinkProps<T> = {
  /**
   * Specifies the display text.
   */
  children: string;
  /**
   * Specifies the URL of the page the link goes to.
   */
  href: string;
  /**
   * Specifies a custom link component, e.g. next/link.
   */
  linkComponent?: FC<T>;
  /**
   * Specifies if the linkd document opens in a new tab.
   */
  newTab?: boolean;
} & Omit<T, 'className' | 'target' | 'rel'>;

export function TextLink<
  T extends {
    className?: string;
    rel?: string;
    target?: string;
  } = AnchorHTMLAttributes<HTMLElement>
>({ children, href, linkComponent, newTab = false, ...args }: TextLinkProps<T>): JSX.Element {
  const LinkComponent = linkComponent || 'a';

  const classes = mergeClassNames([
    'text-violet-600',
    'underline',
    'hover:decoration-violet-200',
    'underline-offset-2',
    'hover:underline-offset-4',
  ]);

  return (
    <LinkComponent
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(args as any)}
      // eslint-disable-next-line react/forbid-component-props
      className={classes}
      href={href}
      {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <Label size={LabelSize.s}>{children}</Label>
    </LinkComponent>
  );
}
