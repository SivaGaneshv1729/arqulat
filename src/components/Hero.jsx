import { Box, Typography, Container } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const RealisticRocket = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#2f81f7" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    {/* Fins */}
    <path d="M7 17L4 21V15L7 17Z" fill="#1d4ed8" />
    <path d="M17 17L20 21V15L17 17Z" fill="#1d4ed8" />
    {/* Body */}
    <path d="M12 3C12 3 7 8 7 14C7 16 9 18 12 18C15 18 17 16 17 14C17 8 12 3 12 3Z" fill="url(#rocketBody)" />
    {/* Window */}
    <circle cx="12" cy="10" r="2" fill="#0d1117" />
    {/* Flame */}
    <motion.path 
      d="M10 19L12 23L14 19H10Z" 
      fill="#f59e0b"
      animate={{ opacity: [0.5, 1, 0.5], scaleY: [1, 1.3, 1] }}
      transition={{ duration: 0.2, repeat: Infinity }}
    />
  </svg>
);

const RealisticSpaceship = () => (
  <svg width="70" height="40" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shipBody" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8957e5" />
        <stop offset="100%" stopColor="#d2a8ff" />
      </linearGradient>
    </defs>
    {/* Wings */}
    <path d="M5 12L0 18H10L5 12Z" fill="#6e40c9" />
    <path d="M35 12L40 18H30L35 12Z" fill="#6e40c9" />
    {/* Main Body */}
    <path d="M8 8H32C36 8 40 12 32 16H8C4 16 0 12 8 8Z" fill="url(#shipBody)" />
    {/* Cockpit */}
    <path d="M18 10C18 10 22 8 26 10V12C22 14 18 12 18 12V10Z" fill="rgba(255,255,255,0.3)" />
    {/* Engine Glow */}
    <motion.circle 
      cx="4" cy="12" r="3" 
      fill="#38bdf8"
      animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
      transition={{ duration: 0.5, repeat: Infinity }}
    />
  </svg>
);

const Hero = () => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

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
                  [ ARQULAT_AGENCY_v1.0 ]
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
                  Engineering
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  style={{ display: 'inline-block' }}
                  className="text-gradient"
                >
                  Next Gen Software.
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
                  A student engineering collective delivering custom AI/ML integrations and high-performance software solutions.
                </Typography>

              </motion.div>
            </motion.div>
          </Box>
        </Box>

        {/* Floating Rocket (Left) */}
        <motion.div 
          style={{ position: 'absolute', top: '20%', left: '12%', y: y1 }}
          initial={{ opacity: 0, x: -50, rotate: -25 }}
          animate={{ 
            opacity: 0.8, 
            x: 0,
            y: [0, -25, 0],
          }}
          transition={{ 
            opacity: { duration: 1, delay: 1 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <RealisticRocket />
        </motion.div>

        {/* Floating Spaceship (Right) */}
        <motion.div 
          style={{ position: 'absolute', bottom: '25%', right: '12%', y: y2 }}
          initial={{ opacity: 0, x: 50, rotate: 15 }}
          animate={{ 
            opacity: 0.8, 
            x: 0,
            y: [0, 30, 0],
          }}
          transition={{ 
            opacity: { duration: 1, delay: 1.2 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <RealisticSpaceship />
        </motion.div>

      </Container>
    </Box>
  );
};

export default Hero;
