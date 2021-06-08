import React from 'react';
import { fireEvent } from '@testing-library/react';

// Components
import Login from './Login';

// Tests
import { render } from '../../tests';

describe('Login', () => {
  test('Displays all information', async () => {
    const { getByText, getByLabelText } = render(<Login />);

    expect(getByText('Login')).toBeInTheDocument();
    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
    expect(getByText('Forgot password?')).toBeInTheDocument();
  });

  test('Handle events', async () => {
    const { getByText  } = render(<Login />);

    fireEvent.click(getByText('Log in'));
    fireEvent.click(getByText('Forgot password?'));
  });
});
