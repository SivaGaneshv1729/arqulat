import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';

const AnimatedIntelligence = ({ color }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '200px', position: 'relative' }}>
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      style={{
        width: '40px', height: '40px', borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        boxShadow: `0 0 40px ${color}`,
        position: 'absolute',
        zIndex: 2
      }}
    />
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ rotate: 360 }}
        transition={{ duration: 8 + i * 4, repeat: Infinity, ease: "linear", reverse: i % 2 === 0 }}
        style={{ position: 'absolute', width: `${70 + i * 35}px`, height: `${70 + i * 35}px`, borderRadius: '50%', border: `1px dashed ${color}30` }}
      >
        <Box sx={{ width: '6px', height: '6px', borderRadius: '50%', background: color, position: 'absolute', top: -3, left: '50%', transform: 'translateX(-50%)', boxShadow: `0 0 10px ${color}` }} />
      </motion.div>
    ))}
  </Box>
);

const AnimatedInfrastructure = ({ color }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '200px' }}>
    {[...Array(4)].map((_, i) => (
      <Box key={i} sx={{ width: '220px', height: '32px', borderRadius: '6px', border: `1px solid ${color}40`, background: 'rgba(13, 17, 23, 0.8)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', px: 1.5 }}>
        <motion.div
          animate={{ x: ['-100%', '300%'] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
          style={{ position: 'absolute', top: 0, bottom: 0, width: '30px', background: `linear-gradient(90deg, transparent, ${color}30, transparent)` }}
        />
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {[...Array(3)].map((_, j) => (
            <Box key={j} sx={{ width: 4, height: 4, borderRadius: '50%', background: `${color}80` }} />
          ))}
        </Box>
        <Box sx={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: 1 }}>
          <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }} style={{ width: 6, height: 6, borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}` }} />
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#3fb950' }} />
        </Box>
      </Box>
    ))}
  </Box>
);

const AnimatedVisuals = ({ color }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '200px', position: 'relative', perspective: '1000px' }}>
    <motion.div
      animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      style={{ width: '130px', height: '130px', transformStyle: 'preserve-3d', position: 'relative' }}
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
    title: 'Custom AI/ML Solutions', 
    desc: 'Deploy customized retrieval augmented generation (RAG) loops and tailored local model architectures.',
    detailedDesc: 'We build and integrate intelligence modules based on open-source LLMs. By running and fine-tuning models locally or optimizing cloud APIs, we deliver highly customized agentic solutions that handle complex database querying, document retrieval, and workflow automation.',
    color: '#2f81f7',
    AnimationComponent: AnimatedIntelligence
  },
  { 
    id: 'infra', 
    label: 'CORE_SYSTEMS', 
    icon: <StorageIcon />, 
    title: 'High-Performance Backends & SaaS', 
    desc: 'Structured databases, resilient microservices, and fast application layers built to scale.',
    detailedDesc: 'We construct production-ready backends using TypeScript, Python, Node.js, and modern relational/NoSQL database schemas. Our focus is on writing maintainable, clean codebases and deploying secure APIs that handle complex workflows, concurrent sessions, and async queues.',
    color: '#8957e5',
    AnimationComponent: AnimatedInfrastructure
  },
  { 
    id: 'render', 
    label: 'FRONTEND_UX', 
    icon: <TerminalIcon />, 
    title: 'Sleek Client Viewports', 
    desc: 'High-performance frontend applications with crisp layouts, responsive grids, and fluid interactions.',
    detailedDesc: 'Using modern tools like React, Next.js, and Framer Motion, we build premium websites and dashboards that offer smooth transitions, fully responsive viewports, and interactive visual modules, ensuring a professional user experience that captivates clients.',
    color: '#f0883e',
    AnimationComponent: AnimatedVisuals
  }
];

const ProductTabs = () => {
  return (
    <Box id="labs" sx={{ py: { xs: 6, md: 8 }, background: '#0d1117', borderBottom: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography className="mono-text" variant="caption" sx={{ color: 'secondary.main', mb: 2, display: 'block', letterSpacing: '0.4em', fontWeight: 600 }}>
            [ CORE_SYSTEMS_ARCHITECTURE ]
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, letterSpacing: '-0.04em', fontSize: { xs: '2rem', md: '2.5rem' } }}>
            A new standard for <span className="text-gradient">production.</span>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 6 } }}>
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
                    gap: { xs: 2, md: 4 } 
                  }}
                >
                  {/* Content Column */}
                  <Box sx={{ flex: 1, position: 'relative', zIndex: 1, width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '10px', background: `${feature.color}15`, color: feature.color, border: `1px solid ${feature.color}40` }}>
                         {feature.icon}
                       </Box>
                       <Typography className="mono-text" sx={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', color: feature.color }}>
                         {feature.label}
                       </Typography>
                    </Box>

                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 1.5, lineHeight: 1.1, letterSpacing: '-0.03em', fontSize: { xs: '1.5rem', md: '1.85rem' } }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1.5, fontWeight: 500, lineHeight: 1.6, fontSize: '0.95rem', color: '#c9d1d9' }}>
                      {feature.desc}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, fontWeight: 400, lineHeight: 1.8, fontSize: '0.85rem', color: 'text.secondary', opacity: 0.8 }}>
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
                        minHeight: { xs: '200px', md: '280px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                      }}
                    >
                      {/* Ambient Glow */}
                      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '180px', height: '180px', background: feature.color, filter: 'blur(80px)', opacity: 0.15, zIndex: 0 }} />
                      
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
