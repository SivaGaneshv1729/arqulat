import { useState } from 'react';
import { Box, Container, Typography, Avatar, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  { 
    name: 'Prof. K. Srinivasan', 
    role: 'HOD, Computer Science', 
    username: '@srinivasan_cs',
    text: 'The Classmate RAG pipeline resolved student career inquiries seamlessly. Exceptional software craftsmanship.', 
    color: '#2f81f7',
    date: 'May 14',
    region: 'APAC // CHENNAI_NODE',
    latLong: '13.0827° N, 80.2707° E',
    mapX: '72%',
    mapY: '62%',
    floatDelay: 0,
    reactions: '👍 12'
  },
  { 
    name: 'Rohan Mehta', 
    role: 'Co-Founder, QuickRent', 
    username: '@rohan_quickrent',
    text: 'Hostel SaaS automated room booking and gate security instantly. Exceptional agility and backend design.', 
    color: '#8957e5',
    date: 'Jun 02',
    region: 'AMER // SF_NODE',
    latLong: '37.7749° N, 122.4194° W',
    mapX: '15%',
    mapY: '35%',
    floatDelay: 1.5,
    reactions: '👍 9'
  },
  { 
    name: 'Devika Nair', 
    role: 'Lead Organizer, Campus Hackfest', 
    username: '@devika_nair',
    text: 'Future Labs matching portal ran without a single lag. Highly responsive frontend layouts, clean code.', 
    color: '#3fb950',
    date: 'May 28',
    region: 'EMEA // LONDON_NODE',
    latLong: '51.5074° N, 0.1278° W',
    mapX: '48%',
    mapY: '25%',
    floatDelay: 3,
    reactions: '👍 15 ● 🚀 8'
  }
];

const CurvedLine = ({ fromX, fromY, toX, toY, color, isHovered }) => {
  // Calculate a control point for the quadratic Bezier curve
  // We want it to curve towards the center (50, 50)
  const cx = 50;
  const cy = 50;
  
  // Use a control point that is halfway between the points but pulled towards the center
  const ctrlX = (fromX + toX) / 2;
  const ctrlY = (fromY + toY) / 2;
  
  // Actually, to get a nice arc, let's just use the center as the control point
  const path = `M ${fromX} ${fromY} Q ${cx} ${fromY} ${toX} ${toY}`;

  return (
    <motion.path
      d={path}
      fill="none"
      stroke={isHovered ? color : 'rgba(48, 54, 61, 0.3)'}
      strokeWidth={isHovered ? 2 : 1}
      strokeDasharray="4,4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: 1, 
        opacity: 1,
        strokeDashoffset: [0, -20]
      }}
      transition={{ 
        pathLength: { duration: 1.5, ease: "easeInOut" },
        strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" },
        opacity: { duration: 0.5 }
      }}
      style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
    />
  );
};

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box sx={{ py: 12, position: 'relative', borderTop: '1px solid #30363d', borderBottom: '1px solid #30363d', background: '#0d1117', overflow: 'hidden' }}>
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 3, display: 'inline-block' }}>
            [ 05. GLOBAL_ECOSYSTEM ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.04em' }}>
            Trusted across the <span style={{ color: '#8b949e' }}>digital frontier.</span>
          </Typography>
        </Box>
      </Container>

      {/* World Map & Network Canvas */}
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '1100px', 
          height: '500px', 
          mx: 'auto',
          display: { xs: 'none', md: 'block' } 
        }}
      >
        {/* SVG Background Layer: World Map & Connections */}
        <svg 
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          <defs>
            <pattern id="worldDotPattern" x="0" y="0" width="0.8" height="1.6" patternUnits="userSpaceOnUse">
              <circle cx="0.4" cy="0.8" r="0.25" fill="#30363d" />
            </pattern>
          </defs>

          {/* Simplified World Map Paths (Dotted) */}
          <g fill="url(#worldDotPattern)" opacity="0.6">
            {/* North America */}
            <path d="M10,20 L25,20 L30,35 L22,50 L12,45 Z" />
            {/* South America */}
            <path d="M23,52 L32,52 L35,70 L28,90 L22,70 Z" />
            {/* Europe & Africa */}
            <path d="M45,15 L58,15 L60,30 L48,35 Z" />
            <path d="M46,38 L58,38 L62,55 L58,85 L48,85 L42,55 Z" />
            {/* Asia */}
            <path d="M60,10 L92,10 L95,45 L75,65 L60,45 Z" />
            {/* Australia */}
            <path d="M80,68 L92,68 L94,85 L82,85 Z" />
          </g>

          {/* Curved Connections to Central Core (50, 50) */}
          {testimonials.map((test, index) => (
            <CurvedLine
              key={index}
              fromX={parseFloat(test.mapX)}
              fromY={parseFloat(test.mapY)}
              toX={50}
              toY={50}
              color={test.color}
              isHovered={hoveredIndex === index}
            />
          ))}
        </svg>

        {/* Central Hub Node (ARQULAT CORE) */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            zIndex: 3
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Box 
              sx={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                background: '#0d1117', 
                border: '2px solid #30363d',
                boxShadow: '0 0 30px rgba(47, 129, 247, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <Box sx={{ 
                position: 'absolute', 
                inset: -10, 
                borderRadius: '50%', 
                border: '1px dashed rgba(47, 129, 247, 0.3)',
                animation: 'spin 15s linear infinite' 
              }} />
              <Typography className="mono-text" sx={{ color: 'primary.main', fontSize: '0.6rem', fontWeight: 800, mb: 0.5 }}>
                CORE
              </Typography>
              <Typography sx={{ fontWeight: 900, color: 'text.primary', fontSize: '0.85rem' }}>
                ARQULAT
              </Typography>
            </Box>
          </motion.div>
        </Box>

        {/* Profile Markers */}
        {testimonials.map((test, index) => {
          const isTargeted = hoveredIndex === index;
          
          let bubbleStyle = {
            position: 'absolute',
            width: '280px',
            background: '#161b22',
            border: `1px solid ${test.color}`,
            borderRadius: 3,
            opacity: isTargeted ? 1 : 0,
            visibility: isTargeted ? 'visible' : 'hidden',
            pointerEvents: isTargeted ? 'auto' : 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 100,
            boxShadow: `0 10px 30px -10px ${test.color}40`
          };

          // Position bubble relative to marker
          if (parseFloat(test.mapX) < 50) {
            bubbleStyle.left = '40px';
          } else {
            bubbleStyle.right = '40px';
          }
          bubbleStyle.top = '-20px';

          return (
            <Box
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                position: 'absolute',
                top: test.mapY,
                left: test.mapX,
                transform: 'translate(-50%, -50%)',
                zIndex: isTargeted ? 10 : 2
              }}
            >
              <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Marker Pulse */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: test.color,
                    zIndex: -1
                  }}
                />
                
                {/* Profile Avatar Node */}
                <Avatar 
                  sx={{ 
                    bgcolor: '#0d1117', 
                    border: isTargeted ? `2px solid ${test.color}` : `1px solid rgba(48, 54, 61, 0.8)`, 
                    width: 44, 
                    height: 44, 
                    boxShadow: isTargeted ? `0 0 15px ${test.color}60` : 'none',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={test.color} strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </Avatar>

                <Typography 
                  className="font-mono" 
                  sx={{ 
                    mt: 1, 
                    fontSize: '0.55rem', 
                    fontWeight: 700, 
                    color: isTargeted ? test.color : 'text.secondary',
                    whiteSpace: 'nowrap',
                    background: 'rgba(13, 17, 23, 0.8)',
                    px: 1, borderRadius: 1
                  }}
                >
                  {test.region.split(' // ')[1]}
                </Typography>

                {/* Review Bubble */}
                <Paper elevation={0} sx={bubbleStyle}>
                  <Box sx={{ px: 2, py: 1, borderBottom: '1px solid #30363d', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0d1117' }}>
                    <Stack>
                      <Typography sx={{ fontWeight: 800, fontSize: '0.7rem', color: 'text.primary' }}>{test.username}</Typography>
                      <Typography className="font-mono" sx={{ fontSize: '0.45rem', color: 'text.secondary' }}>{test.latLong}</Typography>
                    </Stack>
                    <Box sx={{ px: 0.8, py: 0.1, borderRadius: '4px', border: '1px solid #2ea043', background: 'rgba(46, 160, 67, 0.1)', color: '#3fb950', fontSize: '0.5rem', fontWeight: 700 }}>
                      VERIFIED
                    </Box>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2" sx={{ fontSize: '0.75rem', lineHeight: 1.4, mb: 1.5, color: 'text.secondary', fontStyle: 'italic' }}>
                      "{test.text}"
                    </Typography>
                    <Box sx={{ pt: 1, borderTop: '1px solid #21262d', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 800, fontSize: '0.7rem' }}>{test.name}</Typography>
                        <Typography sx={{ fontSize: '0.55rem', color: 'text.secondary' }}>{test.role}</Typography>
                      </Box>
                      <Typography sx={{ fontSize: '0.6rem', color: '#8b949e' }}>{test.reactions}</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Mobile Version (Simplified List) */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, px: 2 }}>
        <Stack spacing={2}>
          {testimonials.map((test, index) => (
            <Paper key={index} sx={{ p: 2, background: '#161b22', border: '1px solid #30363d', borderRadius: 2 }}>
              <Stack direction="row" spacing={2} sx={{ mb: 1.5 }}>
                <Avatar sx={{ bgcolor: `${test.color}20`, color: test.color, width: 32, height: 32, fontSize: '0.8rem' }}>{test.name[0]}</Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: '0.8rem' }}>{test.name}</Typography>
                  <Typography sx={{ fontSize: '0.6rem', color: 'text.secondary' }}>{test.role}</Typography>
                </Box>
              </Stack>
              <Typography variant="body2" sx={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'text.secondary' }}>"{test.text}"</Typography>
            </Paper>
          ))}
        </Stack>
      </Box>

    </Box>
  );
};

export default Testimonials;
