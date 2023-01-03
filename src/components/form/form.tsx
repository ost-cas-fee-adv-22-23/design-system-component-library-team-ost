import React, { FC, ReactNode, FormHTMLAttributes } from 'react';
import { Stack, StackDirections, StackSpacings } from '../../layout/stack/stack';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  stackdir?: StackDirections;
  stackspacing?: StackSpacings;
  children: ReactNode;
}

export const Form: FC<FormProps> = ({
  children,
  stackdir = StackDirections.col,
  stackspacing = StackSpacings.s,
  ...props
}) => {
  return (
    <form className="flex flex-col gap-s" {...props}>
      <Stack direction={stackdir} spacing={stackspacing}>
        {children}
      </Stack>
    </form>
  );
};
