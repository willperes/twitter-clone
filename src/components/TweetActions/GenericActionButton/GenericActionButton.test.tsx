import { fireEvent } from '@testing-library/react-native';
import { render } from '../../../../__utils__/render';
import { GenericActionButton } from '.';
import { View } from 'react-native';

describe('components/TweetActions/GenericActionButton', () => {
  it('should call the callback function when pressed', () => {
    const callback = jest.fn();

    const { getByTestId } = render(
      <GenericActionButton icon={<View />} count={10} callback={callback} />
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(callback).toHaveBeenCalled();
  });

  it('should display the count text correctly', () => {
    const { getByText } = render(
      <GenericActionButton icon={<View />} count={10} callback={jest.fn()} />
    );

    expect(getByText('10')).toBeTruthy();
  });

  it('should not display the count text when count is not provided', () => {
    const { getByTestId } = render(<GenericActionButton icon={<View />} callback={jest.fn()} />);

    expect(() => getByTestId('count')).toThrow();
  });
});
