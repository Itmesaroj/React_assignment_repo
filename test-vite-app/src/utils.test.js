// utils.test.js
import { add, fetchData } from './utils';

describe('add function', () => {
  test('adds two numbers correctly', () => {
    // Arrange
    const a = 5;
    const b = 10;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(15);
  });
});

describe('fetchData function', () => {
  // Mock fetch function to simulate network request
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: 'testData' }),
    })
  );

  test('fetches data successfully from the API', async () => {
    // Act
    const data = await fetchData();

    // Assert
    expect(data).toEqual({ data: 'testData' });
  });

  test('handles errors when fetching data', async () => {
    // Arrange
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));

    // Act
    const fetchDataPromise = fetchData();

    // Assert
    await expect(fetchDataPromise).rejects.toThrow('Fetch failed');
  });
});
