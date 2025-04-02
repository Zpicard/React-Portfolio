import { Box, Typography, Button, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import DashboardIcon from '@mui/icons-material/Dashboard';

interface ProjectShowcaseProps {
  title: string;
  description: string;
  imageUrl: string;
  pdfUrl?: string;
  codeSnippetUrl?: string;
  tableauUrl?: string;
  technologies: string[];
  githubUrl?: string;
}

const ProjectShowcase = ({
  title,
  description,
  imageUrl,
  pdfUrl,
  codeSnippetUrl,
  tableauUrl,
  technologies,
  githubUrl,
}: ProjectShowcaseProps) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%', // 16:9 aspect ratio
          mb: 3,
          borderRadius: 2,
          overflow: 'hidden',
          background: '#f5f5f5',
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt={title}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2, flexGrow: 1 }}
      >
        {description}
      </Typography>

      <Box sx={{ mb: 2 }}>
        {technologies.map((tech) => (
          <Typography
            key={tech}
            variant="caption"
            sx={{
              display: 'inline-block',
              mr: 1,
              mb: 1,
              px: 1,
              py: 0.5,
              borderRadius: 1,
              bgcolor: 'primary.light',
              color: 'white',
            }}
          >
            {tech}
          </Typography>
        ))}
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
        {githubUrl && (
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              flex: 1,
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              '&:hover': {
                borderColor: theme.palette.primary.dark,
                backgroundColor: 'rgba(44, 62, 80, 0.04)',
              },
            }}
          >
            View Code
          </Button>
        )}
        {tableauUrl && (
          <Button
            variant="outlined"
            startIcon={<DashboardIcon />}
            href={tableauUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              flex: 1,
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              '&:hover': {
                borderColor: theme.palette.primary.dark,
                backgroundColor: 'rgba(44, 62, 80, 0.04)',
              },
            }}
          >
            View Dashboard
          </Button>
        )}
      </Box>
    </Paper>
  );
};

export default ProjectShowcase; 