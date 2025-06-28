import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'react-typewriter';

const TypewriterComponent = () => {
  const [currentText, setCurrentText] = useState('');
  const texts = ['Data Analyst', 'AI Tools Expert', 'B.Tech Graduate'];
  
  // Find the longest text to reserve space
  const longestText = texts.reduce((longest, current) => 
    current.length > longest.length ? current : longest, ''
  );

  return (
    <Box
      sx={{
        position: 'relative',
        height: '60px', // Fixed height to prevent layout shift
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        mb: 3,
      }}
    >
      {/* Hidden placeholder to reserve space for longest text */}
      <Typography
        variant="h3"
        sx={{
          visibility: 'hidden',
          display: 'inline-block',
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          whiteSpace: 'nowrap',
          color: 'text.secondary',
          fontSize: '40px',
          fontWeight: 400,
        }}
      >
        {longestText}
      </Typography>

      {/* Visible typewriter text */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          whiteSpace: 'nowrap',
        }}
      >
        <Typewriter
          texts={texts}
          typeSpeed={150}
          deleteSpeed={80}
          delaySpeed={2000}
          cursor={<motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{
              color: 'inherit',
              fontSize: 'inherit',
              fontWeight: 'inherit',
            }}
          >
            |
          </motion.span>}
          onTypingEnd={() => {
            // Optional: Add any logic when typing ends
          }}
          onDeleteEnd={() => {
            // Optional: Add any logic when deletion ends
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'text.secondary',
              fontSize: '40px',
              fontWeight: 400,
              display: 'inline',
            }}
          />
        </Typewriter>
      </Box>
    </Box>
  );
};

export default TypewriterComponent; 