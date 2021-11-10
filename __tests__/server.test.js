// allow test file to start a server on its own
// const testServerFile = require('../server/server');
// const express = require('express');
// const app = express();

const request = require('supertest');
// app.use(express.urlencoded({ extended: false }));
// app.use('/', server);
console.log('hello')
const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
});