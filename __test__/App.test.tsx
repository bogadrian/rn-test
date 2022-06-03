import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
  it('renders App', () => {
    const app = renderer.create(<App />);
    expect(app).toBeDefined();
  });
});
