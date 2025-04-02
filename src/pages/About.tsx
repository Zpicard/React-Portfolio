import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import InterestsIcon from '@mui/icons-material/Interests';

const About = () => {
  const theme = useTheme();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const sections = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: 'Technical Skills',
      content: [
        'Full Stack Development with React, Node.js, and TypeScript',
        'Data Analysis and Visualization using Python, Pandas, and Tableau',
        'Machine Learning and Predictive Analytics',
        'Database Design and Management',
        'Cloud Services and DevOps',
        'Agile Methodologies and Version Control',
      ],
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Education',
      content: [
        'Bachelor of Science in Computer Science',
        'Minor in Data Science',
        'Relevant Coursework:',
        '- Advanced Software Engineering',
        '- Machine Learning and AI',
        '- Database Systems',
        '- Web Development',
      ],
    },
    {
      icon: <WorkIcon sx={{ fontSize: 40 }} />,
      title: 'Experience',
      content: [
        'Software Development Intern at Tech Company',
        'Data Science Research Assistant',
        'Freelance Web Developer',
        'Technical Projects:',
        '- Full-stack web applications',
        '- Data visualization dashboards',
        '- Machine learning models',
      ],
    },
    {
      icon: <InterestsIcon sx={{ fontSize: 40 }} />,
      title: 'Interests & Goals',
      content: [
        'Passionate about creating innovative solutions',
        'Interested in AI and machine learning applications',
        'Enjoys working on challenging technical problems',
        'Looking to contribute to impactful projects',
        'Continuous learning and skill development',
      ],
    },
  ];

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
            About Me
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto', fontSize: '1.2rem' }}
          >
            I'm a passionate full-stack developer with a strong foundation in computer science
            and a keen interest in creating innovative solutions. My journey in technology
            has been driven by a desire to build applications that make a difference.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
            },
            gap: 4,
          }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {section.icon}
                </Box>
                <Typography variant="h5" gutterBottom>
                  {section.title}
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {section.content.map((item, i) => (
                    <Typography
                      key={i}
                      component="li"
                      sx={{ mb: 1, color: 'text.secondary' }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About; 