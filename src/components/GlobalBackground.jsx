import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const GlobalBackground = () => {
  const [cometKey, setCometKey] = useState(0);

  useEffect(() => {
    // Original comet timer - every 10 seconds
    const cometInterval = setInterval(() => {
      setCometKey(prev => prev + 1);
    }, 10000);

    return () => {
      clearInterval(cometInterval);
    };
  }, []);

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', background: '#0d1117', overflow: 'hidden' }}>
      {/* Global Mesh Glows */}
      <Box className="mesh-glow" sx={{ top: '-20%', left: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(47, 129, 247, 0.1) 0%, transparent 70%)' }} />
      <Box className="mesh-glow" sx={{ bottom: '-20%', right: '-10%', width: '70%', height: '70%', background: 'radial-gradient(circle, rgba(137, 87, 229, 0.08) 0%, transparent 70%)', animationDelay: '-7s' }} />
      
      {/* Bright long single comet - every 10 seconds */}
      <Box 
        key={cometKey}
        className="comet"
        sx={{
          animation: 'comet-move 4s linear forwards',
          zIndex: 10
        }}
      />

      {/* Global Star Field - Completely Stable */}
      <Box className="star-container" sx={{ scale: 1.05 }}>
        {[...Array(120)].map((_, i) => (
          <Box
            key={i}
            className="star"
            sx={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 1.5}px`,
              height: `${1 + Math.random() * 1.5}px`,
              '--duration': `${3 + Math.random() * 7}s`,
              opacity: 0.1 + Math.random() * 0.4
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GlobalBackground;
