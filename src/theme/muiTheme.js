import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2f81f7', // GitHub blue
    },
    secondary: {
      main: '#8957e5', // Purple accent
    },
    info: {
      main: '#38bdf8', // Cyan accent
    },
    background: {
      default: '#0d1117',
      paper: '#161b22',
    },
    text: {
      primary: '#c9d1d9',
      secondary: '#8b949e',
    },
  },
  typography: {
    fontFamily: '"Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
    h1: { fontWeight: 800, fontSize: '3.5rem', letterSpacing: '-0.04em' },
    h2: { fontWeight: 800, fontSize: '2.5rem', letterSpacing: '-0.03em' },
    h3: { fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.02em' },
    h4: { fontWeight: 700, fontSize: '1.5rem' },
    h5: { fontWeight: 600, fontSize: '1.25rem' },
    h6: { fontWeight: 600, fontSize: '1.1rem' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '10px 20px',
          boxShadow: 'none',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: 'none',
            transform: 'translateY(-2px)',
          }
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#161b22',
          border: '1px solid #30363d',
          borderRadius: 8,
          boxShadow: 'none',
        }
      }
    }
  },
});

export default theme;
