import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import TerminalIcon from '@mui/icons-material/Terminal';
import PsychologyIcon from '@mui/icons-material/Psychology';

// Arc visual: a drawing compass opening to reveal a perfect circle
const CompassVisual = ({ color }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '220px', position: 'relative' }}>
    <svg width="180" height="180" viewBox="0 0 180 180">
      <defs>
        <radialGradient id="compassGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx="90" cy="90" r="80" fill="url(#compassGlow)" />

      {/* The completed circle — Arc draws it */}
      <motion.circle
        cx="90" cy="90" r="60"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeDasharray="377"
        initial={{ strokeDashoffset: 377 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2.5, ease: 'easeOut', delay: 0.5 }}
      />
      {/* Inner precision ring */}
      <motion.circle
        cx="90" cy="90" r="40"
        fill="none"
        stroke={color}
        strokeWidth="0.5"
        strokeOpacity="0.15"
        strokeDasharray="251"
        initial={{ strokeDashoffset: 251 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, ease: 'easeOut', delay: 1 }}
      />

      {/* Compass pivot point */}
      <circle cx="90" cy="30" r="4" fill="#0d1117" stroke={color} strokeWidth="1.5" />
      <motion.circle
        cx="90" cy="30" r="2" fill={color}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Compass arm (rotates to draw the circle) */}
      <motion.line
        x1="90" y1="30"
        x2="90" y2="90"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity="0.7"
        style={{ transformOrigin: '90px 30px' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 0.5 }}
      />
      {/* Compass tip pencil dot */}
      <motion.circle
        cx="90" cy="90"
        r="2.5"
        fill={color}
        style={{ transformOrigin: '90px 30px' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 0.5 }}
      />

      {/* Center anchor dot */}
      <circle cx="90" cy="90" r="3" fill="#0d1117" stroke={color} strokeWidth="1" opacity="0.5" />

      {/* Cross-hairs */}
      <line x1="90" y1="78" x2="90" y2="102" stroke={color} strokeWidth="0.4" strokeOpacity="0.3" />
      <line x1="78" y1="90" x2="102" y2="90" stroke={color} strokeWidth="0.4" strokeOpacity="0.3" />

      {/* Measurement ticks around the outer ring */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const r1 = 63, r2 = i % 3 === 0 ? 70 : 66;
        return (
          <line
            key={i}
            x1={90 + r1 * Math.cos(angle)} y1={90 + r1 * Math.sin(angle)}
            x2={90 + r2 * Math.cos(angle)} y2={90 + r2 * Math.sin(angle)}
            stroke={color} strokeWidth="0.5" strokeOpacity={i % 3 === 0 ? 0.5 : 0.25}
          />
        );
      })}
    </svg>
  </Box>
);

// Lattice visual: a waveform that transforms as AI resonates
const WaveformVisual = ({ color }) => {
  const W = 240, H = 100, mid = H / 2;
  const points = 60;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '220px', position: 'relative' }}>
      <Box sx={{ width: '100%', maxWidth: '280px', position: 'relative' }}>
        {/* Label */}
        <Typography className="mono-text" sx={{ fontSize: '0.55rem', color: color, opacity: 0.6, mb: 1, letterSpacing: '0.15em' }}>
          RESONANCE_SIGNAL
        </Typography>

        <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="waveGrad" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor={color} stopOpacity="0" />
              <stop offset="20%" stopColor={color} stopOpacity="1" />
              <stop offset="80%" stopColor={color} stopOpacity="1" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Baseline */}
          <line x1="0" y1={mid} x2={W} y2={mid} stroke="#30363d" strokeWidth="0.5" />

          {/* Flat dormant wave → animated when in view */}
          {[1, 0.5, 0.25].map((amp, wIdx) => (
            <motion.polyline
              key={wIdx}
              fill="none"
              stroke="url(#waveGrad)"
              strokeWidth={wIdx === 0 ? 1.5 : 0.5}
              strokeOpacity={wIdx === 0 ? 1 : 0.3}
              initial={{ points: [...Array(points)].map((_, i) => `${(i / (points - 1)) * W},${mid}`).join(' ') }}
              animate={{
                points: [...Array(points)].map((_, i) => {
                  const x = (i / (points - 1)) * W;
                  // Natural waveform — varies in amplitude
                  const envelope = Math.sin((i / points) * Math.PI);
                  const wave = Math.sin((i / points) * Math.PI * 8 + wIdx * 1.5) * 18 * amp * envelope;
                  return `${x},${mid - wave}`;
                }).join(' ')
              }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 + wIdx * 0.15, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1.5 }}
            />
          ))}

          {/* Scanning cursor line */}
          <motion.line
            x1="0" y1="0" x2="0" y2={H}
            stroke={color} strokeWidth="0.8" strokeOpacity="0.5"
            animate={{ x1: [0, W, 0], x2: [0, W, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </svg>

        {/* Frequency readout */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          {['14Hz', '440Hz', '8kHz'].map((f) => (
            <Typography key={f} className="mono-text" sx={{ fontSize: '0.5rem', color: 'text.secondary', opacity: 0.5 }}>{f}</Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const products = [
  {
    id: 'arc',
    label: 'WEB_APPLICATION',
    icon: <TerminalIcon />,
    title: 'Arc Diagramming Tool',
    desc: 'High-performance, professional-grade diagramming application with a modern Figma-like interface.',
    detailedDesc: 'Built with React, TypeScript, and a Spring Boot backend, Arqulat Arc is designed for rapid prototyping, flowcharting, and collaboration. It features a robust history system, categorized element library, smart layer management, and a highly interactive canvas.',
    color: '#2f81f7',
    cta: 'View Arqulat Arc',
    link: 'https://arc.arqulat.com/',
    Visual: CompassVisual
  },
  {
    id: 'lattice',
    label: 'VSCODE_EXTENSION',
    icon: <PsychologyIcon />,
    title: 'Lattice AI Assistant',
    desc: 'A multi-tier agentic AI coding assistant built as a VS Code extension.',
    detailedDesc: 'Lattice features a sophisticated multi-tier model architecture (L1 Routing/Execution, L2 Architect/Critic) leveraging Gemini, Groq, and local Ollama models. It integrates directly into the editor and supports MCP servers for advanced context and code execution capabilities.',
    color: '#8957e5',
    cta: 'Explore Lattice',
    link: 'https://github.com/ganesh714/lattice',
    Visual: WaveformVisual
  }
];

const ProductTabs = () => {
  return (
    <Box id="labs" sx={{ py: { xs: 6, md: 10 }, background: '#0d1117', borderBottom: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 3, display: 'inline-block' }}>
            [ 03. PRODUCTS ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, letterSpacing: '-0.04em', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Products in <span className="text-gradient">development.</span>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 10 } }}>
          {products.map((product, index) => {
            const Visual = product.Visual;
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: '-80px' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: isReversed ? 'row-reverse' : 'row' },
                    alignItems: 'center',
                    gap: { xs: 4, md: 8 }
                  }}
                >
                  {/* Content */}
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: 40, height: 40, borderRadius: '10px',
                        background: `${product.color}15`, color: product.color,
                        border: `1px solid ${product.color}40`
                      }}>
                        {product.icon}
                      </Box>
                      <Typography className="mono-text" sx={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', color: product.color }}>
                        {product.label}
                      </Typography>
                    </Box>

                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.15, letterSpacing: '-0.03em', fontSize: { xs: '1.6rem', md: '2rem' } }}>
                      {product.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1.5, fontWeight: 500, lineHeight: 1.6, fontSize: '1rem', color: '#c9d1d9' }}>
                      {product.desc}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 4, lineHeight: 1.8, fontSize: '0.88rem', color: 'text.secondary', opacity: 0.85 }}>
                      {product.detailedDesc}
                    </Typography>

                    <Button
                      variant="outlined"
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderRadius: '30px',
                        borderColor: product.color,
                        color: product.color,
                        px: 4, py: 1.5, fontWeight: 700,
                        '&:hover': { background: `${product.color}10`, borderColor: product.color }
                      }}
                    >
                      {product.cta} →
                    </Button>
                  </Box>

                  {/* Visual panel */}
                  <Box sx={{ flex: 1, position: 'relative', width: '100%' }}>
                    <Box sx={{
                      p: { xs: 3, md: 5 },
                      minHeight: { xs: '220px', md: '300px' },
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(13,17,23,0.6)',
                      border: `1px solid ${product.color}20`,
                      borderRadius: '20px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      {/* Ambient glow */}
                      <Box sx={{
                        position: 'absolute', top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '200px', height: '200px',
                        background: product.color,
                        filter: 'blur(90px)',
                        opacity: 0.08,
                        zIndex: 0
                      }} />
                      <Box sx={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Visual color={product.color} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductTabs;
