import React, { FC, ImgHTMLAttributes, useState } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { IconArrowDown } from '../icons/icon-arrow-down';
import { IconArrowUp } from '../icons/icon-arrow-up';
import { IconSize } from '../icons/icon-props';

export type ImageContainerProps<T> = {
  /**
   * Alt Attribute for the image. It provides alternative information if a user for some reason cannot view it.
   */
  alt?: string;
  /**
   * Specifies a custom image component, e.g. next/image.
   */
  imageComponent?: FC<T>;
  /**
   * Specifies the action, which is called as the user clicks on the overlay with the fullscreen icon.
   */
  onClick?: () => void;
  /**
   * Specifies the URL of the image.
   */
  src?: string;
} & Omit<T, 'className' | 'src'>;

export function ImageContainer<T = ImgHTMLAttributes<HTMLImageElement>>({
  alt,
  imageComponent,
  onClick,
  src,
  ...args
}: Omit<ImageContainerProps<T>, 'className'>): JSX.Element {
  const ImageComponent = imageComponent || 'img';

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
    'w-full',
    'aspect-16/9',
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

  const imageContainerFullscreenIconStyle = [
    'rotate-45',
    'absolute',
    'top-1/2',
    'left-1/2',
    'transform',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'text-white',
  ];

  const imageContainerImageStyle = ['w-full', 'object-cover', 'object-center'];

  hasError
    ? imageContainerImageStyle.push('p-m')
    : imageContainerImageStyle.push('scale-105', 'ease-in-out', 'duration-300', 'group-hover/container:scale-100');

  /*
   * Es wurde bewusst entschieden, dass IconFullscreen nicht zu wiederzuverwenden, da die Animation der Pfeils hier ein sehr spezifischer
   * Anwendungsfall darstellt. Gemäss Definition im Figma würde der Pfeil während der Animation aus der viewBox des SVGs ragen. Auf die
   * Vergrösserung der viewBox wurde aktuell bewusst verzichtet. Dafür wurde die Fullscreen Animation mittels den bestehenden Icons ArrowUp
   * und ArrowDown realisiert, um dem Benutzer trotzdem ein optimales Benutzererlebnis zu bieten.
   */
  return (
    <div className={mergeClassNames(imageContainerBaseStyle)}>
      {!hasError && (
        <div className={mergeClassNames(imageContainerOverlayStyle)} onClick={onClick}>
          <div className={mergeClassNames(imageContainerFullscreenIconStyle)}>
            <div className="group-hover/container:-translate-y-xs duration-300">
              <IconArrowUp size={IconSize.l}></IconArrowUp>
            </div>

            <div className="group-hover/container:translate-y-xs duration-300">
              <IconArrowDown size={IconSize.l}></IconArrowDown>
            </div>
          </div>
        </div>
      )}

      {src && (
        <ImageComponent
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(args as any)}
          // eslint-disable-next-line react/forbid-component-props
          className={mergeClassNames(imageContainerImageStyle)}
          src={src}
          alt={alt}
          onLoad={onLoad}
          onError={onError}
        />
      )}
    </div>
  );
}
