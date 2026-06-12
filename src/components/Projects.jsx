import { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ClassmateMock = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 2, background: '#0d1117', borderRadius: 2, border: '1px solid #30363d', height: '140px', maxHeight: '140px', overflow: 'hidden', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem' }}>
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', pb: 1, borderBottom: '1px solid #21262d' }}>
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#2f81f7', boxShadow: '0 0 8px #2f81f7' }} />
      <Typography sx={{ fontSize: '0.65rem', color: '#8b949e', fontWeight: 600 }}>CLASSMATE_RAG_AGENT</Typography>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box sx={{ alignSelf: 'flex-end', background: '#21262d', px: 1.5, py: 0.8, borderRadius: '12px 12px 0px 12px', maxWidth: '85%', color: '#c9d1d9', fontSize: '0.7rem' }}>
        Resume score?
      </Box>
      <Box sx={{ alignSelf: 'flex-start', background: '#161b22', border: '1px solid #30363d', px: 1.5, py: 0.8, borderRadius: '12px 12px 12px 0px', maxWidth: '85%', color: '#2f81f7', fontSize: '0.7rem' }}>
        Found 92% match.
      </Box>
    </Box>
  </Box>
);

const HostelSaaSMock = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 2, background: '#0d1117', borderRadius: 2, border: '1px solid #30363d', height: '140px', maxHeight: '140px', overflow: 'hidden', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem' }}>
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', pb: 1, borderBottom: '1px solid #21262d' }}>
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#8957e5', boxShadow: '0 0 8px #8957e5' }} />
      <Typography sx={{ fontSize: '0.65rem', color: '#8b949e', fontWeight: 600 }}>HOSTEL_SAAS_DASHBOARD</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
      <Box sx={{ flex: 1, p: 1, background: '#161b22', border: '1px solid #30363d', borderRadius: 1 }}>
        <Typography sx={{ fontSize: '0.65rem', color: '#8b949e' }}>OCCUPIED</Typography>
        <Typography sx={{ fontSize: '1rem', fontWeight: 800, color: '#3fb950' }}>86%</Typography>
      </Box>
      <Box sx={{ flex: 1, p: 1, background: '#161b22', border: '1px solid #30363d', borderRadius: 1 }}>
        <Typography sx={{ fontSize: '0.65rem', color: '#8b949e' }}>PASSES</Typography>
        <Typography sx={{ fontSize: '1rem', fontWeight: 800, color: '#8957e5' }}>48</Typography>
      </Box>
    </Box>
  </Box>
);

const FutureLabsMock = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 2, background: '#0d1117', borderRadius: 2, border: '1px solid #30363d', height: '140px', maxHeight: '140px', overflow: 'hidden', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem' }}>
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', pb: 1, borderBottom: '1px solid #21262d' }}>
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#238636', boxShadow: '0 0 8px #238636' }} />
      <Typography sx={{ fontSize: '0.65rem', color: '#8b949e', fontWeight: 600 }}>CAMPUS_NETWORK_FEED</Typography>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box sx={{ p: 1, background: '#161b22', border: '1px solid #30363d', borderRadius: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#c9d1d9', fontWeight: 'bold', fontSize: '0.65rem' }}>Neural Mesh Router</span>
          <span style={{ color: '#3fb950', fontSize: '0.55rem' }}>● RND</span>
        </Box>
      </Box>
      <Box sx={{ p: 1, background: '#161b22', border: '1px solid #30363d', borderRadius: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#c9d1d9', fontWeight: 'bold', fontSize: '0.65rem' }}>Smart Attendance</span>
          <span style={{ color: '#2f81f7', fontSize: '0.55rem' }}>● HIRING</span>
        </Box>
      </Box>
    </Box>
  </Box>
);

const projects = [
  {
    repo: 'arqulat/classmate',
    title: 'Classmate',
    description: 'A student-designed RAG assistant integrating academic schedules and career prep using local LLMs for 500+ campus peers.',
    tech: ['React', 'Python', 'RAG', 'LlamaIndex'],
    color: '#2f81f7',
    MockComponent: ClassmateMock
  },
  {
    repo: 'arqulat/hostel-saas',
    title: 'Hostel SaaS',
    description: 'A comprehensive hostel management platform automating room bookings, fee tracking, compliance, and gate passes.',
    tech: ['TypeScript', 'Express', 'Prisma', 'PostgreSQL'],
    color: '#8957e5',
    MockComponent: HostelSaaSMock
  },
  {
    repo: 'arqulat/future-labs',
    title: 'Future Labs',
    description: 'A centralized incubator connecting student developers, mentors, and resources to accelerate peer collaboration.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
    color: '#238636',
    MockComponent: FutureLabsMock
  }
];

// Duplicate projects to ensure infinite scroll loops
const marqueeItems = [...projects, ...projects, ...projects, ...projects];

const Projects = () => {
  const [dragX, setDragX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Translate vertical wheel scroll to horizontal position updates when hovered
  const handleWheel = (e) => {
    if (isHovered && e.deltaY !== 0) {
      setDragX((prev) => {
        let next = prev - e.deltaY * 1.5;
        // Keep bounds aligned
        const limit = -1500;
        if (next > 0) next = 0;
        if (next < limit) next = limit;
        return next;
      });
    }
  };

  return (
    <Box id="projects" sx={{ py: 12, position: 'relative', borderTop: '1px solid #30363d', borderBottom: '1px solid #30363d', background: 'transparent', overflow: 'hidden' }}>
      
      {/* Edge Fades */}
      <Box 
        sx={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 2, 
          pointerEvents: 'none',
          background: 'linear-gradient(to right, #0d1117 0%, transparent 12%, transparent 88%, #0d1117 100%)' 
        }} 
      />

      <Container maxWidth="lg" sx={{ mb: 6, position: 'relative', zIndex: 3 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 3, display: 'inline-block' }}>
            [ 04. CLIENT_PROJECTS ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.04em' }}>
            Shipped <span className="text-gradient">solutions.</span>
          </Typography>
        </Box>
      </Container>

      {/* GPU Accelerated Horizontal Scrolling Container */}
      <Box 
        onWheel={handleWheel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{ 
          display: 'flex', 
          width: '100%', 
          overflow: 'hidden', 
          position: 'relative',
          cursor: isHovered ? 'grab' : 'default',
          '&:active': { cursor: 'grabbing' }
        }}
      >
        <motion.div
          animate={isHovered ? { x: dragX } : { x: ['0%', '-50%'] }}
          transition={isHovered ? { type: 'spring', stiffness: 350, damping: 40 } : { ease: 'linear', duration: 40, repeat: Infinity }}
          drag="x"
          dragConstraints={{ left: -1500, right: 0 }}
          onDrag={(event, info) => {
            setDragX(info.offset.x + dragX);
          }}
          style={{ display: 'flex', gap: '24px', padding: '12px 24px' }}
        >
          {marqueeItems.map((project, index) => {
            const Visual = project.MockComponent;
            return (
              <Box 
                key={index} 
                sx={{ 
                  width: { xs: '300px', md: '360px' }, 
                  flexShrink: 0 
                }}
              >
                <Paper
                  elevation={0}
                  className="glow-border"
                  sx={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '380px',
                    maxHeight: '380px',
                    background: '#161b22',
                    border: '1px solid #30363d',
                    borderRadius: 3,
                    transition: 'border-color 0.3s, transform 0.3s',
                    '&:hover': {
                      borderColor: project.color,
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', height: '100%', gap: 2 }}>
                    
                    {/* Header */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: project.color, boxShadow: `0 0 10px ${project.color}` }} />
                        <Typography className="mono-text" variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.75rem' }}>
                          {project.repo}
                        </Typography>
                      </Box>
                      <Button 
                        variant="text" 
                        size="small" 
                        endIcon={<OpenInNewIcon sx={{ fontSize: '0.85rem !important' }} />} 
                        sx={{ 
                          color: '#8b949e', 
                          fontSize: '0.7rem',
                          minWidth: 'auto',
                          p: 0,
                          '&:hover': { color: '#fff', background: 'transparent' }
                        }}
                      >
                        SOURCE_SNAPSHOT
                      </Button>
                    </Box>

                    {/* Custom UI Mockup serving as Image */}
                    <Box sx={{ height: '150px', maxHeight: '150px', overflow: 'hidden', width: '100%', background: '#0d1117', border: '1px solid #21262d', borderRadius: 2, p: 0.5 }}>
                      <Visual />
                    </Box>

                    {/* Info */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8, height: '85px', maxHeight: '85px', overflow: 'hidden' }}>
                      <Typography variant="h4" sx={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5, fontSize: '0.8rem' }}>
                        {project.description}
                      </Typography>
                    </Box>

                    {/* Tech Stack */}
                    <Box sx={{ display: 'flex', gap: 1.2, flexWrap: 'wrap', mt: 'auto', pt: 1, borderTop: '1px solid #21262d' }}>
                      {project.tech.map((tech, idx) => (
                        <Typography key={idx} className="mono-text" variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '0.65rem', fontWeight: 500 }}>
                          <span style={{ opacity: 0.5, color: project.color }}>#</span>{tech}
                        </Typography>
                      ))}
                    </Box>

                  </Box>
                </Paper>
              </Box>
            );
          })}
        </motion.div>
      </Box>
      
    </Box>
  );
};

export default Projects;
