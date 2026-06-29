import { Box, Container, Typography, Stack, Breadcrumbs, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
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
            [ PRIVACY_POLICY ]
          </Typography>
        </Breadcrumbs>

        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: 'white' }}>
          Privacy Policy
        </Typography>
        <Typography variant="body2" className="mono-text" sx={{ color: 'text.secondary', mb: 6 }}>
          LAST_UPDATED: RECENT
        </Typography>

        <Stack spacing={6}>
          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              1. Data Collection
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              We collect minimal personal data required to provide our AI Platform and Services. This includes basic account information, usage metrics, and interactions with our tools. We do not use hidden tracking pixels or invasive tracking scripts.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              2. Data Usage
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Your data is used strictly for authentication, service delivery, and performance improvements. We never sell your personal information or user data to third-party data brokers.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              3. Data Sovereignty and Storage
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              All collected data is stored in secured, encrypted databases (AES-256 standards). We respect data sovereignty and provide mechanisms for users to request full export or deletion of their personal profiles and system data.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
              4. Cookies and Local Storage
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              We use secure cookies and local storage exclusively for session management and storing your UI preferences. We do not employ third-party advertising cookies.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 8, borderColor: '#30363d' }} />
        
        <Typography variant="body2" sx={{ color: '#484f58', fontStyle: 'italic' }}>
          If you have questions about our data practices, please contact our support team.
        </Typography>
      </Container>

      <Footer />
    </Box>
  );
};

export default Privacy;
