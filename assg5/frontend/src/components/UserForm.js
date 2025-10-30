// frontend/src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  background-color: var(--card-bg);
  padding: 30px;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  margin-bottom: 30px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: var(--dark-color);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.7rem;
  font-weight: 600;
  color: var(--dark-color);
  font-size: 1.05rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  resize: vertical;
  min-height: 80px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;
  justify-content: flex-end; /* Align buttons to the right */

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--success-color);
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
  background-color: var(--secondary-color);
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;

  &:hover {
    background-color: #5a6268;
  }
`;

const ErrorMessage = styled.p`
  color: var(--danger-color);
  margin-top: -1rem; /* Adjust spacing with form group below */
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: center;
`;

const UserForm = ({ onSubmit, initialData = {}, isEditMode = false, onCancel }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    bio: '',
    contactDetails: {
      phone: '',
      address: '',
    },
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEditMode && initialData) {
      setFormData({
        username: initialData.username || '',
        email: initialData.email || '',
        password: '', // Never pre-fill password in edit mode for security
        bio: initialData.bio || '',
        contactDetails: {
          phone: initialData.contactDetails?.phone || '',
          address: initialData.contactDetails?.address || '',
        },
      });
    }
  }, [isEditMode, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) { // For nested contactDetails
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    setError(''); // Clear error on change
  };

  const validateForm = () => {
    if (!formData.username || !formData.email) {
      setError('Username and Email are required.');
      return false;
    }
    if (!isEditMode && !formData.password) { // Password required only for new users
      setError('Password is required for new users.');
      return false;
    }
    if (formData.password && formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    const emailRegex = /.+@.+\..+/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTitle>{isEditMode ? 'Edit User Profile' : 'Create New User'}</FormTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">{isEditMode ? 'New Password (optional)' : 'Password'}</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={isEditMode ? 'Leave blank to keep current password' : ''}
          required={!isEditMode}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="bio">Bio</Label>
        <TextArea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          rows="4"
          maxLength="500"
        ></TextArea>
      </FormGroup>
      <h3>Contact Details (Optional)</h3>
      <FormGroup>
        <Label htmlFor="phone">Phone</Label>
        <Input
          type="tel"
          id="phone"
          name="contactDetails.phone"
          value={formData.contactDetails.phone}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="address">Address</Label>
        <Input
          type="text"
          id="address"
          name="contactDetails.address"
          value={formData.contactDetails.address}
          onChange={handleChange}
        />
      </FormGroup>
      <ButtonGroup>
        {onCancel && <CancelButton type="button" onClick={onCancel}>Cancel</CancelButton>}
        <SubmitButton type="submit">
          {isEditMode ? 'Update Profile' : 'Create User'}
        </SubmitButton>
      </ButtonGroup>
    </FormWrapper>
  );
};

export default UserForm;