import { FC, ReactNode } from 'react';
import { IconProfile } from '../../assets/icon-profile';
import { IconTime } from '../../assets/icon-time';
import { IconLocation } from '../../assets/icon-location';
import { IconCalendar } from '../../assets/icon-calendar';
import { Label, LabelSizes } from '../text/label';

export enum LinkType {
  text = 'text',
  profile = 'profile',
  timestamp = 'timestamp',
  location = 'location',
  joined = 'joined',
}

export type LinkProps = {
  type: LinkType;
  href: string;
  target: '_blank' | '_self';
  children: ReactNode;
};

export const Link: FC<LinkProps> = ({ type, href, target = '_blank', children }) => {
  const linkBaseStyle = ['flex items-center gap-xxs'];

  const linkVariantStyles = {
    text: ['text-violet-600', 'hover:decoration-violet-200', 'underline', 'underline-offset-2', 'hover:underline-offset-4'],
    profile: ['text-violet-600', 'hover:text-violet-900'],
    timestamp: ['text-slate-400', 'hover:text-slate-600'],
    location: ['text-slate-400', 'hover:text-slate-600'],
    joined: ['text-slate-400', 'hover:text-slate-600'],
  };

  // todo: Icon Size in ein System bringen (z.B. XS-XL)
  const linkVariantIcons = {
    text: '',
    profile: <IconProfile size="12" />,
    timestamp: <IconTime size="12" />,
    location: <IconLocation size="12" />,
    joined: <IconCalendar size="12" />,
  };

  /* todo ns: join durch globaler Helper ersetzen*/
  // todo ns: Kann ein Icon dynamisch geladen werden?
  // todo ns: Cursor Pointer beim Label mitgeben
  const classes = [...linkBaseStyle, ...linkVariantStyles[type]].join(' ');

  return (
    <a href={href} target={target} className={classes}>
      {type !== LinkType.text && linkVariantIcons[type]}

      <Label size={LabelSizes.s}>{children}</Label>
    </a>
  );
};
