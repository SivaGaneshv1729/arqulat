import { Box, Typography, Container } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

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

        {/* Realistic Floating Rocket (Left) */}
        <motion.div 
          style={{ position: 'absolute', top: '15%', left: '5%', y: y1 }}
          initial={{ opacity: 0, x: -100, rotate: -20 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            y: [0, -30, 0],
            rotate: -20
          }}
          transition={{ 
            opacity: { duration: 1.2, delay: 1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Box sx={{ position: 'relative' }}>
            {/* Ambient Glow */}
            <Box sx={{ 
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '120%', height: '120%', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(47, 129, 247, 0.2) 0%, transparent 70%)',
              filter: 'blur(30px)', zIndex: -1
            }} />
            <Box
              component="img"
              src="https://www.pngmart.com/files/13/Space-Rocket-PNG-Transparent-Image.png"
              alt="Realistic Rocket"
              sx={{ 
                width: { xs: '120px', md: '200px' },
                height: 'auto',
                filter: 'drop-shadow(0 0 20px rgba(47, 129, 247, 0.4))'
              }}
            />
          </Box>
        </motion.div>

        {/* Realistic Floating Spaceship (Right) */}
        <motion.div 
          style={{ position: 'absolute', bottom: '20%', right: '5%', y: y2 }}
          initial={{ opacity: 0, x: 100, rotate: 15 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            y: [0, 40, 0],
            rotate: 15
          }}
          transition={{ 
            opacity: { duration: 1.2, delay: 1.2 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Box sx={{ position: 'relative' }}>
            {/* Ambient Glow */}
            <Box sx={{ 
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '120%', height: '120%', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(137, 87, 229, 0.2) 0%, transparent 70%)',
              filter: 'blur(30px)', zIndex: -1
            }} />
            <Box
              component="img"
              src="https://www.pngmart.com/files/6/Spaceship-PNG-Transparent-Image.png"
              alt="Realistic Spaceship"
              sx={{ 
                width: { xs: '150px', md: '280px' },
                height: 'auto',
                filter: 'drop-shadow(0 0 20px rgba(137, 87, 229, 0.4))'
              }}
            />
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default Hero;
