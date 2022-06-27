import { render, screen } from '@testing-library/react';
import TopicCreateComponentForModal from '../TopicCreateComponentForModal';
import { MemoryRouter } from 'react-router-dom';

test("'Create new topic' word should be in component", () => {

          render(<TopicCreateComponentForModal />, { wrapper: MemoryRouter });

          const createnewtopicText = screen.getByText(/create new topic/i)
          expect(createnewtopicText).toBeInTheDocument();
});


test("'Create topic' word should be in component", () => {

          render(<TopicCreateComponentForModal />, { wrapper: MemoryRouter });

          const createnewtopicText = screen.getByText(/create topic/i)
          expect(createnewtopicText).toBeInTheDocument();
});

test("Create button should be in component", () => {

          render(<TopicCreateComponentForModal />, { wrapper: MemoryRouter });

          const submitButton = screen.getByRole("button")
          expect(submitButton).toBeInTheDocument();
});

