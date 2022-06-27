import { render, screen, fireEvent } from '@testing-library/react';
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

test("Find username input element by place holder", () => {
          render(<Login />);

          const usernameInputElement = screen.getByPlaceholderText(/jhon/i)
          expect(usernameInputElement).toBeInTheDocument();
});

test("Should be able to type into username input", () => {
          render(<Login />);

          const usernameInputElement = screen.getByPlaceholderText(/jhon/i)
          fireEvent.change(usernameInputElement, { target: { value: "Shahin" } })
          expect(usernameInputElement.value).toBe("Shahin");

});


test("Find password input element by place holder", () => {
          render(<Login />);

          const passwordInputElement = screen.getByPlaceholderText("*********")
          expect(passwordInputElement).toBeInTheDocument();
});

test("Should be able to type into password input", () => {
          render(<Login />);

          const passwordInputElement = screen.getByPlaceholderText("*********")
          fireEvent.change(passwordInputElement, { target: { value: "Shahin1234" } })
          expect(passwordInputElement.value).toBe("Shahin1234");

});

