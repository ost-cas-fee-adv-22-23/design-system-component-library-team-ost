import React, { FC, ReactNode, useEffect, useState } from 'react';
import { HeartFillIcon, HeartOutlineIcon, ReplyFillIcon, ReplyOutlineIcon } from '../../assets/icons';
import { interactionButtonsBaseStyle } from './base-style';

export type ReplyProps = {
  repliesCount: number;
  withReaction: boolean;
  onClick: () => void;
};

export const Reply: FC<ReplyProps> = ({ repliesCount, onClick, withReaction }) => {
  const replyVariantStyles = {
    default: ['hover:bg-violet-50', 'hover:text-violet-600'],
  };

  /* todo ns: join durch globaler Helper ersetzen*/
  const classes = [...interactionButtonsBaseStyle, ...replyVariantStyles.default].join(' ');

  return (
    <button className={classes} onClick={onClick}>
      {withReaction ? <ReplyFillIcon className="text-violet-600" /> : <ReplyOutlineIcon className="w-4 h-4 text-violet-600" />}

      <span>{repliesCount === 0 ? 'Comment' : repliesCount > 1 ? repliesCount + ' Comments' : repliesCount + ' Comment'}</span>
    </button>
  );
};
