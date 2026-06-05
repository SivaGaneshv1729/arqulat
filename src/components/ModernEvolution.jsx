import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const phases = [
  { 
    id: '01', 
    title: 'Service Roots', 
    label: 'LEGACY_OPS',
    desc: 'Honing our technical depth through elite-level service delivery for global clients.',
    status: 'COMMIT_STABLE',
    color: '#3fb950'
  },
  { 
    id: '02', 
    title: 'Product Pivot', 
    label: 'INCUBATION_PHASE',
    desc: 'Transitioning our internal methodology from execution-for-hire to product ownership.',
    status: 'BUILD_ACTIVE',
    color: '#2f81f7'
  },
  { 
    id: '03', 
    title: 'Unified Startup', 
    label: 'NEURAC_CORE',
    desc: 'A single, high-output engine building the future of agentic and intelligent software.',
    status: 'DEPLOY_READY',
    color: '#8957e5'
  }
];

const ModernEvolution = () => {
  return (
    <Box sx={{ py: 20, position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 15 }}>
          <Box className="section-label" sx={{ mb: 3 }}>
            [ 02. STRATEGIC_PIPELINE ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            The journey to <span className="text-gradient">unification.</span>
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* GitHub-style Vertical Line */}
          <Box sx={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #30363d 50%, transparent)' }} />
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Box sx={{ display: 'flex', gap: 4, pl: 6, position: 'relative' }}>
                  {/* Node */}
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      left: '11px', 
                      top: '10px', 
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '50%', 
                      background: '#0d1117', 
                      border: `2px solid ${phase.color}`,
                      zIndex: 2,
                      boxShadow: `0 0 10px ${phase.color}40`
                    }} 
                  />
                  
                  <Box 
                    sx={{ 
                      flexGrow: 1,
                      p: 4,
                      background: '#161b22',
                      border: '1px solid #30363d',
                      borderRadius: '12px',
                      transition: '0.3s',
                      '&:hover': {
                        borderColor: phase.color,
                        transform: 'translateX(10px)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography className="font-mono" sx={{ fontSize: '0.8rem', color: phase.color, fontWeight: 700 }}>
                          {phase.id}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 800 }}>{phase.title}</Typography>
                      </Box>
                      <Box sx={{ px: 1.5, py: 0.5, borderRadius: '4px', background: `${phase.color}10`, border: `1px solid ${phase.color}30` }}>
                        <Typography className="font-mono" sx={{ fontSize: '0.6rem', color: phase.color, fontWeight: 700 }}>{phase.status}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '700px', lineHeight: 1.6 }}>
                      {phase.desc}
                    </Typography>
                    <Box sx={{ mt: 3, display: 'flex', gap: 4 }}>
                      <Box>
                        <Typography className="font-mono" sx={{ fontSize: '0.65rem', color: 'text.secondary', opacity: 0.5 }}>LABEL</Typography>
                        <Typography className="font-mono" sx={{ fontSize: '0.75rem', fontWeight: 600 }}>{phase.label}</Typography>
                      </Box>
                      <Box>
                        <Typography className="font-mono" sx={{ fontSize: '0.65rem', color: 'text.secondary', opacity: 0.5 }}>ORIGIN</Typography>
                        <Typography className="font-mono" sx={{ fontSize: '0.75rem', fontWeight: 600 }}>SOURCE_STABLE</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ModernEvolution;
