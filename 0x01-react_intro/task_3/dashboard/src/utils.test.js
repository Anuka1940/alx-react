// Import necessary functions
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear function
describe('getFullYear', () => {
  test('should return the current year', () => {
    const currentYear = new Date().getFullYear(); // dynamically get the current year
    expect(getFullYear()).toBe(currentYear);
  });
});

// Test for getFooterCopy function
describe('getFooterCopy', () => {
  test('should return "Holberton School" when true is passed', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('should return "Holberton School main dashboard" when false is passed', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

// Test for getLatestNotification function
describe('getLatestNotification', () => {
  test('should return the correct notification string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});

