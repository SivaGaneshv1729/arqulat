import { useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/muiTheme';
import Home from './pages/Home';
import GlobalBackground from './components/GlobalBackground';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    // ... existing lenis effect code ...
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalBackground />
      <Home />
    </ThemeProvider>
  );
}

export default App;
