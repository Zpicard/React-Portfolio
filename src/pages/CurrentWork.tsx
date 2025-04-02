import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const CurrentWork = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const projects = [
    {
      title: 'Instacart Market Basket Analysis',
      description: 'A comprehensive analysis of customer purchasing patterns using machine learning techniques. The project involves data preprocessing, feature engineering, and predictive modeling to forecast customer behavior.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'LightGBM'],
      github: 'https://github.com/Zpicard/Instacart-Market-Basket-Analysis',
      demo: 'https://github.com/Zpicard/Instacart-Market-Basket-Analysis',
      image: '/instacart.png',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Material-UI. Features include smooth animations, dark mode support, and a clean, professional design.',
      technologies: ['React', 'TypeScript', 'Material-UI', 'Framer Motion'],
      github: 'https://github.com/Zpicard/React-Portfolio',
      demo: 'https://zpicard.github.io/React-Portfolio/',
      image: '/portfolio.png',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div {...fadeInUp}>
          <Typography variant="h2" align="center" gutterBottom>
            Current Work
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
            Here are some of my recent projects and ongoing work. Each project showcases different aspects of my skills and expertise.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.title}>
              <motion.div
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: 200,
                      mb: 2,
                      borderRadius: 1,
                      overflow: 'hidden',
                      background: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, flexGrow: 1 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Typography
                        key={tech}
                        component="span"
                        sx={{
                          display: 'inline-block',
                          mr: 1,
                          mb: 1,
                          px: 2,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: 'primary.main',
                          color: 'white',
                          fontSize: '0.875rem',
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<LaunchIcon />}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Demo
                    </Button>
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

export default CurrentWork; 