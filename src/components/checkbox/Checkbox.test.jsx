import React from 'react';

// Components
import Checkbox from './Checkbox';

// Tests
import { render } from '../../tests';

describe('Checkbox', () => {
  test('Displays checkbox', async () => {
    const { getByText } = render(
      <Checkbox
        id="TestCheckbox"
        label="Test checkbox"
        checked
        onChange={jest.fn()}
      />,
    );

    expect(getByText('Test checkbox')).toBeInTheDocument();
  });
});
