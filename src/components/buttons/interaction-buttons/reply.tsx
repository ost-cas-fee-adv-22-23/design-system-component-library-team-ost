import React, { AnchorHTMLAttributes, FC } from 'react';
import { IconReplyFilled } from '../../icons/icon-reply-filled';
import { IconReplyOutline } from '../../icons/icon-reply-outline';
import { Label, LabelSize } from '../../typography/label';
import { mergeClassNames } from '../../../helpers/merge-class-names';
import { interactionButtonsBaseStyle } from './base-style';

export type ReplyProps<T> = {
  /**
   * Specifies a custom link component, e.g. next/link.
   */
  linkComponent?: FC<T>;
  /**
   * Specifies how many users reacted with a reply.
   */
  repliesCount: number;
  /**
   * Specifies if the user reacted with a reply.
   */
  withReaction: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<T, 'className'>;

export function Reply<
  T extends {
    className?: string;
  } = AnchorHTMLAttributes<HTMLElement>
>({ repliesCount, withReaction, linkComponent, ...args }: ReplyProps<T>): JSX.Element {
  const LinkComponent = linkComponent || 'a';

  const replyVariantStyles = {
    default: ['hover:bg-violet-50', 'hover:text-violet-600', 'cursor-pointer'],
  };

  const classes = mergeClassNames([interactionButtonsBaseStyle, replyVariantStyles.default]);

  return (
    <LinkComponent
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(args as any)}
      // eslint-disable-next-line react/forbid-component-props
      className={classes}
    >
      {withReaction ? (
        <span className="text-violet-600">
          <IconReplyFilled />
        </span>
      ) : (
        <IconReplyOutline />
      )}

      <Label size={LabelSize.m}>
        {repliesCount === 0 ? 'Comment' : repliesCount > 1 ? repliesCount + ' Comments' : repliesCount + ' Comment'}
      </Label>
    </LinkComponent>
  );
}
