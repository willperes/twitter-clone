import { View } from 'react-native';
import { DrawerItem } from '.';
import { fireEvent, render } from '../../../../__utils__/render';

describe('components/Drawer/DrawerItem', () => {
  it('should call the callback function when pressed', () => {
    const callback = jest.fn();
    const { getByTestId } = render(
      <DrawerItem
        callback={callback}
        text={'Profile'}
        icon={<View testID={'drawer-item-icon'} />}
      />
    );

    const button = getByTestId('drawer-item-button');
    fireEvent.press(button);

    expect(callback).toHaveBeenCalled();
  });

  it('should render correctly the passed text prop', () => {
    const { getByText } = render(
      <DrawerItem
        callback={jest.fn()}
        text={'Profile'}
        icon={<View testID={'drawer-item-icon'} />}
      />
    );

    expect(getByText('Profile')).toBeTruthy();
  });

  it('should render correctly the passed icon prop', () => {
    const { getByTestId } = render(
      <DrawerItem
        callback={jest.fn()}
        text={'profile'}
        icon={<View testID={'drawer-item-icon'} />}
      />
    );

    expect(getByTestId('drawer-item-icon')).toBeTruthy();
  });
});
