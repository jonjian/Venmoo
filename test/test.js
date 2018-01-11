const { expect } = require('chai');
const server = require('./../server/index.js').app;
const db = require('./../database/index.js');
<<<<<<< HEAD

const supertest = require('supertest');
const request = supertest.agent(server);

=======
const supertest = require('supertest');
const request = supertest.agent(server);

const { expect } = require('chai');
const server = require('./../server/index.js');
const db = require('./../database/index.js');
>>>>>>> 31853f74316a2536dc7cc5a2203426426a077e7a
import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow, mount, render } from 'enzyme';
import ProfilePage from '../client/src/components/ProfilePage.jsx';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from '../client/src/components/SignUp.jsx';

console.log(process.env.DATABASE_URL);

configure({ adapter: new Adapter() });

describe('server', () => {
  describe('GET /user/:id', () => {
    it('should return an object of user info when id is a user', function(done) {
      request
          .get('/user/1')
          .expect(200)
          .expect(/annie/, done) //not perfect put better than anything we got
    })

    it('should 404 when given an invalid user id', function(done) {
      request
        .get('/user/999999')
        .expect(404, done)

        request
          .get('/user/abc')
          .expect(404, done)
    })
  });

  describe('POST /payments', () => {
    it('should 201 when making post request with data', function(done) {
      request
        .post('/payments', {
          username: 'yo',
          amount: '30',
          isPayment: true,
          message: 'hm'
        })
        .expect(201, done)

    })


  })

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

describe('Database', function() {
  describe('getTransactionHistory', function() {
    it('should be a function', function() {
      expect(db.getTransactionHistory).to.be.a('function');
    });
    it('should return a promise', function() {
      let queryResult = db.getTransactionHistory('annie');
      expect(queryResult instanceof Promise).to.equal(true);
    });
    xit('should resolve to an object', function() {
      return db.getTransactionHistory('annie').then((res) => {
        expect(res).to.be.an('object');
      });
    });
    xit('should have amount, status, type, timestamp, and description data', function() {
      return db.getTransactionHistory('annie').then((res => {
        let dataEntry = res.rows[0];
        expect(dataEntry.hasOwnProperty('amount')).to.equal(true);
        expect(dataEntry.hasOwnProperty('status')).to.equal(true);
        expect(dataEntry.hasOwnProperty('type')).to.equal(true);
        expect(dataEntry.hasOwnProperty('created_timestamp')).to.equal(true);
        expect(dataEntry.hasOwnProperty('resolved_timestamp')).to.equal(true);
        expect(dataEntry.hasOwnProperty('description')).to.equal(true);
      }))
    })
  });
});
