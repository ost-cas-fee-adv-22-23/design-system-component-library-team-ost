import React, { FC, useState } from 'react';
import { ShareIcon } from '../../assets/icons';
import { interactionButtonsBaseStyle } from './base-style';

export type ShareProps = {
  linkToCopy: string;
};

export const Share: FC<ShareProps> = ({ linkToCopy }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkToCopy).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        // console.log("failed to copy", err.mesage);
      },
    );
  };

  /* todo ns: padding nicht gemäss design system */
  /* todo ns: text durch label m ersetzen */
  /* todo ns: transition styles */
  /* todo ns: reset timer bei erneutem Click */
  /* todo ns: error handling */
  /* todo ns: background in der story setzen */

  const shareVariantStyles = {
    default: ['hover:bg-slate-100', 'hover:text-slate-600'],
    active: ['bg-slate-100', 'text-slate-700'],
  };

  /* todo ns: join durch globaler Helper ersetzen*/
  const classes = copied
    ? [...interactionButtonsBaseStyle, ...shareVariantStyles.active].join(' ')
    : [...interactionButtonsBaseStyle, ...shareVariantStyles.default].join(' ');
  return (
    <button className={classes} onClick={copyToClipboard}>
      <ShareIcon />
      <span>{copied ? 'Link copied' : 'Copy Link'}</span>
    </button>
  );
};
