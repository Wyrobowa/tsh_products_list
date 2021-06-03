import React from 'react';

import { render } from '../../tests';

import { Button } from './Button';

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
