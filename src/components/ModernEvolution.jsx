import { Box, Container, Typography, alpha, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const timelineData = [
  {
    date: 'SUMMER 2025 // GENESIS',
    title: 'Inhouse Internship 1.0',
    description: 'The journey began when Venkat and Veeranna were looking for a team in the AIML department. Sriram pitched an approved idea and teamed up with Siva Ganesh. We joined forces, forming the core team that started it all.',
    products: ['Team Formation', 'AIML Dept'],
    status: 'MAY 5 - JUN 29',
    color: '#3fb950', // GitHub Green
  },
  {
    date: 'AUG 2025 // FIRST HACKATHON',
    title: 'Bajaj HackRx 6.0',
    description: 'Participated in our first major hackathon together. This was a massive learning phase where we dived deep into building AI applications, mastering RAG pipelines, vectorization, and embeddings.',
    products: ['RAG', 'Vectorization', 'Embeddings'],
    status: 'AUG 1 - 14',
    color: '#2f81f7', // Blue
  },
  {
    date: 'APRIL 1ST // SHOWCASE',
    title: 'Prakalp Project Expo',
    description: 'Took our work public by participating in the external project expo "Prakalp" held at Ramachandra College of Engineering, Eluru, showcasing our technical capabilities to a broader audience.',
    products: ['Project Expo', 'Ramachandra Engg Colg'],
    status: 'COMPLETED',
    color: '#8957e5', // Purple
  },
  {
    date: 'PRESENT // ACTIVE DEVELOPMENT',
    title: 'Project Loom',
    description: 'We are currently laser-focused and actively working on Project Loom. All our previous hackathon and expo experiences have culminated into this product, and we are almost ready to deploy the very first version.',
    products: ['Project Loom', 'V1 Launch'],
    status: 'DEPLOYING SOON',
    color: '#d29922', // Yellow/Gold
  }
];

const ModernEvolution = () => {
  return (
    <Box id="evolution" sx={{ py: 15, background: 'transparent', position: 'relative', borderBottom: '1px solid #30363d' }}>
      <Container maxWidth="md">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 2, display: 'inline-block' }}>
            [ 02. EVOLUTION_TIMELINE ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.04em' }}>
            Our journey & <span className="text-gradient">products.</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}>
            From campus hackathons to deploying scalable SaaS architectures. A timeline of our shipped products and upcoming unified ecosystem.
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', pl: { xs: 4, md: 8 } }}>
          {/* Vertical Line */}
          <Box 
            sx={{ 
              position: 'absolute', 
              left: { xs: '15px', md: '31px' }, 
              top: 0, 
              bottom: 0, 
              width: '2px', 
              background: 'linear-gradient(to bottom, #3fb950, #2f81f7, #8957e5, #d29922)' 
            }} 
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{ position: 'relative' }}
              >
                {/* Node Dot */}
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    left: { xs: '-33px', md: '-57px' }, 
                    top: '24px', 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    background: '#0d1117',
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 0 10px ${item.color}`,
                    zIndex: 2
                  }} 
                />

                {/* Content Card */}
                <Box 
                  sx={{ 
                    p: 4, 
                    background: 'rgba(22, 27, 34, 0.6)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid #30363d', 
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      borderColor: item.color,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 10px 30px ${alpha(item.color, 0.1)}`
                    }
                  }}
                >
                  {/* Subtle Background Glow */}
                  <Box sx={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: `radial-gradient(circle, ${alpha(item.color, 0.1)} 0%, transparent 70%)`, filter: 'blur(20px)', zIndex: 0 }} />

                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                      <Typography className="mono-text" sx={{ color: item.color, fontWeight: 700, fontSize: '0.85rem' }}>
                        {item.date}
                      </Typography>
                      <Chip 
                        label={item.status} 
                        size="small" 
                        sx={{ 
                          background: `${item.color}15`, 
                          color: item.color, 
                          border: `1px solid ${item.color}30`,
                          fontFamily: 'monospace',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          height: '24px'
                        }} 
                      />
                    </Box>
                    
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#fff', fontSize: { xs: '1.5rem', md: '2rem' }, letterSpacing: '-0.02em' }}>
                      {item.title}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 3 }}>
                      {item.description}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {item.products.map((prod, pIdx) => (
                        <Box 
                          key={pIdx}
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            background: '#161b22',
                            border: '1px solid #30363d',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                          }}
                        >
                          <Typography className="mono-text" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 500 }}>
                            <span style={{ color: item.color, opacity: 0.7 }}>#</span> {prod}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ModernEvolution;
