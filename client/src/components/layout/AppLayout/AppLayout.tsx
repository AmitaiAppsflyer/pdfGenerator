import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { type AppLayoutProps } from './types';

const AppLayout = ({ children }: AppLayoutProps) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: `linear-gradient(135deg, ${theme.palette.customPurple.light} 0%, ${theme.palette.customPurple.dark} 100%)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default AppLayout; 