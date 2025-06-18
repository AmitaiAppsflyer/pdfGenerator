import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { type PrimaryButtonProps } from './types';

const PrimaryButton = ({ 
  children,
  fullWidth = false,
  isLoading = false,
  disabled,
  textColor,
  ...props 
}: PrimaryButtonProps) => {
  const theme = useTheme();
  
  return (
    <Button
      variant="contained"
     
      fullWidth={fullWidth}
      disabled={disabled || isLoading}
      sx={{
        textTransform: 'none',
        borderRadius: 2,
        padding: '12px 24px',
        fontSize: '1rem',
        fontWeight: 600,
        color: textColor,
        backgroundColor: theme.palette.customPurple.dark,
        '&:hover': {
          backgroundColor: theme.palette.customPurple.dark,
        },
        '&:disabled': {
          backgroundColor: theme.palette.customPurple.dark,
          opacity: 0.6,
          color: textColor,
        },
      }}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </Button>
  );
};

export default PrimaryButton; 