import { Box, Container, Typography, Avatar, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';

const specialists = [
  {
    name: 'Venkata Ganesh',
    role: 'Origin — Principal Architect',
    bio: 'Shapes Arqulat\'s vision, transforming ambitious ideas into scalable products, intelligent systems, and immersive digital experiences across AI and software.',
    image: 'https://github.com/github.png',
    links: {
      github: 'https://github.com/ganesh714/',
      linkedin: 'https://www.linkedin.com/in/venkata-ganesh-934072291/',
      mail: 'mailto:evvganesh1@gmail.com'
    },
    tech: ['PyTorch', 'LangChain', 'OpenAI'],
    color: '#2f81f7',
    alias: 'core_intel'
  },
  {
    name: 'Siva Ganesh',
    role: 'Forge — Creative Architect',
    bio: 'Crafts seamless product experiences blending functionality with design, turning complex concepts into intuitive interfaces and compelling visual user journeys.',
    image: 'https://github.com/github.png',
    links: {
      github: 'https://github.com/sivaGaneshv1729/',
      linkedin: 'https://www.linkedin.com/in/siva-ganesh-vemula/',
      mail: 'mailto:sivaganeshv1729@gmail.com'
    },
    tech: ['Next.js', 'Go', 'PostgreSQL'],
    color: '#38bdf8',
    alias: 'app_sync'
  },
  {
    name: 'Sri Ram',
    role: 'Scout — Intelligence Strategist',
    bio: 'Explores emerging AI capabilities and validates new ideas to identify strategic opportunities that shape the future of our products.',
    image: 'https://github.com/github.png',
    links: {
      github: 'https://github.com/srirame5/',
      linkedin: 'https://www.linkedin.com/in/sriram-chodabattula-09b08a174/',
      mail: 'mailto:sriramchodabattula777@gmail.com'
    },
    tech: ['K8s', 'Docker', 'Redis'],
    color: '#8957e5',
    alias: 'infra_root'
  },
  {
    name: 'Veeranna',
    role: 'Anchor — Operations Steward',
    bio: 'Ensures ideas move from concept to completion by coordinating workflows, maintaining documentation, and supporting the team\'s daily execution.',
    image: 'https://github.com/github.png',
    links: {
      github: 'https://github.com/NagaVeeranna',
      linkedin: 'https://www.linkedin.com/in/naga-veeranna-97a133286/',
      mail: 'mailto:nagaveeranna1234@gmail.com'
    },
    tech: ['Three.js', 'GLSL', 'Blender'],
    color: '#f0883e',
    alias: 'render_eng'
  }
];

const ModernTeam = () => {
  return (
    <Box id="collective" sx={{ py: 15, background: 'transparent', position: 'relative', borderBottom: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Box className="section-label" sx={{ mb: 2, display: 'inline-block' }}>
            [ 04. CORE_DEVELOPERS ]
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.04em' }}>
            The technical backbone. <br />
            Engineered for <span className="text-gradient">excellence.</span>
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            flexWrap: { xs: 'wrap', lg: 'nowrap' },
            width: '100%'
          }}
        >
          {specialists.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ flex: 1, minWidth: '260px', maxWidth: '320px' }}
            >
              <Box
                sx={{
                  py: 4,
                  px: 2.5,
                  height: '100%',
                  background: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: member.color,
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px -20px ${member.color}40`,
                    '& .member-image': {
                      borderColor: member.color,
                      boxShadow: `0 0 20px ${member.color}40`
                    }
                  }
                }}
              >
                <Avatar
                  src={member.image}
                  className="member-image"
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 3,
                    background: '#0d1117',
                    border: `2px solid #30363d`,
                    transition: '0.3s'
                  }}
                />

                <Box sx={{ mb: 2, width: '100%' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.25rem', mb: 0.5, width: '100%' }}>
                    {member.name}
                  </Typography>
                  <Typography className="font-mono" sx={{ color: member.color, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', width: '100%' }}>
                    {member.role}
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, fontSize: '0.8rem', lineHeight: 1.6, flexGrow: 1, width: '100%' }}>
                  {member.bio}
                </Typography>

                <Stack direction="row" spacing={1}>
                  <IconButton
                    size="small"
                    href={member.links.github}
                    target="_blank"
                    sx={{ color: 'text.secondary', '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.05)' } }}
                  >
                    <GitHubIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                  <IconButton
                    size="small"
                    href={member.links.linkedin}
                    target="_blank"
                    sx={{ color: 'text.secondary', '&:hover': { color: '#0077b5', background: 'rgba(0,119,181,0.05)' } }}
                  >
                    <LinkedInIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                  {member.links.portfolio && (
                    <IconButton
                      size="small"
                      href={member.links.portfolio}
                      target="_blank"
                      sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', background: 'rgba(47, 129, 247, 0.05)' } }}
                    >
                      <LanguageIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  )}
                  <IconButton
                    size="small"
                    href={member.links.mail}
                    sx={{ color: 'text.secondary', '&:hover': { color: '#f0883e', background: 'rgba(240,136,62,0.05)' } }}
                  >
                    <EmailIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Stack>

                {/* ID Tag in Corner */}
                <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
                  <Typography className="font-mono" sx={{ color: 'text.secondary', fontSize: '0.5rem', opacity: 0.4 }}>
                    #{member.alias}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ModernTeam;
