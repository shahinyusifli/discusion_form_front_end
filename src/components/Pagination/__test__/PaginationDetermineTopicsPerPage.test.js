import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import PaginationDetermineTopicsPerPage from '../PaginationDetermineTopicsPerPage';


const pageSize=6;
const pageSizeString = pageSize + " topics" 



test('Three options of dropdown button should be rendered', () => {

          render(<PaginationDetermineTopicsPerPage 
                    setPageSize={''} 
                    pageSize={pageSize} />
                    );

          const buttonDropDown = screen.getByText(pageSizeString)
          act(() => {
                fireEvent.click(buttonDropDown)    
          })
          
          expect(screen.getByText("6")).toBeInTheDocument()
          expect(screen.getByText("10")).toBeInTheDocument()
          expect(screen.getByText("15")).toBeInTheDocument()
});

