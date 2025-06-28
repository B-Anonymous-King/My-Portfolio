import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AnimatePresence } from 'framer-motion';

// Lazy loaded components
const Navbar = React.lazy(() => import('./components/Navbar'));
const Home = React.lazy(() => import('./pages/Home'));
const Experience = React.lazy(() => import('./pages/Experience'));
const Projects = React.lazy(() => import('./pages/Projects'));
const AITools = React.lazy(() => import('./pages/AITools'));
const Contact = React.lazy(() => import('./pages/Contact'));
const LoadingSpinner = React.lazy(() => import('./components/LoadingSpinner'));

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4A90E2',
    },
    secondary: {
      main: '#50E3C2',
    },
    background: {
      default: '#0A192F',
      paper: '#112240',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/ai-tools" element={<AITools />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App; 