import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customPurple: {
      light: string;
      main: string;
      dark: string;
    };
    customBlue: {
      light: string;
      main: string;
      dark: string;
    };
  }

  interface PaletteOptions {
    customPurple?: {
      light?: string;
      main?: string;
      dark?: string;
    };
    customBlue?: {
      light?: string;
      main?: string;
      dark?: string;
    };
  }
} 