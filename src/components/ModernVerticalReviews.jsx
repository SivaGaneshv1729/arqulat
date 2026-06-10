import { Box, Container, Typography, Avatar, Paper, Stack, Rating } from '@mui/material';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
  { 
    id: 1,
    name: 'Sarah Chen', 
    role: 'CTO, TechPulse', 
    text: 'Arqulat delivered our MVP in record time. The architecture is scalable and resilient.', 
    rating: 5,
    avatar: 'S',
    color: '#f85149'
  },
  { 
    id: 2,
    name: 'Rohan Mehta', 
    role: 'Co-Founder', 
    text: 'Hostel SaaS automated room booking instantly. Exceptional agility and clean backend design.', 
    rating: 5,
    avatar: 'R',
    color: '#8957e5'
  },
  { 
    id: 3,
    name: 'Elena Rodriguez', 
    role: 'Founder, EcoStream', 
    text: 'Sustainable tech solutions that actually work. Our go-to partner for green innovation.', 
    rating: 4,
    avatar: 'E',
    color: '#38bdf8'
  },
  { 
    id: 4,
    name: 'Marcus Thorne', 
    role: 'Product Manager', 
    text: 'The attention to detail in the UI/UX is incredible. Our active users love the new dashboard.', 
    rating: 5,
    avatar: 'M',
    color: '#d29922'
  },
  { 
    id: 5,
    name: 'Devika Nair', 
    role: 'Lead Organizer', 
    text: 'Future Labs matching portal ran without a single lag. Highly responsive frontend layouts.', 
    rating: 5,
    avatar: 'D',
    color: '#3fb950'
  },
  { 
    id: 6,
    name: 'Prof. K. Srinivasan', 
    role: 'HOD, Computer Science', 
    text: 'The Classmate RAG pipeline resolved student career inquiries seamlessly.', 
    rating: 5,
    avatar: 'K',
    color: '#2f81f7'
  },
  { 
    id: 7,
    name: 'Alex Rivera', 
    role: 'Founder, AI Frontiers', 
    text: 'Their integration of LLMs into our workflow was game-changing. Highly professional team.', 
    rating: 5,
    avatar: 'A',
    color: '#f85149'
  }
];

const FloatingCard = ({ review }) => (
  <Paper
    elevation={0}
    sx={{
      p: 2,
      mb: 2,
      background: 'rgba(22, 27, 34, 0.6)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(48, 54, 61, 0.5)',
      borderRadius: '16px',
      width: '100%',
      maxWidth: '350px',
      transition: 'all 0.3s ease',
      '&:hover': {
        borderColor: review.color,
        transform: 'scale(1.02) translateX(10px)',
        background: 'rgba(22, 27, 34, 0.8)',
      }
    }}
  >
    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
      <Avatar sx={{ bgcolor: review.color, width: 40, height: 40, fontSize: '1rem', fontWeight: 800 }}>
        {review.avatar}
      </Avatar>
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
          {review.name}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {review.role}
        </Typography>
      </Box>
    </Stack>
    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1.5, fontStyle: 'italic', lineHeight: 1.5 }}>
      "{review.text}"
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Rating value={review.rating} readOnly size="small" sx={{ color: '#FFD700' }} />
      <Typography className="mono-text" sx={{ fontSize: '0.6rem', color: 'text.secondary', opacity: 0.6 }}>
        VERIFIED_ENTRY
      </Typography>
    </Box>
  </Paper>
);

const InfiniteLogo = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Background Decorative Rings */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', width: '380px', height: '380px', borderRadius: '50%', border: '1px dashed rgba(47, 129, 247, 0.2)' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', width: '310px', height: '310px', borderRadius: '50%', border: '1px solid rgba(137, 87, 229, 0.1)' }}
        />
      </Box>

      {/* Main Logo Image */}
      <Box
        component="img"
        src="/main logo.png"
        alt="Arqulat Logo"
        sx={{
          width: '100%',
          maxWidth: '360px',
          height: 'auto',
          position: 'relative',
          zIndex: 2,
          filter: 'drop-shadow(0 0 30px rgba(47, 129, 247, 0.4))',
          animation: 'float 6s ease-in-out infinite'
        }}
      />

      {/* Glow Effect */}
      <Box sx={{ position: 'absolute', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(47, 129, 247, 0.2) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 1 }} />
    </Box>
  );
};

const VerticalMarquee = () => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight / 2);
    }
  }, []);

  useAnimationFrame((time, delta) => {
    if (containerHeight === 0) return;
    
    let nextY = y.get() - 0.5; // Speed of scroll
    if (nextY <= -containerHeight) {
      nextY = 0;
    }
    y.set(nextY);
  });

  return (
    <Box sx={{ height: '450px', overflow: 'hidden', position: 'relative', width: '100%', maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
      <motion.div 
        ref={containerRef}
        style={{ y, width: '100%' }}
      >
        <Stack sx={{ width: '100%', alignItems: 'center' }}>
          {[...testimonials, ...testimonials].map((review, idx) => (
            <FloatingCard key={`${review.id}-${idx}`} review={review} />
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
};

const ModernVerticalReviews = () => {
  return (
    <Box sx={{ py: 8, background: '#0d1117', borderTop: '1px solid #30363d', borderBottom: '1px solid #30363d', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorative Elements */}
      <Box sx={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(47, 129, 247, 0.05) 0%, transparent 70%)', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(137, 87, 229, 0.05) 0%, transparent 70%)', zIndex: 0 }} />

      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 2, display: 'inline-block' }}>
            [ 05. PEER_REVIEWS ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.04em' }}>
            Approved by the <span style={{ color: '#8b949e' }}>ecosystem.</span>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 8, position: 'relative', zIndex: 1 }}>
          {/* Left Column: Infinite Logo */}
          <Box sx={{ flex: 1, order: { xs: 2, md: 1 } }}>
            <InfiniteLogo />
          </Box>

          {/* Right Column: Vertical Flow */}
          <Box sx={{ flex: 1, order: { xs: 1, md: 2 }, width: '100%' }}>
            <VerticalMarquee />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ModernVerticalReviews;
