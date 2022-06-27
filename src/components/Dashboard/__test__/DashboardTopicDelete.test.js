import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DashboardDelete from '../DashboardTopicDelete';


const test_data = [{}]

test('should render same text passed into title prop in deleteButton', () => {

          render(<DashboardDelete data={test_data} />, { wrapper: MemoryRouter });

          const deleteButton = screen.getByTestId("DeleteIcon")
          expect(deleteButton).toBeInTheDocument();
});