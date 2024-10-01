import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MazeJourney from './MazeJourney'; // Reuse the MazeJourney component

// Styled-components for layout and form styling
const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(120deg, #185494, #EE1D23, #FAAF18, #FFFFFF);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 250px;
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 25px;
  text-align: center;
  font-size: 1.2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  outline: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const Challenge3 = () => {
  const [voiceInput, setVoiceInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (voiceInput.toLowerCase() === 'open sesame') {
      navigate('/challenge4');
    } else {
      alert('Incorrect voice input. Try again.');
    }
  };

  return (
    <ChallengeContainer>
      {/* Maze Journey to track progress */}
      <MazeJourney currentStep={3} totalSteps={4} />

      <Title
        as={motion.h2}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Challenge 3: Say the Magic Words
      </Title>

      <Form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Input
          type="text"
          value={voiceInput}
          onChange={(e) => setVoiceInput(e.target.value)}
          placeholder="Say the magic words"
        />
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </SubmitButton>
      </Form>
    </ChallengeContainer>
  );
};

export default Challenge3;
