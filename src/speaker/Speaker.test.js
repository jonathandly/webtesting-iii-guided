import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Speaker from './Speaker';

describe('<Speaker />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Speaker />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

//   it('matches snapshot with message', () => {
//     const tree = renderer.create(<Speaker message={'hello'} />);

//     expect(tree.toJSON()).toMatchSnapshot();
//   });

  it('should display message', () => {
      const { getByText } = render(<Speaker message={'hello'} />);
      getByText('hello');
  });

  it('should call speak on button click', () => {
    const speak = jest.fn();  
    const { getByText } = render(<Speaker speak={speak} />);

    const button = getByText(/speak/i);

    fireEvent.click(button);

    expect(speak).toHaveBeenCalled();
    expect(speak).toHaveBeenCalledTimes(1);
  });
});
