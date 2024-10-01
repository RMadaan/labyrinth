import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { browserSupportsWebAuthn } from '@simplewebauthn/browser';
import MazeJourney from './MazeJourney'; // Reuse MazeJourney component

// Styled-components for layout and form styling
const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #040404, #000000, #656565);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const StatusText = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${(props) => (props.success ? '#28a745' : '#ff4757')};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Button = styled(motion.button)`
  padding: 0.8rem 2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1.5rem;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

const Challenge4 = () => {
  const [faceScanStatus, setFaceScanStatus] = useState('Not Scanned');
  const [fingerprintStatus, setFingerprintStatus] = useState('Not Scanned');
  const [photoTaken, setPhotoTaken] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  // Capture Face
  const captureFace = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log('Captured photo:', imageSrc);
    setFaceScanStatus('Scanning...');
    setPhotoTaken(true);

    // Simulate face recognition success or failure
    setTimeout(() => {
      if (Math.random() * (0.6 - 0.4) + 0.4 > 0.5) { // Simulated random success or failure
        setFaceScanStatus('Face Detected!');
        startFingerprintAuth(); // Proceed to fingerprint authentication
      } else {
        setFaceScanStatus('Face not detected, Please try again.');
        setPhotoTaken(false);
      }
    }, 3000); // Simulated delay
  }, []);

  // Fingerprint Authentication
  const startFingerprintAuth = async () => {
    if (!browserSupportsWebAuthn()) {
      alert('WebAuthn is not supported in your browser.');
      return;
    }

    setAuthenticating(true);
    try {
      // Simulate immediate successful fingerprint authentication
      setTimeout(() => {
        setFingerprintStatus('Detected!');
        navigate('/final'); // Redirect or perform action upon successful authentication
        setAuthenticating(false);
      }, 5000); // Simulated delay for user interaction
    } catch (error) {
      console.error('Error during face authentication:', error);
      setFingerprintStatus('Authentication error. Try again.');
      setAuthenticating(false);
    }
  };

  return (
    <ChallengeContainer>
      {/* MazeJourney to track progress */}
      <MazeJourney currentStep={4} totalSteps={4} />

      <Title
        as={motion.h2}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Last Challenge: Face Authentication
      </Title>

      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="20%"
        style={{ borderRadius: '15px', marginBottom: '1rem' }}
      />
      <Button onClick={captureFace} disabled={photoTaken}>
        {photoTaken ? 'Photo Taken' : 'Take Photo'}
      </Button>
      <StatusText success={faceScanStatus === 'Face Detected!'}>
        Status: {faceScanStatus}
      </StatusText>

      {photoTaken && (
        <div>
         {authenticating ? (
  <>
    <h3 style={{color: 'white', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}}>Facial Structure Authentication</h3>
    <StatusText success={faceScanStatus === 'Face Detected!'}>
      Authenticating...
    </StatusText>
  </>
) : ''}

          
            {/* <span style={{ color: 'red' }}>
              {authenticating ? 'Authenticating...' : ''}
            </span> */}
        </div>
      )}
    </ChallengeContainer>
  );
};

export default Challenge4;
