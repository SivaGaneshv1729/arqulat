import { Box, Container, Typography, Grid, Paper, Avatar, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  { 
    name: 'Prof. K. Srinivasan', 
    role: 'HOD, Computer Science', 
    username: '@srinivasan_cs',
    text: 'The Classmate RAG pipeline resolved student career inquiries seamlessly. Exceptional software craftsmanship and research execution from student builders.', 
    color: '#2f81f7',
    date: 'on May 14, 2026',
    reactions: [
      { emoji: '👍', count: 12 },
      { emoji: '❤️', count: 6 }
    ]
  },
  { 
    name: 'Rohan Mehta', 
    role: 'Co-Founder, QuickRent', 
    username: '@rohan_quickrent',
    text: 'Hostel SaaS automated our tenant room booking and security passes instantly. Exceptional engineering agility and robust database schema design.', 
    color: '#8957e5',
    date: 'on Jun 02, 2026',
    reactions: [
      { emoji: '👍', count: 9 },
      { emoji: '🎉', count: 4 }
    ]
  },
  { 
    name: 'Devika Nair', 
    role: 'Lead Organizer, Campus Hackfest', 
    username: '@devika_nair',
    text: 'Future Labs supported our campus incubator matches without any lag. Highly responsive frontend layouts, clean codebases, and fast sync.', 
    color: '#3fb950',
    date: 'on May 28, 2026',
    reactions: [
      { emoji: '👍', count: 15 },
      { emoji: '🚀', count: 8 },
      { emoji: '❤️', count: 5 }
    ]
  }
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 12, position: 'relative', borderTop: '1px solid #30363d', borderBottom: '1px solid #30363d', background: '#0d1117' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 3, display: 'inline-block' }}>
            [ 05. PEER_REVIEWS ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.04em' }}>
            Approved by the <span style={{ color: '#8b949e' }}>ecosystem.</span>
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((test, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    background: '#161b22',
                    border: '1px solid #30363d',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s',
                    '&:hover': {
                      borderColor: test.color
                    }
                  }}
                >
                  {/* GitHub Review Header Bar */}
                  <Box 
                    sx={{ 
                      px: 2.5, 
                      py: 1.5, 
                      background: '#161b22', 
                      borderBottom: '1px solid #30363d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 1.5
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar sx={{ bgcolor: `${test.color}20`, color: test.color, border: `1px solid ${test.color}40`, width: 28, height: 28, fontSize: '0.75rem', fontWeight: 800 }}>
                        {test.name[0]}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.8rem', color: 'text.primary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          {test.username}
                          <span style={{ color: '#8b949e', fontWeight: 400, fontSize: '0.75rem' }}>reviewed</span>
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box 
                        sx={{ 
                          px: 1, 
                          py: 0.2, 
                          borderRadius: '10px', 
                          border: '1px solid #2ea043', 
                          background: 'rgba(46, 160, 67, 0.15)',
                          color: '#3fb950',
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          fontFamily: '"JetBrains Mono", monospace'
                        }}
                      >
                        APPROVED
                      </Box>
                    </Box>
                  </Box>

                  {/* Comment Body */}
                  <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flexGrow: 1, background: '#0d1117', gap: 2 }}>
                    
                    {/* Timestamp */}
                    <Typography className="font-mono" sx={{ fontSize: '0.65rem', color: 'text.secondary' }}>
                      commented {test.date}
                    </Typography>

                    {/* Feedback content */}
                    <Typography variant="body1" sx={{ flexGrow: 1, color: 'text.primary', fontSize: '0.85rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                      &quot;{test.text}&quot;
                    </Typography>

                    {/* Reviewer Roles info */}
                    <Box sx={{ pt: 1.5, borderTop: '1px solid #21262d', display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ fontWeight: 800, fontSize: '0.85rem', color: 'text.primary' }}>
                        {test.name}
                      </Typography>
                      <Typography className="font-mono" sx={{ fontSize: '0.6rem', color: 'text.secondary', letterSpacing: '0.05em' }}>
                        {test.role.toUpperCase()}
                      </Typography>
                    </Box>

                    {/* GitHub Reactions Footer */}
                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                      {test.reactions.map((react, rIdx) => (
                        <Box 
                          key={rIdx}
                          sx={{ 
                            px: 1, 
                            py: 0.3, 
                            borderRadius: '10px', 
                            border: '1px solid #30363d', 
                            background: '#161b22', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 0.5,
                            cursor: 'pointer',
                            transition: 'border-color 0.2s',
                            '&:hover': {
                              borderColor: '#8b949e'
                            }
                          }}
                        >
                          <span style={{ fontSize: '0.7rem' }}>{react.emoji}</span>
                          <span style={{ fontSize: '0.65rem', color: '#8b949e', fontWeight: 600 }}>{react.count}</span>
                        </Box>
                      ))}
                    </Stack>

                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
