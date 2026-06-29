import { Box, Container, Typography, Stack, Breadcrumbs, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Security = () => {
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
            [ SECURITY_POLICY ]
          </Typography>
        </Breadcrumbs>

        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: 'white' }}>
          Security Policy
        </Typography>
        <Typography variant="body2" className="mono-text" sx={{ color: 'text.secondary', mb: 6 }}>
          LAST_UPDATED: RECENT
        </Typography>

        <Stack spacing={6}>
          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              1. Authentication & Access Control
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              We enforce strict identity verification using Multi-Factor Authentication (MFA) protocols and role-based access control (RBAC) to ensure that only authorized personnel can access sensitive environments.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              2. Infrastructure Security
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Our cloud infrastructure operates in isolated environments with rigorous firewalls and zero-trust network policies. We regularly perform automated vulnerability scanning and manual penetration testing to identify and mitigate risks.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              3. Data Encryption
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Data is protected at all times. We utilize TLS 1.3 for all data in transit and AES-256 encryption for data at rest. Cryptographic keys are managed securely and rotated automatically.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              4. Incident Response
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              We maintain a 24/7 automated monitoring system. In the event of a suspected security breach, our incident response protocol immediately isolates affected systems and alerts our security team for rapid remediation.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 8, borderColor: '#30363d' }} />
        
        <Typography variant="body2" sx={{ color: '#484f58', fontStyle: 'italic' }}>
          To report a security vulnerability, please contact our Security Operations Center immediately.
        </Typography>
      </Container>

      <Footer />
    </Box>
  );
};

export default Security;
