import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import InterestsIcon from '@mui/icons-material/Interests';

const About = () => {
  const theme = useTheme();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const education = [
    {
      school: 'University of Massachusetts Dartmouth',
      degree: 'Bachelor of Science in Data Science',
      date: '2022 - 2025',
      details: [
        'GPA: 3.7',
        'Coursework in Machine Learning, Data Visualization, Statistics, Matrix Methods',
        'Data Structures and Data Engineering, Web Application Development, Probability',
        'Strong foundation in data science principles and practical applications',
      ],
    },
    {
      school: 'University of New Hampshire',
      degree: 'Computer Science Studies',
      date: '2020 - 2022',
      details: [
        'Completed two years of Computer Science curriculum',
        'Developed strong programming fundamentals',
        'Gained exposure to software engineering principles',
      ],
    },
  ];

  const experience = [
    {
      company: 'Analogic',
      location: 'Peabody, MA',
      position: 'Data Analytics & Physics Intern',
      date: 'May 2022 - Present',
      details: [
        'Designed and developed a Python-based GUI tool to streamline data validation processes, enabling the team to successfully validate and advance extensive metadata files ahead of deadlines',
        'Developed and managed databases to train machine learning image detection models',
        'Enhanced the functionality and user experience of a JavaScript-based GUI designed for evaluating the accuracy of X-Ray segmentation and object identification by successfully adding 4 new features to the tool',
        'Directed a team on a data collection/validation project, coordinated efforts to assist in data collection for a new product line launch, ensuring project success and effective team collaboration despite a sudden, tight deadline',
      ],
    },
    {
      company: 'Sales Gauge',
      location: 'Remote',
      position: 'Sales & Programming Intern',
      date: 'Mar 2022 - June 2023',
      details: [
        'Research and develop custom algorithms using JavaScript that will be hosted on Learning Management System (LMS), empowering sales professionals to optimize sales strategies',
        'Create and implement a sales territory planning tool within Excel, enabling sales professionals to analyze their potential revenue and visualize a plan to execute across their territory, providing actionable insights',
      ],
    },
  ];

  const technicalSkills = {
    'Data Science & Analytics': [
      'Python (Pandas, NumPy, SciPy)',
      'SQL & Database Management',
      'Statistical Analysis',
      'Data Visualization (Tableau, Power BI)',
      'Big Data Processing',
      'ETL Processes',
      'Excel Advanced Analytics',
    ],
    'Machine Learning': [
      'XGBoost',
      'LightGBM',
      'Random Forest',
      'Model Optimization',
      'Feature Engineering',
      'Cross-validation',
      'Performance Metrics',
    ],
    'Data Visualization': [
      'Tableau',
      'Power BI',
      'Python Libraries (Matplotlib, Seaborn)',
      'D3.js',
      'Interactive Dashboards',
      'Data Storytelling',
    ],
    'Tools & Technologies': [
      'Git',
      'GitHub',
      'Docker',
      'AWS',
      'CI/CD',
      'Jupyter Notebooks',
      'VS Code',
    ],
  };

  const interests = [
    'Passionate about transforming complex data into actionable insights',
    'Interested in machine learning applications and predictive analytics',
    'Enjoys working on challenging data science problems',
    'Looking to contribute to impactful data-driven projects',
    'Continuous learning and skill development in data science',
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div {...fadeInUp}>
          <Typography variant="h2" align="center" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
            I am a data scientist with a passion for transforming complex data into actionable insights. My expertise in data analysis, machine learning, and visualization enables me to build comprehensive solutions that drive business value and inform strategic decisions.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div {...fadeInUp}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <SchoolIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                  <Typography variant="h4">Education</Typography>
                </Box>
                {education.map((edu, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="h6">{edu.school}</Typography>
                    <Typography variant="subtitle1" color="primary">
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {edu.date}
                    </Typography>
                    <ul>
                      {edu.details.map((detail, idx) => (
                        <li key={idx}>
                          <Typography variant="body2">{detail}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                ))}
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div {...fadeInUp}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <WorkIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                  <Typography variant="h4">Experience</Typography>
                </Box>
                {experience.map((exp, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="h6">{exp.company}</Typography>
                    <Typography variant="subtitle1" color="primary">
                      {exp.position}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {exp.location} | {exp.date}
                    </Typography>
                    <ul>
                      {exp.details.map((detail, idx) => (
                        <li key={idx}>
                          <Typography variant="body2">{detail}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                ))}
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div {...fadeInUp}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <CodeIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                  <Typography variant="h4">Technical Skills</Typography>
                </Box>
                <Grid container spacing={3}>
                  {Object.entries(technicalSkills).map(([category, skills], index) => (
                    <Grid item xs={12} sm={6} key={category}>
                      <Typography variant="h6" gutterBottom>
                        {category}
                      </Typography>
                      <ul>
                        {skills.map((skill, idx) => (
                          <li key={idx}>
                            <Typography variant="body2">{skill}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div {...fadeInUp}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <InterestsIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                  <Typography variant="h4">Interests</Typography>
                </Box>
                <ul>
                  {interests.map((interest, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{interest}</Typography>
                    </li>
                  ))}
                </ul>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 