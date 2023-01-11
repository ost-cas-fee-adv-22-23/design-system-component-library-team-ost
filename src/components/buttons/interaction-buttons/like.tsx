import React, { FC, useEffect, useState } from 'react';
import { IconHeartFilled } from '../../icons/icon-heart-filled';
import { IconHeartOutline } from '../../icons/icon-heart-outline';
import { Label, LabelSize } from '../../typography/label';
import { mergeClassNames } from '../../../helpers/merge-class-names';
import { interactionButtonsBaseStyle } from './base-style';

export type LikeProps = {
  /**
   * Specifies how many users reacted with a like.
   */
  likesCount: number;
  /**
   * Specifies the action, which is called as the user clicks on the like button.
   */
  onClick: () => void;
  /**
   * Specifies if the user reacted with a like.
   */
  withReaction: boolean;
};

export const Like: FC<LikeProps> = ({ likesCount, onClick, withReaction }) => {
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

  const [likesCountState, setLikesCount] = useState(likesCount);
  const [withReactionState, setWithReaction] = useState(withReaction);
  const [isReactionButtonActive, setIsReactionButtonActive] = useState(false);

  /**
   * Es wurde bewusst entschieden, den State bereits innerhalb der Component zu modifizieren und nicht auf
   * Veränderung der Props zu warten (Optimistic Update). Falls ein möglicher Request an den Server länger
   * dauert als die "Liked"-Animation, würde der Benutzer noch den alten State sehen.
   */
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
      }}
    >
      {withReactionState ? (
        <span className="text-pink-600">
          <IconHeartFilled />
        </span>
      ) : (
        <IconHeartOutline />
      )}

      <Label size={LabelSize.m}>
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
