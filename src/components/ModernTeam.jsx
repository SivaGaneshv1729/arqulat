import { Box, Container, Typography, Avatar, IconButton, Stack } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const specialists = [
  {
    name: 'Venkata Ganesh',
    role: 'Principal Architect',
    roleTag: 'Origin',
    bio: "Shapes Arqulat's vision, transforming ambitious ideas into scalable products, intelligent systems, and immersive digital experiences across AI and software.",
    image: 'https://github.com/github.png',
    links: {
      github: 'https://github.com/ganesh714/',
      linkedin: 'https://www.linkedin.com/in/venkata-ganesh-934072291/',
      mail: 'mailto:evvganesh1@gmail.com'
    },
    tech: ['PyTorch', 'LangChain', 'Spring Boot'],
    color: '#2f81f7',
    alias: 'core_intel'
  },
  {
    name: 'Siva Ganesh',
    role: 'Creative Architect',
    roleTag: 'Forge',
    bio: 'Crafts seamless product experiences blending functionality with design, turning complex concepts into intuitive interfaces and compelling visual user journeys.',
    image: 'https://github.com/github.png',
    links: {
      github: 'https://github.com/sivaGaneshv1729/',
      linkedin: 'https://www.linkedin.com/in/siva-ganesh-vemula/',
      mail: 'mailto:sivaganeshv1729@gmail.com'
    },
    tech: ['React', 'TypeScript', 'PostgreSQL'],
    color: '#38bdf8',
    alias: 'app_sync'
  },
  {
    name: 'Sri Ram',
    role: 'Intelligence Strategist',
    roleTag: 'Scout',
    bio: 'Explores emerging AI capabilities and validates new ideas to identify strategic opportunities that shape the future of our products.',
    image: 'https://github.com/github.png',
    links: {
      github: 'https://github.com/srirame5/',
      linkedin: 'https://www.linkedin.com/in/sriram-chodabattula-09b08a174/',
      mail: 'mailto:sriramchodabattula777@gmail.com'
    },
    tech: ['LLMs', 'RAG', 'Embeddings'],
    color: '#8957e5',
    alias: 'infra_root'
  },
  {
    name: 'Veeranna',
    role: 'Operations Steward',
    roleTag: 'Anchor',
    bio: "Ensures ideas move from concept to completion by coordinating workflows, maintaining documentation, and supporting the team's daily execution.",
    image: 'https://github.com/github.png',
    links: {
      github: 'https://github.com/NagaVeeranna',
      linkedin: 'https://www.linkedin.com/in/naga-veeranna-97a133286/',
      mail: 'mailto:nagaveeranna1234@gmail.com'
    },
    tech: ['Coordination', 'Docs', 'Research'],
    color: '#f0883e',
    alias: 'render_eng'
  }
];

const MemberCard = ({ member, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ flex: 1, minWidth: '240px', maxWidth: '300px' }}
    >
      <Box
        sx={{
          height: '100%',
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: '20px',
          overflow: 'hidden',
          position: 'relative',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            borderColor: member.color,
            boxShadow: `0 0 0 1px ${member.color}30, 0 24px 48px -12px ${member.color}25`,
            transform: 'translateY(-6px)',
            '& .role-tag': { opacity: 1, transform: 'translateY(0)' },
            '& .member-glow': { opacity: 1 },
          }
        }}
      >
        {/* Top accent bar */}
        <Box sx={{ height: '3px', background: `linear-gradient(90deg, ${member.color}, ${member.color}00)` }} />

        {/* Background glow on hover */}
        <Box
          className="member-glow"
          sx={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '200px',
            background: `radial-gradient(ellipse at 50% 0%, ${member.color}14 0%, transparent 70%)`,
            opacity: 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
          }}
        />

        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: 'calc(100% - 3px)' }}>

          {/* Header row: avatar + name/role */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
            <Box sx={{ position: 'relative', flexShrink: 0 }}>
              <Avatar
                src={member.image}
                sx={{
                  width: 52,
                  height: 52,
                  border: `2px solid #30363d`,
                  transition: '0.3s',
                  '.MuiBox-root:hover &': {
                    borderColor: member.color,
                    boxShadow: `0 0 0 3px ${member.color}20`,
                  }
                }}
              />
              {/* Small colored status dot */}
              <Box sx={{
                position: 'absolute', bottom: 1, right: 1,
                width: 9, height: 9,
                borderRadius: '50%',
                background: member.color,
                border: '2px solid #0d1117',
                boxShadow: `0 0 6px ${member.color}`,
              }} />
            </Box>

            <Box>
              <Typography sx={{ fontWeight: 800, fontSize: '1rem', color: '#fff', lineHeight: 1.2, mb: 0.3 }}>
                {member.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <Typography
                  className="mono-text"
                  sx={{ color: member.color, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', opacity: 0.8 }}
                >
                  {member.roleTag}
                </Typography>
                <Box sx={{ width: '1px', height: '10px', background: '#30363d' }} />
                <Typography
                  className="mono-text"
                  sx={{ color: 'text.secondary', fontSize: '0.6rem', letterSpacing: '0.08em' }}
                >
                  {member.role}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Bio */}
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', fontSize: '0.8rem', lineHeight: 1.65, mb: 2.5, flexGrow: 1 }}
          >
            {member.bio}
          </Typography>

          {/* Tech tags */}
          <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap', mb: 2.5 }}>
            {member.tech.map((t) => (
              <Box
                key={t}
                sx={{
                  px: 1.2, py: 0.35,
                  borderRadius: '6px',
                  background: `${member.color}10`,
                  border: `1px solid ${member.color}25`,
                  fontSize: '0.65rem',
                  color: member.color,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                {t}
              </Box>
            ))}
          </Box>

          {/* Divider */}
          <Box sx={{ height: '1px', background: '#21262d', mb: 2 }} />

          {/* Social + alias row */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Stack direction="row" spacing={0.5}>
              <IconButton size="small" href={member.links.github} target="_blank"
                sx={{ color: '#8b949e', p: 0.8, '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.06)' } }}>
                <GitHubIcon sx={{ fontSize: 15 }} />
              </IconButton>
              <IconButton size="small" href={member.links.linkedin} target="_blank"
                sx={{ color: '#8b949e', p: 0.8, '&:hover': { color: '#0077b5', background: 'rgba(0,119,181,0.08)' } }}>
                <LinkedInIcon sx={{ fontSize: 15 }} />
              </IconButton>
              <IconButton size="small" href={member.links.mail}
                sx={{ color: '#8b949e', p: 0.8, '&:hover': { color: member.color, background: `${member.color}10` } }}>
                <EmailIcon sx={{ fontSize: 15 }} />
              </IconButton>
            </Stack>

            <Typography
              className="font-mono"
              sx={{ color: 'text.secondary', fontSize: '0.5rem', opacity: 0.35, letterSpacing: '0.08em' }}
            >
              #{member.alias}
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

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

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          flexWrap: { xs: 'wrap', lg: 'nowrap' },
          width: '100%',
          alignItems: 'stretch',
        }}>
          {specialists.map((member, index) => (
            <MemberCard key={index} member={member} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ModernTeam;
