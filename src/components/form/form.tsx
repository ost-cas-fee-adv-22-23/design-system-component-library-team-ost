import React, { FC, ReactNode, FormHTMLAttributes } from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const Form: FC<FormProps> = ({ children, ...props }) => {
  return (
    <form className="flex flex-col gap-s" {...props}>
      {children}
    </form>
  );
};
