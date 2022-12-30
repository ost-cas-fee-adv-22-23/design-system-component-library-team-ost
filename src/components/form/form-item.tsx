import React, { FC, ReactNode } from 'react';
import { Label, LabelSizes } from '../text/label';

export type FormItemProps = {
  label?: string;
  labelSize?: LabelSizes;
  id: string;
  children: ReactNode;
  errorMessage?: string;
};

export const FormItem: FC<FormItemProps> = ({ label, labelSize = LabelSizes.m, id, children, errorMessage }) => {
  return (
    <div className="relative flex flex-col gap-xxs text-slate-700 cursor-default">
      {label && (
        <Label size={labelSize} htmlFor={id}>
          {label}
        </Label>
      )}
      {children}
      {/* Errormessage is not defined in the design system. Font size xs (14px) from design system was choosen, as 12px doesn't exist. */}
      {errorMessage && (
        <span className="text-red-600 font-poppins font-medium text-xs leading-none text-right">{errorMessage}</span>
      )}
    </div>
  );
};
