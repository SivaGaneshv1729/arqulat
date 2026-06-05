import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const phases = [
  { 
    id: '01', 
    title: 'Service Roots', 
    label: 'LEGACY_OPS',
    desc: 'Honing our technical depth through elite-level service delivery for global clients.',
    status: 'COMPLETED',
    color: '#2f81f7'
  },
  { 
    id: '02', 
    title: 'Product Pivot', 
    label: 'INCUBATION_PHASE',
    desc: 'Transitioning our internal methodology from execution-for-hire to product ownership.',
    status: 'ACTIVE',
    color: '#8957e5'
  },
  { 
    id: '03', 
    title: 'Unified Startup', 
    label: 'NEURAC_CORE',
    desc: 'A single, high-output engine building the future of agentic and intelligent software.',
    status: 'EVOLVING',
    color: '#38bdf8'
  }
];

const ModernEvolution = () => {
  return (
    <Box sx={{ py: 20, position: 'relative', background: 'linear-gradient(to bottom, #0d1117, #0a0d12)' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 15, textAlign: 'center' }}>
          <Typography className="mono-text" variant="caption" sx={{ color: 'secondary.main', mb: 2, display: 'block', letterSpacing: '0.2em' }}>
            [ 03. STRATEGIC_EVOLUTION ]
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
            The journey to <span className="text-gradient">unification.</span>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: { xs: 3, md: 6 },
                  flexDirection: { xs: 'column', md: 'row' },
                  textAlign: { xs: 'center', md: 'left' },
                  p: 4,
                  borderRadius: 4,
                  border: '1px solid rgba(48, 54, 61, 0.3)',
                  background: 'rgba(22, 27, 34, 0.3)',
                  transition: '0.3s',
                  '&:hover': {
                    background: 'rgba(22, 27, 34, 0.6)',
                    borderColor: phase.color
                  }
                }}
              >
                <Box sx={{ minWidth: '100px' }}>
                  <Typography className="mono-text" sx={{ fontSize: '3rem', fontWeight: 800, opacity: 0.1, color: phase.color }}>
                    {phase.id}
                  </Typography>
                </Box>
                
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>{phase.title}</Typography>
                    <Box sx={{ px: 1.5, py: 0.5, borderRadius: 1, background: `${phase.color}15`, border: `1px solid ${phase.color}30` }}>
                      <Typography className="mono-text" sx={{ fontSize: '0.6rem', color: phase.color, fontWeight: 700 }}>{phase.status}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: '600px', lineHeight: 1.6 }}>
                    {phase.desc}
                  </Typography>
                </Box>

                <Box sx={{ minWidth: '200px', textAlign: 'right', display: { xs: 'none', md: 'block' } }}>
                  <Typography className="mono-text" sx={{ color: 'text.secondary', opacity: 0.4, fontSize: '0.8rem' }}>
                    {phase.label}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ModernEvolution;
