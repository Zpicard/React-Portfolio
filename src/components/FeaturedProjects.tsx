import { Container, Typography, Grid } from '@mui/material';
import ProjectShowcase from './ProjectShowcase';

const featuredProjects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Material-UI.',
    imageUrl: '/images/portfolio-preview.png',
    githubUrl: 'https://github.com/Zpicard/React-Portfolio',
    demoUrl: 'https://zpicard.github.io/React-Portfolio',
    technologies: ['React', 'TypeScript', 'Material-UI', 'Vite'],
  },
  {
    title: 'Data Analysis Dashboard',
    description: 'Interactive data visualization dashboard built with Tableau.',
    imageUrl: '/images/dashboard-preview.png',
    githubUrl: 'https://github.com/Zpicard/data-analysis-dashboard',
    demoUrl: 'https://public.tableau.com/app/profile/zachary.picard',
    technologies: ['Tableau', 'Data Visualization', 'Business Intelligence'],
  },
  {
    title: 'Machine Learning Project',
    description: 'Machine learning model for predictive analytics using Python and TensorFlow.',
    imageUrl: '/images/ml-preview.png',
    githubUrl: 'https://github.com/Zpicard/ml-project',
    demoUrl: 'https://zpicard.github.io/ml-project',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'NumPy'],
  },
];

const FeaturedProjects = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        align="center"
        sx={{ mb: 6 }}
      >
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {featuredProjects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <ProjectShowcase {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedProjects; 