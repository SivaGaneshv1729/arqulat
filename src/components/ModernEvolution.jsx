import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const phases = [
  { 
    id: '01', 
    title: 'Hackathons & Core R&D', 
    label: 'HACKATHON_ROOTS',
    desc: 'Experimental projects, local coding competitions, and academic depth. Winning campus initiatives and building deep engineering foundations.',
    status: 'COMPLETED',
    color: '#3fb950'
  },
  { 
    id: '02', 
    title: 'Student Agency Launch', 
    label: 'ARQULAT_AGENCY',
    desc: 'Deploying high-quality MVPs, custom RAG integrations, and custom database schemas for early-stage clients and startups.',
    status: 'ACTIVE_NOW',
    color: '#2f81f7'
  },
  { 
    id: '03', 
    title: 'SaaS & Enterprise Scale', 
    label: 'SCALED_PRODUCTS',
    desc: 'Polishing internal tools (like Hostel SaaS) into public products and establishing robust enterprise integrations globally.',
    status: 'ROADMAP',
    color: '#8957e5'
  }
];

const ModernEvolution = () => {
  return (
    <Box id="evolution" sx={{ py: 15, background: 'transparent', position: 'relative', borderBottom: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10 }}>
          <Box className="section-label" sx={{ mb: 2 }}>
            [ 02. EVOLUTION_PIPELINE ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2rem', md: '2.75rem' }, letterSpacing: '-0.04em' }}>
            The journey to <span className="text-gradient">unification.</span>
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* GitHub-style Vertical Line */}
          <Box sx={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #30363d 60%, transparent)' }} />
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Box sx={{ display: 'flex', gap: 4, pl: { xs: 5, sm: 6 }, position: 'relative' }}>
                  {/* Node */}
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      left: '11px', 
                      top: '12px', 
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
                      p: { xs: 3, md: 4 },
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
                        <Typography variant="h5" sx={{ fontWeight: 800, fontSize: '1.25rem' }}>{phase.title}</Typography>
                      </Box>
                      <Box sx={{ px: 1.5, py: 0.5, borderRadius: '4px', background: `${phase.color}10`, border: `1px solid ${phase.color}30` }}>
                        <Typography className="font-mono" sx={{ fontSize: '0.6rem', color: phase.color, fontWeight: 700 }}>{phase.status}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '700px', lineHeight: 1.6, fontSize: { xs: '0.9rem', md: '1rem' } }}>
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
