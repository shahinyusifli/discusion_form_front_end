import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ResponsiveAppBar from "../MenuNavBar"


test("'Logout' menu item should be in component", () => {

          render(<ResponsiveAppBar userState={true}/>,  { wrapper: MemoryRouter });
          

          const logoutMenu = screen.getByRole('menuitem', {  name: /logout/i})
          expect(logoutMenu).toBeInTheDocument();
});


test("'Dashboard' menu item should be in component", () => {

          render(<ResponsiveAppBar userState={true}/>,  { wrapper: MemoryRouter });
          

          const dashbaordMenu = screen.getByRole('menuitem', {  name: /dashboard/i})
          expect(dashbaordMenu).toBeInTheDocument();
});


test("'Create topic' menu item should be in component", () => {

          render(<ResponsiveAppBar userState={true}/>,  { wrapper: MemoryRouter });
          

          const createTopicMenu = screen.getByRole('menuitem', {  name: /create topic/i})
          expect(createTopicMenu).toBeInTheDocument();
});


test("'Topics' menu item should be in component", () => {

          render(<ResponsiveAppBar userState={true}/>,  { wrapper: MemoryRouter });
          

          const topicsMenu = screen.getByRole('menuitem', {  name: /topics/i})
          expect(topicsMenu).toBeInTheDocument();
});


test("'Login' menu item should be in component", () => {

          render(<ResponsiveAppBar userState={null}/>,  { wrapper: MemoryRouter });
          

          const loginMenu = screen.getByRole('menuitem', {  name: /login/i})
          expect(loginMenu).toBeInTheDocument();
});


test("'Logo' word should be in component", () => {

          render(<ResponsiveAppBar userState={null}/>,  { wrapper: MemoryRouter });
          

          const logoMenu = screen.getByRole('link', {  name: /devacademyform/i})
          expect(logoMenu).toBeInTheDocument();
});


test("'Register' menu item should be in component", () => {

          render(<ResponsiveAppBar userState={null}/>,  { wrapper: MemoryRouter });
          

          const registerMenu = screen.getByRole('menuitem', {  name: /register/i})
          expect(registerMenu).toBeInTheDocument();
});


