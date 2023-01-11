import React, { FC } from 'react';
import { IconReplyFilled } from '../../icons/icon-reply-filled';
import { IconReplyOutline } from '../../icons/icon-reply-outline';
import { Label, LabelSize } from '../../typography/label';
import { mergeClassNames } from '../../../helpers/merge-class-names';
import { interactionButtonsBaseStyle } from './base-style';

export type ReplyProps = {
  /**
   * Specifies the action, which is called as the user clicks on the reply button.
   */
  onClick: () => void;
  /**
   * Specifies how many users reacted with a reply.
   */
  repliesCount: number;
  /**
   * Specifies if the user reacted with a reply.
   */
  withReaction: boolean;
};

export const Reply: FC<ReplyProps> = ({ repliesCount, withReaction, onClick }) => {
  const replyVariantStyles = {
    default: ['hover:bg-violet-50', 'hover:text-violet-600'],
  };

  const classes = mergeClassNames([interactionButtonsBaseStyle, replyVariantStyles.default]);

  return (
    <button className={classes} onClick={onClick}>
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
    </button>
  );
};
