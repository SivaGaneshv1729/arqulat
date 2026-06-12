import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <Box sx={{ py: 20, position: 'relative', overflow: 'hidden', borderTop: '1px solid #30363d', background: '#0d1117' }}>
      <Box className="star-container">
        {[...Array(30)].map((_, i) => (
          <Box
            key={i}
            className="star"
            sx={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              '--duration': `${2 + Math.random() * 5}s`,
            }}
          />
        ))}
      </Box>

      {/* Background technical lines */}
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '1px', 
        background: 'linear-gradient(to right, transparent, #2f81f7, transparent)',
        opacity: 0.5
      }} />

      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center' 
          }}
        >
          <Typography className="mono-text" variant="body1" color="primary" sx={{ mb: 3, fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em' }}>
            {'// STACK_COLLABORATION_READY'}
          </Typography>
          <Typography variant="h2" sx={{ mb: 4, fontWeight: 800, letterSpacing: '-0.04em', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Ready to innovate? <br />Let's build your next <span className="text-gradient">solution.</span>
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: '50px',
                px: 6,
                py: 2,
                fontSize: '1rem',
                background: '#238636', // GitHub Green
                color: 'white',
                fontWeight: 700,
                '&:hover': {
                  background: '#2ea043'
                }
              }}
            >
              Schedule MVP Session
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: '50px',
                px: 6,
                py: 2,
                fontSize: '1rem',
                borderColor: '#30363d',
                color: 'white',
                fontWeight: 700,
                '&:hover': { borderColor: '#8b949e', background: 'rgba(255,255,255,0.05)' }
              }}
            >
              Explore Our Experience
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTA;
