import { Box, Container, Typography, alpha, Chip, useMediaQuery, useTheme } from '@mui/material';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineData = [
  {
    date: 'SUMMER 2025',
    phase: 'INCEPTION',
    title: 'Inhouse Internship 1.0',
    description: 'The journey began when Venkat and Veeranna were looking for a team in the AIML department. Sriram pitched an approved idea and teamed up with Siva Ganesh. We joined forces, forming the core team that started it all.',
    products: ['Team Formation', 'AIML Dept'],
    status: 'MAY 5 – JUN 29',
    color: '#3fb950',
  },
  {
    date: 'AUG 2025',
    phase: 'FIRST HACKATHON',
    title: 'Bajaj HackRx 6.0',
    description: 'Participated in our first major hackathon together. A massive learning phase — we dived deep into building AI applications, mastering RAG pipelines, vectorization, and embeddings.',
    products: ['RAG', 'Vectorization', 'Embeddings'],
    status: 'AUG 1 – 14',
    color: '#2f81f7',
  },
  {
    date: 'APRIL 1',
    phase: 'SHOWCASE',
    title: 'Prakalp Project Expo',
    description: 'Took our work public by participating in the external project expo "Prakalp" held at Ramachandra College of Engineering, Eluru, showcasing our technical capabilities to a broader audience.',
    products: ['Project Expo', 'Ramachandra Engg Colg'],
    status: 'COMPLETED',
    color: '#8957e5',
  },
  {
    date: 'PRESENT',
    phase: 'ACTIVE DEVELOPMENT',
    title: 'Project Arqulat Arc',
    description: 'We are currently laser-focused on Project Arqulat Arc. All our previous hackathon and expo experiences have culminated into this product, and we are almost ready to deploy the very first version.',
    products: ['Project Arqulat Arc', 'V1 Launch'],
    status: 'DEPLOYING SOON',
    color: '#d29922',
  }
];

// ─── Node dot that sits on the line ──────────────────────────────────────────
const TimelineNode = ({ item, isLast, isInView }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      pt: { xs: '30px', md: '38px' },
      position: 'relative',
      zIndex: 3,
    }}
  >
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.45, type: 'spring', stiffness: 380, delay: 0.08 }}
    >
      <Box
        sx={{
          width: { xs: 18, md: 24 },
          height: { xs: 18, md: 24 },
          borderRadius: '50%',
          background: '#0a0f16',
          border: `2.5px solid ${item.color}`,
          boxShadow: `0 0 0 5px ${item.color}14, 0 0 20px ${item.color}50`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {/* Inner fill dot */}
        <Box
          sx={{
            width: { xs: 6, md: 9 },
            height: { xs: 6, md: 9 },
            borderRadius: '50%',
            background: item.color,
            boxShadow: `0 0 8px ${item.color}`,
          }}
        />
        {/* Pulsing ring on the current/last item */}
        {isLast && (
          <motion.div
            style={{
              position: 'absolute',
              inset: -8,
              borderRadius: '50%',
              border: `1.5px solid ${item.color}`,
              opacity: 0,
            }}
            animate={{ scale: [1, 2.4], opacity: [0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
      </Box>
    </motion.div>
  </Box>
);

// ─── The card ─────────────────────────────────────────────────────────────────
const TimelineCard = ({ item, fromLeft, number, isInView }) => (
  <motion.div
    initial={{ opacity: 0, x: fromLeft ? -48 : 48 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: fromLeft ? -48 : 48 }}
    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
  >
    <Box
      sx={{
        p: { xs: '24px 24px', md: '36px 40px' },
        background: 'rgba(13, 17, 23, 0.9)',
        backdropFilter: 'blur(24px)',
        border: '1px solid #21262d',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          borderColor: `${item.color}45`,
          boxShadow: `0 28px 72px -20px ${item.color}28`,
          transform: 'translateY(-5px)',
          '& .top-bar': { opacity: 0.8 },
        },
      }}
    >
      {/* Ghost number watermark */}
      <Typography
        sx={{
          position: 'absolute',
          right: { xs: 0, md: 4 },
          bottom: { xs: -16, md: -24 },
          fontSize: { xs: '6rem', md: '9rem' },
          fontWeight: 900,
          color: item.color,
          opacity: 0.04,
          lineHeight: 1,
          fontFamily: '"JetBrains Mono", monospace',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        {String(number).padStart(2, '0')}
      </Typography>

      {/* Top accent line */}
      <Box
        className="top-bar"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, ${item.color}, ${item.color}00)`,
          opacity: 0.4,
          transition: 'opacity 0.4s ease',
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header row: phase/date + status chip ── */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: { xs: 2.5, md: 3.5 },
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              {/* Phase dot */}
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  color: item.color,
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                {item.phase}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                color: 'text.secondary',
                fontSize: '0.58rem',
                letterSpacing: '0.1em',
                opacity: 0.65,
                pl: '14px',
              }}
            >
              {item.date}
            </Typography>
          </Box>

          <Chip
            label={item.status}
            size="small"
            sx={{
              background: `${item.color}14`,
              color: item.color,
              border: `1px solid ${item.color}35`,
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: 700,
              fontSize: '0.58rem',
              height: '24px',
              letterSpacing: '0.08em',
              borderRadius: '8px',
              flexShrink: 0,
            }}
          />
        </Box>

        {/* ── Title ── */}
        <Typography
          sx={{
            fontWeight: 800,
            mb: { xs: 2, md: 2.5 },
            color: '#e6edf3',
            fontSize: { xs: '1.2rem', md: '1.55rem' },
            letterSpacing: '-0.03em',
            lineHeight: 1.25,
            fontFamily: '"Lexend", sans-serif',
          }}
        >
          {item.title}
        </Typography>

        {/* ── Divider ── */}
        <Box sx={{ height: '1px', background: '#21262d', mb: { xs: 2, md: 2.5 } }} />

        {/* ── Description ── */}
        <Typography
          sx={{
            color: '#8b949e',
            lineHeight: 1.78,
            mb: { xs: 2.5, md: 3 },
            fontSize: { xs: '0.875rem', md: '0.9rem' },
          }}
        >
          {item.description}
        </Typography>

        {/* ── Tags ── */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {item.products.map((prod, pIdx) => (
            <motion.div
              key={pIdx}
              initial={{ opacity: 0, y: 6 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.3, delay: 0.52 + pIdx * 0.08 }}
            >
              <Box
                sx={{
                  px: '12px',
                  py: '5px',
                  background: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: item.color,
                    opacity: 0.8,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    color: '#8b949e',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}
                >
                  {prod}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  </motion.div>
);

// ─── One full row (node + card, alternating sides) ────────────────────────────
const TimelineRow = ({ item, isLast, idx }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-8%' });
  const isCardOnLeft = idx % 2 === 0; // even = card on left; odd = card on right

  return (
    <Box ref={ref} sx={{ mb: { xs: '24px', md: '40px' } }}>

      {/* ── Desktop: alternating left / right ── */}
      <Box
        sx={{
          display: { xs: 'none', md: 'grid' },
          gridTemplateColumns: '1fr 72px 1fr',
          alignItems: 'start',
        }}
      >
        {/* Left column */}
        <Box sx={{ pr: { md: '40px' }, display: 'flex', justifyContent: 'flex-end' }}>
          {isCardOnLeft ? (
            <Box sx={{ width: '100%' }}>
              <TimelineCard item={item} fromLeft={true} number={idx + 1} isInView={isInView} />
            </Box>
          ) : (
            <Box /> // empty
          )}
        </Box>

        {/* Center: node */}
        <TimelineNode item={item} isLast={isLast} isInView={isInView} />

        {/* Right column */}
        <Box sx={{ pl: { md: '40px' } }}>
          {!isCardOnLeft ? (
            <TimelineCard item={item} fromLeft={false} number={idx + 1} isInView={isInView} />
          ) : (
            <Box /> // empty
          )}
        </Box>
      </Box>

      {/* ── Mobile: left-rail, cards always right ── */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          alignItems: 'flex-start',
          gap: 0,
        }}
      >
        {/* Node column: 52px wide, centered at the left line (left: 26px = 26px from edge) */}
        <Box sx={{ width: '52px', flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
          <TimelineNode item={item} isLast={isLast} isInView={isInView} />
        </Box>
        {/* Card */}
        <Box sx={{ flex: 1, pt: { xs: '30px' } }}>
          <TimelineCard item={item} fromLeft={false} number={idx + 1} isInView={isInView} />
        </Box>
      </Box>
    </Box>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
const ModernEvolution = () => {
  const containerRef = useRef(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeightValue = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const glowY = useTransform(scrollYProgress, (p) => {
    const container = containerRef.current;
    if (!container) return 0;
    return p * (container.offsetHeight - 40);
  });

  return (
    <Box
      id="evolution"
      sx={{
        py: { xs: 10, md: 16 },
        background: 'transparent',
        position: 'relative',
        borderBottom: '1px solid #30363d',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(47, 129, 247, 0.03) 0%, transparent 65%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        {/* ── Section header ── */}
        <Box sx={{ mb: { xs: 8, md: 13 }, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Box className="section-label" sx={{ mb: 2.5, display: 'inline-block' }}>
              [ 02. EVOLUTION_TIMELINE ]
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2rem', md: '3.5rem' },
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
              }}
            >
              The evolution of a{' '}
              <span className="text-gradient">collective.</span>
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                maxWidth: '560px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.05rem' },
                lineHeight: 1.72,
              }}
            >
              From our early roots in a summer internship to forging resilient AI architectures.
              A timeline of the milestones that shaped our vision and capabilities.
            </Typography>
          </motion.div>
        </Box>

        {/* ── Timeline container ── */}
        <Box ref={containerRef} sx={{ position: 'relative' }}>

          {/* Dormant background line */}
          <Box
            sx={{
              position: 'absolute',
              // Desktop: centered. Mobile: 26px from left (center of 52px node column).
              left: { xs: '26px', md: 'calc(50% - 1px)' },
              top: 0,
              bottom: 0,
              width: '2px',
              background: '#1c2128',
              zIndex: 1,
            }}
          />

          {/* Scroll-driven fill line */}
          <motion.div
            style={{
              position: 'absolute',
              left: isDesktop ? 'calc(50% - 1px)' : '26px',
              top: 0,
              width: '2px',
              height: lineHeightValue,
              background: 'linear-gradient(180deg, #3fb950 0%, #2f81f7 33%, #8957e5 66%, #d29922 100%)',
              zIndex: 2,
              originY: 0,
            }}
          />

          {/* Glowing dot that rides the line */}
          <motion.div
            style={{
              position: 'absolute',
              left: isDesktop ? 'calc(50% - 7px)' : '19px',
              top: 0,
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: 'white',
              boxShadow: '0 0 22px 8px rgba(255, 255, 255, 0.32)',
              zIndex: 5,
              y: glowY,
              opacity: glowOpacity,
            }}
          />

          {/* Timeline rows */}
          {timelineData.map((item, idx) => (
            <TimelineRow
              key={idx}
              item={item}
              isLast={idx === timelineData.length - 1}
              idx={idx}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ModernEvolution;
