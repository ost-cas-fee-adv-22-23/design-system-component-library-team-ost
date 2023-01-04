import React, { FC, ReactNode, FormHTMLAttributes } from 'react';
import { Stack, StackDirections, StackSpacings } from '../../layout/stack/stack';

export type FormProps = {
  /**
   * The form items an labels
   */
  children: ReactNode;
  /**
   * Stack Direction to style the form
   */
  stackDir?: StackDirections;
  /**
   * Stack Spacings to define the spacings between the form items
   */
  stackSpacing?: StackSpacings;
} & FormHTMLAttributes<HTMLFormElement>;

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
