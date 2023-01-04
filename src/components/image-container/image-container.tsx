import React, { FC, useState } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { IconArrowDown } from '../icons/icon-arrow-down';
import { IconArrowUp } from '../icons/icon-arrow-up';
import { IconSizes } from '../icons/icon-props';

export type ImageContainerProps = {
  /**
   * URL of Image.
   */
  src?: string;
  /**
   * Alt Attribute for the image. It provides alternative information if a user for some reason cannot view the image.
   */
  alt?: string;
  // Todo: Evtl. innerhalb der Component lösen. Mittels Modal?
  /**
   * Action, when you click on Fullscreen Icon while hovering.
   */
  onClick?: () => void;
};

export const ImageContainer: FC<ImageContainerProps> = ({ alt, src, onClick }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const onLoad = () => {
    setIsLoading(false);
  };

  const imageContainerBaseStyle = [
    'group/container',
    'flex',
    'items-center',
    'justify-center',
    'relative',
    'h-[320px]',
    'w-[584px]',
    'overflow-hidden',
    'rounded-lg',
    'bg-violet-100',
    'outline',
    'outline-slate-100',
    'outline-1',
  ];

  if (isLoading === true) {
    imageContainerBaseStyle.push('animate-pulse');
  }

  const imageContainerOverlayStyle = [
    'peer/overlay',
    'z-50',
    'absolute',
    'top-0',
    'right-0',
    'bottom-0',
    'left-0',
    'cursor-pointer',
    'bg-violet-600',
    'opacity-0',
    'hover:opacity-50',
    'transition-all',
    'ease-in-out',
    'duration-300',
  ];

  const imageContainerEditIconStyle = [
    'rotate-45',
    'absolute',
    'top-1/2',
    'left-1/2',
    'transform',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'text-white',
  ];

  const profileBannerImageStyle = ['w-full', 'object-cover', 'object-center'];

  if (hasError === true) {
    profileBannerImageStyle.push('p-m');
  } else {
    profileBannerImageStyle.push('scale-105', 'ease-in-out', 'duration-300', 'group-hover/container:scale-100');
  }
  /*
   * Es wurde bewusst entschieden, dass IconFullscreen nicht zu wiederzuverwenden, da die Animation der Pfeils hier ein sehr spezifischer
   * Anwendungsfall darstellt. Gemäss Definition im Figma würde der Pfeil während der Animation aus der viewBox des SVGs ragen. Auf die
   * Vergrösserung der viewBox wurde aktuell bewusst verzichtet. Dafür wurde die Fullscreen Animation mittels den bestehenden Icons ArrowUp
   * und ArrowDown realisiert, um dem Benutzer trotzdem ein optimales Benutzererlebnis zu bieten.
   */
  return (
    <div className={mergeClassNames(imageContainerBaseStyle)}>
      {hasError === false && (
        <div className={mergeClassNames(imageContainerOverlayStyle)} onClick={onClick}>
          <div className={mergeClassNames(imageContainerEditIconStyle)}>
            <div className="group-hover/container:-translate-y-xs duration-300">
              <IconArrowUp size={IconSizes.l}></IconArrowUp>
            </div>

            <div className="group-hover/container:translate-y-xs duration-300">
              <IconArrowDown size={IconSizes.l}></IconArrowDown>
            </div>
          </div>
        </div>
      )}

      {src && (
        <img className={mergeClassNames(profileBannerImageStyle)} src={src} alt={alt} onLoad={onLoad} onError={onError} />
      )}
    </div>
  );
};
