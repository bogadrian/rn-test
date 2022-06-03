import React from 'react';
import renderer from 'react-test-renderer';
import { Input } from '../Autocomplete';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn()
  };
});

describe('<Input />', () => {
  it('renders Input', () => {
    const wrapped = renderer.create(<Input />).toJSON();
    expect(wrapped).toBeDefined();
  });
});
