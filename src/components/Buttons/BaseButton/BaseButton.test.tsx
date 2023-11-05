import { BaseButton } from '.';
import { fireEvent, render } from '../../../../__utils__/render';

describe('components/BaseButton', () => {
  it('should call the provided callback function', () => {
    const callback = jest.fn();
    const { getByTestId } = render(<BaseButton onPress={callback} />);

    const button = getByTestId('base-button');
    fireEvent.press(button);

    expect(callback).toHaveBeenCalled();
  });
});
