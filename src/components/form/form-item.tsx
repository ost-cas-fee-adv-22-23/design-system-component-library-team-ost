import React, { FC, ReactNode } from 'react';
import { Label, LabelSizes } from '../typography/label';
import { Stack, StackDirection, StackSpacing } from '../../layout/stack/stack';

export type FormItemProps = {
  /**
   * The form element which is wrapped by the form-item component. Ex. input, textarea, fileinput, ...
   */
  children: ReactNode;
  /**
   * The error message to show below the form element
   */
  errorMessage?: string;
  /**
   * The htmlFor-Id which correspons with the form element
   */
  id: string;
  /**
   * The label is placed before the form element. Optional for textareas.
   */
  label?: string;
  /**
   * The label-size to set the label in the correct typo.
   */
  labelSize?: LabelSizes;
};

export const FormItem: FC<FormItemProps> = ({ label, labelSize = LabelSizes.m, id, children, errorMessage }) => {
  return (
    <Stack direction={StackDirection.col} spacing={StackSpacing.xxs}>
      {label && (
        <Label size={labelSize} htmlFor={id}>
          {label}
        </Label>
      )}
      {children}
      {/* Errormessage typo is not defined in the design system. Font size xs (14px) from design system was choosen, as 12px doesn't exist. */}
      {errorMessage && (
        <span className="text-red-600 font-poppins font-medium text-xs leading-none text-right">{errorMessage}</span>
      )}
    </Stack>
  );
};
