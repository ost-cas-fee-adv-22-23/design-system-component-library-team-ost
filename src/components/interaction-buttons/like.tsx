import React, { FC, useState } from 'react';
import { HeartFillIcon, HeartOutlineIcon } from '../../assets/icons';
import { interactionButtonsBaseStyle } from './base-style';

export type LikeProps = {
  likesCount: number;
  withReaction: boolean;
  onClick: () => void;
  // children: ReactNode;
};

export const Like: FC<LikeProps> = ({ likesCount, onClick, withReaction }) => {
  /* todo ns: padding nicht gemäss design system */
  /* todo ns: text durch label m ersetzen */
  /* todo ns: rename interactive button styles */
  //   const interactionButtonsBaseStyle = [
  //     'flex',
  //     'flex-row',
  //     'rounded-2xl',
  //     'py-xs',
  //     'px-s',
  //     'text-slate-600'
  //   ];

  // const likeVariantStylesOLD = {
  //  // default
  //   //hover : [''],
  //   //active : ['']
  //   share: [],
  //   like: ['hover:bg-pink-50', 'hover:text-pink-600'],
  //   reply: []
  // };

  const likeVariantStyles = {
    default: ['hover:bg-pink-50', 'hover:text-pink-600'],
    active: ['text-pink-900'],
  };

  const [likedState, setLiked] = useState(withReaction);

  const [isReactionButtonActive, setIsReactionButtonActive] = useState(false);

  const clickOnReactionButton = () => {
    setIsReactionButtonActive(true);
    setTimeout(() => {
      setIsReactionButtonActive(false);
    }, 2000);
  };

  //  useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLiked(!withReaction);
  //    }, 2000);

  //   return () => clearTimeout(timeout);
  //  },[withReaction]);

  // const like = () => {
  //   setLiked(!withReaction);
  //   setTimeout(() => {
  //     setLiked(withReaction);
  //   }, 2000);
  // };

  /* todo ns: join durch globaler Helper ersetzen*/
  const classes = isReactionButtonActive
    ? [...interactionButtonsBaseStyle, ...likeVariantStyles.active].join(' ')
    : [...interactionButtonsBaseStyle, ...likeVariantStyles.default].join(' ');
  console.warn(classes);
  return (
    <button
      className={classes}
      onClick={() => {
        onClick();
        clickOnReactionButton();
      }}>
      <span>{isReactionButtonActive ? 'true' : 'false'}</span>
      {withReaction || isReactionButtonActive ? (
        <HeartFillIcon className={true ? 'text-pink-600' : ''} style="height: 16px, width: 16px" />
      ) : (
        <HeartOutlineIcon className="w-4 h-4" />
      )}

      <span>{likesCount === 0 ? 'Like' : likesCount > 1 ? likesCount + ' Likes' : likesCount + ' Like'}</span>
    </button>
  );
};

// todo ns: gibt es auch dislike?
