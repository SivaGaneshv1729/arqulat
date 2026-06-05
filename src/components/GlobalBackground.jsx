import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, useSpring } from 'framer-motion';

const GlobalBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springConfig = { damping: 30, stiffness: 100 };
  const mouseX = useSpring(mousePos.x, springConfig);
  const mouseY = useSpring(mousePos.y, springConfig);

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', background: '#0d1117', overflow: 'hidden' }}>
      {/* Global Mesh Glows */}
      <Box className="mesh-glow" sx={{ top: '-20%', left: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(47, 129, 247, 0.1) 0%, transparent 70%)' }} />
      <Box className="mesh-glow" sx={{ bottom: '-20%', right: '-10%', width: '70%', height: '70%', background: 'radial-gradient(circle, rgba(137, 87, 229, 0.08) 0%, transparent 70%)', animationDelay: '-7s' }} />
      
      {/* Global Star Field with Parallax */}
      <motion.div className="star-container" style={{ x: mouseX, y: mouseY, scale: 1.1 }}>
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
      </motion.div>
    </Box>
  );
};

export default GlobalBackground;
