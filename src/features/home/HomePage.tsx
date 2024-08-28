import { Box, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh', // Full viewport height
        overflow: 'hidden',
      }}
    >
      <img
        src="/images/hero1.jpg"
        alt="hero"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensure the image covers the container
        }}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1">Welcome to the store!</Typography>
      </Box>
    </Box>
  );
}
