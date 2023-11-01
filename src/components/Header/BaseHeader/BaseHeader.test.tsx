import { fireEvent } from '@testing-library/react-native';
import { BaseHeader } from '.';
import { View } from 'react-native';
import { render } from '../../../../__utils__/render';

describe('components/header/BaseHeader', () => {
  it('should call the leading component callback function when it is pressed', () => {
    const leadingCallback = jest.fn();

    const { getByTestId } = render(
      <BaseHeader
        leadingCallback={leadingCallback}
        leadingComponent={<View />}
        trailingCallback={jest.fn()}
        trailingComponent={<View />}
      />
    );

    const button = getByTestId('header-leading-button');
    fireEvent.press(button);

    expect(leadingCallback).toHaveBeenCalled();
  });

  it('should call the trailing component callback function when it is pressed', () => {
    const trailingCallback = jest.fn();

    const { getByTestId } = render(
      <BaseHeader
        leadingCallback={jest.fn()}
        leadingComponent={<View />}
        trailingCallback={trailingCallback}
        trailingComponent={<View />}
      />
    );

    const button = getByTestId('header-trailing-button');
    fireEvent.press(button);

    expect(trailingCallback).toHaveBeenCalled();
  });
});
