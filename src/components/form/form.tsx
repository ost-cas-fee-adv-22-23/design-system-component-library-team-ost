import React, { FC, ReactNode, FormHTMLAttributes } from 'react';
import { Stack, StackDirections, StackSpacings } from '../../layout/stack/stack';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  /**
   * Stack Direction
   */
  stackDir?: StackDirections;
  /**
   * Stack Spacings
   */
  stackSpacing?: StackSpacings;
  /**
   * Form children
   */
  children: ReactNode;
}

export const Form: FC<FormProps> = ({
  children,
  stackDir = StackDirections.col,
  stackSpacing = StackSpacings.s,
  ...props
}) => {
  return (
    <form className="flex flex-col gap-s" {...props}>
      <Stack direction={stackDir} spacing={stackSpacing}>
        {children}
      </Stack>
    </form>
  );
};
