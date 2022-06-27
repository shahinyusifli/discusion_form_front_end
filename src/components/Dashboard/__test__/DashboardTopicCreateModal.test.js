import { render, screen } from '@testing-library/react';
import DashboardCreateTopicModal from "../DashboardTopicCreateModal"


test('Add icon should be shown in DashboardCreateTopicModal', () => {

          render(<DashboardCreateTopicModal />);
          
          const addIcon = screen.getByTestId("addIcon")
          expect(addIcon).toBeInTheDocument();
});

test("'Create topic' should be in DashboardCreateTopicModel", () => {

          render(<DashboardCreateTopicModal />);
          
          const createTopicStatement = screen.getByText(/create topic/i)
          expect(createTopicStatement).toBeInTheDocument();
});


          // test("'You can create topic. Just click' should be in DashboardCreateTopicModel", () => {

          //           render(<DashboardCreateTopicModal />);
                    
          //           const statementAfterHovering = screen.getByText(/you can create topic. just click/i)
          //           expect(statementAfterHovering).toBeInTheDocument();
          // });