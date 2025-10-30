// frontend/src/pages/UserDetail.js
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserForm from '../components/UserForm';
import styled from 'styled-components';

const DetailCard = styled.div`
  background-color: var(--card-bg);
  padding: 30px;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  margin-bottom: 30px;
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2.5rem;
    color: var(--dark-color);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;

    h1 {
      font-size: 2rem;
    }
  }
`;

const BackButton = styled.button`
  background-color: var(--secondary-color);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.2s ease;
  margin-bottom: 20px;

  &:hover {
    background-color: #5a6268;
  }
`;

const DetailInfo = styled.div`
  h2 {
    color: var(--primary-color);
    margin-top: 25px;
    margin-bottom: 15px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 5px;
  }
  p {
    margin-bottom: 0.8rem;
  }
  strong {
    color: var(--dark-color);
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-top: 50px;
`;

const EditToggle = styled.button`
  background-color: ${props => props.active ? 'var(--danger-color)' : 'var(--primary-color)'};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.active ? '#c82333' : '#0056b3'};
  }
`;


function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditMode, setIsEditMode] = useState(false); // New state for toggling edit mode

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${id}`);
      setUser(response.data);
    } catch (err) {
      console.error('Error fetching user:', err);
      setError('Failed to fetch user profile.');
      setUser(null); // Ensure user is null on error
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleUpdate = async (updatedData) => {
    setError('');
    try {
      const response = await axios.put(`http://localhost:5000/api/users/${id}`, updatedData);
      setUser(response.data); // Update local state with the new user data
      setIsEditMode(false); // Exit edit mode after successful update
      navigate(`/user/${id}`, { replace: true }); // Navigate back to view mode, replacing history entry
    } catch (err) {
      console.error('Error updating user:', err);
      setError(err.response?.data?.msg || 'Failed to update user profile.');
    }
  };

  if (loading) return <Message>Loading user details...</Message>;
  if (error) return <Message style={{ color: 'var(--danger-color)' }}>{error}</Message>;
  if (!user) return <Message style={{ color: 'var(--danger-color)' }}>User not found.</Message>;

  return (
    <div>
      <BackButton onClick={() => navigate('/')}>&larr; Back to Dashboard</BackButton>

      <DetailHeader>
        <h1>User Profile: {user.username}</h1>
        <EditToggle onClick={() => setIsEditMode(prev => !prev)} active={isEditMode}>
          {isEditMode ? 'Cancel Edit' : 'Edit Profile'}
        </EditToggle>
      </DetailHeader>

      {isEditMode ? (
        <UserForm
          onSubmit={handleUpdate}
          initialData={user}
          isEditMode={true}
          onCancel={() => setIsEditMode(false)}
        />
      ) : (
        <DetailCard>
          <DetailInfo>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Bio:</strong> {user.bio}</p>

            <h2>Contact Information</h2>
            <p><strong>Phone:</strong> {user.contactDetails?.phone || 'N/A'}</p>
            <p><strong>Address:</strong> {user.contactDetails?.address || 'N/A'}</p>
            <p><strong>Member Since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          </DetailInfo>
        </DetailCard>
      )}
    </div>
  );
}

export default UserDetail;