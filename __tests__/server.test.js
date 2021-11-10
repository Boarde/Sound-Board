// // allow test file to start a server on its own
// const testServerFile = require('../server/server');
// // const express = require('express');
// // const app = express();

// const request = require('supertest');
// // app.use(express.urlencoded({ extended: false }));
// // app.use('/', server);
// console.log('hello')
// const server = 'http://localhost:3000';


// describe('Route integration', () => {
//   describe('/', () => {
//     describe('GET', () => {
//       it('responds with 200 status and text/html content type', () => {
//         return request(testServerFile)
//           .get('/')
//           .expect('Content-Type', /text\/html/)
//           .expect(200);
//       });
//     });
//   });
// });

const server = require('../server/server.js');

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", server);

// test("index route works", done => {
//   request(app)
//     .get("/")
//     // .expect("Content-Type", /json/)
//     // .expect({ name: "frodo" })
//     .expect(200, done);
// });

// describe('Route integration', () => {
//   describe('/', () => {
//     describe('GET', () => {
//       it('responds with 200 status and text/html content type', () => {
//         return request(testServerFile)
//           .get('/')
//           .expect('Content-Type', /text\/html/)
//           .expect(200);
//       });
//     });
//   });
// });

describe('Good Home Routes', function () {

  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
})