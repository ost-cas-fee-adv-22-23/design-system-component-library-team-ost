import React, { FC, ReactNode, FormHTMLAttributes, FormEvent } from 'react';
import { Stack, StackDirection, StackSpacing } from '../../layout/stack/stack';

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
  stackDir?: StackDirection;
  /**
   * Stack Spacings to define the spacings between the form items
   */
  stackSpacing?: StackSpacing;
} & FormHTMLAttributes<HTMLFormElement>;

export const Form: FC<FormProps> = ({
  children,
  handleSubmit,
  stackDir = StackDirection.col,
  stackSpacing = StackSpacing.s,
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
