import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ResponsiveAppBar from "../MenuNavBar"


test("'Logout' menu item must be rendered", () => {
          render(<ResponsiveAppBar userState={true}/>,  { wrapper: MemoryRouter });
          expect(screen.getByRole('menuitem', {  name: "Logout"}))
});


test("'Dashboard' menu item must be rendered", () => {
          render(<ResponsiveAppBar userState={true}/>,  { wrapper: MemoryRouter });
          expect(screen.getByRole('menuitem', {  name: "Dashboard"})).toBeInTheDocument();
});


test("'Create topic' menu item must be rendered", () => {
          render(<ResponsiveAppBar userState={true}/>,  { wrapper: MemoryRouter });
          expect(screen.getByRole('menuitem', {  name: "Create topic"})).toBeInTheDocument();
});


test("'Topics' menu item must be rendered", () => {
          render(<ResponsiveAppBar userState={true}/>,  { wrapper: MemoryRouter });
          expect(screen.getByRole('menuitem', {  name: "Topics"})).toBeInTheDocument();
});


test("'Login' menu item must be rendered", () => {
          render(<ResponsiveAppBar userState={null}/>,  { wrapper: MemoryRouter });
          expect(screen.getByRole('menuitem', {  name: "Login"})).toBeInTheDocument();
});


test("'Logo' link must be rendered", () => {
          render(<ResponsiveAppBar userState={null}/>,  { wrapper: MemoryRouter });
          expect(screen.getByRole('link', {  name: "DevAcademyForm"})).toBeInTheDocument();
});


test("'Register' menu item must be rendered", () => {
          render(<ResponsiveAppBar userState={null}/>,  { wrapper: MemoryRouter });
          expect(screen.getByRole('menuitem', {  name: "Register"})).toBeInTheDocument();
});


