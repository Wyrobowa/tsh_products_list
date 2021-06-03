import React from 'react';

// Components
import Header from './Header';

// Enums
import { HeaderInfo } from './Header.enum';

// Tests
import { render } from '../../tests';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Header', () => {
  test('Displays Header', async () => {
    const { getByText } = render(<Header />);

    expect(getByText(HeaderInfo.title)).toBeInTheDocument();
  });
});
