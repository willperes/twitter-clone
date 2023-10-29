import { fireEvent, render } from '@testing-library/react-native';
import { BaseHeader } from '../../../src/components/Header/BaseHeader';
import { View } from 'react-native';
import { TestingWrapper } from '../../../__utils__/wrappers/TestingWrapper';

describe('components/header/BaseHeader', () => {
  it('should call the leading component callback function when it is pressed', () => {
    const leadingCallback = jest.fn();

    const { getByTestId } = render(
      <TestingWrapper>
        <BaseHeader
          leadingCallback={leadingCallback}
          leadingComponent={<View />}
          trailingCallback={jest.fn()}
          trailingComponent={<View />}
        />
      </TestingWrapper>
    );

    const button = getByTestId('header-leading-button');
    fireEvent.press(button);

    expect(leadingCallback).toHaveBeenCalled();
  });

  it('should call the trailing component callback function when it is pressed', () => {
    const trailingCallback = jest.fn();

    const { getByTestId } = render(
      <TestingWrapper>
        <BaseHeader
          leadingCallback={jest.fn()}
          leadingComponent={<View />}
          trailingCallback={trailingCallback}
          trailingComponent={<View />}
        />
      </TestingWrapper>
    );

    const button = getByTestId('header-trailing-button');
    fireEvent.press(button);

    expect(trailingCallback).toHaveBeenCalled();
  });
});
