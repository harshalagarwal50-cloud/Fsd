// frontend/src/components/UserCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 20px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Pushes buttons to bottom */
  height: 100%; /* Ensure cards in grid have equal height */

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const UserInfo = styled.div`
  margin-bottom: 20px;
  flex-grow: 1; /* Allows info section to expand */
`;

const Username = styled.h3`
  color: var(--dark-color);
  margin-bottom: 5px;
  font-size: 1.6rem;
  word-break: break-word;
`;

const Email = styled.p`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 10px;
  word-break: break-word;
`;

const Bio = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit bio to 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0; /* Remove default paragraph margin */
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px; /* Spacing from bio */

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const StyledLink = styled(Link)`
  flex: 1; /* Make links take equal width */
  text-align: center;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.2s ease;
  white-space: nowrap; /* Prevent button text from wrapping */

  &.view-button {
    background-color: var(--info-color);
    color: white;
  }
  &.view-button:hover {
    background-color: #138496;
  }

  &.edit-button {
    background-color: var(--primary-color);
    color: white;
  }
  &.edit-button:hover {
    background-color: #0056b3;
  }
`;

const DeleteButton = styled.button`
  flex: 1;
  background-color: var(--danger-color);
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #c82333;
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width on small screens */
  }
`;

function UserCard({ user, onDelete }) {
  return (
    <Card>
      <UserInfo>
        <Username>{user.username}</Username>
        <Email>{user.email}</Email>
        <Bio>{user.bio}</Bio>
      </UserInfo>
      <Actions>
        <StyledLink to={`/user/${user._id}`} className="view-button">View</StyledLink>
        <StyledLink to={`/edit/${user._id}`} className="edit-button">Edit</StyledLink>
        <DeleteButton onClick={() => onDelete(user._id)}>Delete</DeleteButton>
      </Actions>
    </Card>
  );
}

export default UserCard;