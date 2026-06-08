import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

const testimonials = [
  { 
    name: 'Alex Rivera', 
    role: 'Senior Systems Architect', 
    text: 'The RAG implementation handled our production load without a single bottleneck. Arqulat\'s engineering rigor and focus on low-latency inference is unmatched.', 
    color: '#2f81f7',
    alias: 'sys_arch'
  },
  { 
    name: 'Dr. Marcus Chen', 
    role: 'AI Research Lead', 
    text: 'Transitioning from academic LLM concepts to a production-ready agentic swarm was seamless. Their expertise in context window management is top-tier.', 
    color: '#8957e5',
    alias: 'ai_research'
  },
  { 
    name: 'Jordan Smith', 
    role: 'Open Source Contributor', 
    text: 'Solid architecture and clean, modular code. It\'s rare to find an engineering collective with this level of systems-level thinking and commit discipline.', 
    color: '#3fb950',
    alias: 'oss_contributor'
  }
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 15, position: 'relative', borderTop: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 2, display: 'inline-block' }}>
            [ 05. PEER_REVIEWS ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.04em' }}>
            Validated by the <span style={{ color: '#8b949e' }}>ecosystem.</span>
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((test, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    position: 'relative',
                    background: '#161b22',
                    border: '1px solid #30363d',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#8b949e',
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <GitHubIcon sx={{ fontSize: 24, color: 'rgba(255,255,255,0.1)', position: 'absolute', top: 20, right: 20 }} />
                  
                  <Typography variant="body1" sx={{ mb: 4, flexGrow: 1, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                    &quot;{test.text}&quot;
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, borderTop: '1px solid rgba(48, 54, 61, 0.5)', pt: 3 }}>
                    <Avatar sx={{ bgcolor: `${test.color}20`, color: test.color, border: `1px solid ${test.color}40`, width: 40, height: 40, fontSize: '1rem', fontWeight: 800 }}>
                      {test.name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>{test.name}</Typography>
                      <Typography className="font-mono" sx={{ fontSize: '0.65rem', color: 'text.secondary', letterSpacing: '0.05em' }}>
                        {test.role.toUpperCase()}
                      </Typography>
                    </Box>
                  </Box>

                  {/* ID Tag */}
                  <Typography className="font-mono" sx={{ position: 'absolute', bottom: 12, right: 12, fontSize: '0.5rem', opacity: 0.3, color: 'text.secondary' }}>
                    #{test.alias}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
