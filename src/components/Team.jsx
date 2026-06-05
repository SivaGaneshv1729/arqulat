import { Box, Container, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const team = [
  { role: 'AI & Agents Lead', name: 'Member_01', angle: 0, color: '#2563EB' },
  { role: 'Full Stack Architect', name: 'Member_02', angle: 90, color: '#38BDF8' },
  { role: 'System Architect', name: 'Member_03', angle: 180, color: '#818CF8' },
  { role: 'Gaming & 3D Lead', name: 'Member_04', angle: 270, color: '#F0883E' },
];

const Team = () => {
  return (
    <Box sx={{ py: 15, position: 'relative', overflow: 'hidden', borderTop: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography variant="body1" color="primary" className="mono-text" sx={{ mb: 2, fontWeight: 600 }}>
            {/* 05. ELITE_TEAM */}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            A unified force of <span style={{ color: '#8b949e' }}>4 specialists.</span>
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', height: 600, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Center Branding */}
          <Box sx={{ position: 'absolute', zIndex: 10, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: -1, color: 'text.primary' }}>
              NEUR<span style={{ color: '#2f81f7' }}>AC</span>
            </Typography>
            <Typography variant="caption" className="mono-text" sx={{ color: 'text.secondary', display: 'block' }}>
              [ HUB_CORE ]
            </Typography>
          </Box>

          {/* Orbiting Members */}
          <Box
            sx={{ position: 'absolute', width: 450, height: 450, borderRadius: '50%', border: '1px solid #30363d' }}
          >
            {team.map((member, index) => {
              const radius = 225;
              const x = radius * Math.cos((member.angle * Math.PI) / 180);
              const y = radius * Math.sin((member.angle * Math.PI) / 180);

              return (
                <Box
                  key={index}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          bgcolor: '#161b22',
                          border: `2px solid ${member.color}`,
                          cursor: 'pointer',
                          fontWeight: 700,
                          color: member.color
                        }}
                      >
                        {member.name[0]}
                      </Avatar>
                      <Box sx={{ mt: 1.5, textAlign: 'center', p: 1, background: 'rgba(13, 17, 23, 0.8)', border: '1px solid #30363d', borderRadius: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.8rem' }}>{member.name}</Typography>
                        <Typography className="mono-text" variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem', display: 'block' }}>{member.role}</Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
