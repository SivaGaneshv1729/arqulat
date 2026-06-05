import PropTypes from 'prop-types';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HubIcon from '@mui/icons-material/Hub';
import LanguageIcon from '@mui/icons-material/Language';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const GitHubCard = ({ item, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", height: '100%' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Box className="github-bento-card" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ transform: "translateZ(30px)" }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
            <Box sx={{ color: item.color, display: 'flex' }}>
              {item.icon}
            </Box>
            <Box className="section-label">
              {item.label}
            </Box>
          </Box>
          
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: 'text.primary', letterSpacing: '-0.03em' }}>
            {item.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6 }}>
            {item.desc}
          </Typography>
        </Box>

        <Box sx={{ transform: "translateZ(20px)", mt: 'auto' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {item.items.map((tech, i) => (
              <Box 
                key={i} 
                sx={{ 
                  color: 'text.secondary', 
                  fontSize: '0.7rem',
                  fontFamily: 'JetBrains Mono',
                  background: 'rgba(255,255,255,0.03)',
                  px: 1,
                  py: 0.3,
                  border: '1px solid rgba(48, 54, 61, 0.5)',
                  borderRadius: '4px'
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

GitHubCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.node,
    items: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const expertise = [
  {
    title: 'Autonomous Intelligence',
    desc: 'Deep learning systems that evolve and reason across complex workflows.',
    label: 'NEURAL_OS',
    icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
    items: ['Agents', 'LLM_Ops', 'Reasoning'],
    color: '#2f81f7',
    grid: { xs: 12, md: 8 }
  },
  {
    title: 'Core Systems',
    desc: 'High-performance distributed infrastructure.',
    label: 'ARCH_ROOT',
    icon: <ArchitectureIcon sx={{ fontSize: 32 }} />,
    items: ['Dist_Sys', 'Spring'],
    color: '#8957e5',
    grid: { xs: 12, md: 4 }
  },
  {
    title: 'Immersive Tech',
    desc: 'The frontier of spatial UI and 3D rendering.',
    label: 'VISUAL_CORE',
    icon: <HubIcon sx={{ fontSize: 32 }} />,
    items: ['Unity', 'Blender'],
    color: '#f0883e',
    grid: { xs: 12, md: 4 }
  },
  {
    title: 'Product Delivery',
    desc: 'Seamless bridging of intelligence and user experience.',
    label: 'SYNC_LAYER',
    icon: <LanguageIcon sx={{ fontSize: 32 }} />,
    items: ['React', 'Next.js', 'Scaling'],
    color: '#38bdf8',
    grid: { xs: 12, md: 8 }
  }
];

const ModernBento = () => {
  return (
    <Box sx={{ py: 20, position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 12 }}>
          <Box className="section-label" sx={{ mb: 3 }}>
            [ 01. CORE_CAPABILITIES ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, maxWidth: '800px', lineHeight: 1.1, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Technical excellence, <br />
            <span style={{ color: '#8b949e' }}>distributed across 4 specialists.</span>
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {expertise.map((item, index) => (
            <Grid item xs={item.grid.xs} md={item.grid.md} key={index}>
              <GitHubCard item={item} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ModernBento;
