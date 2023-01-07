import React, { FC, useState } from 'react';
import { IconShare } from '../../icons/icon-share';
import { interactionButtonsBaseStyle } from './base-style';
import { mergeClassNames } from '../../../helpers/merge-class-names';
import { Label, LabelSizes } from '../../typography/label';

export type ShareProps = {
  /**
   * Specifies the link, which should be copied to clipboard as the user clicks on the share button.
   */
  linkToCopy: string;
};

export const Share: FC<ShareProps> = ({ linkToCopy }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };

  const shareVariantStyles = {
    default: ['hover:bg-slate-100', 'hover:text-slate-600'],
    active: ['bg-slate-100', 'text-slate-700', 'pointer-events-none'],
  };

  const classes = mergeClassNames([
    interactionButtonsBaseStyle,
    copied ? shareVariantStyles.active : shareVariantStyles.default,
  ]);

  return (
    <button className={classes} onClick={copyToClipboard}>
      <IconShare />
      <Label size={LabelSizes.m}>{copied ? 'Link copied' : 'Copy Link'}</Label>
    </button>
  );
};
