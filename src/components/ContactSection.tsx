import { Box, Container, Typography, Button, IconButton, Stack, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const theme = useTheme();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <Box
      id="contact"
      sx={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
        color: 'white',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/images/pattern.svg")',
          opacity: 0.1,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div {...fadeInUp}>
          <Typography variant="h4" gutterBottom sx={{ 
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 4,
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Let's Connect
          </Typography>
          <Typography variant="h6" color="text.secondary" align="center" paragraph sx={{ mb: 4 }}>
            I'm actively seeking opportunities in data science and machine learning. Let's discuss how my expertise in predictive modeling, data visualization, and full-stack development can contribute to your team.
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            <IconButton
              href="https://github.com/Zpicard"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/zachary-picard-217138224/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <IconButton
              href="mailto:zacharypicard11@gmail.com"
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <EmailIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="mailto:zacharypicard11@gmail.com"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection; 