import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const cards = [
  {
    title: 'Agency',
    label: 'ARQULAT_PRO',
    icon: <CodeIcon fontSize="large" color="primary" />,
    items: ['Web Development', 'Mobile Apps', 'Branding', 'Automation'],
    colSpan: { xs: 12, md: 8 },
    rowSpan: 1,
  },
  {
    title: 'Startup',
    label: 'ARQULAT_LABS',
    icon: <RocketLaunchIcon fontSize="large" color="secondary" />,
    items: ['Product Building', 'Research', 'Innovation'],
    colSpan: { xs: 12, md: 4 },
    rowSpan: 2,
  },
  {
    title: 'Club',
    label: 'ARQULAT_ORG',
    icon: <GroupIcon fontSize="large" sx={{ color: '#8957e5' }} />,
    items: ['Hackathons', 'Events', 'Workshops'],
    colSpan: { xs: 12, md: 4 },
    rowSpan: 1,
  },
  {
    title: 'Community',
    label: 'ARQULAT_HUB',
    icon: <LightbulbIcon fontSize="large" sx={{ color: '#d29922' }} />,
    items: ['Open Source Contribution', 'Technical Mentorship', 'Algorithm Design'],
    colSpan: { xs: 12, md: 4 },
    rowSpan: 1,
  }
];

const BentoGrid = () => {
  return (
    <Box sx={{ py: 15, position: 'relative', borderTop: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
            An ecosystem <span style={{ color: '#8b949e' }}>designed to accelerate your growth.</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" className="mono-text" sx={{ fontSize: '1.1rem' }}>
            {'// 01. THE_STRUCTURE'}
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={card.colSpan.xs} md={card.colSpan.md} key={index} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ width: '100%', display: 'flex' }}
              >
                <Paper
                  elevation={0}
                  className="glow-border"
                  sx={{
                    p: 4,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    background: '#161b22',
                    border: '1px solid #30363d',
                    borderRadius: 2,
                    transition: '0.2s',
                    '&:hover': {
                      borderColor: '#8b949e',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 4, alignItems: 'flex-start' }}>
                    <Box sx={{ color: 'text.secondary' }}>
                      {card.icon}
                    </Box>
                    <Typography className="mono-text" variant="caption" sx={{ color: 'text.secondary', border: '1px solid #30363d', px: 1, py: 0.2, borderRadius: 1 }}>
                      {card.label}
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                    {card.title}
                  </Typography>
                  <Box sx={{ mt: 'auto', width: '100%' }}>
                    {card.items.map((item, idx) => (
                      <Typography key={idx} variant="body2" color="text.secondary" sx={{ mb: 1.5, display: 'flex', alignItems: 'center', pb: 1, borderBottom: '1px solid rgba(48, 54, 61, 0.4)' }}>
                        <span style={{ marginRight: '12px', color: '#2f81f7', fontWeight: 'bold' }}>→</span> {item}
                      </Typography>
                    ))}
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

export default BentoGrid;
