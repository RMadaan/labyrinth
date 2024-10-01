import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const JourneyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 0rem;
  width: 100%;
`;

const Track = styled.div`
  width: 70%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background-color: #4caf50;
  border-radius: 50px;
  width: ${(props) => props.progress}%;
`;

const Step = styled(motion.div)`
  position: absolute;
  top: -15px;
  left: ${(props) => props.left}%;
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.active ? '#4caf50' : '#e0e0e0')};
  border-radius: 50%;
  transition: background-color 0.3s ease;
`;

const MazeJourney = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <JourneyContainer>
      <Track>
        <Progress
          progress={progress}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        />
        {Array.from({ length: totalSteps }).map((_, index) => (
          <Step
            key={index}
            left={(index / (totalSteps - 1)) * 100}
            active={index < currentStep}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          />
        ))}
      </Track>
    </JourneyContainer>
  );
};

export default MazeJourney;
