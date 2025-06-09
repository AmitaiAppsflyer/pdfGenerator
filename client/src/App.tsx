import { ThemeProvider } from './styles/theme';
import AppLayout from './components/layout/AppLayout';
import { Button, Typography, Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h3" color="primary">
            PDF Generator
          </Typography>
          <Typography variant="h6" color="secondary">
            AI Research Assistant
          </Typography>
          <Button variant="contained" color="primary">
            Primary Button
          </Button>
          <Button variant="contained" color="secondary">
            Secondary Button
          </Button>
        </Box>
      </AppLayout>
    </ThemeProvider>
  )
}

export default App
