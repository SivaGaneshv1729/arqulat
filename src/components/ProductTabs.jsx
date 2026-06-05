import { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';

const tabs = [
  { 
    id: 'intel', 
    label: 'INTELLIGENCE', 
    icon: <PsychologyIcon />, 
    title: 'Autonomous Neural Agents', 
    desc: 'Deploy self-optimizing agent swarms that handle complex workflows with human-level reasoning.',
    color: '#2f81f7',
    terminal: [
      '> Initializing Agent_Core.v2...',
      '> Mapping neural nodes...',
      '> Connection stable. Reasoning active.'
    ]
  },
  { 
    id: 'infra', 
    label: 'INFRASTRUCTURE', 
    icon: <StorageIcon />, 
    title: 'Distributed Compute Core', 
    desc: 'Scalable system architecture designed for high-concurrency intelligence operations.',
    color: '#8957e5',
    terminal: [
      '> Scaling compute clusters...',
      '> Allocating 128TB neural RAM...',
      '> Infra ready for high-load.'
    ]
  },
  { 
    id: 'render', 
    label: 'VISUALS', 
    icon: <TerminalIcon />, 
    title: 'Immersive Spatial UI', 
    desc: 'Real-time 3D rendering engines for spatial computing and high-fidelity data visualization.',
    color: '#f0883e',
    terminal: [
      '> Booting Render_Engine...',
      '> Loading Blender assets...',
      '> Frames synced at 120fps.'
    ]
  }
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeData = tabs.find(t => t.id === activeTab);

  return (
    <Box sx={{ py: 25, background: 'linear-gradient(to bottom, #0d1117, #0a0d12)' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 12, textAlign: 'center' }}>
          <Typography className="mono-text" variant="caption" sx={{ color: 'secondary.main', mb: 2, display: 'block', letterSpacing: '0.4em' }}>
            [ NEURAC_LAB_STATIONS ]
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, letterSpacing: '-0.04em' }}>
            A new standard for <span className="text-gradient">production.</span>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: { xs: 2, md: 4 }, mb: 8 }}>
          {tabs.map((tab) => (
            <Box
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              sx={{
                px: 4,
                py: 2,
                cursor: 'pointer',
                borderRadius: '40px',
                border: '1px solid',
                borderColor: activeTab === tab.id ? tab.color : 'rgba(48, 54, 61, 0.5)',
                background: activeTab === tab.id ? `${tab.color}10` : 'transparent',
                color: activeTab === tab.id ? 'text.primary' : 'text.secondary',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                '&:hover': {
                  borderColor: tab.color,
                  background: `${tab.color}05`
                }
              }}
            >
              <Box sx={{ display: 'flex', color: activeTab === tab.id ? tab.color : 'inherit' }}>
                {tab.icon}
              </Box>
              <Typography className="mono-text" sx={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                {tab.label}
              </Typography>
            </Box>
          ))}
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 8 },
                background: 'rgba(22, 27, 34, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid #30363d',
                borderRadius: 8,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Grid container spacing={8} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, lineHeight: 1.1 }}>
                      {activeData.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 6, fontWeight: 400, lineHeight: 1.6, opacity: 0.8 }}>
                      {activeData.desc}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      sx={{ 
                        borderRadius: '30px', 
                        borderColor: activeData.color, 
                        color: activeData.color,
                        px: 4,
                        py: 1.5,
                        fontWeight: 700,
                        '&:hover': { background: `${activeData.color}10`, borderColor: activeData.color }
                      }}
                    >
                      Documentation →
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box 
                    sx={{ 
                      background: '#0d1117', 
                      borderRadius: 4, 
                      p: 4, 
                      border: '1px solid #30363d',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.9rem',
                      color: '#c9d1d9',
                      boxShadow: `0 40px 100px -20px ${activeData.color}20`
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 1.5, mb: 4 }}>
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {activeData.terminal.map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + (i * 0.2) }}
                        >
                          <Typography className="mono-text" sx={{ fontSize: '0.85rem', color: i === 0 ? activeData.color : 'text.primary' }}>
                            {line}
                          </Typography>
                        </motion.div>
                      ))}
                      <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        style={{ width: '8px', height: '18px', background: activeData.color, marginTop: '4px' }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default ProductTabs;
