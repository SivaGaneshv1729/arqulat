import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled ? 'rgba(13, 17, 23, 0.7)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: 'none',
          borderBottom: scrolled ? '1px solid rgba(48, 54, 61, 0.5)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          top: scrolled ? '15px' : '0',
          width: scrolled ? '90%' : '100%',
          maxWidth: scrolled ? '1200px' : '100%',
          borderRadius: scrolled ? '50px' : '0',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1100
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', height: scrolled ? '64px' : '80px', transition: 'height 0.4s' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -1, display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box component="span" sx={{ color: 'text.primary' }}>NEUR</Box>
              <Box component="span" sx={{ color: 'primary.main' }}>AC</Box>
            </Typography>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              {['Product', 'Intelligence', 'Ecosystem', 'Lab'].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  className="mono-text"
                  sx={{
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    color: 'text.secondary',
                    position: 'relative',
                    '&:hover': { 
                      color: 'primary.main',
                      '&::after': { width: '100%', opacity: 1 }
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: '0%',
                      height: '1px',
                      background: 'var(--primary)',
                      transition: 'all 0.3s ease',
                      opacity: 0
                    },
                    transition: '0.3s'
                  }}
                >
                  {item.toUpperCase()}
                </Typography>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              <Button 
                variant="contained" 
                sx={{ 
                  borderRadius: '40px', 
                  px: 3, 
                  py: 1,
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  background: 'white',
                  color: 'black',
                  '&:hover': { 
                    background: 'rgba(255,255,255,0.9)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Get Started
              </Button>
            </Box>
            
            <IconButton sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
