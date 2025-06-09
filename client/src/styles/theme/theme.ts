import { createTheme } from '@mui/material/styles';
import { colors } from './colors';
import './types'; // Import to register type extensions

const theme = createTheme({
  palette: {
    // Use purple as primary color
    primary: {
      light: colors.purple.light,
      main: colors.purple.main,
      dark: colors.purple.dark,
    },
    // Use blue as secondary color
    secondary: {
      light: colors.blue.light,
      main: colors.blue.main,
      dark: colors.blue.dark,
    },
    // Custom colors accessible via theme.palette.customPurple
    customPurple: {
      light: colors.purple.light,
      main: colors.purple.main,
      dark: colors.purple.dark,
    },
    // Custom colors accessible via theme.palette.customBlue
    customBlue: {
      light: colors.blue.light,
      main: colors.blue.main,
      dark: colors.blue.dark,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    // Global component overrides can be added here
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent uppercase transformation
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme; 