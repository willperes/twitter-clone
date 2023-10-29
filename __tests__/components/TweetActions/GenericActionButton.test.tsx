import { fireEvent, render } from '@testing-library/react-native';
import { TestingWrapper } from '../../../__utils__/wrappers/TestingWrapper';
import { GenericActionButton } from '../../../src/components/TweetActions/GenericActionButton';
import { View } from 'react-native';

describe('components/TweetActions/GenericActionButton', () => {
  it('should call the callback function when pressed', () => {
    const callback = jest.fn();

    const { getByTestId } = render(
      <TestingWrapper>
        <GenericActionButton icon={<View />} count={10} callback={callback} />
      </TestingWrapper>
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(callback).toHaveBeenCalled();
  });

  it('should display the count text correctly', () => {
    const { getByText } = render(
      <TestingWrapper>
        <GenericActionButton icon={<View />} count={10} callback={jest.fn()} />
      </TestingWrapper>
    );

    expect(getByText('10')).toBeTruthy();
  });

  it('should not display the count text when count is not provided', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <GenericActionButton icon={<View />} callback={jest.fn()} />
      </TestingWrapper>
    );

    expect(() => getByTestId('count')).toThrow();
  });
});
