import React, { FC } from 'react';
import { IconReplyFilled } from '../../icons/icon-reply-filled';
import { IconReplyOutline } from '../../icons/icon-reply-outline';
import { Label, LabelSizes } from '../../typography/label';
import { mergeClassNames } from '../../../helpers/merge-class-names';
import { interactionButtonsBaseStyle } from './base-style';

export type ReplyProps = {
  repliesCount: number;
  withReaction: boolean;
  onClick: () => void;
};

// with reaction hover: 300ms; without reaction hover 350ms
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

      <Label size={LabelSizes.m}>
        {repliesCount === 0 ? 'Comment' : repliesCount > 1 ? repliesCount + ' Comments' : repliesCount + ' Comment'}
      </Label>
    </button>
  );
};
