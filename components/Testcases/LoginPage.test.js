import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  test('should update form values on input change', () => {
    const { getByPlaceholderText } = render(<LoginPage />);

    const emailInput = getByPlaceholderText('Enter email');
    fireEvent.changeText(emailInput, 'test@example.com');

    expect(emailInput.props.value).toBe('test@example.com');
  });

  test('should log email and password on login', () => {
    console.log = jest.fn(); // Mock console.log

    const { getByText, getByPlaceholderText } = render(<LoginPage />);

    const emailInput = getByPlaceholderText('Enter email');
    const passwordInput = getByPlaceholderText('Enter password');
    const loginButton = getByText('Log In');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(loginButton);

    expect(console.log).toHaveBeenCalledWith('Email:', 'test@example.com');
    expect(console.log).toHaveBeenCalledWith('Password:', 'password');
  });
});
