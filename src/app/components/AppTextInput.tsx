import { TextField } from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';

type AppTextInputProps = {
  label: string;
} & UseControllerProps;

export default function AppTextInput(props: AppTextInputProps) {
  const { fieldState, field } = useController({ ...props, defaultValue: '' });
  return (
    <TextField
      {...props}
      {...field}
      fullWidth
      variant="outlined"
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  );
}
