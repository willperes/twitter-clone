import { Form } from '.';
import { act, fireEvent, render } from '../../../../__utils__/render';

describe('screens/SignUpScreen/Form', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should call the callback function with the correct form values', async () => {
    const callback = jest.fn(async () => {
      await Promise.resolve(true);
    });

    const name = 'Will Per';
    const username = 'willolivei';
    const email = 'will.peres@outlook.com';
    const password = '12345';

    const { getByTestId, getByPlaceholderText } = render(<Form onSubmit={callback} />);

    // Get the input components that are being used in the form to change it's contents.
    const nameInput = getByPlaceholderText('Name');
    const usernameInput = getByPlaceholderText('Username');
    const emailInput = getByPlaceholderText('E-mail');
    const passwordInput = getByPlaceholderText('Password');

    const submitButton = getByTestId('sign-up-submit-button');

    // Change the content of the inputs with the provided form values.
    fireEvent.changeText(nameInput, name);
    fireEvent.changeText(usernameInput, username);
    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);

    await act(async () => {
      // Submit the form
      fireEvent.press(submitButton);
    });

    await act(() => {
      jest.runAllTimers();
    });

    expect(callback).toHaveBeenCalledWith({
      name,
      username,
      email,
      password,
    });
  });

  it('should display errors when the form is submitted without inputs being filled', async () => {
    const callback = jest.fn(async () => {
      await Promise.resolve(true);
    });

    const { getByTestId, getAllByText } = render(<Form onSubmit={callback} />);

    const submitButton = getByTestId('sign-up-submit-button');

    await act(async () => {
      fireEvent.press(submitButton);
    });

    await act(() => {
      jest.runAllTimers();
    });

    expect(getAllByText('This field is required')).toHaveLength(4);
    expect(callback).not.toHaveBeenCalled();
  });

  it('should show an error message if the minimum length rule for the name, username and password fields has not been met', async () => {
    const { getByTestId } = render(<Form onSubmit={jest.fn()} />);

    const submitButton = getByTestId('sign-up-submit-button');
    const nameInput = getByTestId('name-form-input');
    const usernameInput = getByTestId('username-form-input');
    const passwordInput = getByTestId('password-form-input');

    fireEvent.changeText(nameInput, 'Will Pe');
    fireEvent.changeText(usernameInput, 'willolive');
    fireEvent.changeText(passwordInput, '1234');

    await act(async () => {
      fireEvent.press(submitButton);
    });

    await act(() => {
      jest.runAllTimers();
    });

    const nameErrorText = getByTestId('name-form-input-error');
    const usernameErrorText = getByTestId('username-form-input-error');
    const passwordErrorText = getByTestId('password-form-input-error');

    expect(nameErrorText).toHaveTextContent('Minimum length of 8 characters');
    expect(usernameErrorText).toHaveTextContent('Minimum length of 10 characters');
    expect(passwordErrorText).toHaveTextContent('Minimum length of 5 characters');
  });

  it('should show an error message if the filled email is not valid', async () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<Form onSubmit={jest.fn()} />);

    const emailInput = getByPlaceholderText('E-mail');
    fireEvent.changeText(emailInput, 'will.peres@outlook.');

    const submitButton = getByTestId('sign-up-submit-button');

    await act(async () => {
      fireEvent.press(submitButton);
    });

    await act(() => {
      jest.runAllTimers();
    });

    expect(getByText('Insert a valid email')).toBeTruthy();
  });

  it('should show an error message if the filled username has spaces', async () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<Form onSubmit={jest.fn()} />);

    const usernameInput = getByPlaceholderText('Username');
    fireEvent.changeText(usernameInput, 'will peres');

    const submitButton = getByTestId('sign-up-submit-button');

    await act(async () => {
      fireEvent.press(submitButton);
    });

    await act(() => {
      jest.runAllTimers();
    });

    expect(getByText('Username must not contain spaces')).toBeTruthy();
  });
});
