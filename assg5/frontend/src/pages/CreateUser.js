// frontend/src/pages/CreateUser.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserForm from '../components/UserForm';
import styled from 'styled-components';

const CreateUserWrapper = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 0 15px; /* Ensure padding for small screens */
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${props => props.type === 'success' ? 'var(--success-color)' : 'var(--danger-color)'};
  margin-bottom: 20px;
`;

function CreateUser() {
  const navigate = useNavigate();
  const [responseMessage, setResponseMessage] = useState({ type: '', text: '' });

  const handleCreate = async (userData) => {
    setResponseMessage({ type: '', text: '' }); // Clear previous messages
    try {
      const response = await axios.post('http://localhost:5000/api/users', userData);
      setResponseMessage({ type: 'success', text: `User "${response.data.username}" created successfully!` });
      // Optionally navigate to the new user's detail page or dashboard
      navigate(`/user/${response.data._id}`); // Navigate to the newly created user's detail page
    } catch (err) {
      console.error('Error creating user:', err);
      setResponseMessage({ type: 'error', text: err.response?.data?.msg || 'Failed to create user.' });
    }
  };

  return (
    <CreateUserWrapper>
      {responseMessage.text && (
        <Message type={responseMessage.type}>{responseMessage.text}</Message>
      )}
      <UserForm onSubmit={handleCreate} isEditMode={false} />
    </CreateUserWrapper>
  );
}

export default CreateUser;