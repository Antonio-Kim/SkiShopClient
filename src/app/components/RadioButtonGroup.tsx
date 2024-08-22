import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

type RadioButtonGroupProps = {
  options: any[];
  onChange: (event: any) => void;
  selectedValue: string;
};

export default function RadioButtonGroup({
  options,
  onChange,
  selectedValue,
}: RadioButtonGroupProps) {
  return (
    <FormControl>
      <RadioGroup onChange={onChange} value={selectedValue}>
        {options.map(({ value, label }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={<Radio />}
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
