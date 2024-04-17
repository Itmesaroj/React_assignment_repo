import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with correct children content', () => {
    // Arrange
    const onClick = jest.fn();
    const childrenContent = 'Click Me';

    // Act
    const { getByText } = render(<Button onClick={onClick}>{childrenContent}</Button>);
    const button = getByText(childrenContent);

    // Assert
    expect(button).toBeInTheDocument();
  });

  test('fires onClick event when clicked', () => {
    // Arrange
    const onClick = jest.fn();
    const childrenContent = 'Click Me';

    // Act
    const { getByText } = render(<Button onClick={onClick}>{childrenContent}</Button>);
    const button = getByText(childrenContent);
    fireEvent.click(button);

    // Assert
    expect(onClick).toHaveBeenCalled();
  });

  test('displays children content inside button element', () => {
    // Arrange
    const onClick = jest.fn();
    const childrenContent = 'Click Me';

    // Act
    const { getByText } = render(<Button onClick={onClick}>{childrenContent}</Button>);
    const button = getByText(childrenContent);

    // Assert
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveTextContent(childrenContent);
  });
});
