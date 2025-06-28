import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pt: 8,
        }}
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              color="secondary"
              sx={{ mb: 2, fontWeight: 500 }}
            >
              Hi, my name is
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                background: 'linear-gradient(45deg, #4A90E2 30%, #50E3C2 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Alluri Seetha Ram
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 3, height: '60px', display: 'flex', alignItems: 'center' }}>
              <Typography variant="h3" color="text.secondary" sx={{ minWidth: '250px' }}>
                <Typewriter
                  options={{
                    strings: [
                      'Data Analyst',
                      'AI Tools Expert',
                      'B.Tech Graduate',
                      'Operations Executive',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                {/* Hidden text to reserve width */}
      <span style={{ opacity: 0, position: 'absolute' }}>
        Operations Executive
      </span>
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: '600px', lineHeight: 1.8 }}
            >
              A passionate data analyst with expertise in Python, Excel, and machine learning.
              Currently focused on analyzing market trends and developing AI-powered solutions.
              Graduate from NIT Hamirpur with a B.Tech in Mathematics and Scientific Computing.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              component={motion.button}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              }}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home; 