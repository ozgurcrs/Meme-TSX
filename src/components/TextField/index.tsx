import { FC } from 'react';
import { TextField } from '@mui/material';

type Props = {
  label?: string;
  variant?: 'outlined';
  register: any;
  index: number;
};

export const TextInput: FC<Props> = ({
  label,
  variant = 'outlined',
  register,
  index,
}) => {
  return (
    <TextField label={label} variant={variant} {...register(`text${index}`)} />
  );
};
