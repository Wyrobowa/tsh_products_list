import React from 'react';

// Components
import Button from './Button';

// Tests
import { render } from '../../tests';

describe('Button', () => {
  test('Displays button', async () => {
    const { getByText } = render(
      <Button
        category="primary"
        id="TestButton"
        onClick={jest.fn()}
        type="submit"
      >
        Test button
      </Button>
    );

    expect(getByText('Test button')).toBeInTheDocument();
  });
});
