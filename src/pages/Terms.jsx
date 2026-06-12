import { Box, Container, Typography, Stack, Breadcrumbs, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <Box sx={{ background: '#0d1117', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <Container maxWidth="md" sx={{ pt: 15, pb: 10, flex: 1 }}>
        <Breadcrumbs 
          aria-label="breadcrumb" 
          sx={{ mb: 4, '& .MuiBreadcrumbs-separator': { color: '#30363d' } }}
        >
          <Link 
            component={RouterLink} 
            to="/" 
            underline="hover" 
            className="mono-text"
            sx={{ color: 'text.secondary', fontSize: '0.75rem' }}
          >
            [ HOME ]
          </Link>
          <Typography 
            className="mono-text" 
            sx={{ color: 'primary.main', fontSize: '0.75rem' }}
          >
            [ TERMS_OF_SERVICE ]
          </Typography>
        </Breadcrumbs>

        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: 'white' }}>
          Terms of Service
        </Typography>
        <Typography variant="body2" className="mono-text" sx={{ color: 'text.secondary', mb: 6 }}>
          LAST_UPDATED: JUNE_12_2026_v1.0.0
        </Typography>

        <Stack spacing={6}>
          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              By accessing or using the Arqulat platform, infrastructure, or services, you agree to be bound by these Terms of Service. If you do not agree to all terms and conditions, you are prohibited from using our nodes and systems.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              2. Intellectual Property
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              All intellectual property rights in the Arqulat ecosystem, including but not limited to the core orchestration engine, spatial UI components, and proprietary AI models, are owned by Arqulat Collective. Users retain ownership of their specific data and logic processed through the system, subject to the licenses granted herein.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              3. System Usage & Limits
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Users are granted a limited, non-exclusive license to utilize our hyperscale infrastructure. Any attempt to reverse-engineer, stress-test without authorization, or disrupt the node stability will result in immediate termination of access.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              4. Liability & Performance
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              While Arqulat engineers for 99.99% uptime, we are not liable for any indirect, incidental, or consequential damages arising from system downtime, upstream provider failures, or unverified autonomous agent outputs.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              5. Governing Law
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              These terms shall be governed by and construed in accordance with the protocols of the Arqulat Global Governance, without regard to its conflict of law provisions.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 8, borderColor: '#30363d' }} />
        
        <Typography variant="body2" sx={{ color: '#484f58', fontStyle: 'italic' }}>
          For inquiries regarding specific enterprise licensing or custom service level agreements, please contact our Legal Node.
        </Typography>
      </Container>

      <Footer />
    </Box>
  );
};

export default Terms;
