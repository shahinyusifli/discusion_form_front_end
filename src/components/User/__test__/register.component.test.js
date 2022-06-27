import { render, screen } from '@testing-library/react';
import Register from "../register.component"

test("'Register' word should be in component", () => {

          render(<Register />);

          const registerText = screen.getByText(/register/i)
          expect(registerText).toBeInTheDocument();
});

test("'Username' word should be in component", () => {

          render(<Register />);

          const usernameText = screen.getByText(/username/i)
          expect(usernameText).toBeInTheDocument();
});


test("'Email' word should be in component", () => {

          render(<Register />);

          const emailText = screen.getByText(/email/i)
          expect(emailText).toBeInTheDocument();
});

test("'Role' word should be in component", () => {

          render(<Register />);

          const roleText = screen.getByText(/role/i)
          expect(roleText).toBeInTheDocument();
});

test("'Password' word should be in component", () => {

          render(<Register />);

          const passwordText = screen.getByText(/password/i)
          expect(passwordText).toBeInTheDocument();
});

test("'Sign Up' word should be in component", () => {

          render(<Register />);

          const signupText = screen.getByText(/sign up/i)
          expect(signupText).toBeInTheDocument();
});

test("Form element/tag should be in component", () => {

          render(<Register />);

          const formElement = screen.getByRole("form")
          expect(formElement).toBeInTheDocument();
});

