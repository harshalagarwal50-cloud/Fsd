// src/components/ErrorFallback.js
import React from 'react';
import styled from 'styled-components'; // Using styled-components for this as well

const ErrorContainer = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  border: 2px solid #e74c3c;
  border-radius: 8px;
  background-color: #fce7e5;
  color: #c0392b;
  text-align: center;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ErrorTitle = styled.h2`
  color: #e74c3c;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  word-wrap: break-word; /* Prevents long messages from overflowing */
`;

const RetryButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.4);
  }
`;

const SmallText = styled.small`
    display: block;
    margin-top: 1rem;
    color: #888;
`;


function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <ErrorContainer role="alert">
      <ErrorTitle>Oops! Something went wrong.</ErrorTitle>
      <ErrorMessage>
        We encountered an unexpected error. Please try again.
        {/* For debugging, you might display error.message in development */}
        {/* <pre>{error.message}</pre> */}
      </ErrorMessage>
      <RetryButton onClick={resetErrorBoundary}>
        Reload Page
      </RetryButton>
      <SmallText>If the problem persists, please contact support.</SmallText>
    </ErrorContainer>
  );
}

export default ErrorFallback;