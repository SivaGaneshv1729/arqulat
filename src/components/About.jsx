import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Animated node-graph: scattered points that connect into a network
const NodeGraph = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const nodes = [
    { id: 0, sx: 15,  sy: 20,  tx: 38,  ty: 22,  color: '#2f81f7', size: 6, label: '2025' },
    { id: 1, sx: 72,  sy: 8,   tx: 62,  ty: 38,  color: '#8957e5', size: 4 },
    { id: 2, sx: 88,  sy: 55,  tx: 80,  ty: 60,  color: '#2f81f7', size: 4 },
    { id: 3, sx: 10,  sy: 70,  tx: 30,  ty: 65,  color: '#38bdf8', size: 5, label: 'ARC' },
    { id: 4, sx: 50,  sy: 85,  tx: 55,  ty: 80,  color: '#8957e5', size: 4 },
    { id: 5, sx: 30,  sy: 40,  tx: 50,  ty: 50,  color: '#2f81f7', size: 8, label: 'ARQULAT', core: true },
    { id: 6, sx: 85,  sy: 25,  tx: 68,  ty: 22,  color: '#38bdf8', size: 4 },
    { id: 7, sx: 5,   sy: 50,  tx: 20,  ty: 44,  color: '#8957e5', size: 5 },
    { id: 8, sx: 65,  sy: 70,  tx: 72,  ty: 75,  color: '#2f81f7', size: 4 },
    { id: 9, sx: 45,  sy: 10,  tx: 50,  ty: 24,  color: '#38bdf8', size: 5, label: 'LATTICE' },
  ];

  const edges = [
    [5, 0], [5, 3], [5, 9], [5, 7],
    [5, 6], [5, 2], [5, 4], [5, 1],
    [5, 8],
    [0, 7], [9, 6], [1, 6], [2, 8], [3, 4],
  ];

  const getPos = (node) => phase >= 1
    ? { x: node.tx, y: node.ty }
    : { x: node.sx, y: node.sy };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: 340 }}>
      <Box sx={{ position: 'absolute', top: 8, left: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: '#2f81f7', opacity: 0.5, letterSpacing: '0.1em' }}>
        NODE_MAP v2.1
      </Box>
      <Box sx={{ position: 'absolute', bottom: 8, right: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: '#3fb950', opacity: 0.6, letterSpacing: '0.1em' }}>
        {phase === 2 ? 'SYNC: COMPLETE' : phase === 1 ? 'CONNECTING...' : 'SCANNING...'}
      </Box>

      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="coreGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2f81f7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2f81f7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle grid */}
        {[20, 40, 60, 80].map(v => (
          <g key={v}>
            <line x1={v} y1="0" x2={v} y2="100" stroke="#30363d" strokeWidth="0.25" opacity="0.3" />
            <line x1="0" y1={v} x2="100" y2={v} stroke="#30363d" strokeWidth="0.25" opacity="0.3" />
          </g>
        ))}

        {/* Edges */}
        {edges.map(([a, b], i) => {
          const na = nodes[a];
          const nb = nodes[b];
          const pa = getPos(na);
          const pb = getPos(nb);
          return (
            <motion.line
              key={`e-${a}-${b}`}
              stroke={na.core ? '#2f81f7' : '#30363d'}
              strokeWidth={na.core ? '0.5' : '0.3'}
              strokeOpacity={na.core ? 0.5 : 0.35}
              initial={{ pathLength: 0, opacity: 0, x1: pa.x, y1: pa.y, x2: pb.x, y2: pb.y }}
              animate={{
                pathLength: phase >= 1 ? 1 : 0,
                opacity: phase >= 1 ? 1 : 0,
                x1: pa.x, y1: pa.y, x2: pb.x, y2: pb.y
              }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.07, ease: 'easeOut' }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const pos = getPos(node);
          return (
            <g key={node.id}>
              {node.core && (
                <motion.circle
                  cx={pos.x} cy={pos.y} r={13}
                  fill="url(#coreGlow2)"
                  animate={{ r: [11, 15, 11], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
              <motion.circle
                cx={pos.x} cy={pos.y}
                r={node.size / 2}
                fill="#0d1117"
                stroke={node.color}
                strokeWidth={node.core ? 1.2 : 0.7}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, cx: pos.x, cy: pos.y }}
                transition={{ duration: 0.7, delay: 0.1 + node.id * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
              />
              <motion.circle
                cx={pos.x} cy={pos.y}
                r={node.size / 5}
                fill={node.color}
                initial={{ scale: 0 }}
                animate={{ scale: 1, cx: pos.x, cy: pos.y }}
                transition={{ duration: 0.4, delay: 0.3 + node.id * 0.07 }}
              />
              {node.label && (
                <motion.text
                  x={pos.x + (node.id === 5 ? 0 : 3.5)}
                  y={pos.y + (node.id === 5 ? node.size / 2 + 3.5 : -node.size / 2 - 1)}
                  textAnchor={node.id === 5 ? 'middle' : 'start'}
                  fontSize="2.4"
                  fill={node.color}
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase >= 1 ? 0.85 : 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  {node.label}
                </motion.text>
              )}
            </g>
          );
        })}
      </svg>
    </Box>
  );
};

const About = () => {
  return (
    <Box id="about" sx={{ py: { xs: 10, md: 15 }, background: 'transparent', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 6, md: 4 }
          }}
        >
          {/* Text */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box className="section-label" sx={{ mb: 3 }}>
                [ 00. THE_FOUNDATION ]
              </Box>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, letterSpacing: '-0.04em', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                Where vision meets <span className="text-gradient">relentless execution.</span>
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Born from a shared vision in the summer of 2025, Arqulat emerged as a synergy of minds dedicated to pushing the boundaries of artificial intelligence. What began as a focused academic pursuit has rapidly evolved into a high-velocity innovation lab.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.7, opacity: 0.8 }}>
                Forged in the crucible of competitive environments and refined through rigorous engineering, we bridge the gap between theoretical research and pragmatic software craftsmanship. Today, our singular focus lies in architecting sophisticated platforms that redefine intelligent interaction.
              </Typography>

              <Stack direction="row" spacing={5} sx={{ mt: 6 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 0.5 }}>2</Typography>
                  <Typography className="font-mono" sx={{ fontSize: '0.65rem', color: 'text.secondary', letterSpacing: '0.1em' }}>FLAGSHIP_PRODUCTS</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'secondary.main', mb: 0.5 }}>1</Typography>
                  <Typography className="font-mono" sx={{ fontSize: '0.65rem', color: 'text.secondary', letterSpacing: '0.1em' }}>SHARED_VISION</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'info.main', mb: 0.5 }}>4</Typography>
                  <Typography className="font-mono" sx={{ fontSize: '0.65rem', color: 'text.secondary', letterSpacing: '0.1em' }}>CORE_BUILDERS</Typography>
                </Box>
              </Stack>
            </motion.div>
          </Box>

          {/* Node Graph */}
          <Box sx={{ flexShrink: 0, width: { xs: '100%', md: '420px' }, display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            >
              <Box sx={{
                p: 3,
                border: '1px solid #30363d',
                borderRadius: '16px',
                background: 'rgba(13, 17, 23, 0.6)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Box sx={{
                  position: 'absolute', top: 0, right: 0,
                  width: '60%', height: '60%',
                  background: 'radial-gradient(circle at top right, rgba(47, 129, 247, 0.07) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }} />
                <NodeGraph />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
