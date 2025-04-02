import { AppBar, Toolbar, Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Current Work', path: '/current-work' },
    { label: 'Skills & Resume', path: '/skills' },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'primary.main',
            fontWeight: 700,
          }}
        >
          Zachary Picard
        </Typography>

        {isMobile ? (
          <>
            <Button
              color="primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{ minWidth: 'auto' }}
            >
              <MenuIcon />
            </Button>
            {mobileMenuOpen && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  zIndex: 1000,
                  py: 2,
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    color="primary"
                    sx={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      px: 3,
                      py: 1.5,
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                color="primary"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(44, 62, 80, 0.04)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 