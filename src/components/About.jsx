import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const GlobeAnimation = () => {
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: { xs: '320px', md: '450px' },
        height: { xs: '320px', md: '450px' }, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Glow behind Animation - Darker Multi-layered Gradient */}
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          background: 'radial-gradient(circle at center, rgba(13, 110, 253, 0.15) 0%, rgba(13, 17, 23, 0) 70%)', 
          filter: 'blur(40px)',
          zIndex: 0
        }} 
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '70%', 
          height: '70%', 
          background: 'radial-gradient(circle at center, rgba(47, 129, 247, 0.1) 0%, transparent 60%)', 
          filter: 'blur(20px)',
          zIndex: 0
        }} 
      />

      <Box 
        sx={{ 
          width: '100%', 
          height: '100%', 
          position: 'relative', 
          zIndex: 1,
          // Apply hue-rotate to shift the animation colors towards blue
          // and adjust brightness/contrast for a sharper technical look
          filter: 'hue-rotate(200deg) brightness(1.2) contrast(1.1)',
        }}
      >
        <DotLottieReact
          src="/57f0ad38-1153-11ee-98ae-8bafa90c2b74.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </Box>

      {/* Technical HUD Overlay */}
      <Box sx={{ position: 'absolute', bottom: '15%', right: '5%', zIndex: 2, pointerEvents: 'none' }}>
        <Typography className="font-mono" sx={{ fontSize: '0.6rem', color: '#2f81f7', opacity: 0.8, textAlign: 'right', letterSpacing: '0.1em', fontWeight: 600 }}>
          GLOBAL_NODE_SYNC: 100%<br />
          ACTIVE_RELAYS: 4.8K
        </Typography>
      </Box>
    </Box>
  );
};

const About = () => {
  return (
    <Box id="about" sx={{ py: { xs: 10, md: 15 }, background: 'transparent', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: { xs: 6, md: 4 } 
          }}
        >
          {/* Text Matter */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box className="section-label" sx={{ mb: 3 }}>
                [ 00. ORIGIN_PROTOCOL ]
              </Box>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, letterSpacing: '-0.04em', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                Student intelligence, <span className="text-gradient">production delivery.</span>
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Arqulat is a student-developed engineering agency specializing in custom artificial intelligence, machine learning, and core software solutions. We bridge high-performance academic research with pragmatic software craftsmanship, creating production-grade integrations tailored to real problems.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.7, opacity: 0.8 }}>
                Founded and operated by a collaborative team of student builders, we work at high-velocity to construct scalable backends, deploy fine-tuned local models, optimize LLM context limits, and engineer intuitive UI/UX layers.
              </Typography>
              
              <Stack direction="row" spacing={5} sx={{ mt: 6 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 0.5 }}>99.9%</Typography>
                  <Typography className="font-mono" sx={{ fontSize: '0.65rem', color: 'text.secondary', letterSpacing: '0.1em' }}>UPTIME_SYNC</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'secondary.main', mb: 0.5 }}>10+</Typography>
                  <Typography className="font-mono" sx={{ fontSize: '0.65rem', color: 'text.secondary', letterSpacing: '0.1em' }}>SHIPPED_PROTOS</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'info.main', mb: 0.5 }}>4</Typography>
                  <Typography className="font-mono" sx={{ fontSize: '0.65rem', color: 'text.secondary', letterSpacing: '0.1em' }}>CORE_BUILDERS</Typography>
                </Box>
              </Stack>
            </motion.div>
          </Box>
          
          {/* Globe Animation */}
          <Box sx={{ flexShrink: 0, width: { xs: '100%', md: '450px' }, display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            >
              <GlobeAnimation />
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
