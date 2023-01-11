import React, { AnchorHTMLAttributes, FC } from 'react';
import { Label, LabelSize } from '../../typography/label';
import { mergeClassNames } from '../../../helpers/merge-class-names';

export type TextLinkProps = {
  /**
   * Specifies the display text.
   */
  children: string;
  /**
   * Specifies the URL of the page the link goes to.
   */
  href: string;
  /**
   * Specifies where to open the linked document.
   */
  target?: '_blank' | '_self';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const TextLink: FC<TextLinkProps> = ({ children, href, target = '_blank', ...args }) => {
  const classes = mergeClassNames([
    'text-violet-600',
    'underline',
    'hover:decoration-violet-200',
    'underline-offset-2',
    'hover:underline-offset-4',
  ]);

  return (
    <a className={classes} href={href} target={target} {...args}>
      <Label size={LabelSize.s}>{children}</Label>
    </a>
  );
};
