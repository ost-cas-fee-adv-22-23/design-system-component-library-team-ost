import React, { ChangeEvent, FC, InputHTMLAttributes, ReactNode, useId, useState } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { LabelSize } from '../typography/label';
import { FormItem } from './form-item';
import { IconCancel } from '../icons/icon-cancel';

export enum InputTypes {
  text = 'text',
  password = 'password',
  email = 'email',
}

/* 
  By adding the InputHTMLAttributes we can pass every HTMLInputElement to our component.
 */
export type InputProps = {
  /**
   * The error message will appear below the inputfield.
   */
  errorMessage?: string;
  /**
   * An icon to show within the input field. If an error message is set, the icon is replaced by a cancel-icon.
   */
  icon?: ReactNode;
  /**
   * The label describes the inputfield.
   */
  label: string;
  /**
   * The label size to style the label and set the font size.
   */
  labelSize: LabelSize;
  /**
   * A name identifier for the input field.
   */
  name: string;
  /**
   * Action on input changes. To be handled outside the component.
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * A placeholder text to show in an empty inputfield
   */
  placeholder?: string;
  /**
   * Defines if an input field of a form is required.
   */
  required?: boolean;
  /**
   * The supported input types.
   */
  type: InputTypes;
  /**
   * The actual value of the input.
   */
  value: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({
  errorMessage,
  icon,
  label,
  labelSize = LabelSize.m,
  name,
  onChange,
  type,
  ...args
}) => {
  const inputId = useId();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputStyle = [
    'text-sm text-slate-700 font-poppins font-medium leading-none',
    'w-full h-xl',
    'rounded-lg p-s bg-slate-50',
    'focus:outline-violet-600 focus:outline-2',
    'placeholder:text-slate-300',
  ];
  icon && inputStyle.push('pr-xl');
  const inputClasses = mergeClassNames([inputStyle]);

  const inputWrapperStyle = [
    'relative',
    'border border-slate-200 rounded-lg',
    'transition-all duration-300 ease-in-out hover:border-violet-600',
  ];
  errorMessage ? inputWrapperStyle.push(' border-red-600') : inputWrapperStyle.push(' border-slate-200');
  const inputWrapperClasses = mergeClassNames([inputWrapperStyle]);

  return (
    <FormItem errorMessage={errorMessage} id={inputId} label={label} labelSize={labelSize}>
      <div className={inputWrapperClasses}>
        <input
          className={inputClasses}
          id={inputId}
          name={name}
          onChange={onChange}
          type={isPasswordVisible ? InputTypes.text : type}
          {...args}
        />
        {errorMessage ? (
          <span className="absolute flex items-center right-s top-0 h-full text-red-600">
            <IconCancel />
          </span>
        ) : icon && type === 'password' ? (
          <button className="cursor-pointer" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
            <span className="absolute flex items-center right-s top-0 h-full">{icon}</span>
          </button>
        ) : (
          <span className="absolute flex items-center right-s top-0 h-full">{icon}</span>
        )}
      </div>
    </FormItem>
  );
};
