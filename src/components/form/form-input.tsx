import React, { ChangeEvent, FC, InputHTMLAttributes, ReactNode, useId } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { LabelSizes } from '../text/label';
import { FormItem } from './form-item';
import { IconCancel } from '../icons/icon-cancel';

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
  icon?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ label, labelSize = LabelSizes.m, errorMessage, type, value, icon, ...rest }) => {
  const inputId = useId();
  const inputBaseStyle = [
    'text-sm text-slate-700 font-poppins font-medium leading-none',
    'w-full h-xl',
    'rounded-lg p-s bg-slate-50',
    'focus:outline-violet-600 focus:outline-2',
    'valid:outline-violet-600 valid:outline-2',
    'placeholder:text-slate-300',
  ];
  const inputClasses = mergeClassNames([inputBaseStyle]);

  const inputWrapperStyle = [
    'relative border border-slate-200 rounded-lg transition-all ease-in-out hover:border-violet-600',
  ];
  errorMessage ? inputWrapperStyle.push(' border-red-600') : inputWrapperStyle.push(' border-slate-200');
  const inputWrapperClasses = mergeClassNames([inputWrapperStyle]);

  return (
    <FormItem label={label} labelSize={labelSize} id={inputId} errorMessage={errorMessage}>
      <div className={inputWrapperClasses}>
        <input className={inputClasses} id={inputId} type={type} value={value} {...rest} />
        {errorMessage ? (
          <span className="absolute flex items-center right-s top-0 h-full text-red-600 z-10">
            <IconCancel />
          </span>
        ) : (
          icon && (
            <span className="absolute flex items-center right-s top-0 h-full z-10">
              <>{icon}</>
            </span>
          )
        )}
      </div>
    </FormItem>
  );
};
