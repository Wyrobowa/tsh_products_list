import React from 'react';

// Common
import { variables } from '../../common/variables';

// Components
import Text from './Text';

// Tests
import { render } from '../../tests';

describe('Text', () => {
  test('Renders Text', async () => {
    const { container } = render(<Text>Test</Text>);

    expect(container.firstChild).toBeTruthy();
  });

  test('Display Text', async () => {
    const { getByText } = render(
      <Text
        bold
        color={variables.colors.blue}
        htmlTag="p"
        size={13}
      >
        Test
      </Text>
    );

    expect(getByText('Test')).toBeInTheDocument();
  });
});
