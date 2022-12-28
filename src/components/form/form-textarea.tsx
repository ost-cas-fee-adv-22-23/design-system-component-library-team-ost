import React, { FC, TextareaHTMLAttributes, ReactNode, useId } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { LabelSizes } from '../text/label';
import { FormItem } from './form-item';

/* 
    By extending the TextareaHTMLAttributes we can pass all the HTMLTextareaElements to our component.
 */
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  labelSize: LabelSizes;
  errorMessage?: string;
  value: string;
  icon?: ReactNode;
}

export const Textarea: FC<TextareaProps> = ({ label, labelSize = LabelSizes.m, errorMessage, value, ...rest }) => {
  const textareaId = useId();
  const textareaBaseStyle = [
    'text-sm text-slate-700 font-poppins font-medium leading-none',
    'w-full h-xl',
    'rounded-lg p-s bg-slate-50',
    'focus:outline-violet-600 focus:outline-2',
    'valid:outline-violet-600 valid:outline-2',
    'placeholder:text-sm placeholder:text-slate-300 placeholder:font-poppins placeholder:font-medium placeholder:leading-none',
  ];
  const textareaClasses = mergeClassNames([textareaBaseStyle]);

  const textareaWrapperStyle = ['relative border border-slate-200 rounded-lg hover:border-violet-600'];
  errorMessage ? textareaWrapperStyle.push(' border-red-600') : textareaWrapperStyle.push(' border-slate-200');
  const textareaWrapperClasses = mergeClassNames([textareaWrapperStyle]);

  return (
    <FormItem label={label} labelSize={labelSize} id={textareaId} errorMessage={errorMessage}>
      <div className={textareaWrapperClasses}>
        <textarea className={textareaClasses} id={textareaId} value={value} {...rest} />
      </div>
    </FormItem>
  );
};
