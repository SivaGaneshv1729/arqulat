import { Box, Container, Typography, Grid, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ pt: 12, pb: 6, borderTop: '1px solid #30363d', background: '#0d1117' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -1, mb: 2.5, display: 'flex', alignItems: 'center', gap: 0.5, color: '#ffffff' }}>
              ARQULAT
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4, maxWidth: 320, lineHeight: 1.7, fontSize: '0.9rem' }}>
              Engineered for the digital frontier. <br />
              A unified collective building autonomous intelligence and high-performance software.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <IconButton size="small" sx={{ color: 'text.secondary', border: '1px solid #30363d', '&:hover': { color: 'white', borderColor: '#8b949e', background: 'rgba(255,255,255,0.05)' } }}><GitHubIcon fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: 'text.secondary', border: '1px solid #30363d', '&:hover': { color: 'white', borderColor: '#8b949e', background: 'rgba(255,255,255,0.05)' } }}><LinkedInIcon fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: 'text.secondary', border: '1px solid #30363d', '&:hover': { color: 'white', borderColor: '#8b949e', background: 'rgba(255,255,255,0.05)' } }}><TwitterIcon fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: 'text.secondary', border: '1px solid #30363d', '&:hover': { color: 'white', borderColor: '#8b949e', background: 'rgba(255,255,255,0.05)' } }}><InstagramIcon fontSize="small" /></IconButton>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography className="font-mono" variant="caption" sx={{ fontWeight: 700, mb: 3, color: 'text.primary', display: 'block', letterSpacing: '0.1em' }}>PLATFORM</Typography>
            <Stack spacing={1.5}>
              {['Intelligence', 'Compute', 'Visuals', 'Ecosystem'].map((link) => (
                <Typography key={link} variant="body2" sx={{ cursor: 'pointer', color: 'text.secondary', fontSize: '0.85rem', '&:hover': { color: 'primary.main' } }}>{link}</Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography className="font-mono" variant="caption" sx={{ fontWeight: 700, mb: 3, color: 'text.primary', display: 'block', letterSpacing: '0.1em' }}>RESOURCES</Typography>
            <Stack spacing={1.5}>
              {['Documentation', 'API Reference', 'Lab Stations', 'Status'].map((link) => (
                <Typography key={link} variant="body2" sx={{ cursor: 'pointer', color: 'text.secondary', fontSize: '0.85rem', '&:hover': { color: 'primary.main' } }}>{link}</Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography className="font-mono" variant="caption" sx={{ fontWeight: 700, mb: 3, color: 'text.primary', display: 'block', letterSpacing: '0.1em' }}>COLLECTIVE</Typography>
            <Stack spacing={1.5}>
              {['About', 'Strategic Roadmap', 'Contributions', 'Careers'].map((link) => (
                <Typography key={link} variant="body2" sx={{ cursor: 'pointer', color: 'text.secondary', fontSize: '0.85rem', '&:hover': { color: 'primary.main' } }}>{link}</Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography className="font-mono" variant="caption" sx={{ fontWeight: 700, mb: 3, color: 'text.primary', display: 'block', letterSpacing: '0.1em' }}>LEGAL</Typography>
            <Stack spacing={1.5}>
              {['Privacy Policy', 'Terms of Service', 'Security'].map((link) => (
                <Typography key={link} variant="body2" sx={{ cursor: 'pointer', color: 'text.secondary', fontSize: '0.85rem', '&:hover': { color: 'primary.main' } }}>{link}</Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid #30363d', pt: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Typography variant="caption" className="font-mono" sx={{ color: 'text.secondary', fontSize: '0.7rem' }}>
              © {new Date().getFullYear()} ARQULAT
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
              TERMS
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
              PRIVACY
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem', letterSpacing: '0.05em' }}>
            ENGINEERED BY <span style={{ color: 'white', fontWeight: 700 }}>ARQULAT_CORE</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
