import { render, screen } from '@testing-library/react';
import DashboardEditText from '../Dashboard/DashboardEditText'


const test_data = [{}]

test('EdiText button should be in DashboardEditText', () => {

          render(<DashboardEditText data={test_data} />);

          const ediTextComponent = screen.getByRole('button')
          expect(ediTextComponent).toBeInTheDocument();
});