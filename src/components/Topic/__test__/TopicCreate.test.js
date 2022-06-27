import { render, screen } from '@testing-library/react';
import TopicCreate from "../TopicCreate"
import { MemoryRouter } from 'react-router-dom';

test("'Create new topic' word should be in component", () => {

          render(<TopicCreate />, { wrapper: MemoryRouter });

          const createnewtopicText = screen.getByText(/create new topic/i)
          expect(createnewtopicText).toBeInTheDocument();
});


test("'Create' word should be in component", () => {

          render(<TopicCreate />, { wrapper: MemoryRouter });

          const createtopicText = screen.getByText(/create topic/i)
          expect(createtopicText).toBeInTheDocument();
});


test("Create topic button should be in component", () => {

          render(<TopicCreate />, { wrapper: MemoryRouter });

          const createButton = screen.getByRole("button")
          expect(createButton).toBeInTheDocument();
});

