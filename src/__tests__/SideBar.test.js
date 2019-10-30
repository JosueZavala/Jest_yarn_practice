import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from '../components/App';
import renderer from 'react-test-renderer';
import {shallow, Enzyme, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Toggle Changed', () => {
  /*const component = renderer.create(
    <SideBar />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();*/

  const wrapper = shallow(<SideBar />);
  wrapper.find('#menu-icon').simulate('click');
});
