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
    top: '12%',
    left: '12%',
    lineX: '20%',
    lineY: '25%',
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
    top: '12%',
    right: '12%',
    lineX: '80%',
    lineY: '25%',
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
    bottom: '8%',
    left: '50%',
    lineX: '50%',
    lineY: '80%',
    floatDelay: 3,
    reactions: '👍 15 ● 🚀 8'
  }
];

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box sx={{ py: 12, position: 'relative', borderTop: '1px solid #30363d', borderBottom: '1px solid #30363d', background: '#0d1117', overflow: 'hidden' }}>
      
      {/* CSS Keyframe for crawling data dots on SVG connections */}
      <style>
        {`
          @keyframes crawl-data {
            to {
              stroke-dashoffset: -20;
            }
          }
        `}
      </style>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 3, display: 'inline-block' }}>
            [ 05. PEER_REVIEWS ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.04em' }}>
            Approved by the <span style={{ color: '#8b949e' }}>ecosystem.</span>
          </Typography>
        </Box>
      </Container>

      {/* Network Canvas (Desktop Only) */}
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '1200px', 
          height: '550px', 
          mx: 'auto',
          display: { xs: 'none', md: 'block' } 
        }}
      >
        {/* SVG Connection Paths */}
        <svg 
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
          {/* Global Network Map Background Grid */}
          <defs>
            <pattern id="networkGrid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(139, 148, 158, 0.12)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#networkGrid)" />

          {/* Styled Latency Rings around Central Hub */}
          <circle cx="50%" cy="50%" r="130" fill="none" stroke="rgba(48, 54, 61, 0.2)" strokeWidth="1" strokeDasharray="4,8" />
          <circle cx="50%" cy="50%" r="240" fill="none" stroke="rgba(48, 54, 61, 0.15)" strokeWidth="1" strokeDasharray="4,8" />
          <circle cx="50%" cy="50%" r="350" fill="none" stroke="rgba(48, 54, 61, 0.08)" strokeWidth="1" strokeDasharray="4,8" />

          {/* Main Central Hub Node Connections */}
          {testimonials.map((test, index) => {
            const isTargeted = hoveredIndex === index;
            return (
              <line
                key={index}
                x1="50%"
                y1="50%"
                x2={test.lineX}
                y2={test.lineY}
                stroke={isTargeted ? test.color : 'rgba(48, 54, 61, 0.4)'}
                strokeWidth={isTargeted ? 2.5 : 1}
                strokeDasharray="6,6"
                style={{
                  animation: 'crawl-data 1s linear infinite',
                  transition: 'stroke 0.3s, stroke-width 0.3s'
                }}
              />
            );
          })}

          {/* Inter-node connections to form a full network web */}
          {/* Srinivasan to Rohan */}
          <line
            x1="20%"
            y1="25%"
            x2="80%"
            y2="25%"
            stroke={(hoveredIndex === 0 || hoveredIndex === 1) ? 'rgba(137, 87, 229, 0.5)' : 'rgba(48, 54, 61, 0.25)'}
            strokeWidth={(hoveredIndex === 0 || hoveredIndex === 1) ? 2 : 1}
            strokeDasharray="4,4"
            style={{
              animation: 'crawl-data 1.5s linear infinite',
              transition: 'stroke 0.3s, stroke-width 0.3s'
            }}
          />
          {/* Srinivasan to Devika */}
          <line
            x1="20%"
            y1="25%"
            x2="50%"
            y2="80%"
            stroke={(hoveredIndex === 0 || hoveredIndex === 2) ? 'rgba(47, 129, 247, 0.5)' : 'rgba(48, 54, 61, 0.25)'}
            strokeWidth={(hoveredIndex === 0 || hoveredIndex === 2) ? 2 : 1}
            strokeDasharray="4,4"
            style={{
              animation: 'crawl-data 1.5s linear infinite',
              transition: 'stroke 0.3s, stroke-width 0.3s'
            }}
          />
          {/* Rohan to Devika */}
          <line
            x1="80%"
            y1="25%"
            x2="50%"
            y2="80%"
            stroke={(hoveredIndex === 1 || hoveredIndex === 2) ? 'rgba(63, 185, 80, 0.5)' : 'rgba(48, 54, 61, 0.25)'}
            strokeWidth={(hoveredIndex === 1 || hoveredIndex === 2) ? 2 : 1}
            strokeDasharray="4,4"
            style={{
              animation: 'crawl-data 1.5s linear infinite',
              transition: 'stroke 0.3s, stroke-width 0.3s'
            }}
          />
        </svg>

        {/* Central Hub Node (ARQULAT) */}
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
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Box 
              sx={{ 
                width: '130px', 
                height: '130px', 
                borderRadius: '50%', 
                background: '#161b22', 
                border: '2px solid #30363d',
                boxShadow: '0 0 40px rgba(47, 129, 247, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              {/* Outer Ambient Glow ring */}
              <Box sx={{ position: 'absolute', inset: -8, borderRadius: '50%', border: '1px dashed rgba(139, 148, 158, 0.15)', animation: 'spin 20s linear infinite' }} />
              <Typography className="mono-text" sx={{ color: 'primary.main', fontSize: '0.65rem', fontWeight: 800, mb: 0.5, letterSpacing: '0.1em' }}>
                CENTRAL_HUB
              </Typography>
              <Typography sx={{ fontWeight: 900, color: 'text.primary', fontSize: '1rem', letterSpacing: '-0.02em' }}>
                ARQULAT
              </Typography>
            </Box>
          </motion.div>
        </Box>

        {/* Floating Review Nodes */}
        {testimonials.map((test, index) => {
          const isTargeted = hoveredIndex === index;
          
          // Determine comment bubble style based on position index
          let bubbleStyle = {
            position: 'absolute',
            width: '280px',
            background: '#161b22',
            border: `1px solid ${test.color}`,
            borderRadius: 3,
            overflow: 'hidden',
            opacity: isTargeted ? 1 : 0,
            visibility: isTargeted ? 'visible' : 'hidden',
            pointerEvents: isTargeted ? 'auto' : 'none',
            transition: 'opacity 0.3s, visibility 0.3s, transform 0.3s',
            zIndex: 100
          };

          if (index === 0) { // Srinivasan - top left
            bubbleStyle = {
              ...bubbleStyle,
              top: '50%',
              left: '95px',
              transform: isTargeted ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.95)'
            };
          } else if (index === 1) { // Rohan - top right
            bubbleStyle = {
              ...bubbleStyle,
              top: '50%',
              right: '95px',
              transform: isTargeted ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.95)'
            };
          } else { // Devika - bottom center
            bubbleStyle = {
              ...bubbleStyle,
              bottom: '95px',
              left: '50%',
              transform: isTargeted ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0.95)'
            };
          }

          return (
            <Box
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                position: 'absolute',
                top: test.top || 'auto',
                bottom: test.bottom || 'auto',
                left: test.left || 'auto',
                right: test.right || 'auto',
                transform: test.bottom ? 'translateX(-50%)' : 'none',
                zIndex: isTargeted ? 10 : 2,
                transition: 'z-index 0.1s'
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: test.floatDelay }}
              >
                <Box 
                  sx={{ 
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  {/* Floating Avatar Node with Blank Photo Placeholder */}
                  <Avatar 
                    sx={{ 
                      bgcolor: '#161b22', 
                      border: isTargeted ? `2px solid ${test.color}` : `1px solid rgba(48, 54, 61, 0.8)`, 
                      width: 60, 
                      height: 60, 
                      boxShadow: isTargeted ? `0 0 20px ${test.color}` : 'none',
                      transition: 'border 0.3s, box-shadow 0.3s, transform 0.3s',
                      transform: isTargeted ? 'scale(1.1)' : 'scale(1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={test.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </Avatar>

                  {/* Geolocation Region tag under the node avatar */}
                  <Typography 
                    className="font-mono" 
                    sx={{ 
                      mt: 1.5, 
                      fontSize: '0.6rem', 
                      fontWeight: 700, 
                      color: isTargeted ? test.color : 'text.secondary',
                      transition: 'color 0.3s',
                      letterSpacing: '0.05em',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {test.region}
                  </Typography>

                  {/* GitHub Style Comment Bubble */}
                  <Paper
                    elevation={0}
                    sx={bubbleStyle}
                  >
                    {/* comment header */}
                    <Box sx={{ px: 2, py: 1, borderBottom: '1px solid #30363d', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0d1117' }}>
                      <Stack direction="column" spacing={0.2} sx={{ alignItems: 'flex-start' }}>
                        <Typography sx={{ fontWeight: 800, fontSize: '0.75rem', color: 'text.primary' }}>
                          {test.username}
                        </Typography>
                        <Typography className="font-mono" sx={{ fontSize: '0.5rem', color: 'text.secondary' }}>
                          {test.latLong}
                        </Typography>
                      </Stack>
                      <Box sx={{ px: 0.8, py: 0.1, borderRadius: '8px', border: '1px solid #2ea043', background: 'rgba(46, 160, 67, 0.15)', color: '#3fb950', fontSize: '0.55rem', fontWeight: 700 }}>
                        APPROVED
                      </Box>
                    </Box>
                    {/* comment body */}
                    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', lineHeight: 1.5, fontStyle: 'italic' }}>
                        &quot;{test.text}&quot;
                      </Typography>
                      <Box sx={{ pt: 1, borderTop: '1px solid #21262d', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography sx={{ fontWeight: 800, fontSize: '0.75rem', color: 'text.primary' }}>{test.name}</Typography>
                          <Typography sx={{ fontSize: '0.55rem', color: 'text.secondary' }}>{test.role}</Typography>
                        </Box>
                        <Box sx={{ px: 0.8, py: 0.2, background: '#0d1117', border: '1px solid #30363d', borderRadius: 1.5, fontSize: '0.6rem', color: '#8b949e' }}>
                          {test.reactions}
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </motion.div>
            </Box>
          );
        })}
      </Box>

      {/* Fallback Clean List (Mobile Only) */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, px: 2 }}>
        <Stack spacing={3}>
          {testimonials.map((test, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <Box sx={{ px: 2, py: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0d1117', borderBottom: '1px solid #30363d' }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Avatar sx={{ bgcolor: `${test.color}20`, color: test.color, width: 28, height: 28, fontSize: '0.75rem' }} />
                  <Typography sx={{ fontWeight: 800, fontSize: '0.75rem' }}>{test.username}</Typography>
                </Stack>
                <Box sx={{ px: 0.8, py: 0.1, borderRadius: '8px', border: '1px solid #2ea043', background: 'rgba(46, 160, 67, 0.15)', color: '#3fb950', fontSize: '0.55rem', fontWeight: 700 }}>
                  APPROVED
                </Box>
              </Box>
              <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography variant="body2" sx={{ fontSize: '0.8rem', lineHeight: 1.5, fontStyle: 'italic' }}>
                  &quot;{test.text}&quot;
                </Typography>
                <Box sx={{ pt: 1, borderTop: '1px solid #21262d', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: '0.75rem' }}>{test.name}</Typography>
                    <Typography sx={{ fontSize: '0.55rem', color: 'text.secondary' }}>{test.role}</Typography>
                  </Box>
                  <Box sx={{ px: 0.8, py: 0.2, background: '#0d1117', border: '1px solid #30363d', borderRadius: 1.5, fontSize: '0.6rem', color: '#8b949e' }}>
                    {test.reactions}
                  </Box>
                </Box>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>

    </Box>
  );
};

export default Testimonials;
