import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import MemoryIcon from '@mui/icons-material/Memory';
import HubIcon from '@mui/icons-material/Hub';
import LanguageIcon from '@mui/icons-material/Language';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PsychologyIcon from '@mui/icons-material/Psychology';

const services = [
  {
    title: 'AI & Machine Learning',
    description: 'Deep expertise in neural networks, LLMs, and intelligent automation systems.',
    icon: <PsychologyIcon sx={{ fontSize: 40, color: '#2563EB' }} />,
  },
  {
    title: 'Agentic Workflows',
    description: 'Designing autonomous agents and complex multi-agent orchestration pipelines.',
    icon: <HubIcon sx={{ fontSize: 40, color: '#38BDF8' }} />,
  },
  {
    title: 'Full Stack Excellence',
    description: 'End-to-end development with modern frameworks and scalable architectures.',
    icon: <LanguageIcon sx={{ fontSize: 40, color: '#818CF8' }} />,
  },
  {
    title: 'System Architecture',
    description: 'Robust, distributed systems designed for high availability and performance.',
    icon: <ArchitectureIcon sx={{ fontSize: 40, color: '#0EA5E9' }} />,
  },
  {
    title: 'Enterprise Java',
    description: 'High-performance backend systems powered by Spring Boot and microservices.',
    icon: <MemoryIcon sx={{ fontSize: 40, color: '#60A5FA' }} />,
  },
  {
    title: 'Game Tech & 3D',
    description: 'Immersive experiences built with Blender, Unity, and real-time rendering.',
    icon: <SportsEsportsIcon sx={{ fontSize: 40, color: '#F0883E' }} />,
  }
];

const Services = () => {
  return (
    <Box sx={{ py: 15, position: 'relative', borderTop: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10 }}>
          <Typography variant="body1" color="primary" className="mono-text" sx={{ mb: 2, fontWeight: 600 }}>
            {/* 02. CORE_DOMAINS */}
          </Typography>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
            Deep expertise across <span style={{ color: '#8b949e' }}>the entire tech stack.</span>
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  className="glow-border"
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    background: 'transparent',
                    border: '1px solid #30363d',
                    borderRadius: 2,
                    transition: 'all 0.2s',
                    '&:hover': {
                      background: '#161b22',
                      borderColor: '#8b949e'
                    }
                  }}
                >
                  <Box sx={{ 
                    mb: 3, 
                    color: 'primary.main',
                  }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {service.description}
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

export default Services;
