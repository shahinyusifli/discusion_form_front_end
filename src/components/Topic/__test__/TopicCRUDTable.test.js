import { render, screen, fireEvent } from '@testing-library/react';
import TopicCRUDTable from '../TopicCRUDTable';

test("'Create new topic' word should be in component", () => {

          render(<TopicCRUDTable />);

          const searchInput = screen.getByPlaceholderText(/search/i)
          fireEvent.change(searchInput, {target : {value:"car"}})
          expect(searchInput.value).toBe("car")
});