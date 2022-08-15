import { render, screen, fireEvent } from '@testing-library/react';
import FilterTopicsDropDown from '../FilterTopicsDropDown';
import { useState } from 'react';




test('Filter button should be in FilterTopicsDropDown', () => {

          render(<FilterTopicsDropDown setFilterStates={''} />);

          const filterTopicsDropDownComponent = screen.getByText("Filter topics")
          expect(filterTopicsDropDownComponent).toBeInTheDocument();
});

test('Filter button should have three options', () => {

          render(<FilterTopicsDropDown setFilterStates={''} />);

          const filterTopicsDropDownComponent = screen.getByText("Filter topics")
          fireEvent.click(filterTopicsDropDownComponent)
          expect(screen.getByText("Sort descending order"))
          expect(screen.getByText("Sort ascending order"))
          expect(screen.getByText("Sorting the newest one"))
});
          

