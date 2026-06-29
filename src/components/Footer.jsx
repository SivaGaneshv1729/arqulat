import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  IconButton, 
  Stack, 
  Divider, 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);
  const navigate = useNavigate();

  const footerLinks = [
    {
      title: 'COMPANY',
      links: [
        { label: 'About Us', id: 'about' },
        { label: 'Products', id: 'capabilities' },
        { label: 'Our Journey', id: 'evolution' },
        { label: 'Meet the Team', id: 'collective' }
      ]
    },
    {
      title: 'CONTACT',
      links: [
        { label: 'Email', href: 'mailto: admin@arqulat.com' }, 
        { label: 'Instagram', href: 'https://www.instagram.com/arqulat/' }, 
        // { label: 'LinkedIn', href: 'https://linkedin.com/in/YOUR_USERNAME' }, 
        // { label: 'Twitter', href: 'https://twitter.com/YOUR_USERNAME' }
      ]
    }
  ];

  const handleNavClick = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }, 500);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  const handleLegalClick = (item) => {
    if (item === 'TERMS') {
      navigate('/terms');
      window.scrollTo(0, 0);
    } else if (item === 'PRIVACY') {
      navigate('/privacy');
      window.scrollTo(0, 0);
    } else if (item === 'SECURITY') {
      navigate('/security');
      window.scrollTo(0, 0);
    } else {
      setModalContent(footerData[item]);
    }
  };

  return (
    <Box component="footer" sx={{ pt: 12, pb: 6, borderTop: '1px solid #30363d', background: '#0d1117' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -1, mb: 2, color: '#ffffff' }}>
              ARQULAT
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, maxWidth: 320, lineHeight: 1.7, fontSize: '0.9rem' }}>
              Engineered for the digital frontier. <br />
              A unified collective building high-performance intelligence.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              {[
                { icon: <GitHubIcon key="gh" />, url: 'https://github.com/SivaGaneshv1729/arqulat' },
                { icon: <LinkedInIcon key="li" />, url: 'https://linkedin.com/in/YOUR_USERNAME' },
                { icon: <TwitterIcon key="tw" />, url: 'https://twitter.com/YOUR_USERNAME' },
                { icon: <InstagramIcon key="in" />, url: 'https://www.instagram.com/arqulat/' }
              ].map((item, i) => (
                <IconButton 
                  key={i} 
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small" 
                  sx={{ color: 'text.secondary', border: '1px solid #30363d', '&:hover': { color: 'white', borderColor: '#8b949e', background: 'rgba(255,255,255,0.05)' } }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {footerLinks.map((section) => (
            <Grid item xs={6} md={2} key={section.title}>
              <Typography className="mono-text" variant="caption" sx={{ fontWeight: 700, mb: 3, color: 'text.primary', display: 'block', letterSpacing: '0.1em', opacity: 0.8 }}>
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map((link) => (
                  <Typography 
                    key={link.label} 
                    variant="body2" 
                    component={link.href ? "a" : "span"}
                    href={link.href}
                    target={link.href && link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href ? "noopener noreferrer" : undefined}
                    onClick={() => {
                      if (link.id) {
                        handleNavClick(link.id);
                      } else if (!link.href) {
                        setModalContent(footerData[link.label]);
                      }
                    }}
                    sx={{ textDecoration: 'none', cursor: 'pointer', color: 'text.secondary', fontSize: '0.85rem', transition: '0.2s', '&:hover': { color: 'primary.main', transform: 'translateX(4px)' } }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mb: 6, borderColor: 'rgba(48, 54, 61, 0.5)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Typography variant="caption" className="mono-text" sx={{ color: 'text.secondary', fontSize: '0.7rem' }}>
              © {new Date().getFullYear()} ARQULAT_COLLECTIVE
            </Typography>
            {['PRIVACY', 'TERMS', 'SECURITY'].map((item) => (
              <Typography 
                key={item}
                variant="caption" 
                className="mono-text"
                onClick={() => handleLegalClick(item)}
                sx={{ color: 'text.secondary', fontSize: '0.7rem', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Typography variant="caption" className="mono-text" sx={{ color: 'text.secondary', fontSize: '0.7rem', letterSpacing: '0.05em' }}>
            STATUS: <span style={{ color: '#3fb950', fontWeight: 700 }}>OPERATIONAL_v1.0.4</span>
          </Typography>
        </Box>
      </Container>
      {/* ... rest of modal code ... */}
      <Dialog 
        open={Boolean(modalContent)} 
        onClose={() => setModalContent(null)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: { background: '#161b22', border: '1px solid #30363d', borderRadius: '8px', color: 'text.primary' }
        }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <Typography className="mono-text" variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.1em', color: 'primary.main' }}>
            [ {modalContent?.title} ]
          </Typography>
          <IconButton size="small" onClick={() => setModalContent(null)} sx={{ color: '#8b949e' }}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ py: 2 }}>
          <Stack spacing={1.5}>
            {modalContent?.content.map((point, index) => (
              <Typography key={index} variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                • {point}
              </Typography>
            ))}
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setModalContent(null)} fullWidth variant="contained" size="small" sx={{ background: '#30363d', color: 'white', '&:hover': { background: '#484f58' } }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Footer;
