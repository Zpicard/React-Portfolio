import { Box, Container, Typography, Paper, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useState } from 'react';

const SkillsAndResume = () => {
  const theme = useTheme();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = {
    'Data Science': {
      icon: <DataObjectIcon sx={{ fontSize: 40 }} />,
      description: 'Proficient in data analysis, visualization, and machine learning using Python, R, and various data science libraries.',
      tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'R', 'Tableau'],
    },
    'Full Stack Development': {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      description: 'Experienced in building modern web applications using React, Node.js, and various frontend/backend technologies.',
      tools: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'],
    },
    'Machine Learning': {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      description: 'Skilled in developing and deploying machine learning models for various applications including predictive analytics and natural language processing.',
      tools: ['Deep Learning', 'NLP', 'Computer Vision', 'Time Series Analysis', 'Model Deployment'],
    },
    'Data Visualization': {
      icon: <TimelineIcon sx={{ fontSize: 40 }} />,
      description: 'Expert in creating compelling data visualizations and interactive dashboards using various tools and libraries.',
      tools: ['Tableau', 'D3.js', 'Plotly', 'Matplotlib', 'Seaborn', 'Power BI'],
    },
    'Cloud & DevOps': {
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      description: 'Experienced in cloud computing and DevOps practices for scalable and maintainable applications.',
      tools: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Jenkins'],
    },
    'Database Management': {
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      description: 'Proficient in database design, optimization, and management for both SQL and NoSQL databases.',
      tools: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'],
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <Box sx={{ py: 8 }}>
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
            Skills & Expertise
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto', fontSize: '1.2rem' }}
          >
            A comprehensive overview of my technical skills and expertise in data science,
            software development, and related fields.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {Object.entries(skills).map(([category, details], index) => (
            <Grid item xs={12} md={6} key={category}>
              <motion.div
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer',
                    border: selectedSkill === category ? `2px solid ${theme.palette.primary.main}` : 'none',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                    },
                  }}
                  onClick={() => setSelectedSkill(selectedSkill === category ? null : category)}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {details.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {category}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {details.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {details.tools.map((tool) => (
                      <Paper
                        key={tool}
                        elevation={0}
                        sx={{
                          px: 2,
                          py: 1,
                          backgroundColor: 'primary.light',
                          color: 'white',
                          borderRadius: '20px',
                          fontSize: '0.875rem',
                        }}
                      >
                        {tool}
                      </Paper>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Interactive Resume
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Click on any skill category to see detailed experience and projects
          </Typography>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {selectedSkill} Experience
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {skills[selectedSkill as keyof typeof skills].description}
                </Typography>
                {/* Add more detailed experience information here */}
              </Paper>
            </motion.div>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsAndResume; 