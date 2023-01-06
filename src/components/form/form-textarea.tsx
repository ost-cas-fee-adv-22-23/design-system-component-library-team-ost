import React, { FC, TextareaHTMLAttributes, ChangeEvent, useId } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { LabelSizes } from '../typography/label';
import { FormItem } from './form-item';

/* 
    By extending the TextareaHTMLAttributes we can pass all the HTMLTextareaElements to our component.

    As the figma does not has labels for textareas, we force to set an aria-label.
    An optional label can be set and is styled like the label for input fields.
 */
export type TextareaProps = {
  /**
   * Aria-label as the label is optional for textareas.
   */
  ariaLabel: string;
  /**
   * The error message will appear below the textarea.
   */
  errorMessage?: string;
  /**
   * The label describes the textarea.
   */
  label?: string;
  /**
   * The label size to style the label and set the font size.
   */
  labelSize?: LabelSizes;
  /**
   * Action on textarea changes. To be handled outside the component.
   */
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * A placeholder text to show in an empty textarea
   */
  placeholder?: string;
  /**
   * Defines if a textarea of a form is required.
   */
  required?: boolean;
  /**
   * The actual value of the textarea.
   */
  value: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: FC<TextareaProps> = ({
  ariaLabel,
  errorMessage,
  label,
  labelSize = LabelSizes.m,
  onChange,
  value,
  ...args
}) => {
  const textareaId = useId();
  const textareaBaseStyle = [
    'text-lg text-slate-900 font-poppins font-medium leading-snug',
    'w-full resize-none',
    'rounded-lg p-s bg-slate-100',
    'border border-slate-200',
    'transition-all ease-in-out duration-300',
    'hover:border hover:border-transparent outline outline-transparent outline-2 hover:outline-slate-300',
    'focus:outline-violet-600 focus:border-transparent focus:outline-2',
    'placeholder:text-slate-500',
  ];
  errorMessage ? textareaBaseStyle.push(' border-red-600') : textareaBaseStyle.push(' border-slate-200');
  const textareaClasses = mergeClassNames([textareaBaseStyle]);

  return (
    <FormItem errorMessage={errorMessage} id={textareaId} label={label} labelSize={labelSize}>
      <textarea
        className={textareaClasses}
        aria-label={ariaLabel}
        id={textareaId}
        onChange={onChange}
        value={value}
        {...args}
      />
    </FormItem>
  );
};
