import { Box, Typography, Button, Paper, useTheme } from '@mui/material';
import { GitHub } from '@mui/icons-material';

interface ProjectShowcaseProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
  technologies: string[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  demoUrl,
  technologies,
}) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={title}
        sx={{
          width: '100%',
          height: 200,
          objectFit: 'cover',
          borderRadius: 1,
          mb: 2,
        }}
      />
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        {description}
      </Typography>
      <Box sx={{ mt: 'auto', display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {technologies.map((tech, index) => (
          <Typography
            key={index}
            variant="caption"
            sx={{
              px: 1,
              py: 0.5,
              borderRadius: 1,
              bgcolor: 'primary.light',
              color: 'primary.contrastText',
            }}
          >
            {tech}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button
          variant="outlined"
          startIcon={<GitHub />}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'primary.main',
            borderColor: 'primary.main',
            '&:hover': {
              borderColor: 'primary.dark',
              backgroundColor: 'primary.light',
            },
          }}
        >
          View Code
        </Button>
      </Box>
    </Paper>
  );
};

export default ProjectShowcase; 