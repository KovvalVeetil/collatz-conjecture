import React, { useState } from 'react';
import styled from 'styled-components';

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const Registration = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Registration successful!');
        console.log(data); // Log success response
      } else {
        const errorData = await response.json();
        setMessage(`Registration failed: ${errorData.message}`);
        console.error(errorData); // Log error response
      }
    } catch (error) {
      setMessage(`Registration failed: ${error.message}`);
      console.error('Network error:', error); // Log network errors
    }
  };

  return (
    <RegistrationForm onSubmit={handleSubmit}>
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <label>
        Username:
        <Input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Password:
        <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <Button type="submit">Register</Button>
    </RegistrationForm>
  );
};

export default Registration;
