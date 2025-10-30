// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  margin-top: 50px;
`;

const StatusCode = styled.h1`
  font-size: 6rem;
  color: #dc3545;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #343a40;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HomeLink = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function NotFoundPage() {
  return (
    <NotFoundContainer>
      <StatusCode>404</StatusCode>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
      <HomeLink to="/">Go to Homepage</HomeLink>
    </NotFoundContainer>
  );
}

export default NotFoundPage;