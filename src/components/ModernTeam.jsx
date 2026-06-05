import { Box, Container, Typography, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const specialists = [
  { 
    name: 'SIVA_GANESH', 
    role: 'AI & AGENTS LEAD', 
    bio: 'Engineering the next generation of autonomous reasoning systems and agentic swarms.',
    tech: ['PyTorch', 'LangChain', 'OpenAI'],
    color: '#2f81f7',
    alias: 'core_intel'
  },
  { 
    name: 'MEMBER_02', 
    role: 'FULL STACK ARCHITECT', 
    bio: 'Bridging high-scale backends with immersive, performant user interfaces.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    color: '#8957e5',
    alias: 'app_sync'
  },
  { 
    name: 'MEMBER_03', 
    role: 'SYSTEM ARCHITECT', 
    bio: 'Designing distributed infrastructure for global scalability and high availability.',
    tech: ['K8s', 'Spring Boot', 'Kafka'],
    color: '#38bdf8',
    alias: 'infra_root'
  },
  { 
    name: 'MEMBER_04', 
    role: 'GAMING & 3D LEAD', 
    bio: 'Pushing the boundaries of real-time 3D rendering and spatial UI design.',
    tech: ['Unity', 'C#', 'Blender'],
    color: '#f0883e',
    alias: 'render_eng'
  }
];

const ModernTeam = () => {
  return (
    <Box sx={{ py: 25, position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 12 }}>
          <Box className="section-label" sx={{ mb: 3 }}>
            [ 03. CORE_CONTRIBUTORS ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            The elite squad <br />
            <span style={{ color: '#8b949e' }}>behind the production.</span>
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {specialists.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box 
                  sx={{ 
                    p: 4,
                    height: '100%',
                    background: '#0d1117',
                    border: '1px solid #30363d',
                    borderRadius: '16px',
                    transition: '0.3s',
                    position: 'relative',
                    '&:hover': {
                      borderColor: member.color,
                      transform: 'translateY(-8px)',
                      background: 'rgba(48, 54, 61, 0.1)'
                    }
                  }}
                >
                  <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                    <Typography className="font-mono" sx={{ fontSize: '0.6rem', color: 'text.secondary', opacity: 0.4 }}>
                      {member.alias}
                    </Typography>
                  </Box>
                  
                  <Avatar 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      mb: 4, 
                      background: '#161b22', 
                      border: `1px solid #30363d`,
                      color: member.color,
                      fontWeight: 800,
                      fontSize: '1.5rem',
                      fontFamily: 'JetBrains Mono'
                    }}
                  >
                    {member.name[0]}
                  </Avatar>
                  
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{member.name}</Typography>
                  <Typography className="font-mono" sx={{ color: member.color, fontSize: '0.65rem', fontWeight: 800, mb: 4, display: 'block', letterSpacing: '0.1em' }}>
                    {member.role}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7, fontSize: '0.85rem' }}>
                    {member.bio}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {member.tech.map((t, i) => (
                      <Box key={i} sx={{ border: '1px solid rgba(48, 54, 61, 0.5)', px: 1, py: 0.2, borderRadius: '4px' }}>
                        <Typography className="font-mono" sx={{ fontSize: '0.6rem', color: 'text.secondary' }}>
                          {t}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ModernTeam;
