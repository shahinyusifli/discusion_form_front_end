import { render, screen } from '@testing-library/react';
import Logout from "../logout.component"

test("'Logout' word should be in component", () => {

          render(<Logout />);

          const logoutText = screen.getByText(/logout/i)
          expect(logoutText).toBeInTheDocument();
});

test("Logout button should be in component", () => {

          render(<Logout />);

          const logoutButton = screen.getByRole('button')
          expect(logoutButton).toBeInTheDocument();
});