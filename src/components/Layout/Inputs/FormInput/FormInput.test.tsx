import { useForm } from 'react-hook-form';
import { FormInput } from '.';
import { render } from '../../../../../__utils__/render';
import { renderHook } from '../../../../../__utils__/renderHook';
import { useLayout } from '../../../../hooks/useLayout';

describe('components/Layout/Inputs/FormInput', () => {
  it('should show the error text when the error prop has a valid string', () => {
    const { result } = renderHook(() => useForm());

    const { getByText } = render(
      <FormInput name={'test'} control={result.current.control} error={'This field is required'} />
    );

    expect(getByText('This field is required')).toBeTruthy();
  });

  it('should display the border with the error color when the error prop has a valid string', () => {
    const { result } = renderHook(() => useForm());
    const {
      result: {
        current: { theme },
      },
    } = renderHook(() => useLayout());

    const { getByTestId } = render(
      <FormInput name={'test'} control={result.current.control} error={'This field is required'} />
    );

    expect(getByTestId('test-form-input')).toHaveStyle({
      borderTopColor: theme.colors.error,
      borderBottomColor: theme.colors.error,
      borderLeftColor: theme.colors.error,
      borderRightColor: theme.colors.error,
    });
  });
});
