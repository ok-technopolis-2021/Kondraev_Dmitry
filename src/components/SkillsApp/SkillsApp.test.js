import { render, screen } from '@testing-library/react';
import SkillsApp from './SkillsApp';

test('renders learn react link', () => {
  render(<SkillsApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
