import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HubIcon from '@mui/icons-material/Hub';
import LanguageIcon from '@mui/icons-material/Language';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const expertise = [
  {
    title: 'Agentic AI Architecture',
    desc: 'Building multi-tier LLM integrations, like Lattice AI, leveraging MCP servers and local Ollama models.',
    label: 'AI_ML_SYSTEMS',
    icon: <PsychologyIcon sx={{ fontSize: 24 }} />,
    color: '#2f81f7',
    radius: 500,
    duration: 15,
    tiltZ: 45,
    tiltX: 75
  },
  {
    title: 'High-Performance Backends',
    desc: 'Robust architectures using Spring Boot, Node.js, and structured databases to power platforms like Project Loom.',
    label: 'CORE_SOFTWARE',
    icon: <ArchitectureIcon sx={{ fontSize: 24 }} />,
    color: '#8957e5',
    radius: 500,
    duration: 18,
    tiltZ: -45,
    tiltX: 75
  },
  {
    title: 'Hackathon Agility',
    desc: 'Forged in competitions like Bajaj HackRx 6.0. High-velocity prototyping and cost-effective deployments.',
    label: 'HACKER_ROOTS',
    icon: <HubIcon sx={{ fontSize: 24 }} />,
    color: '#f0883e',
    radius: 500,
    duration: 22,
    tiltZ: 0,
    tiltX: 75
  },
  {
    title: 'Modern Canvas UIs',
    desc: 'Developing Figma-like interfaces and highly interactive React viewports for rapid prototyping tools.',
    label: 'SLEEK_FRONTENDS',
    icon: <LanguageIcon sx={{ fontSize: 24 }} />,
    color: '#38bdf8',
    radius: 500,
    duration: 25,
    tiltZ: 90,
    tiltX: 75
  }
];

const OrbitalNode = ({ item, isAnyHovered, onHover, onLeave }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleEnter = () => {
    setIsHovered(true);
    onHover();
  };

  const handleLeave = () => {
    setIsHovered(false);
    onLeave();
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: item.radius,
        height: item.radius,
        // Static 3D tilt for the orbital ring (Helium atom style)
        transform: `translate(-50%, -50%) rotateZ(${item.tiltZ}deg) rotateX(${item.tiltX}deg)`,
        transformStyle: 'preserve-3d',
        border: `2px solid ${item.color}30`,
        borderRadius: '50%',
        zIndex: isHovered ? 10 : 1,
        pointerEvents: 'none'
      }}
    >
      {/* Rotating Track */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          animation: `orbit-rotate-pure ${item.duration}s linear infinite`,
          animationPlayState: isAnyHovered ? 'paused' : 'running',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Electron Position */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            marginLeft: '-24px',
            marginTop: '-24px',
            pointerEvents: 'auto',
            animation: `orbit-counter-rotate-pure ${item.duration}s linear infinite`,
            animationPlayState: isAnyHovered ? 'paused' : 'running',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Static Counter-Tilt to keep icon flat to screen */}
          <Box
            sx={{
              transform: `rotateX(${-item.tiltX}deg) rotateZ(${-item.tiltZ}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <motion.div
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{ position: 'relative' }}
            >
              {/* Collapsed Icon State */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: '#0d1117',
                  border: `2px solid ${item.color}`,
                  color: item.color,
                  boxShadow: `0 0 20px ${item.color}60`,
                  cursor: 'pointer',
                  zIndex: 2,
                  position: 'relative'
                }}
              >
                {item.icon}
              </Box>

              {/* Expanded Detail State */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -160 }}
                    animate={{ opacity: 1, scale: 1, x: -160 }}
                    exit={{ opacity: 0, scale: 0.8, x: -160 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: '120%',
                      width: '320px',
                      zIndex: 3,
                      transformOrigin: 'top center'
                    }}
                  >
                <Box
                  sx={{
                    background: 'rgba(22, 27, 34, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${item.color}`,
                    borderRadius: '16px',
                    p: 3,
                    boxShadow: `0 20px 40px -10px ${item.color}40`
                  }}
                >
                  <Typography className="mono-text" sx={{ color: item.color, fontSize: '0.65rem', fontWeight: 700, mb: 1, letterSpacing: '0.1em' }}>
                    {item.label}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 800, mb: 1.5, fontSize: '1rem', lineHeight: 1.2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.5, fontSize: '0.85rem' }}>
                    {item.desc}
                  </Typography>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ModernBento = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <Box id="capabilities" sx={{ py: { xs: 8, md: 10 }, background: '#0d1117', position: 'relative', borderBottom: '1px solid #30363d', overflow: 'hidden' }}>
      {/* Global styles for the orbit animations */}
      <style>
        {`
          @keyframes orbit-rotate-pure {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes orbit-counter-rotate-pure {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
        `}
      </style>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 3, display: 'inline-block' }}>
            [ 01. CAPABILITIES_INDEX ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.1, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.04em' }}>
            Architected for execution. <br />
            Built for <span className="text-gradient">intelligence.</span>
          </Typography>
        </Box>
      </Container>

      {/* Orbital System Container */}
      <Box sx={{ position: 'relative', height: { xs: '450px', md: '550px' }, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Central 3D Globe / Atom Core */}
        <Box 
          sx={{ 
            position: 'relative', 
            width: 160, 
            height: 160, 
            zIndex: 0,
            perspective: '1000px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Outer Ambient Glow */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: '250px', height: '250px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #2f81f7 0%, transparent 70%)',
              filter: 'blur(40px)',
              zIndex: -1
            }}
          />

          {/* 3D Rotating Atom / Earth Rings */}
          <motion.div
            animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              width: '100%', height: '100%',
              position: 'absolute',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Latitude / Longitude lines (Earth) */}
            {[...Array(6)].map((_, i) => (
              <Box
                key={`lon-${i}`}
                sx={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  border: '1px solid rgba(47, 129, 247, 0.4)',
                  borderRadius: '50%',
                  transform: `rotateY(${i * 30}deg)`,
                  boxShadow: 'inset 0 0 15px rgba(47, 129, 247, 0.2)'
                }}
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <Box
                key={`lat-${i}`}
                sx={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  border: '1px solid rgba(137, 87, 229, 0.3)',
                  borderRadius: '50%',
                  transform: `rotateX(${i * 30}deg)`,
                }}
              />
            ))}

            {/* Connecting Nodes (Atom network intersections) */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`node-${i}`}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                style={{
                  position: 'absolute',
                  width: 6, height: 6,
                  background: '#fff',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px #fff',
                  top: '50%', left: '50%',
                  transform: `translate(-50%, -50%) rotateX(${i * 45}deg) translateZ(80px)`
                }}
              />
            ))}
          </motion.div>

          {/* Inner Solid Core */}
          <Box 
            sx={{ 
              width: 50, height: 50, borderRadius: '50%', 
              background: 'radial-gradient(circle, #fff 0%, #2f81f7 40%, #0d1117 100%)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 30px #2f81f7',
              zIndex: 2,
              position: 'relative'
            }}
          />
        </Box>

        {/* Orbiting Capabilities */}
        {expertise.map((item, index) => (
          <OrbitalNode 
            key={index} 
            item={item} 
            isAnyHovered={hoveredNode !== null}
            onHover={() => setHoveredNode(index)}
            onLeave={() => setHoveredNode(null)}
          />
        ))}

      </Box>
    </Box>
  );
};

export default ModernBento;
