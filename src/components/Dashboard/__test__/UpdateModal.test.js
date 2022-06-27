import { render, screen } from '@testing-library/react';
import UpdateModal from '../UpdateModal';


const test_data = [{}]

test('Update button should be in UpdateModal companent', () => {

          render(<UpdateModal data={test_data} />);

          const updateButton = screen.getByText(/update/i);
          expect(updateButton).toBeInTheDocument();
});