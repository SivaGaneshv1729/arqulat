import { Box, Container, Typography, alpha } from '@mui/material';
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
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 2, display: 'inline-block' }}>
            [ 02. EVOLUTION_PIPELINE ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.04em' }}>
            The journey to <span className="text-gradient">unification.</span>
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: { xs: 15, md: 20 } }}>
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{
                position: 'sticky',
                top: 150 + (index * 20),
                zIndex: index + 1,
              }}
            >
              <Box 
                sx={{ 
                  position: 'relative',
                  p: { xs: 4, md: 6, lg: 8 },
                  background: 'rgba(22, 27, 34, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid #30363d',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  overflow: 'hidden',
                  transition: '0.3s',
                  '&:hover': {
                    borderColor: phase.color,
                    transform: 'translateY(-5px)',
                    boxShadow: `0 20px 40px ${alpha(phase.color, 0.1)}`
                  }
                }}
              >
                {/* Big Background Number */}
                <Typography 
                  sx={{ 
                    position: 'absolute',
                    right: -20,
                    bottom: -40,
                    fontSize: { xs: '12rem', md: '22rem' },
                    fontWeight: 900,
                    color: phase.color,
                    opacity: 0.03,
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                    zIndex: 0,
                    fontFamily: 'monospace'
                  }}
                >
                  {phase.id}
                </Typography>

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4, flexWrap: 'wrap', gap: 2 }}>
                    <Box>
                      <Typography className="font-mono" sx={{ fontSize: '1rem', color: phase.color, fontWeight: 700, mb: 1 }}>
                        PHASE_{phase.id}
                      </Typography>
                      <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '1.75rem', md: '3rem' }, letterSpacing: '-0.02em' }}>
                        {phase.title}
                      </Typography>
                    </Box>
                    <Box sx={{ px: 2, py: 0.75, borderRadius: '6px', background: `${phase.color}15`, border: `1px solid ${phase.color}30` }}>
                      <Typography className="font-mono" sx={{ fontSize: '0.75rem', color: phase.color, fontWeight: 700 }}>{phase.status}</Typography>
                    </Box>
                  </Box>

                  <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '800px', lineHeight: 1.7, fontSize: { xs: '1rem', md: '1.25rem' }, mb: 4 }}>
                    {phase.desc}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: { xs: 4, md: 10 }, borderTop: '1px solid #30363d', pt: 4 }}>
                    <Box>
                      <Typography className="font-mono" sx={{ fontSize: '0.7rem', color: 'text.secondary', opacity: 0.6, mb: 0.5 }}>IDENTIFIER</Typography>
                      <Typography className="font-mono" sx={{ fontSize: '0.9rem', fontWeight: 600, color: 'primary.main' }}>{phase.label}</Typography>
                    </Box>
                    <Box>
                      <Typography className="font-mono" sx={{ fontSize: '0.7rem', color: 'text.secondary', opacity: 0.6, mb: 0.5 }}>PROTOCOL</Typography>
                      <Typography className="font-mono" sx={{ fontSize: '0.9rem', fontWeight: 600 }}>SOURCE_STABLE_V2</Typography>
                    </Box>
                  </Box>
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
