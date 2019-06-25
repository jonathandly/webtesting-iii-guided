import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import App from './App';

describe('<App />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<App />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should update message dynamically', () => {
    const { queryByText, getByText } = render(<App />);

    getByText(/nothing yet/i);
    expect(queryByText(/mocking me/i)).toBeFalsy();

    const button = getByText(/speak/i);
    fireEvent.click(button);

    getByText(/mocking me/i);
    expect(queryByText(/nothing yet/i)).toBeFalsy();
  });
});

describe('mock functions', () => {
  it('is mocking me', () => {
    const mock = jest.fn();
    // const mock = () => {};

    const result = mock();

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('controls the mock', () => {
    const mock = jest.fn(() => 'hello');

    const result = mock('smile');
    expect(result).toBe('hello');
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('smile');
  });
});
