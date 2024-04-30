import React from 'react';
import { render} from '@testing-library/react';
import { TodoWrapper } from '../src/components/TodoWrapper.js';

jest.mock('uuid', () => ({
  v4: jest.fn(() => 'mocked-uuid'),
}));

describe('TodoWrapper component', () => {
  it('renders without crashing', () => {
    const { container } = render(<TodoWrapper />);
    
    expect(container).toBeTruthy();})
});