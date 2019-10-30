import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from '../components/App';
import renderer from 'react-test-renderer';

test('Toggle Changed', () => {
  const component = renderer.create(
    <SideBar />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
