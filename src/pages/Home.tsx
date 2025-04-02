import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProjectShowcase from '../components/ProjectShowcase';
import ContactSection from '../components/ContactSection';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Home = () => {
  const theme = useTheme();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const featuredProjects = [
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React, TypeScript, and Material-UI. Features include smooth animations with Framer Motion, responsive design, and interactive components. Implemented using modern web development practices including component-based architecture, TypeScript for type safety, and Material-UI for consistent design.',
      imageUrl: 'https://placehold.co/600x400/2c3e50/ffffff?text=Portfolio+Website',
      githubUrl: 'https://github.com/Zpicard/portfolio-react',
      demoUrl: 'https://zpicard.github.io/React-Portfolio',
      technologies: ['React', 'TypeScript', 'Material-UI', 'Framer Motion', 'Vite', 'CSS-in-JS', 'Responsive Design'],
    },
    {
      title: 'Nashville Real Estate Market Analysis',
      description: 'Comprehensive real estate market analysis project leveraging advanced data science techniques. Developed a robust data pipeline using SQL for data cleaning and feature engineering, created interactive visualizations in Tableau, and implemented machine learning models to predict property values. The analysis provides actionable insights for real estate investors and market stakeholders.',
      imageUrl: 'https://placehold.co/600x400/2c3e50/ffffff?text=Nashville+Real+Estate+Analysis',
      githubUrl: 'https://github.com/zpicard/nashville-housing-analysis',
      demoUrl: 'https://public.tableau.com/views/NashvilleHousingAnalysis',
      technologies: ['SQL', 'Python', 'Tableau', 'Machine Learning', 'Matplotlib', 'NumPy'],
    },
    {
      title: 'eBay Market Intelligence Platform',
      description: 'Advanced market intelligence platform leveraging eBay\'s merchandising API and OpenAI integration. Developed a sophisticated data pipeline to analyze trending products across technology categories, implement dynamic pricing strategies, and generate competitive market insights. Features include real-time price tracking, market trend analysis, and AI-powered price recommendations.',
      imageUrl: 'https://placehold.co/600x400/2c3e50/ffffff?text=eBay+Market+Intelligence',
      githubUrl: 'https://github.com/zpicard/ebay-product-insights',
      demoUrl: 'https://zpicard.github.io/ebay-product-insights',
      technologies: ['Python', 'API Integration', 'OpenAI', 'Data Analysis', 'Pandas', 'Machine Learning'],
    },
  ];

  return (
    <Box>
      <HeroSection />
      <FeaturesSection />

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
              Featured Projects
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ mb: 8, maxWidth: '800px', mx: 'auto', fontSize: '1.2rem' }}
            >
              Explore my recent projects showcasing my expertise in data science,
              machine learning, and full-stack development.
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
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <ProjectShowcase {...project} />
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          py: 8,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
          color: 'white',
        }}
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
              Expertise Areas
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ mb: 8, maxWidth: '800px', mx: 'auto', fontSize: '1.2rem', opacity: 0.9 }}
            >
              My diverse skill set spans across data science, machine learning, and software development.
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: 4,
            }}
          >
            {[
              {
                icon: <DataObjectIcon sx={{ fontSize: 40 }} />,
                title: 'Data Science',
                description: 'Expert in data analysis, visualization, and statistical modeling using Python (Pandas, NumPy, SciPy), SQL, and Tableau. Skilled in exploratory data analysis and predictive modeling.',
              },
              {
                icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
                title: 'Machine Learning',
                description: 'Experienced in developing and implementing machine learning models for various applications, including image detection and predictive analytics. Proficient in model evaluation and optimization.',
              },
              {
                icon: <CodeIcon sx={{ fontSize: 40 }} />,
                title: 'Full Stack Development',
                description: 'Skilled in building modern web applications using React, JavaScript, HTML, and CSS. Experienced in GUI development with Python (Tkinter) and creating interactive data visualization tools.',
              },
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      background: 'rgba(255, 255, 255, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {expertise.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {expertise.title}
                  </Typography>
                  <Typography sx={{ opacity: 0.9 }}>
                    {expertise.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      <ContactSection />
    </Box>
  );
};

export default Home; 