import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { click } from '@testing-library/user-event/dist/click';
import Pagination from '../Pagination';



test('Next and previous buttons must be rendered', () => {
      render( <Pagination
          className="pagination-bar"
          currentPage={1}
          totalCount={7}
          pageSize={6}
          onPageChange={() => {}}
        /> );
      
      expect(screen.getByRole('previousButton')).toBeInTheDocument()
      expect(screen.getByRole('nextButton')).toBeInTheDocument()
});

test('Numbers of pages which third one must be rendered with order', () => {
  render( <Pagination
      className="pagination-bar"
      currentPage={1}
      totalCount={7}
      pageSize={6}
      onPageChange={() => {}}
    /> );
  
  expect(screen.getByText("1")).toBeInTheDocument()
  expect(screen.getByText("2")).toBeInTheDocument()
 
});

