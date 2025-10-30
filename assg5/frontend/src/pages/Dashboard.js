// frontend/src/pages/Dashboard.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';
import styled from 'styled-components';

const DashboardHeader = styled.div`
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

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on smaller screens */
    gap: 20px;
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-top: 50px;
`;

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Failed to fetch users. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:5000/api/users/${id}`);
        setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
      } catch (err) {
        console.error('Error deleting user:', err);
        setError('Failed to delete user.');
      }
    }
  };

  if (loading) return <Message>Loading users...</Message>;
  if (error) return <Message style={{ color: 'var(--danger-color)' }}>{error}</Message>;
  if (users.length === 0) return <Message>No users found. Create one!</Message>;

  return (
    <div>
      <DashboardHeader>
        <h1>User Profiles</h1>
        {/* You could add a 'Create User' button here that navigates */}
      </DashboardHeader>
      <UserGrid>
        {users.map(user => (
          <UserCard key={user._id} user={user} onDelete={handleDelete} />
        ))}
      </UserGrid>
    </div>
  );
}

export default Dashboard;