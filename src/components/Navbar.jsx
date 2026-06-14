import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container, Drawer, List, ListItem, ListItemButton, ListItemText, Avatar, Menu, MenuItem, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080'}/api/v1/user/me`, {
          credentials: 'include'
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };
    fetchUser();
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080'}/api/v1/user/logout`, {
        method: 'POST',
        credentials: 'include'
      });
      setUser(null);
      handleMenuClose();
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };
  
  const handleAuthRedirect = () => {
    window.location.href = import.meta.env.VITE_AUTH_URL || 'http://localhost:5173/login';
  };

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
    { label: 'About', id: 'about' },
    { label: 'Capabilities', id: 'capabilities' },
    { label: 'Evolution', id: 'evolution' },
    { label: 'Projects', id: 'projects' },
    { label: 'Developer\'s', id: 'collective' }
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
            
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 4 }}>
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
              {user ? (
                <>
                  <IconButton onClick={handleMenuClick} sx={{ p: 0, ml: 1 }}>
                    <Avatar alt={user.name} src={user.picture || ''} sx={{ width: 40, height: 40, border: '2px solid rgba(255,255,255,0.2)' }} />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleMenuClose}
                    onClick={handleMenuClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    PaperProps={{
                      sx: {
                        mt: 1.5,
                        background: '#161b22',
                        color: 'white',
                        border: '1px solid #30363d',
                        minWidth: 200,
                        '& .MuiMenuItem-root': {
                          fontSize: '0.9rem',
                          fontFamily: 'inherit',
                          py: 1.5
                        }
                      }
                    }}
                  >
                    <Box sx={{ px: 2, py: 1.5 }}>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: 'white' }}>{user.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{user.email}</Typography>
                    </Box>
                    <Divider sx={{ borderColor: '#30363d' }} />
                    <MenuItem onClick={handleLogout} sx={{ color: '#ff7b72', '&:hover': { background: 'rgba(255, 123, 114, 0.1)' } }}>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Button 
                  variant="contained" 
                  onClick={handleAuthRedirect}
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
                  Login / Sign Up
                </Button>
              )}
            </Box>
            
            <IconButton 
              sx={{ display: { xs: 'block', lg: 'none' }, color: 'white' }}
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
          {user ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                <Avatar alt={user.name} src={user.picture || ''} />
                <Box>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>{user.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>{user.email}</Typography>
                </Box>
              </Box>
              <Button 
                fullWidth
                variant="outlined" 
                onClick={handleLogout}
                sx={{ 
                  borderRadius: '40px', 
                  py: 1.5,
                  fontWeight: 700,
                  color: '#ff7b72',
                  borderColor: 'rgba(255, 123, 114, 0.3)',
                  '&:hover': { background: 'rgba(255, 123, 114, 0.1)', borderColor: '#ff7b72' }
                }}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Button 
              fullWidth
              variant="contained" 
              onClick={handleAuthRedirect}
              sx={{ 
                borderRadius: '40px', 
                py: 1.5,
                fontWeight: 700,
                background: 'white',
                color: 'black',
                '&:hover': { background: 'rgba(255,255,255,0.9)' }
              }}
            >
              Login / Sign Up
            </Button>
          )}
        </Box>
      </Drawer>
    </Box>

  );
};

export default Navbar;
