import React, { FC, TextareaHTMLAttributes, ChangeEvent, useId } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { LabelSizes } from '../text/label';
import { FormItem } from './form-item';

/* 
    By extending the TextareaHTMLAttributes we can pass all the HTMLTextareaElements to our component.

    As the figma does not has labels for textareas, we force to set an aria-label.
    An optional label can be set and is styled like the label for input fields.
 */
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelSize?: LabelSizes;
  ariaLabel: string;
  errorMessage?: string;
  value: string;
  onChange(e: ChangeEvent<HTMLTextAreaElement>): void;
}

export const Textarea: FC<TextareaProps> = ({
  label,
  labelSize = LabelSizes.m,
  ariaLabel,
  errorMessage,
  value,
  onChange,
  ...rest
}) => {
  const textareaId = useId();
  const textareaBaseStyle = [
    'text-lg text-slate-900 font-poppins font-medium leading-snug',
    'w-full resize-none',
    'rounded-lg p-s bg-slate-100',
    'border border-slate-200',
    'transition-all ease-in-out',
    'hover:border hover:border-transparent outline outline-transparent outline-2 hover:outline-slate-300',
    'focus:outline-violet-600 focus:border-transparent focus:outline-2',
    'placeholder:text-slate-500',
  ];
  errorMessage ? textareaBaseStyle.push(' border-red-600') : textareaBaseStyle.push(' border-slate-200');
  const textareaClasses = mergeClassNames([textareaBaseStyle]);

  return (
    <FormItem label={label} labelSize={labelSize} id={textareaId} errorMessage={errorMessage}>
      <textarea
        className={textareaClasses}
        value={value}
        aria-label={ariaLabel}
        onChange={onChange}
        id={textareaId}
        {...rest}
      />
    </FormItem>
  );
};
