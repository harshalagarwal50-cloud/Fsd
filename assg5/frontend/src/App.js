// frontend/src/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link   // ← IMPORT Link from react‑router‑dom
} from 'react-router-dom';
import styled from 'styled-components'; // For NavBar styling

// Import pages
import Dashboard from './pages/Dashboard';
import UserDetail from './pages/UserDetail';
import CreateUser from './pages/CreateUser';

const NavWrapper = styled.nav`
  background-color: var(--dark-color);
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-sm);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Brand = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
`;

// Use styled(Link) instead of styled(Router.Link)
const StyledNavLink = styled(Link)`
  color: var(--light-color);
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: white;
    background-color: #495057; /* Slightly darker than dark‑color */
  }
`;

function App() {
  return (
    <Router>
      <NavWrapper>
        <Brand>User Dashboard</Brand>
        <NavLinks>
          <StyledNavLink to="/">Dashboard</StyledNavLink>
          <StyledNavLink to="/create">Create User</StyledNavLink>
        </NavLinks>
      </NavWrapper>
      <main className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<UserDetail />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
