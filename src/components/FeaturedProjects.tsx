import { Container, Typography, Grid } from '@mui/material';
import ProjectShowcase from './ProjectShowcase';

const featuredProjects = [
  {
    title: 'Project 1',
    description: 'A full-stack web application built with React and Node.js',
    imageUrl: '/images/project1.jpg',
    pdfUrl: '/pdfs/project1.pdf',
    codeSnippetUrl: '/images/code1.png',
    tableauUrl: 'https://public.tableau.com/views/Project1Dashboard',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'Project 2',
    description: 'Data visualization dashboard using Tableau and Python',
    imageUrl: '/images/project2.jpg',
    tableauUrl: 'https://public.tableau.com/views/Project2Dashboard',
    technologies: ['Python', 'Tableau', 'SQL', 'Pandas'],
  },
  {
    title: 'Project 3',
    description: 'Machine learning model for predictive analytics',
    imageUrl: '/images/project3.jpg',
    pdfUrl: '/pdfs/project3.pdf',
    codeSnippetUrl: '/images/code3.png',
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