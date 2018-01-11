const expect = require('chai').expect;
const server = require('./../server/index.js');

import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow, mount, render } from 'enzyme';
import ProfilePage from '../client/src/components/ProfilePage.jsx';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from '../client/src/components/SignUp.jsx';

configure({ adapter: new Adapter() });

describe('server', () => {
  it('Example test should pass', () => {
    expect(1).to.not.equal(2);
  });
});

describe('react router login test', () => {
  it('should render profile page on login', () => {
    const component = shallow(<ProfilePage />);
    expect(component.find('div').toExist);
  });
});

describe("react router signup test", () => {
  it("should render signup on login", () => {
    const component = shallow(<SignUp />);
    expect(component.find("div").toExist);
  });
});
