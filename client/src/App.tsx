import { ThemeProvider } from './styles/theme';
import AppLayout from './components/layout/AppLayout';
import Research from './pages/research';

function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <Research />
      </AppLayout>
    </ThemeProvider>
  )
}

export default App
