import { Box, Typography, Button, Paper, useTheme } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

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
      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
        <Button
          variant="outlined"
          startIcon={<GitHub />}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            '&:hover': {
              borderColor: theme.palette.primary.dark,
            },
          }}
        >
          View Code
        </Button>
        <Button
          variant="outlined"
          startIcon={<Launch />}
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            '&:hover': {
              borderColor: theme.palette.primary.dark,
            },
          }}
        >
          View Demo
        </Button>
      </Box>
    </Paper>
  );
};

export default ProjectShowcase; 