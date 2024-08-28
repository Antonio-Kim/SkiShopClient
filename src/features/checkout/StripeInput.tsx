import { InputBaseComponentProps } from '@mui/material';
import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';

type StripeInputProps = InputBaseComponentProps;

export const StripeInput = forwardRef(function StripeInput(
  { component: Component, ...props }: StripeInputProps,
  ref: Ref<unknown>
) {
  const elementRef = useRef<any>();
  useImperativeHandle(ref, () => ({
    focus: () => elementRef.current.focus,
  }));

  return (
    <Component
      onReady={(element: any) => (elementRef.current = element)}
      {...props}
    />
  );
});
