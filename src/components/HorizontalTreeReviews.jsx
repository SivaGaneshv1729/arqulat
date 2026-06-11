import { useState } from 'react';
import { Box, Container, Typography, Avatar, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { 
    id: 1,
    name: 'Sarah Chen', 
    role: 'CTO, TechPulse', 
    text: 'Arqulat delivered our MVP in record time. The architecture is scalable and resilient under high load.', 
    color: '#f85149',
    x: 240,
    y: -110,
    latency: '12ms',
    node: 'US-WEST'
  },
  { 
    id: 2,
    name: 'Rohan Mehta', 
    role: 'Co-Founder', 
    text: 'Hostel SaaS automated room booking instantly. Exceptional agility and clean backend design.', 
    color: '#8957e5',
    x: 360,
    y: 0,
    latency: '8ms',
    node: 'AP-SOUTH'
  },
  { 
    id: 3,
    name: 'Elena Rodriguez', 
    role: 'Founder, EcoStream', 
    text: 'Sustainable tech solutions that actually work. Our go-to partner for green innovation.', 
    color: '#38bdf8',
    x: 240,
    y: 110,
    latency: '15ms',
    node: 'EU-CENTRAL'
  },
  { 
    id: 4,
    name: 'Marcus Thorne', 
    role: 'Product Manager', 
    text: 'The attention to detail in the UI/UX is incredible. Our active users love the new dashboard.', 
    color: '#d29922',
    x: -240,
    y: 110,
    latency: '11ms',
    node: 'US-EAST'
  },
  { 
    id: 5,
    name: 'Devika Nair', 
    role: 'Lead Organizer', 
    text: 'Future Labs matching portal ran without a single lag. Highly responsive frontend layouts.', 
    color: '#3fb950',
    x: -360,
    y: 0,
    latency: '9ms',
    node: 'AP-EAST'
  },
  { 
    id: 6,
    name: 'Prof. K. Srinivasan', 
    role: 'HOD, Computer Science', 
    text: 'The Classmate RAG pipeline resolved student career inquiries seamlessly. Exceptional craftsmanship.', 
    color: '#2f81f7',
    x: -240,
    y: -110,
    latency: '14ms',
    node: 'EU-WEST'
  }
];

const InfinityPath = ({ hoveredId }) => {
  // Infinity path relative to viewBox 1000x500, centered at 500x250
  const pathData = "M 500 250 C 650 70, 850 70, 850 250 C 850 430, 650 430, 500 250 C 350 70, 150 70, 150 250 C 150 430, 350 430, 500 250 Z";
  
  const activeColor = hoveredId ? testimonials.find(t => t.id === hoveredId).color : 'rgba(47, 129, 247, 0.4)';

  return (
    <Box
      component="svg"
      viewBox="0 0 1000 500"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'visible',
        filter: hoveredId ? `drop-shadow(0 0 10px ${activeColor})` : 'none',
        transition: 'filter 0.5s ease'
      }}
    >
      <defs>
        <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(47, 129, 247, 0.15)" />
          <stop offset="50%" stopColor="rgba(137, 87, 229, 0.3)" />
          <stop offset="100%" stopColor="rgba(47, 129, 247, 0.15)" />
        </linearGradient>
      </defs>
      
      {/* Glow track */}
      <path
        d={pathData}
        fill="none"
        stroke="url(#infinityGradient)"
        strokeWidth={6}
        opacity={0.6}
      />
      {/* Core track */}
      <path
        d={pathData}
        fill="none"
        stroke="rgba(48, 54, 61, 0.8)"
        strokeWidth={1}
      />
      
      {/* Animated Flowing Line */}
      <motion.path
        d={pathData}
        fill="none"
        stroke={activeColor}
        strokeWidth={hoveredId ? 3 : 2}
        strokeDasharray={hoveredId ? "25,30" : "10,20"}
        animate={{ 
          strokeDashoffset: [0, -200]
        }}
        transition={{ 
          strokeDashoffset: { duration: hoveredId ? 1.5 : 6, repeat: Infinity, ease: "linear" }
        }}
        style={{ transition: 'stroke 0.4s ease, stroke-width 0.4s ease' }}
      />
    </Box>
  );
};

const OrbitingNode = ({ person, isHovered, onHover, onLeave }) => {
  return (
    <Box
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      sx={{
        position: 'absolute',
        left: `calc(50% + ${person.x}px)`,
        top: `calc(50% + ${person.y}px)`,
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        cursor: 'pointer'
      }}
    >
      <motion.div
        animate={{ y: isHovered ? -8 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Box sx={{ position: 'relative' }}>
          {/* Hover Pulse Aura */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.6, opacity: 0.3 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: person.color,
                  zIndex: -1,
                  filter: 'blur(8px)'
                }}
              />
            )}
          </AnimatePresence>

          {/* Node Core */}
          <Avatar
            sx={{
              width: 50,
              height: 50,
              bgcolor: '#0d1117',
              border: `2px solid ${isHovered ? person.color : '#30363d'}`,
              color: isHovered ? person.color : 'text.primary',
              transition: 'all 0.3s ease',
              boxShadow: isHovered ? `0 0 20px ${person.color}50` : '0 4px 10px rgba(0,0,0,0.5)'
            }}
          >
            <Typography sx={{ fontWeight: 900, fontSize: '1.1rem' }}>
              {person.name[0]}
            </Typography>
          </Avatar>
        </Box>

        {/* Tech Label */}
        <Box 
          sx={{ 
            mt: 2, 
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            background: isHovered ? 'rgba(22, 27, 34, 0.95)' : 'rgba(13, 17, 23, 0.7)', 
            backdropFilter: 'blur(4px)',
            px: 1.5, py: 0.5, 
            borderRadius: '20px',
            border: `1px solid ${isHovered ? person.color : 'rgba(48, 54, 61, 0.5)'}`,
            transition: 'all 0.3s',
            boxShadow: isHovered ? `0 5px 15px rgba(0,0,0,0.5)` : 'none'
          }}
        >
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: isHovered ? person.color : '#8b949e', boxShadow: isHovered ? `0 0 8px ${person.color}` : 'none' }} />
          <Typography sx={{ fontWeight: 700, fontSize: '0.7rem', color: isHovered ? '#fff' : 'text.secondary', whiteSpace: 'nowrap', letterSpacing: '0.5px' }}>
            {person.name}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

const HorizontalTreeReviews = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <Box sx={{ py: 15, background: '#0d1117', borderTop: '1px solid #30363d', borderBottom: '1px solid #30363d', position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center', position: 'relative', zIndex: 5 }}>
          <Box className="section-label" sx={{ mb: 2, display: 'inline-block' }}>
            [ 05. PEER_REVIEWS ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.04em' }}>
            Approved by the <span style={{ color: '#8b949e' }}>ecosystem.</span>
          </Typography>
        </Box>

        {/* 500px Height for the Infinity Track */}
        <Box sx={{ position: 'relative', height: '500px', width: '100%', maxWidth: '1000px', mx: 'auto' }}>
          
          <Box sx={{ position: 'absolute', inset: 0, display: { xs: 'none', md: 'block' } }}>
            <InfinityPath hoveredId={hoveredId} />
          </Box>

          {/* Central Core Intersection */}
          <Box 
            sx={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              zIndex: 20 
            }}
          >
            {/* Rotating Tech Rings */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{ 
                position: 'absolute', inset: -25, borderRadius: '50%', 
                border: '1px dashed #30363d', 
                borderTopColor: hoveredId ? testimonials.find(t=>t.id===hoveredId).color : '#2f81f7', 
                borderBottomColor: hoveredId ? testimonials.find(t=>t.id===hoveredId).color : '#2f81f7', 
                opacity: 0.6 
              }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ 
                position: 'absolute', inset: -12, borderRadius: '50%', 
                border: '2px solid rgba(48,54,61,0.3)', 
                borderLeftColor: hoveredId ? testimonials.find(t=>t.id===hoveredId).color : '#8957e5',
                borderRightColor: hoveredId ? testimonials.find(t=>t.id===hoveredId).color : '#8957e5'
              }}
            />
            
            {/* Solid Core */}
            <Box 
              sx={{ 
                width: 80, 
                height: 80, 
                borderRadius: '50%', 
                background: '#0d1117', 
                border: '1px solid #30363d',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: hoveredId 
                  ? `0 0 50px ${testimonials.find(t=>t.id===hoveredId).color}50, inset 0 0 20px ${testimonials.find(t=>t.id===hoveredId).color}20` 
                  : '0 0 20px rgba(0,0,0,0.8), inset 0 0 15px rgba(47, 129, 247, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <Typography sx={{ fontWeight: 900, color: hoveredId ? testimonials.find(t=>t.id===hoveredId).color : 'text.primary', fontSize: '0.75rem', letterSpacing: '2px', transition: 'color 0.4s' }}>
                CORE
              </Typography>
            </Box>
          </Box>

          {/* Infinity Orbit Nodes */}
          {testimonials.map((person) => (
            <OrbitingNode 
              key={person.id}
              person={person}
              isHovered={hoveredId === person.id}
              onHover={() => setHoveredId(person.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </Box>

        {/* Dedicated Modern Terminal Review Card */}
        <Box sx={{ height: '180px', position: 'relative', mt: { xs: 0, md: 4 }, display: 'flex', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            {hoveredId ? (
              <motion.div
                key={hoveredId}
                initial={{ opacity: 0, y: 15, scale: 0.98, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, scale: 0.98, filter: 'blur(5px)' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ width: '100%', position: 'absolute' }}
              >
                <Paper
                  sx={{
                    width: '100%', 
                    maxWidth: '800px', 
                    mx: 'auto',
                    p: 4,
                    background: 'rgba(22, 27, 34, 0.7)', 
                    backdropFilter: 'blur(24px)',
                    border: '1px solid #30363d', 
                    borderTop: `2px solid ${testimonials.find(t=>t.id===hoveredId).color}`,
                    borderRadius: 4, 
                    position: 'relative', 
                    overflow: 'hidden',
                    boxShadow: `0 30px 60px rgba(0,0,0,0.5)`
                  }}
                >
                  {/* Subtle Top Gradient Accent */}
                  <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `radial-gradient(ellipse at top, ${testimonials.find(t=>t.id===hoveredId).color}20, transparent 60%)`, pointerEvents: 'none' }} />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, position: 'relative', zIndex: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                      <Avatar sx={{ bgcolor: testimonials.find(t=>t.id===hoveredId).color, width: 48, height: 48, fontWeight: 900, border: '2px solid rgba(255,255,255,0.1)' }}>
                        {testimonials.find(t=>t.id===hoveredId).name[0]}
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 800, color: 'text.primary', fontSize: '1.1rem', letterSpacing: '-0.01em' }}>
                          {testimonials.find(t=>t.id===hoveredId).name}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                          {testimonials.find(t=>t.id===hoveredId).role}
                        </Typography>
                      </Box>
                    </Box>
                    
                    {/* Telemetry Stats Panel */}
                    <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' }, p: 1, border: '1px dashed #30363d', borderRadius: 2, background: 'rgba(13, 17, 23, 0.5)' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: '#2ea043' }} />
                        <Typography className="mono-text" sx={{ fontSize: '0.65rem', color: '#8b949e' }}>
                          NODE: <span style={{ color: '#c9d1d9' }}>{testimonials.find(t=>t.id===hoveredId).node}</span>
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: testimonials.find(t=>t.id===hoveredId).color }} />
                        <Typography className="mono-text" sx={{ fontSize: '0.65rem', color: '#8b949e' }}>
                          LAT: <span style={{ color: testimonials.find(t=>t.id===hoveredId).latency === '8ms' || testimonials.find(t=>t.id===hoveredId).latency === '9ms' ? '#3fb950' : testimonials.find(t=>t.id===hoveredId).latency === '15ms' ? '#d29922' : '#2f81f7' }}>{testimonials.find(t=>t.id===hoveredId).latency}</span>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#c9d1d9', fontSize: '1.15rem', lineHeight: 1.6, position: 'relative', zIndex: 2 }}>
                    "{testimonials.find(t=>t.id===hoveredId).text}"
                  </Typography>
                </Paper>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Typography className="mono-text" sx={{ color: '#8b949e', letterSpacing: '2px', fontSize: '0.8rem', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <span style={{ display: 'inline-block', width: 8, height: 8, background: '#30363d', borderRadius: '50%' }}></span>
                  Select a node to intercept transmission
                  <span style={{ display: 'inline-block', width: 8, height: 8, background: '#30363d', borderRadius: '50%' }}></span>
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

      </Container>
    </Box>
  );
};

export default HorizontalTreeReviews;
