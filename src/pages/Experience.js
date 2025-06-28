import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "RoaDo",
      description: [
        "Collaborated with product teams to enhance platform usability based on client feedback",
        "Implemented Hindi language option for message updates, improving customer satisfaction by 15%",
        "Managed and analyzed data for 1,500+ Royal Enfield showroom locations",
        "Provided support to 200+ Canadian drivers and dispatchers",
        "Conducted presentations for major clients like BATA",
      ],
      date: "May 2024 - July 2024",
      icon: <WorkIcon />,
    },
    {
      title: "Business Analyst",
      company: "EduStation",
      description: [
        "Prepared business documentation and MOUs for institutional collaborations",
        "Generated leads through outbound marketing, increasing revenue by 20%",
        "Analyzed sales data and created weekly/monthly performance reports",
        "Managed day-to-day sales tracking and course performance analysis",
      ],
        date: "July 2024 - August 2024",
        icon: <WorkIcon />,
    },
    {
      title: "Front-End Intern",
      company: "RINL Visakhapatnam",
      description: [
        "Developed front-end functionality for workflow automation",
        "Analyzed departmental workflows for process improvement",
        "Collaborated with HODs and Senior Managers for requirement gathering",
        "Technologies used: Python, HTML",
      ],
      date: "June 2023 - July 2023",
      icon: <WorkIcon />,
    },
    {
      title: "B.Tech Mathematics and Scientific Computing",
      company: "NIT Hamirpur",
      description: [
        "Relevant Courses: Operating System, Data Analysis Using Python, Software Engineering",
        "Artificial Intelligence, Multivariate Statistics, Time Series Analysis",
        "Computer Networks, DBMS, Cryptography, Number Theory",
      ],
      date: "2020 - 2024",
      icon: <SchoolIcon />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              background: 'linear-gradient(45deg, #4A90E2 30%, #50E3C2 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Experience
          </Typography>
          <Typography variant="body1" color="text.secondary">
            My professional journey and educational background
          </Typography>
        </Box>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={experience.date}
              iconStyle={{ background: '#4A90E2', color: '#fff' }}
              icon={experience.icon}
              contentStyle={{
                background: 'rgba(17, 34, 64, 0.95)',
                color: '#fff',
                boxShadow: '0 3px 0 #4A90E2',
              }}
              contentArrowStyle={{ borderRight: '7px solid #4A90E2' }}
            >
              <Typography variant="h6" className="vertical-timeline-element-title">
                {experience.title}
              </Typography>
              <Typography
                variant="subtitle1"
                className="vertical-timeline-element-subtitle"
                color="secondary"
                sx={{ mb: 2 }}
              >
                {experience.company}
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {experience.description.map((item, idx) => (
                  <Typography
                    key={idx}
                    component="li"
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </Container>
  );
};

export default Experience; 