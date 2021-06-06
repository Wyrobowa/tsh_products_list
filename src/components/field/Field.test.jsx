import React from 'react';

// Components
import Field from './Field';

// Tests
import { render } from '../../tests';

describe('Field', () => {
  test('Displays field - input', async () => {
    const { container } = render(
      <Field
        id="TestField"
        onChange={jest.fn()}
        value="test"
      />,
    );

    expect(container.firstChild).toBeTruthy();
  });

  test('Displays field - textarea', async () => {
    const { container } = render(
      <Field
        id="TestField"
        onChange={jest.fn()}
        type="textarea"
        value="test"
      />,
    );

    expect(container.firstChild).toBeTruthy();
  });
});
