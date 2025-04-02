import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Current Work', path: '/current-work' },
  { label: 'Skills', path: '/skills' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => handleNavigation(item.path)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                color: location.pathname === item.path ? 'primary' : 'text.primary',
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(44, 62, 80, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled 
          ? '0 2px 10px rgba(0,0,0,0.1)' 
          : '0 2px 10px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease-in-out',
        borderBottom: scrolled 
          ? '1px solid rgba(0, 0, 0, 0.1)' 
          : '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: scrolled ? 'primary.main' : 'white',
              cursor: 'pointer',
              textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.2)',
              letterSpacing: '0.05em',
            }}
            onClick={() => handleNavigation('/')}
          >
            ZP
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                color: scrolled ? 'primary.main' : 'white',
                '&:hover': {
                  backgroundColor: scrolled 
                    ? 'rgba(44, 62, 80, 0.04)' 
                    : 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    color: scrolled ? 'primary.main' : 'white',
                    textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.2)',
                    position: 'relative',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: scrolled ? 'primary.main' : 'white',
                      transform: location.pathname === item.path ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)',
                    },
                    '&:hover': {
                      backgroundColor: scrolled 
                        ? 'rgba(44, 62, 80, 0.04)' 
                        : 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: 'background.paper',
            borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 