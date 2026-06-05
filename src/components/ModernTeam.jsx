import { Box, Container, Typography, Avatar, Grid } from '@mui/material';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TeamCard = ({ member, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", height: '100%' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Box 
        sx={{ 
          textAlign: 'center',
          p: 5,
          height: '100%',
          background: 'rgba(22, 27, 34, 0.4)',
          backdropFilter: 'blur(10px)',
          border: '1px solid #30363d',
          borderRadius: 8,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            borderColor: member.color,
            background: 'rgba(22, 27, 34, 0.7)',
            boxShadow: `0 30px 60px -12px ${member.color}20`
          }
        }}
      >
        <Avatar 
          sx={{ 
            width: 100, 
            height: 100, 
            mx: 'auto', 
            mb: 4, 
            background: '#0d1117', 
            border: `2px solid ${member.color}`,
            boxShadow: `0 0 20px ${member.color}40`,
            color: member.color,
            fontWeight: 800,
            fontSize: '1.8rem',
            transform: 'translateZ(60px)'
          }}
        >
          {member.name[0]}
        </Avatar>
        
        <Box sx={{ transform: 'translateZ(40px)' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, letterSpacing: '-0.02em' }}>{member.name}</Typography>
          <Typography className="mono-text" sx={{ color: member.color, fontSize: '0.7rem', fontWeight: 800, mb: 4, display: 'block', letterSpacing: '0.1em' }}>
            {member.role.toUpperCase()}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7, opacity: 0.8 }}>
            {member.bio}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
            {member.tech.map((t, i) => (
              <Typography 
                key={i} 
                className="mono-text" 
                sx={{ 
                  fontSize: '0.65rem', 
                  color: 'text.secondary', 
                  opacity: 0.4,
                  background: 'rgba(255,255,255,0.03)',
                  px: 1,
                  py: 0.3,
                  borderRadius: 1
                }}
              >
                #{t}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

const specialists = [
  { 
    name: 'MEMBER_01', 
    role: 'AI & Agents Lead', 
    bio: 'Architecting neural workflows and agentic swarms.',
    tech: ['PyTorch', 'LangChain', 'OpenAI'],
    color: '#2f81f7' 
  },
  { 
    name: 'MEMBER_02', 
    role: 'Full Stack Architect', 
    bio: 'Bridging high-scale backends with immersive UIs.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    color: '#8957e5' 
  },
  { 
    name: 'MEMBER_03', 
    role: 'System Architect', 
    bio: 'Designing distributed cores for global scale.',
    tech: ['K8s', 'Spring Boot', 'Kafka'],
    color: '#38bdf8' 
  },
  { 
    name: 'MEMBER_04', 
    role: 'Gaming & 3D Lead', 
    bio: 'Crafting the next generation of real-time 3D.',
    tech: ['Unity', 'C#', 'Blender'],
    color: '#f0883e' 
  }
];

const ModernTeam = () => {
  return (
    <Box sx={{ py: 25, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 15, textAlign: 'center' }}>
          <Typography className="mono-text" variant="caption" sx={{ color: 'primary.main', mb: 2, display: 'block', letterSpacing: '0.4em' }}>
            [ 04. CORE_SPECIALISTS ]
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '4.5rem' } }}>
            The elite <span className="text-gradient">squad.</span>
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ perspective: '1000px' }}>
          {specialists.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <TeamCard member={member} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ModernTeam;
