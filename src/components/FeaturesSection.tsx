import { Box, Container, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
    title: 'Data Visualization & Storytelling',
    description: 'Transforming complex data into compelling visual narratives that drive decision-making and business insights.',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    title: 'ML Solutions & Predictive Analytics',
    description: 'Developing sophisticated machine learning models for KPI tracking, performance optimization, and predictive forecasting to guide strategic decisions.',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Innovative Problem Solving',
    description: 'Creating elegant solutions to complex challenges through cutting-edge technology and creative problem-solving approaches.',
  },
];

const FeaturesSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <Box sx={{ mt: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          What I Do Best
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
            mt: 2,
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <Box
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
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
                  {feature.icon}
                </Box>
                <Typography variant="h5" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection; 