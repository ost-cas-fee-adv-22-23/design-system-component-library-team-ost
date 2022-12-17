import React, { FC, useEffect, useState } from 'react';
import { IconHeartFilled } from '../../icons/icon-heart-filled';
import { IconHeartOutline } from '../../icons/icon-heart-outline';
import { Label, LabelSizes } from '../../text/label';
import { mergeClassNames } from '../../../helpers/merge-class-names';
import { interactionButtonsBaseStyle } from './base-style';

export type LikeProps = {
  likesCount: number;
  withReaction: boolean;
  onClick: () => void;
};

export const Like: FC<LikeProps> = ({ likesCount, withReaction, onClick }) => {
  const likeVariantStyles = {
    withoutReaction: ['hover:bg-pink-50', 'hover:text-pink-600'],
    withReaction: ['hover:bg-pink-50', 'hover:text-pink-600', 'text-pink-900'],
    whileReactionButtonIsActive: ['text-pink-900', 'pointer-events-none'],
  };

  const clickOnReactionButton = (): void => {
    if (withReactionState) {
      // Unlike
      setWithReaction(false);
    } else {
      setIsReactionButtonActive(true);
      setWithReaction(true);

      setTimeout(() => {
        setIsReactionButtonActive(false);
      }, 2000);
    }
  };

  // todo: Gibt es hier eine elegantere Lösung? Aktuell ist die Reihenfolge der useEffects relevant.
  const [likesCountState, setLikesCount] = useState(likesCount);
  const [withReactionState, setWithReaction] = useState(withReaction);
  const [isReactionButtonActive, setIsReactionButtonActive] = useState(false);

  useEffect(() => {
    withReactionState ? setLikesCount(() => likesCountState + 1) : setLikesCount(() => likesCountState - 1);
  }, [withReactionState]);
  useEffect(() => setLikesCount(likesCount), [likesCount]);
  useEffect(() => setWithReaction(withReaction), [withReaction]);

  const classes = mergeClassNames([
    interactionButtonsBaseStyle,
    isReactionButtonActive
      ? likeVariantStyles.whileReactionButtonIsActive
      : withReactionState
      ? likeVariantStyles.withReaction
      : likeVariantStyles.withoutReaction,
  ]);

  return (
    <button
      className={classes}
      onClick={() => {
        onClick();
        clickOnReactionButton();
      }}>
      {withReactionState ? (
        <span className="text-pink-600">
          <IconHeartFilled />
        </span>
      ) : (
        <IconHeartOutline />
      )}

      <Label size={LabelSizes.m}>
        {isReactionButtonActive && withReactionState
          ? 'Liked'
          : isReactionButtonActive && !withReactionState
          ? 'Unliked'
          : likesCountState === 0
          ? 'Like'
          : likesCountState > 1
          ? likesCountState + ' Likes'
          : likesCountState + ' Like'}
      </Label>
    </button>
  );
};
