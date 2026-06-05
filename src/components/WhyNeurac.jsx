/* eslint-disable react/prop-types */
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Deep Discovery', desc: 'We leverage our service-based roots to deeply understand complex technical problems and market needs.' },
  { id: '02', title: 'Agile Execution', desc: 'Our elite team of 4 rapidly prototypes and builds using state-of-the-art AI and system architectures.' },
  { id: '03', title: 'Productization', desc: 'We transform raw engineering power into polished, scalable products that solve real-world challenges.' },
  { id: '04', title: 'Unified Growth', desc: 'Operating as a single productive unit, we scale our products into the next generation of software.' },
];

const StepCard = ({ step }) => {
  return (
    <Box 
      sx={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'sticky', 
        top: 0 
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-50% 0px -50% 0px" }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%' }}
      >
        <Box 
          sx={{ 
            p: { xs: 4, md: 6 }, 
            maxWidth: '600px', 
            mx: 'auto',
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: 2,
            position: 'relative'
          }}
        >
          <Typography className="mono-text" variant="h1" sx={{ color: 'rgba(47, 129, 247, 0.1)', fontSize: '6rem', fontWeight: 800, mb: -6, position: 'absolute', top: -20, left: 20 }}>
            {step.id}
          </Typography>
          <Typography variant="h3" sx={{ mb: 2, position: 'relative', zIndex: 1, fontWeight: 700 }}>
            {step.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 400, fontSize: '1.1rem', lineHeight: 1.6 }}>
            {step.desc}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

const WhyNeurac = () => {
  return (
    <Box sx={{ position: 'relative', py: 15, borderTop: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography variant="body1" color="primary" className="mono-text" sx={{ mb: 2, fontWeight: 600 }}>
            {/* 03. THE_METHODOLOGY */}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            The <span style={{ color: '#8b949e' }}>Product Engine.</span>
          </Typography>
        </Box>
        
        <Grid container>
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ position: 'sticky', top: '35vh' }}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                Our Pipeline.
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.5 }}>
                A refined process honed through years of technical service delivery, now powering our internal product ecosystem.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', gap: 1 }}>
                <Box sx={{ width: 2, height: 100, background: 'linear-gradient(to bottom, #2f81f7, transparent)' }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ position: 'relative' }}>
              {steps.map((step, i) => (
                <StepCard key={step.id} step={step} i={i} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyNeurac;
