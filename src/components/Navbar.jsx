import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Capabilities', id: 'capabilities' },
    { label: 'Evolution', id: 'evolution' },
    { label: 'Labs', id: 'labs' },
    { label: 'Collective', id: 'collective' }
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled ? 'rgba(13, 17, 23, 0.75)' : 'transparent',
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -1, color: '#ffffff' }}>
                ARQULAT
              </Typography>

              {/* Status Badge */}
              <Box 
                className="mono-text"
                sx={{ 
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'center',
                  gap: 1,
                  fontSize: '0.65rem',
                  color: '#3fb950',
                  border: '1px solid rgba(63, 185, 80, 0.2)',
                  background: 'rgba(63, 185, 80, 0.05)',
                  px: 1.5,
                  py: 0.4,
                  borderRadius: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.05em'
                }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#3fb950', animation: 'twinkle 1.5s infinite ease-in-out' }} />
                STATUS: COMPUTE_ONLINE
              </Box>
            </Box>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              {navItems.map((item) => (
                <Typography
                  key={item.id}
                  variant="body2"
                  className="mono-text"
                  onClick={() => handleNavClick(item.id)}
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
                  {item.label.toUpperCase()}
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
                Hire the Collective
              </Button>
            </Box>
            
            <IconButton 
              sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Responsive Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: '280px',
            background: '#0d1117',
            borderLeft: '1px solid #30363d',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -1, color: '#ffffff' }}>
              ARQULAT
            </Typography>
            <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.secondary' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ mb: 2 }}>
                <ListItemButton 
                  onClick={() => handleNavClick(item.id)}
                  sx={{ 
                    borderRadius: '8px',
                    '&:hover': { background: 'rgba(47, 129, 247, 0.08)' }
                  }}
                >
                  <ListItemText 
                    primary={item.label.toUpperCase()} 
                    primaryTypographyProps={{ 
                      className: 'mono-text',
                      sx: { color: 'text.primary', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.1em' }
                    }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ pb: 4 }}>
          <Button 
            fullWidth
            variant="contained" 
            sx={{ 
              borderRadius: '40px', 
              py: 1.5,
              fontWeight: 700,
              background: 'white',
              color: 'black',
              '&:hover': { background: 'rgba(255,255,255,0.9)' }
            }}
          >
            Hire the Collective
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
