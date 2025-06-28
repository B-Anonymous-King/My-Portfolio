import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const navItems = [
  { title: 'Home', path: '/' },
  { title: 'Experience', path: '/experience' },
  { title: 'Projects', path: '/projects' },
  { title: 'AI Tools', path: '/ai-tools' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: theme.palette.secondary.main,
      transition: {
        duration: 0.2,
      },
    },
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        background: theme.palette.background.paper,
        height: '100%',
      }}
    >
      <IconButton
        sx={{ position: 'absolute', right: 8, top: 8 }}
        color="inherit"
      >
        <CloseIcon />
      </IconButton>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.title}
            component={Link}
            to={item.path}
            sx={{
              color: 'white',
              textDecoration: 'none',
              '&:hover': {
                color: theme.palette.secondary.main,
              },
            }}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <AppBar position="fixed" sx={{ background: 'rgba(10, 25, 47, 0.85)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: 'white',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            Seetharam
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 4 }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.title}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Typography
                    component={Link}
                    to={item.path}
                    sx={{
                      color: location.pathname === item.path ? theme.palette.secondary.main : 'white',
                      textDecoration: 'none',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '2px',
                        bottom: -4,
                        left: 0,
                        backgroundColor: theme.palette.secondary.main,
                        transform: location.pathname === item.path ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover::after': {
                        transform: 'scaleX(1)',
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* Spacer */}
    </motion.div>
  );
};

export default Navbar; 