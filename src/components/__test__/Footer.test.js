import { render, screen } from '@testing-library/react';
import Footer from "../Footer";




test("'DevAcademyForm' word should be in component", () => {

          render(<Footer />);

          const academyText = screen.getByText("DevAcademyForm")
          expect(academyText).toBeInTheDocument();
});


test("Long sentance word should be in component", () => {

          render(<Footer />);

          const longacademyText = screen.getByText("DevAcademyForm is assigment which is created for testing my skils.")
          expect(longacademyText).toBeInTheDocument();
});


test("'Contact' word should be in component", () => {

          render(<Footer />);

          const contactText = screen.getByText(/contact/i)
          expect(contactText).toBeInTheDocument();
});
3

test("'shahin.yusifli@solita.fi' word should be in component", () => {

          render(<Footer />);

          const emailText = screen.getByText(/shahin.yusifli@solita.fi/i)
          expect(emailText).toBeInTheDocument();
});


test("'© 2021 Copyright:' word should be in component", () => {

          render(<Footer />);

          const copyrightText = screen.getByText(/© 2021 Copyright:/i)
          expect(copyrightText).toBeInTheDocument();
});


test("'Shahin Yusifli' word should be in component", () => {

          render(<Footer />);

          const nameText = screen.getByText(/Shahin Yusifli/i)
          expect(nameText).toBeInTheDocument();
});