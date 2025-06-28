import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#0A192F',
      }}
    >
      <motion.div
        style={{
          width: 50,
          height: 50,
          border: '5px solid #4A90E2',
          borderTop: '5px solid transparent',
          borderRadius: '50%',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </Box>
  );
};

export default LoadingSpinner; 