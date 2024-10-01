import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled-components for layout and styling
const FinalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(#405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 2rem;
`;

const Message = styled(motion.p)`
  font-size: 1.5rem;
  color: white;
  font-family: 'Poppins', sans-serif;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const CelebrationArt = styled(motion.div)`
  width: 300px;
  height: 300px;
  background: url('/image 2.png') no-repeat center center;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const Final = () => {
  return (
    <FinalContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Congratulations!
      </Title>
      <Message
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        You have completed the Authentication Labyrinth. Enjoy the Social Cushion!
      </Message>

      {/* Visual Art Piece */}
      <CelebrationArt
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Add any further interactive elements or links here */}
    </FinalContainer>
  );
};

export default Final;
