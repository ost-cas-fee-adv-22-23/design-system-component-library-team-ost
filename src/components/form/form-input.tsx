import React, { ChangeEvent, FC, InputHTMLAttributes, useId } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { LabelSizes } from '../text/label';
import { FormItem } from './form-item';
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
  errorMessage?: string;
  type: InputTypes;
  value: string;
  icon?: FC<IconProps>;
  required: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ label, labelSize = LabelSizes.m, errorMessage, type, value, icon, ...rest }) => {
  const inputId = useId();
  const inputBaseStyle = [
    'text-sm text-slate-700 font-poppins medium leading-none',
    'w-full',
    'h-xl',
    'rounded-lg',
    'p-s',
    'border',
    'hover:border-violet-600',
    'focus:outline-violet-600',
    'valid:border-violet-600 valid:border-2',
    'placeholder:text-sm placeholder:text-slate-300 placeholder:font-poppins placeholder:medium placeholder:leading-none',
  ];

  errorMessage ? inputBaseStyle.push('border-red-500') : inputBaseStyle.push('border-slate-200');

  const inputClasses = mergeClassNames([inputBaseStyle]);

  return (
    <FormItem label={label} labelSize={labelSize} id={inputId} errorMessage={errorMessage}>
      <div className="relative">
        <input className={inputClasses} id={inputId} type={type} value={value} {...rest} />
        {icon && (
          <span className="absolute flex items-center right-s top-0 h-full cursor-pointer">
            <>{icon}</>
          </span>
        )}
      </div>
    </FormItem>
  );
};
