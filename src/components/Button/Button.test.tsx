import { Button } from '.';
import { fireEvent, render } from '../../../__utils__/render';

describe('components/Button', () => {
  it('should call the provided callback function', () => {
    const callback = jest.fn();
    const { getByTestId } = render(<Button title={'Follow'} onPress={callback} />);

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(callback).toHaveBeenCalled();
  });

  it('should display the provided title correctly', () => {
    const { getByText } = render(<Button title={'Follow'} />);

    expect(getByText('Follow')).toBeTruthy();
  });
});
