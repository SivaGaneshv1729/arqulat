import { Box, Container, Typography, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const specialists = [
  { 
    name: 'Venkat Ganesh', 
    role: 'AI & COGNITIVE LEAD', 
    bio: 'Architecting multi-agent swarm frameworks and context orchestration strategies.',
    tech: ['PyTorch', 'LangChain', 'OpenAI'],
    color: '#2f81f7',
    alias: 'core_intel'
  },
  { 
    name: 'Siva Ganesh', 
    role: 'CORE ARCHITECT', 
    bio: 'Bridging distributed computation backends with high-performance real-time frontends.',
    tech: ['Next.js', 'Go', 'PostgreSQL'],
    color: '#8957e5',
    alias: 'app_sync'
  },
  { 
    name: 'Sri Ram', 
    role: 'INFRASTRUCTURE LEAD', 
    bio: 'Constructing containerized high-concurrency clusters and automated deployment layers.',
    tech: ['K8s', 'Docker', 'Redis'],
    color: '#38bdf8',
    alias: 'infra_root'
  },
  { 
    name: 'Veeranna', 
    role: 'SPATIAL & 3D LEAD', 
    bio: 'Creating interactive 3D simulations and photorealistic spatial canvases.',
    tech: ['Three.js', 'GLSL', 'Blender'],
    color: '#f0883e',
    alias: 'render_eng'
  }
];

const ModernTeam = () => {
  return (
    <Box id="collective" sx={{ py: 10, position: 'relative', borderBottom: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 2, display: 'inline-block' }}>
            [ 03. CORE_ENGINEERS ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '2.75rem' }, letterSpacing: '-0.04em' }}>
            The collective <br />
            <span style={{ color: '#8b949e' }}>behind the production.</span>
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexWrap: { xs: 'wrap', md: 'nowrap' }, 
            gap: 3 
          }}
        >
          {specialists.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box 
                sx={{ 
                  p: 2.5,
                  minWidth: '240px',
                  background: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  transition: '0.2s',
                  '&:hover': {
                    borderColor: member.color,
                    transform: 'translateY(-4px)',
                    background: 'rgba(48, 54, 61, 0.1)'
                  }
                }}
              >
                <Avatar 
                  sx={{ 
                    width: 48, 
                    height: 48, 
                    background: '#161b22', 
                    border: `1px solid ${member.color}40`,
                    color: member.color,
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    fontFamily: 'JetBrains Mono'
                  }}
                >
                  {member.name[0]}
                </Avatar>
                
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.2 }}>
                    {member.name}
                  </Typography>
                  <Typography className="font-mono" sx={{ color: member.color, fontSize: '0.55rem', fontWeight: 800, mt: 0.5, letterSpacing: '0.1em' }}>
                    {member.role}
                  </Typography>
                  <Typography className="font-mono" sx={{ color: 'text.secondary', fontSize: '0.55rem', mt: 0.5 }}>
                    ID: {member.alias}
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

export default ModernTeam;
