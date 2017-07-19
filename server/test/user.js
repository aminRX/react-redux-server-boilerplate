const mongoose = require('mongoose');
const User = require('./../app/models/user');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../index');
const should = chai.should();
const faker = require('faker');

chai.use(chaiHttp);

describe('User', () => {
  const data = { email: faker.internet.email(), password: faker.internet.password() };
  const data1 = { email: faker.internet.email(), password: faker.internet.password() };

  before((done) => {
    User.remove({}, (err) => {
      done();
    });
  });

  after((done) => {
    User.remove({}, (err) => {
      done();
    });
  });


  describe('/GET Users', () => {
    it('It should be a empty user.', (done) => {
      chai.request(server).get('/api/users').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
    });
  });

  describe('/POST', () => {
    it('It should create a new user.', (done) => {
      chai.request(server).post('/api/users').send(data).end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('success').equal(true);
        res.body.should.have.property('message').equal('User created.');
        done();
      });
    });

    it('The email should be unique.', (done) => {
      chai.request(server).post('/api/users').send(data).end((err, res) => {
        res.should.have.status(422);
        res.body.should.be.a('object');
        res.body.should.have.property('success').equal(false);
        res.body.should.have.property('message').equal('User alreary exist.');
        done();
      });
    });
  });

  describe('/GET Users', () => {
    it('It should show 1 user.', (done) => {
      chai.request(server).get('/api/users').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(1);
        res.body[0].should.have.property('email');
        res.body[0].should.not.have.property('password');
        done();
      });
    });

    it('It should create a new user.', (done) => {
      chai.request(server).post('/api/users').send(data1).end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('success').equal(true);
        res.body.should.have.property('message').equal('User created.');
        done();
      });
    });

    it('It should show 2 user.', (done) => {
      chai.request(server).get('/api/users').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(2);
        res.body[1].should.have.property('email');
        res.body[1].should.not.have.property('password');
        done();
      });
    });
  });

  describe('/Get User', () => {
    it('It show a user by id', (done) => {
      const user = new User({
        email: faker.internet.email(),
        password: faker.internet.password()
      });

      user.save((err, user) => {
        chai.request(server).get(`/api/users/${user._id}`).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('email').equal(user.email);
          res.body.should.not.have.property('password');
          done();
        });

      });
    });

    it('It not show a user by incorrect id', (done) => {
      chai.request(server).get(`/api/users/${'incorrect'}`).end((err, res) => {
        res.should.have.status(204);
        done();
      });
    });
  });
});
