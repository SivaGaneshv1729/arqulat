import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const techKeywords = [
  'COGNITIVE_AGENTS', 'HYPERSCALE_INFRA', 'SPATIAL_COMPUTING', 
  'NEURAL_MESH', 'AUTONOMOUS_SYSTEMS', 'AGENTIC_WORKFLOWS', 
  'REAL_TIME_ENGINEERING', 'DISTRIBUTED_COMPUTE'
];

const Marquee = () => {
  return (
    <Box 
      sx={{ 
        py: 2, 
        overflow: 'hidden', 
        borderTop: '1px solid rgba(48, 54, 61, 0.5)', 
        borderBottom: '1px solid rgba(48, 54, 61, 0.5)', 
        background: '#0d1117',
        backdropFilter: 'blur(10px)',
        position: 'relative'
      }}
    >
      {/* Edge Fades */}
      <Box sx={{ 
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, #0d1117 0%, transparent 15%, transparent 85%, #0d1117 100%)' 
      }} />

      {/* Top Decorative Technical Line (Right to Left - Full Width) */}
      <motion.div
        animate={{ x: ['100vw', '-30vw'] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '30vw',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #8957e5, transparent)',
          zIndex: 3
        }}
      />

      <Box sx={{ display: 'flex', whiteSpace: 'nowrap' }}>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {[...techKeywords, ...techKeywords, ...techKeywords].map((tag, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mx: 4 }}>
              {/* Status Indicator Dot */}
              <Box 
                sx={{ 
                  width: 6, 
                  height: 6, 
                  borderRadius: '50%', 
                  background: index % 2 === 0 ? '#2f81f7' : '#8957e5',
                  mr: 2,
                  boxShadow: `0 0 10px ${index % 2 === 0 ? '#2f81f7' : '#8957e5'}`
                }} 
              />
              <Typography
                className="font-mono"
                sx={{
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: 'text.secondary',
                  letterSpacing: '0.15em',
                  opacity: 0.8,
                  transition: '0.3s',
                  '&:hover': {
                    color: 'primary.main',
                    opacity: 1
                  }
                }}
              >
                {tag}
              </Typography>
            </Box>
          ))}
        </motion.div>
      </Box>

      {/* Bottom Decorative Technical Line (Left to Right - Full Width) */}
      <motion.div
        animate={{ x: ['-30vw', '100vw'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '30vw',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #2f81f7, transparent)',
          zIndex: 3
        }}
      />
    </Box>
  );
};

export default Marquee;
