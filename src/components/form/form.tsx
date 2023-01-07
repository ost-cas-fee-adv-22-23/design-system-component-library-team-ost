import React, { FC, ReactNode, FormHTMLAttributes, FormEvent } from 'react';
import { Stack, StackDirections, StackSpacings } from '../../layout/stack/stack';

export type FormProps = {
  /**
   * The form items an labels
   */
  children: ReactNode;
  /**
   * The form items an labels
   */
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
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
  handleSubmit,
  stackDir = StackDirections.col,
  stackSpacing = StackSpacings.s,
  ...args
}) => {
  return (
    <form onSubmit={handleSubmit} {...args}>
      <Stack direction={stackDir} spacing={stackSpacing}>
        {children}
      </Stack>
    </form>
  );
};
