import { render, screen } from '@testing-library/react';
import Login from '../login.component';




test("' Login' word should be in component", () => {

          render(<Login />);

          const loginText = screen.getByText(/user login/i)
          expect(loginText).toBeInTheDocument();
});

test("'Password' word should be in component", () => {

          render(<Login />);

          const passwordText = screen.getByText(/password/i)
          expect(passwordText).toBeInTheDocument();
});

test("'Username' word should be in component", () => {

          render(<Login />);

          const usernameText = screen.getByText(/username/i)
          expect(usernameText).toBeInTheDocument();
});

test("'Signin' word should be in component", () => {

          render(<Login />);

          const signinText = screen.getByText(/sign in/i)
          expect(signinText).toBeInTheDocument();
});

test("'buttonSignin' button should be in component", () => {

          render(<Login />);

          const buttonSignin = screen.getByTestId("buttonSignin")
          expect(buttonSignin).toBeInTheDocument();
});

test("Form should be in component", () => {

          render(<Login />);

          const formElement = screen.getByRole("form")
          expect(formElement).toBeInTheDocument();
});