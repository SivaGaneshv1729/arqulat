import { Box, Container, Typography, Avatar, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';

const specialists = [
  { 
    name: 'Venkat Ganesh', 
    role: 'AI & COGNITIVE LEAD', 
    bio: 'Student AI Lead specializing in LLMs, deep learning, local model deployment, and RAG pipelines. Passionate about bringing state-of-the-art research into practical client builds.',
    image: 'https://github.com/github.png', // Placeholder for actual image
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      portfolio: 'https://portfolio.com',
      mail: 'mailto:venkat@arqulat.com'
    },
    tech: ['PyTorch', 'LangChain', 'OpenAI'],
    color: '#2f81f7',
    alias: 'core_intel'
  },
  { 
    name: 'Siva Ganesh', 
    role: 'CORE ARCHITECT', 
    bio: 'Student Core Architect bridging distributed computation backends with high-performance client frontends. Expert in scaling MERN & TypeScript ecosystems.',
    image: 'https://github.com/github.png',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      portfolio: 'https://portfolio.com',
      mail: 'mailto:siva@arqulat.com'
    },
    tech: ['Next.js', 'Go', 'PostgreSQL'],
    color: '#8957e5',
    alias: 'app_sync'
  },
  { 
    name: 'Sri Ram', 
    role: 'INFRASTRUCTURE LEAD', 
    bio: 'Student Infrastructure Lead focusing on automated deployment pipelines, containerized systems, and secure server networking.',
    image: 'https://github.com/github.png',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      portfolio: 'https://portfolio.com',
      mail: 'mailto:sriram@arqulat.com'
    },
    tech: ['K8s', 'Docker', 'Redis'],
    color: '#38bdf8',
    alias: 'infra_root'
  },
  { 
    name: 'Veeranna', 
    role: 'SPATIAL & 3D LEAD', 
    bio: 'Student Creative Lead designing interactive client dashboards, responsive layouts, and modern frontends.',
    image: 'https://github.com/github.png',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      portfolio: 'https://portfolio.com',
      mail: 'mailto:veeranna@arqulat.com'
    },
    tech: ['Three.js', 'GLSL', 'Blender'],
    color: '#f0883e',
    alias: 'render_eng'
  }
];

const ModernTeam = () => {
  return (
    <Box id="collective" sx={{ py: 15, position: 'relative', borderBottom: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 2, display: 'inline-block' }}>
            [ 03. CORE_ENGINEERS ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.04em' }}>
            The technical backbone. <br />
            <span style={{ color: '#8b949e' }}>Engineered for excellence.</span>
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 3,
            flexWrap: { xs: 'wrap', lg: 'nowrap' },
            width: '100%'
          }}
        >
          {specialists.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ flex: 1, minWidth: '260px', maxWidth: '320px' }}
            >
              <Box 
                sx={{ 
                  p: 4,
                  height: '100%',
                  background: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: member.color,
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px -20px ${member.color}40`,
                    '& .member-image': {
                      borderColor: member.color,
                      boxShadow: `0 0 20px ${member.color}40`
                    }
                  }
                }}
              >
                  <Avatar 
                    src={member.image}
                    className="member-image"
                    sx={{ 
                      width: 100, 
                      height: 100, 
                      mb: 3,
                      background: '#0d1117', 
                      border: `2px solid #30363d`,
                      transition: '0.3s'
                    }}
                  />
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.25rem', mb: 0.5 }}>
                      {member.name}
                    </Typography>
                    <Typography className="font-mono" sx={{ color: member.color, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em' }}>
                      {member.role}
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, fontSize: '0.85rem', lineHeight: 1.6, flexGrow: 1 }}>
                    {member.bio}
                  </Typography>

                  <Stack direction="row" spacing={1}>
                    <IconButton 
                      size="small" 
                      href={member.links.github} 
                      target="_blank"
                      sx={{ color: 'text.secondary', '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.05)' } }}
                    >
                      <GitHubIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      href={member.links.linkedin} 
                      target="_blank"
                      sx={{ color: 'text.secondary', '&:hover': { color: '#0077b5', background: 'rgba(0,119,181,0.05)' } }}
                    >
                      <LinkedInIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      href={member.links.portfolio} 
                      target="_blank"
                      sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', background: 'rgba(47, 129, 247, 0.05)' } }}
                    >
                      <LanguageIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      href={member.links.mail}
                      sx={{ color: 'text.secondary', '&:hover': { color: '#f0883e', background: 'rgba(240,136,62,0.05)' } }}
                    >
                      <EmailIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Stack>

                  {/* ID Tag in Corner */}
                  <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
                    <Typography className="font-mono" sx={{ color: 'text.secondary', fontSize: '0.5rem', opacity: 0.4 }}>
                      #{member.alias}
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
