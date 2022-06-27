import { fireEvent, render, screen } from '@testing-library/react';
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

test("Enable to find username input by placeholder", () => {

          render(<Register />);

          const usernameInputPlaceholder = screen.getByPlaceholderText(/jhon/i)
          expect(usernameInputPlaceholder).toBeInTheDocument();
});

test("Should be able to type into username input", () => {

          render(<Register />);

          const usernameInputPlaceholder = screen.getByPlaceholderText(/jhon/i)
          fireEvent.change(usernameInputPlaceholder, {target : {value:"Shahin"}})
          expect(usernameInputPlaceholder.value).toBe("Shahin")
});

test("Should be able to type into email input", () => {

          render(<Register />);

          const emailInputPlaceholder = screen.getByPlaceholderText(/steven92@gmail.com/i)
          fireEvent.change(emailInputPlaceholder, {target : {value:"shahin@gmail.com"}})
          expect(emailInputPlaceholder.value).toBe("shahin@gmail.com")
});

test("Should be able to type into user input", () => {

          render(<Register />);

          const userInputPlaceholder = screen.getByPlaceholderText(/user/i)
          fireEvent.change(userInputPlaceholder, {target : {value:"admin"}})
          expect(userInputPlaceholder.value).toBe("admin")
});

test("Should be able to type into password input", () => {

          render(<Register />);

          const passwordInputPlaceholder = screen.getByPlaceholderText("*********")
          fireEvent.change(passwordInputPlaceholder, {target : {value:"shahin1234"}})
          expect(passwordInputPlaceholder.value).toBe("shahin1234")
});
