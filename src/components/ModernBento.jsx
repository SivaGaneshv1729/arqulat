import { useState, useRef } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HubIcon from '@mui/icons-material/Hub';
import LanguageIcon from '@mui/icons-material/Language';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const TiltCard = ({ item, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
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
      <Paper
        elevation={0}
        className="glow-border glare-card"
        sx={{
          p: 5,
          height: '100%',
          background: 'rgba(22, 27, 34, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid #30363d',
          borderRadius: 6,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'border-color 0.3s',
          '&:hover': { borderColor: item.color }
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            width: '200px', 
            height: '200px', 
            background: `radial-gradient(circle at top right, ${item.color}20 0%, transparent 70%)`, 
            zIndex: 0 
          }} 
        />
        
        <Box sx={{ position: 'relative', zIndex: 1, transform: "translateZ(50px)" }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
            <Box sx={{ color: item.color, background: `${item.color}15`, p: 2, borderRadius: 3, display: 'flex' }}>
              {item.icon}
            </Box>
            <Typography className="mono-text" sx={{ fontSize: '0.7rem', color: 'text.secondary', opacity: 0.6, letterSpacing: '0.2em' }}>
              {item.label}
            </Typography>
          </Box>
          
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, letterSpacing: '-0.02em' }}>
            {item.title}
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', zIndex: 1, mt: 4, display: 'flex', flexWrap: 'wrap', gap: 1.5, transform: "translateZ(30px)" }}>
          {item.items.map((tech, i) => (
            <Typography 
              key={i} 
              variant="caption" 
              className="mono-text"
              sx={{ 
                color: 'text.secondary', 
                background: 'rgba(255,255,255,0.03)', 
                px: 2, 
                py: 0.8, 
                borderRadius: '6px',
                border: '1px solid rgba(48, 54, 61, 0.5)',
                fontSize: '0.75rem'
              }}
            >
              {tech}
            </Typography>
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
};

const expertise = [
  {
    title: 'AI & Intelligence',
    label: 'NEURAL_CORE',
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    items: ['Deep Learning', 'Agentic Logic', 'LLM_Ops'],
    color: '#2f81f7',
    grid: { xs: 12, md: 7 }
  },
  {
    title: 'System Infra',
    label: 'SCALABLE_OPS',
    icon: <ArchitectureIcon sx={{ fontSize: 40 }} />,
    items: ['Cloud Native', 'Micro-kernels'],
    color: '#8957e5',
    grid: { xs: 12, md: 5 }
  },
  {
    title: 'Visual Tech',
    label: 'RENDER_ENG',
    icon: <HubIcon sx={{ fontSize: 40 }} />,
    items: ['Real-time 3D', 'Spatial UI'],
    color: '#f0883e',
    grid: { xs: 12, md: 5 }
  },
  {
    title: 'Full Stack',
    label: 'PRODUCT_LAYER',
    icon: <LanguageIcon sx={{ fontSize: 40 }} />,
    items: ['Next.js', 'Distributed UI', 'High-speed I/O'],
    color: '#38bdf8',
    grid: { xs: 12, md: 7 }
  }
];

const ModernBento = () => {
  return (
    <Box sx={{ py: 25, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 15, textAlign: 'center' }}>
          <Typography className="mono-text" variant="caption" sx={{ color: 'primary.main', mb: 2, display: 'block', letterSpacing: '0.3em' }}>
            [ 02. TECHNICAL_EXCELLENCE ]
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1, fontSize: { xs: '3rem', md: '4.5rem' } }}>
            Engineered for the <span className="text-gradient">next frontier.</span>
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ perspective: "1000px" }}>
          {expertise.map((item, index) => (
            <Grid item xs={item.grid.xs} md={item.grid.md} key={index}>
              <TiltCard item={item} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ModernBento;
