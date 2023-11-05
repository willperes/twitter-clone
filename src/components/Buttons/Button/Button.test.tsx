import { View } from 'react-native';
import { Button } from '.';
import { render } from '../../../../__utils__/render';

describe('components/Button', () => {
  it('should display the provided title correctly', () => {
    const { getByText } = render(<Button title={'Follow'} />);

    expect(getByText('Follow')).toBeTruthy();
  });

  it('should render the leading and trailing components when provided', () => {
    const { getByTestId } = render(
      <Button title={'Follow'} leading={<View />} trailing={<View />} />
    );

    expect(getByTestId('button-leading')).toBeTruthy();
    expect(getByTestId('button-trailing')).toBeTruthy();
  });
});
