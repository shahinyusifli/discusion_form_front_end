import { render, screen } from '@testing-library/react';
import DashboardCard from "../DashboardCard"
import moment from 'moment';
import { MemoryRouter } from 'react-router-dom';


const test_data = [{ topicId: 155, topicContent: "Programming", totalMessages: "20", timeOfLastMessage: "2022-06-19T19:06:13.161" }]
const formated_timeOfLastMessage = moment(test_data[0].timeOfLastMessage).startOf('day').fromNow()
const formated_to_int_totalMessages = parseInt(test_data[0].totalMessages)

describe("DashboardCardUserSeeData", () => {
          test('should render same text passed into title prop in topicContent', () => {

                    render(<DashboardCard data={test_data} />, { wrapper: MemoryRouter });

                    const typoTopicContent = screen.getByText(test_data[0].topicContent);
                    expect(typoTopicContent).toBeInTheDocument();
          });



          test('should render same text passed into title prop in timeOfLastMessages', () => {
                    render(<DashboardCard data={test_data} />, { wrapper: MemoryRouter });

                    if (test_data[0].timeOfLastMessage === null) {
                              const typoTimeOfLastMessage = screen.getByText(/no update/i);
                              expect(typoTimeOfLastMessage).toBeInTheDocument();
                    }

                    else {

                              const typoTimeOfLastMessage = screen.getByText("Updated " + formated_timeOfLastMessage);
                              expect(typoTimeOfLastMessage).toBeInTheDocument();
                    }

          });


          test('should render same text passed into title prop in timeOfLastMessages', () => {
                    render(<DashboardCard data={test_data} />, { wrapper: MemoryRouter });

                    if (formated_to_int_totalMessages > 0) {
                              const typoTimeOfLastMessage = screen.getByText(formated_to_int_totalMessages);
                              expect(typoTimeOfLastMessage).toBeInTheDocument();
                    }



          });


})




