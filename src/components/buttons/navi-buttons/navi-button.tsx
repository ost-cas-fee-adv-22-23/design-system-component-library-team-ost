import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Label, LabelSize } from '../../typography/label';
import { mergeClassNames } from '../../../helpers/merge-class-names';

export type NaviButtonProps<T> = {
  /**
   * Optional aria-label (Verb + Noun) has to be set, if no inner text is set or the text of the button does not describe the action.
   */
  ariaLabel?: string;
  /**
   * Specifies the text to display in the label.
   */
  children?: ReactNode;
  /**
   * Specifies the icon to display in the navi button.
   */
  icon?: ReactNode;
  /**
   * Specifies a custom link component, e.g. next/link.
   */
  linkComponent?: FC<T>;
  /**
   * Specifies the action, which is called as the user clicks on the navi button.
   */
  onClick?: () => void;
  /**
   * Specifies if the navi button should render as a link component.
   */
  renderAsLink?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<T, 'className'>;

export function NaviButton<
  T extends {
    className?: string;
  } = AnchorHTMLAttributes<HTMLElement>
>({ ariaLabel, children, icon, linkComponent, onClick, renderAsLink = false, ...args }: NaviButtonProps<T>): JSX.Element {
  const LinkComponent = linkComponent || 'a';

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

  const linkComponentToRender = (
    <LinkComponent
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(args as any)}
      aria-label={ariaLabel}
      // eslint-disable-next-line react/forbid-component-props
      className={classes}
    >
      <>
        {icon}
        <Label size={LabelSize.s}>{children}</Label>
      </>
    </LinkComponent>
  );

  const buttonComponentToRender = (
    <button aria-label={ariaLabel} className={classes} onClick={onClick} {...args}>
      <>
        {icon}
        <Label size={LabelSize.s}>{children}</Label>
      </>
    </button>
  );

  return renderAsLink ? linkComponentToRender : buttonComponentToRender;
}
