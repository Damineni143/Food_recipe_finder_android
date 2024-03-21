import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  test('should update search value when typing in the input field', () => {
    const { getByPlaceholderText } = render(<SearchForm getQuery={() => {}} />);
    const searchInput = getByPlaceholderText('Search Recipe');

    fireEvent.changeText(searchInput, 'Pizza');

    expect(searchInput.props.value).toBe('Pizza');
  });

  test('should call getQuery function with search value when search button is pressed', () => {
    const mockGetQuery = jest.fn();
    const { getByText, getByPlaceholderText } = render(<SearchForm getQuery={mockGetQuery} />);
    const searchInput = getByPlaceholderText('Search Recipe');
    const searchButton = getByText('Search');

    fireEvent.changeText(searchInput, 'Pasta');
    fireEvent.press(searchButton);

    expect(mockGetQuery).toHaveBeenCalledWith('Pasta');
  });
});
