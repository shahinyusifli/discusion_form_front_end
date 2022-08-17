import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PaginationDetermineTopicsPerPage from '../PaginationDetermineTopicsPerPage';


const pageSize = 6;
const pageSizeString = pageSize + " topics"


test('Three options of dropdown button should be rendered', async () => {


      render(<PaginationDetermineTopicsPerPage
            setPageSize={''}
            pageSize={pageSize} />
      );

      const buttonDropDown = await screen.findByRole('button', {name: pageSizeString})
      userEvent.click(buttonDropDown)
      const clickedResultSix = await screen.findByRole('button', {name: 6})
      const clickedResultTen = await screen.findByRole('button', {name: 10})
      const clcikedResultFifteen = await screen.findByRole('button', {name: 15})
      
      expect(clickedResultSix).toBeInTheDocument()
      expect(clickedResultTen).toBeInTheDocument()
      expect(clcikedResultFifteen).toBeInTheDocument()
            
      

});

