import React from 'react';
import renderer from 'react-test-renderer';
import { Success } from '../Success';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
    useRoute: jest.fn()
  };
});

describe('<Success />', () => {
  it('renders Success', () => {
    const wrapped = renderer.create(<Success />).toJSON();
    expect(wrapped).toBeDefined();
  });
});
