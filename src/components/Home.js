import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled-components for custom styling
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(120deg, #1D89F4, #00DB78, #F7BF18, #d33131);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 2rem;
`;

// Framer Motion for smooth animations
const AnimatedLink = styled(motion(Link))`
  background-color: #ff6b6b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.5rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4757;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title
        as={motion.h1}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to the Authentication Labyrinth
      </Title>
      <AnimatedLink
        to="/challenge1"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Start the Maze
      </AnimatedLink>
    </HomeContainer>
  );
};

export default Home;
