import { AnchorHTMLAttributes, FC } from 'react';

export type LogoProps<T> = {
  /**
   * Has to be set (Verb + Noun), to specify the action if a onClick is set.
   */
  ariaLabel: string;
  /**
   * Specifies a custom link component, e.g. next/link.
   */
  linkComponent?: FC<T>;
  /**
   * Action to handle a user click on a logo.
   */
  onClick?: () => void;
  /**
   * Specifies if the logo should be inside a link component.
   */
  renderWithLink?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<T, 'className'>;
