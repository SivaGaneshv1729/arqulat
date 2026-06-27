import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box sx={{ 
      minHeight: { xs: 'auto', md: '100vh' }, 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      pt: { xs: 15, md: 12 }, 
      pb: { xs: 10, md: 0 },
      position: 'relative', 
      overflow: 'hidden',
      background: 'transparent'
    }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', width: '100%' }}>
          <Box sx={{ maxWidth: '1000px', position: 'relative', zIndex: 1, width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box className="floating" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4 }}>
                <Typography 
                  className="mono-text"
                  variant="caption" 
                  sx={{ 
                    color: 'primary.main', 
                    border: '1px solid', 
                    borderColor: 'rgba(47, 129, 247, 0.3)', 
                    background: 'rgba(47, 129, 247, 0.05)',
                    px: 2, 
                    py: 0.6, 
                    borderRadius: '20px',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em'
                  }}
                >
                  [ THE_ARQULAT_COLLECTIVE ]
                </Typography>
              </Box>

              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '3rem', md: '5rem', lg: '6rem' }, 
                  lineHeight: 1, 
                  mb: 4,
                  color: 'text.primary',
                  fontWeight: 800,
                  letterSpacing: '-0.04em'
                }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  style={{ display: 'inline-block' }}
                >
                  Architecting
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  style={{ display: 'inline-block' }}
                  className="text-gradient"
                >
                  digital elegance.
                </motion.span>
              </Typography>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ mb: 6, mx: 'auto', maxWidth: '750px', fontWeight: 400, lineHeight: 1.6, fontSize: { xs: '1.1rem', md: '1.4rem' }, opacity: 0.8 }}
                >
                  A cohort of builders forging intelligent systems and sophisticated software architectures, where high-velocity engineering meets uncompromising design.
                </Typography>

              </motion.div>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
