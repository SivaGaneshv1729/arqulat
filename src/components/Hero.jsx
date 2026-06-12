import { Box, Typography, Container, Stack, Button } from '@mui/material';
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

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} justifyContent="center" alignItems="center">
                  <Button 
                    variant="contained" 
                    sx={{ 
                      borderRadius: '50px', 
                      px: 6, 
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      background: 'linear-gradient(45deg, #2f81f7, #8957e5)',
                      boxShadow: '0 0 30px rgba(47, 129, 247, 0.3)',
                      '&:hover': { 
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 50px rgba(137, 87, 229, 0.4)'
                      } 
                    }}
                  >
                    Deploy Solution
                  </Button>
                  
                  <Button 
                    variant="text" 
                    sx={{ 
                      borderRadius: '50px', 
                      px: 5, 
                      py: 2,
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      '&:hover': { 
                        background: 'rgba(255,255,255,0.05)',
                        color: 'primary.main'
                      }
                    }}
                  >
                    Active Nodes →
                  </Button>
                </Stack> 

              </motion.div>
            </motion.div>
          </Box>
        </Box>

        {/* Floating Code Snippet 1 (Interactive) */}
        <motion.div 
          style={{ position: 'absolute', top: '15%', left: '8%', y: y1 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Box className="glow-border" sx={{ background: 'rgba(22, 27, 34, 0.4)', backdropFilter: 'blur(10px)', p: 2, borderRadius: 2, border: '1px solid rgba(48, 54, 61, 0.5)', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: '#8b949e' }}>
            <span style={{color: '#ff7b72'}}>const</span> agency = <span style={{color: '#ff7b72'}}>new</span> <span style={{color: '#d2a8ff'}}>Arqulat</span>();
            <br />
            <span style={{color: '#ff7b72'}}>await</span> agency.<span style={{color: '#d2a8ff'}}>buildSolution</span>(&#123; aiMl: <span style={{color: '#ff7b72'}}>true</span> &#125;);
          </Box>
        </motion.div>

        {/* Floating Code Snippet 2 (Interactive) */}
        <motion.div 
          style={{ position: 'absolute', bottom: '15%', right: '8%', y: y2 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Box className="glow-border" sx={{ background: 'rgba(22, 27, 34, 0.4)', backdropFilter: 'blur(10px)', p: 2, borderRadius: 2, border: '1px solid rgba(48, 54, 61, 0.5)', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: '#3fb950' }}>
            ✓ SOLUTIONS_DEPLOYED: ACTIVE
            <br />
            ✓ STUDENT_BUILDERS: TRUE
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
