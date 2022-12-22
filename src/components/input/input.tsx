import React, { ChangeEvent, FC, InputHTMLAttributes, useId } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { Label, LabelSizes } from '../text/label';
import { IconProps } from '../icons/icon-props';

export enum InputTypes {
  text = 'text',
  password = 'password',
  email = 'email',
}

/* 
    By extending the InputHTMLAttributes we can pass all the HTMLInputElements to our component.
    
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelSize: LabelSizes;
  type: InputTypes;
  value?: string;
  icon?: FC<IconProps>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ label, labelSize = LabelSizes.m, type, value, icon, ...rest }) => {
  const inputId = useId();
  const errorId = useId();
  const inputBaseStyle = [
    'text-sm text-slate-700 font-poppins medium leading-none',
    'w-full',
    'h-xl',
    'rounded-lg',
    'p-s',
    'border',
    'border-slate-200',
    'hover:border-violet-600',
    'focus:outline-violet-600',
    'valid:border-violet-600 valid:border-2',
    'placeholder:text-sm placeholder:text-slate-300 placeholder:font-poppins placeholder:medium placeholder:leading-none',
  ];

  const classes = mergeClassNames([inputBaseStyle]);

  return (
    <div className="flex flex-col gap-xxs text-slate-700">
      <Label size={labelSize} htmlFor={inputId}>
        {label}
      </Label>
      <div className="relative">
        <input className={classes} id={inputId} type={type} value={value} {...rest} />
        {icon && (
          <span className="absolute flex items-center right-s top-0 h-full cursor-pointer">
            <>{icon}</>
          </span>
        )}
      </div>
      <p id={errorId}>The password should contain at least 18 characters</p>
    </div>
  );
};
