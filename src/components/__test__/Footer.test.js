import { render, screen } from '@testing-library/react';
import Footer from "../Footer";



test("'DevAcademyForm' header must be rendered", () => {

          render(<Footer />);
          expect(screen.getByRole(
                    'heading', {name: "DevAcademyForm"
          })).toBeInTheDocument()
});


test("Long sentance paragraph must be rendered", () => {

         render(<Footer />)
         expect(screen.getByText("DevAcademyForm is assigment which is created for testing my skils.")).toBeInTheDocument()
})
          

test("'Contact' header must be rendered", () => {

          render(<Footer />);
          expect(screen.getByRole('heading', {
                    name: "Contact"
                  })).toBeInTheDocument()
});


test("'shahin.yusifli@solita.fi' paragraph must be rendered", () => {

         render(<Footer />)
         expect(screen.getByText("shahin.yusifli@solita.fi")).toBeInTheDocument()
});


test("'© 2021 Copyright:' must be rendered", () => {

          render(<Footer />)
          expect(screen.getByText("© 2021 Copyright:")).toBeTruthy()
});


test("'Shahin Yusifli' link must be rendered", () => {

          render(<Footer />)
          expect(screen.getByRole("link", {name : "Shahin Yusifli"})).toBeInTheDocument()
});