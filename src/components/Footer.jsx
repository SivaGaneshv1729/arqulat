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

  const footerData = {
    // ... rest of footerData stays same
    'Autonomous Intelligence': { title: 'AI_SYSTEMS', content: ['Multi-agent networks', 'Cognitive loops', 'Neural orchestration'] },
    'Hyperscale Infrastructure': { title: 'COMPUTE_NODES', content: ['Distributed clusters', 'Low-latency routing', 'Edge compute'] },
    'Spatial UI & 3D': { title: 'VISUAL_ENGINES', content: ['Interactive 3D', 'Spatial canvases', 'Simulation layers'] },
    'Enterprise Delivery': { title: 'SCALED_SOLUTIONS', content: ['Production frameworks', 'Security audits', 'Global deployment'] },
    'Tech Documentation': { title: 'DEV_DOCS', content: ['API references', 'SDK guides', 'Architecture maps'] },
    'Open Source Labs': { title: 'LAB_REPOS', content: ['Community research', 'Public tools', 'Lab prototypes'] },
    'System Status': { title: 'NODE_HEALTH', content: ['Real-time metrics', 'Cluster status', 'Incident logs'] },
    'Engineering Blog': { title: 'TECH_INSIGHTS', content: ['Deep dives', 'Lab updates', 'Core research'] },
    'Our Journey': { title: 'EVOLUTION', content: ['Startup engine', 'Mission timeline', 'Core philosophy'] },
    'Engineering Team': { title: 'COLLECTIVE', content: ['Lead researchers', 'Core engineers', 'Spatial designers'] },
    'Future Labs': { title: 'R&D_HORIZON', content: ['Quantum research', 'Neuro-interfaces', 'Spatial compute'] },
    'Join the Squad': { title: 'CAREERS', content: ['Open roles', 'Culture', 'Equity programs'] },
    'Hire the Collective': { title: 'CONSULTING', content: ['Enterprise partnerships', 'System audits', 'Custom builds'] },
    'Inquiry Form': { title: 'GET_IN_TOUCH', content: ['Direct channel', 'Project scoping', 'Partnerships'] },
    'Global Studio': { title: 'LOCATIONS', content: ['Physical hubs', 'Virtual clusters', 'R&D centers'] },
    'Support Node': { title: 'HELP_DESK', content: ['24/7 technical', 'Incident support', 'Status pings'] },
    'PRIVACY': { title: 'PRIVACY_PROTOCOL', content: ['Data sovereignty', 'AES-256 encryption', 'No tracking pixels'] },
    'SECURITY': { title: 'SECURITY_MANIFESTO', content: ['Audit history', 'Breach isolation', 'MFA protocols'] }
  };

  const footerLinks = [
    {
      title: 'CAPABILITIES',
      links: ['Autonomous Intelligence', 'Hyperscale Infrastructure', 'Spatial UI & 3D', 'Enterprise Delivery']
    },
    {
      title: 'RESOURCES',
      links: ['Tech Documentation', 'Open Source Labs', 'System Status', 'Engineering Blog']
    },
    {
      title: 'COLLECTIVE',
      links: ['Our Journey', 'Engineering Team', 'Future Labs', 'Join the Squad']
    },
    {
      title: 'CONTACT',
      links: ['Hire the Collective', 'Inquiry Form', 'Global Studio', 'Support Node']
    }
  ];

  const handleLegalClick = (item) => {
    if (item === 'TERMS') {
      navigate('/terms');
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
              {[<GitHubIcon key="gh" />, <LinkedInIcon key="li" />, <TwitterIcon key="tw" />, <InstagramIcon key="in" />].map((icon, i) => (
                <IconButton key={i} size="small" sx={{ color: 'text.secondary', border: '1px solid #30363d', '&:hover': { color: 'white', borderColor: '#8b949e', background: 'rgba(255,255,255,0.05)' } }}>
                  {icon}
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
                    key={link} 
                    variant="body2" 
                    onClick={() => setModalContent(footerData[link])}
                    sx={{ cursor: 'pointer', color: 'text.secondary', fontSize: '0.85rem', transition: '0.2s', '&:hover': { color: 'primary.main', transform: 'translateX(4px)' } }}
                  >
                    {link}
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
