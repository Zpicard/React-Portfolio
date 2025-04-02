import { Box, Container, Typography, Paper, useTheme, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TimelineIcon from '@mui/icons-material/Timeline';
import DataObjectIcon from '@mui/icons-material/DataObject';

const CurrentWork = () => {
  const theme = useTheme();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const projects = [
    {
      title: 'Analogic Data Analytics',
      description: 'Working as a Data Analytics & Physics Intern, developing Python-based GUI tools and managing databases for machine learning image detection models.',
      icon: <DataObjectIcon sx={{ fontSize: 40 }} />,
      status: 'In Progress',
      technologies: ['Python', 'GUI Design', 'Machine Learning', 'Database Management'],
      githubUrl: 'https://github.com/zpicard/analogic-projects',
    },
    {
      title: 'eBay Product Insights',
      description: 'Developing a project utilizing eBay\'s merchandising API and OpenAI integration for product price comparison and analysis.',
      icon: <TimelineIcon sx={{ fontSize: 40 }} />,
      status: 'In Development',
      technologies: ['Python', 'API Integration', 'OpenAI', 'Data Analysis'],
      githubUrl: 'https://github.com/zpicard/ebay-product-insights',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website built with React, TypeScript, and Material-UI, showcasing my projects and skills.',
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      status: 'Completed',
      technologies: ['React', 'TypeScript', 'Material-UI', 'Vite'],
      githubUrl: 'https://github.com/zpicard/portfolio',
    },
  ];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      sx={{ py: 8 }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Current Work
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto', fontSize: '1.2rem' }}
          >
            Explore my ongoing projects and work experience in data science and software development.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {project.icon}
                </Box>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'inline-block',
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      bgcolor: theme.palette.primary.main,
                      color: 'white',
                    }}
                  >
                    {project.status}
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  {project.technologies.map((tech) => (
                    <Typography
                      key={tech}
                      variant="caption"
                      sx={{
                        display: 'inline-block',
                        mr: 1,
                        mb: 1,
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        bgcolor: theme.palette.primary.light,
                        color: 'white',
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ mt: 'auto' }}>
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                  >
                    View Code
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CurrentWork; 