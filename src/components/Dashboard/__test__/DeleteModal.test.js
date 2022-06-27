import { render, screen } from '@testing-library/react';
import DeleteModal from '../Dashboard/DeleteModal';


const test_data = [{}]

test('Delete button should be in DeleteModal companent', () => {

          render(<DeleteModal data={test_data} />);

          const deleteButton = screen.getByText(/delete/i);
          expect(deleteButton).toBeInTheDocument();
});

          // test('Check close button for delete button', () => {

          //           render(<DeleteModal data={test_data} />);
          
          //           const asff = screen.getByTestId("boxContainDeleteClose");
          //           expect(asff).toBeInTheDocument();
          // });


  