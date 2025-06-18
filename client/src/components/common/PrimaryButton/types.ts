import { type ButtonProps } from '@mui/material/Button';

export interface PrimaryButtonProps extends Omit<ButtonProps, 'variant' | 'color'> {
  fullWidth?: boolean;
  isLoading?: boolean;
  textColor?: string;
} 