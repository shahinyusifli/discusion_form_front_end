import { render, screen } from '@testing-library/react';
import DashboardUpdateTopicModal from "../Dashboard/DashboardUpdateTopicModal"


          test('Settings icon should be in DashboardUpdateTopicModal', () => {

                    render(<DashboardUpdateTopicModal />);
          
                    const settingsIcon = screen.getByTestId("settingsIcon")
                    expect(settingsIcon).toBeInTheDocument();
          });

          // test('General modal should be in DashboardUpdateTopicModal', () => {

          //           render(<DashboardUpdateTopicModal />);
          
          //           const generalModal = screen.getByText(/topic settings/i)
          //           expect(generalModal).toBeInTheDocument();
          // });