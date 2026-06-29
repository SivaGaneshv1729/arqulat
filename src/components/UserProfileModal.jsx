import { Dialog, Box, Typography, Button, IconButton, Divider, alpha, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import scifiAvatar from '../assets/avatar.png';

const UserProfileModal = ({ open, onClose, user, onLogout }) => {
  const navigate = useNavigate();
  // Mock products (empty by default to show the Explore button)
  const userProducts = [];

  const handleExplore = () => {
    onClose();
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('capabilities');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } else {
      const element = document.getElementById('capabilities');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          background: 'rgba(13, 17, 23, 0.85)',
          backdropFilter: 'blur(24px)',
          border: '1px solid #30363d',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
          m: 2
        }
      }}
    >
      {/* Glow Effect */}
      <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '200px', height: '100px', background: 'radial-gradient(ellipse, rgba(47, 129, 247, 0.3) 0%, transparent 70%)', filter: 'blur(30px)', zIndex: 0 }} />

      <Box sx={{ position: 'relative', zIndex: 1, p: 4 }}>
        <IconButton 
          onClick={onClose} 
          sx={{ position: 'absolute', top: 16, right: 16, color: 'text.secondary', '&:hover': { color: 'white' } }}
        >
          <CloseIcon />
        </IconButton>

        {/* Profile Header */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2, mb: 4 }}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Avatar
              src={user?.picture || scifiAvatar}
              sx={{ 
                width: 120, 
                height: 120, 
                border: '3px solid rgba(47, 129, 247, 0.5)', 
                boxShadow: '0 0 30px rgba(47, 129, 247, 0.3)',
                mb: 3
              }}
            />
          </motion.div>
          <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', mb: 0.5, letterSpacing: '-0.02em' }}>
            {user?.name || 'Authorized User'}
          </Typography>
          <Typography variant="body2" className="mono-text" sx={{ color: 'text.secondary' }}>
            {user?.email || 'user@arqulat.collective'}
          </Typography>
          <Box 
            className="mono-text"
            sx={{ 
              mt: 2,
              fontSize: '0.65rem',
              color: '#3fb950',
              border: '1px solid rgba(63, 185, 80, 0.2)',
              background: 'rgba(63, 185, 80, 0.05)',
              px: 2,
              py: 0.5,
              borderRadius: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em'
            }}
          >
            ACCESS_LEVEL: TIER_1
          </Box>
        </Box>

        <Divider sx={{ borderColor: '#30363d', mb: 4 }} />

        {/* Products Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 700, mb: 2, letterSpacing: '0.05em' }}>
            YOUR ACTIVE NODES
          </Typography>

          {userProducts.length > 0 ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {userProducts.map((prod, idx) => (
                <Box key={idx} sx={{ p: 2, border: '1px solid #30363d', borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>{prod.name}</Typography>
                </Box>
              ))}
            </Box>
          ) : (
            <Box sx={{ textAlign: 'center', py: 3, px: 2, border: '1px dashed #30363d', borderRadius: '16px', background: 'rgba(255,255,255,0.01)' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                No active processing nodes assigned to this terminal.
              </Typography>
              <Button
                variant="contained"
                onClick={handleExplore}
                sx={{
                  background: 'white',
                  color: 'black',
                  borderRadius: '20px',
                  fontWeight: 700,
                  px: 4,
                  py: 1,
                  textTransform: 'none',
                  '&:hover': { background: 'rgba(255,255,255,0.9)' }
                }}
              >
                Explore Products
              </Button>
            </Box>
          )}
        </Box>

        <Divider sx={{ borderColor: '#30363d', mb: 4 }} />

        <Button
          fullWidth
          variant="outlined"
          onClick={onLogout}
          sx={{
            borderRadius: '20px',
            color: '#ff7b72',
            borderColor: 'rgba(255, 123, 114, 0.3)',
            fontWeight: 700,
            py: 1.5,
            '&:hover': { background: 'rgba(255, 123, 114, 0.1)', borderColor: '#ff7b72' }
          }}
        >
          Terminate Session
        </Button>
      </Box>
    </Dialog>
  );
};

export default UserProfileModal;
