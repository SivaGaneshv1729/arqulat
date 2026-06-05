import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';

const AnimatedIntelligence = ({ color }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '320px', position: 'relative' }}>
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      style={{
        width: '60px', height: '60px', borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        boxShadow: `0 0 60px ${color}`,
        position: 'absolute',
        zIndex: 2
      }}
    />
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ rotate: 360 }}
        transition={{ duration: 8 + i * 4, repeat: Infinity, ease: "linear", reverse: i % 2 === 0 }}
        style={{ position: 'absolute', width: `${120 + i * 60}px`, height: `${120 + i * 60}px`, borderRadius: '50%', border: `1px dashed ${color}30` }}
      >
        <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', background: color, position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)', boxShadow: `0 0 15px ${color}` }} />
      </motion.div>
    ))}
  </Box>
);

const AnimatedInfrastructure = ({ color }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '320px' }}>
    {[...Array(4)].map((_, i) => (
      <Box key={i} sx={{ width: '280px', height: '45px', borderRadius: '8px', border: `1px solid ${color}40`, background: 'rgba(13, 17, 23, 0.8)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', px: 2 }}>
        <motion.div
          animate={{ x: ['-100%', '300%'] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
          style={{ position: 'absolute', top: 0, bottom: 0, width: '40px', background: `linear-gradient(90deg, transparent, ${color}30, transparent)` }}
        />
        <Box sx={{ display: 'flex', gap: 1 }}>
          {[...Array(3)].map((_, j) => (
            <Box key={j} sx={{ width: 6, height: 6, borderRadius: '50%', background: `${color}80` }} />
          ))}
        </Box>
        <Box sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: 1.5 }}>
          <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }} style={{ width: 8, height: 8, borderRadius: '50%', background: color, boxShadow: `0 0 10px ${color}` }} />
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#3fb950' }} />
        </Box>
      </Box>
    ))}
  </Box>
);

const AnimatedVisuals = ({ color }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '320px', position: 'relative', perspective: '1000px' }}>
    <motion.div
      animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      style={{ width: '220px', height: '220px', transformStyle: 'preserve-3d', position: 'relative' }}
    >
      {[...Array(8)].map((_, i) => (
        <Box
          key={`y-${i}`}
          sx={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            border: `1px solid ${color}60`,
            borderRadius: '50%',
            transform: `rotateY(${i * 22.5}deg)`,
          }}
        />
      ))}
      {[...Array(8)].map((_, i) => (
        <Box
          key={`x-${i}`}
          sx={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            border: `1px solid ${color}60`,
            borderRadius: '50%',
            transform: `rotateX(${i * 22.5}deg)`,
          }}
        />
      ))}
    </motion.div>
  </Box>
);

const features = [
  { 
    id: 'intel', 
    label: 'INTELLIGENCE', 
    icon: <PsychologyIcon />, 
    title: 'Autonomous Swarm Models', 
    desc: 'Deploy high-fidelity, self-optimizing multi-agent workflows that handle complex analysis and reasoning tasks out-of-the-box.',
    detailedDesc: 'Powered by a self-healing neural mesh, our agentic swarms dynamically allocate context windows and synthesize complex logic without human intervention. By bridging advanced reasoning LLMs with robust memory architectures, the Intelligence module operates as an autonomous, persistent orchestrator capable of scaling infinite reasoning steps.',
    color: '#2f81f7',
    AnimationComponent: AnimatedIntelligence
  },
  { 
    id: 'infra', 
    label: 'INFRASTRUCTURE', 
    icon: <StorageIcon />, 
    title: 'High-Concurrency Compute Core', 
    desc: 'Fault-tolerant orchestration layers constructed to process high-load model serving with sub-millisecond execution times.',
    detailedDesc: 'At the foundation lies a heavily distributed gRPC and WebSockets-driven cluster, integrated seamlessly with Kubernetes. It dynamically auto-scales inference instances in response to telemetry surges, ensuring consistent sub-millisecond response rates across all global shards, eliminating cold starts entirely.',
    color: '#8957e5',
    AnimationComponent: AnimatedInfrastructure
  },
  { 
    id: 'render', 
    label: 'VISUALS & 3D', 
    icon: <TerminalIcon />, 
    title: 'Immersive Spatial Render Engine', 
    desc: 'Real-time WebGL canvas renderings and interactive spatial dashboards for complex data systems visualization.',
    detailedDesc: 'Our engine compiles GLSL shaders directly into optimized WebAssembly modules, ensuring fluid 120FPS rendering of complex datasets. By abstracting the heavy lifting of spatial mathematics, the engine allows teams to construct photorealistic data environments and interactive 3D simulations natively within the browser.',
    color: '#f0883e',
    AnimationComponent: AnimatedVisuals
  }
];

const ProductTabs = () => {
  return (
    <Box id="labs" sx={{ py: 20, background: 'linear-gradient(to bottom, #0d1117, #0a0d12)', borderBottom: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 16, textAlign: 'center' }}>
          <Typography className="mono-text" variant="caption" sx={{ color: 'secondary.main', mb: 2, display: 'block', letterSpacing: '0.4em', fontWeight: 600 }}>
            [ CORE_SYSTEMS_ARCHITECTURE ]
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, letterSpacing: '-0.04em' }}>
            A new standard for <span className="text-gradient">production.</span>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 12, md: 20 } }}>
          {features.map((feature, index) => {
            const Animation = feature.AnimationComponent;
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: isReversed ? 'row-reverse' : 'row' },
                    alignItems: 'center', 
                    gap: { xs: 8, md: 12 } 
                  }}
                >
                  {/* Content Column */}
                  <Box sx={{ flex: 1, position: 'relative', zIndex: 1, width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: '12px', background: `${feature.color}15`, color: feature.color, border: `1px solid ${feature.color}40` }}>
                         {feature.icon}
                       </Box>
                       <Typography className="mono-text" sx={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', color: feature.color }}>
                         {feature.label}
                       </Typography>
                    </Box>

                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, fontWeight: 500, lineHeight: 1.6, fontSize: '1.15rem', color: '#c9d1d9' }}>
                      {feature.desc}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 6, fontWeight: 400, lineHeight: 1.8, fontSize: '1rem', color: 'text.secondary', opacity: 0.8 }}>
                      {feature.detailedDesc}
                    </Typography>

                    <Button 
                      variant="outlined" 
                      sx={{ 
                        borderRadius: '30px', 
                        borderColor: feature.color, 
                        color: feature.color,
                        px: 4,
                        py: 1.5,
                        fontWeight: 700,
                        '&:hover': { background: `${feature.color}10`, borderColor: feature.color }
                      }}
                    >
                      Explore Module →
                    </Button>
                  </Box>

                  {/* Animation Column */}
                  <Box sx={{ flex: 1, position: 'relative', width: '100%' }}>
                    <Box 
                      sx={{ 
                        p: { xs: 2, md: 4 },
                        height: '100%',
                        minHeight: { xs: '300px', md: '450px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                      }}
                    >
                      {/* Ambient Glow */}
                      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: feature.color, filter: 'blur(150px)', opacity: 0.15, zIndex: 0 }} />
                      
                      <Box sx={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
                         <Animation color={feature.color} />
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
