import { Box, Container, Typography, Paper, Grid, useTheme, Chip, IconButton, Tooltip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TimelineIcon from '@mui/icons-material/Timeline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';

const SkillsAndResume = () => {
  const theme = useTheme();
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const skills = {
    'Data Science': {
      icon: <DataObjectIcon sx={{ fontSize: 40 }} />,
      description: 'Expert in transforming complex data into actionable insights through advanced analytics, statistical modeling, and data visualization. Proficient in end-to-end data science workflows from data collection to model deployment.',
      tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Statistical Modeling', 'Data Visualization', 'Tableau', 'Power BI'],
      color: '#2196F3',
    },
    'Machine Learning': {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      description: 'Specialized in developing and optimizing machine learning models for predictive analytics and business intelligence. Experienced with advanced algorithms including XGBoost, Random Forest, and LightGBM, with a focus on model performance and interpretability.',
      tools: ['XGBoost', 'Random Forest', 'LightGBM', 'Model Evaluation', 'Feature Engineering', 'Hyperparameter Tuning', 'MLOps'],
      color: '#4CAF50',
    },
    'Full Stack Development': {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      description: 'Skilled in building scalable web applications with modern technologies. Strong focus on UI/UX design principles, data validation, and Python GUI development using Tkinter. Experienced in creating responsive and user-friendly interfaces.',
      tools: ['React', 'TypeScript', 'Python', 'Tkinter', 'UI/UX Design', 'Data Validation', 'REST APIs', 'Git'],
      color: '#FF9800',
    },
    'Data Visualization': {
      icon: <TimelineIcon sx={{ fontSize: 40 }} />,
      description: 'Proficient in creating compelling data visualizations and interactive dashboards that effectively communicate complex insights. Experienced with both technical visualization libraries and business intelligence tools.',
      tools: ['Tableau', 'Python Libraries', 'Power BI', 'Interactive Dashboards', 'Data Storytelling', 'Visual Analytics'],
      color: '#9C27B0',
    },
    'Cloud & DevOps': {
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      description: 'Experienced in cloud computing and DevOps practices, focusing on scalable data science workflows and model deployment. Skilled in containerization and continuous integration for data science projects.',
      tools: ['AWS', 'Docker', 'CI/CD', 'Model Deployment', 'Cloud Storage', 'API Management', 'Monitoring'],
      color: '#F44336',
    },
    'Database Management': {
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      description: 'Proficient in database design and management for data science applications. Experienced in both SQL and NoSQL databases, with a focus on data warehousing and optimization for analytical workloads.',
      tools: ['PostgreSQL', 'MongoDB', 'Data Warehousing', 'Query Optimization', 'ETL Processes', 'Data Modeling'],
      color: '#607D8B',
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Box sx={{ py: 8, minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{ 
              mb: 2, 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2c3e50 30%, #3498db 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Skills & Expertise
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ 
              mb: 8, 
              maxWidth: '800px', 
              mx: 'auto', 
              fontSize: '1.2rem',
              color: 'text.secondary',
            }}
          >
            A comprehensive overview of my technical skills and expertise in data science,
            software development, and related fields.
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {Object.entries(skills).map(([category, details], index) => (
              <Grid item xs={12} md={6} key={category}>
                <motion.div variants={itemVariants}>
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
                      border: expandedSkill === category ? `2px solid ${details.color}` : 'none',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                      },
                    }}
                    onClick={() => setExpandedSkill(expandedSkill === category ? null : category)}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ 
                        color: details.color, 
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        height: 60,
                        borderRadius: '12px',
                        background: `${details.color}15`,
                      }}>
                        {details.icon}
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                          {category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {details.description}
                        </Typography>
                      </Box>
                      <IconButton size="small">
                        {expandedSkill === category ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </IconButton>
                    </Box>

                    <AnimatePresence>
                      {expandedSkill === category && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {details.tools.map((tool) => (
                              <Tooltip key={tool} title={tool}>
                                <Chip
                                  label={tool}
                                  sx={{
                                    backgroundColor: `${details.color}15`,
                                    color: details.color,
                                    '&:hover': {
                                      backgroundColor: `${details.color}25`,
                                    },
                                  }}
                                />
                              </Tooltip>
                            ))}
                          </Box>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SkillsAndResume; 