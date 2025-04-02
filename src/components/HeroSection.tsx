import { Box, Container, Typography, Button, Grid, IconButton, useTheme } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Hi, I'm Zachary Picard
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Data Scientist & Engineer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  opacity: 0.8,
                  fontSize: '1.2rem',
                }}
              >
                Data Scientist proficient in Python, SQL, JavaScript, and Tableau, with expertise in Machine Learning, Data Engineering, and Full Stack Development. Skilled in building scalable data pipelines, deploying ML models, and developing interactive web applications to transform data into actionable insights.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  href="#contact"
                >
                  Get in Touch
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  href="/current-work"
                >
                  View My Work
                </Button>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  href="https://github.com/Zpicard"
                  target="_blank"
                  color="inherit"
                  size="large"
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/zachary-picard-217138224/"
                  target="_blank"
                  color="inherit"
                  size="large"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href="mailto:zacharypicard11@gmail.com"
                  color="inherit"
                  size="large"
                >
                  <Email />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Add your hero image or illustration here */}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 