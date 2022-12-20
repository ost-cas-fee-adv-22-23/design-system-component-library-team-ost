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
  placeholder?: string;
  icon?: FC<IconProps>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ label, labelSize = LabelSizes.m, type, value, placeholder, ...rest }) => {
  const inputId = useId();
  const errorId = useId();
  const inputBaseStyle = [
    'rounded-lg',
    'leading-none text-slate-700',
    'p-xxs',
    'border',
    'border-slate-200',
    'outline-transparent',
    'active:border-violet-600',
    'hover:border-violet-600',
    'valid:border-violet-600 valid:border-2',
    'placeholder:text-sm placeholder:text-slate-200',
  ];

  const classes = mergeClassNames([inputBaseStyle]);

  return (
    <div className="flex flex-col gap-xxs">
      <Label size={labelSize} htmlFor={inputId}>
        {label}
      </Label>
      <input className={classes} id={inputId} type={type} value={value} placeholder={placeholder} {...rest} />
      <p id={errorId}>The password should contain at least 18 characters</p>
    </div>
  );
};
