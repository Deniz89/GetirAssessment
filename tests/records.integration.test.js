const request = require('supertest');

const app = require('../app')

const seeds = require('./records.integration.seed')

describe("Success cases", () => {
  test("All parameters exist", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["all-params-exist"])
    .expect(200).end((err, res) => {      
      if(err) return done(err)

      expect(res.body.code).toBe(0)

      done()
    })
  }, 10000),
  test("Only startDate exists", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["only-startDate-exists"])
    .expect(200).end((err, res) => {      
      if(err) return done(err)

      expect(res.body.code).toBe(0)

      done()
    })
  }, 10000),
  test("Only endDate exists", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["only-endDate-exists"])
    .expect(200).end((err, res) => {      
      if(err) return done(err)

      expect(res.body.code).toBe(0)

      done()
    })
  }, 10000),
  test("startDate & endDate exist", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["startDate-endDate-exist"])
    .expect(200).end((err, res) => {      
      if(err) return done(err)

      expect(res.body.code).toBe(0)

      done()
    })
  }, 10000),
  test("Only minCount exist", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["only-minCount-exists"])
    .expect(200).end((err, res) => {      
      if(err) return done(err)

      expect(res.body.code).toBe(0)

      done()
    })
  }, 10000),
  test("Only maxCount exists", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["only-maxCount-exists"])
    .expect(200).end((err, res) => {      
      if(err) return done(err)

      expect(res.body.code).toBe(0)

      done()
    })
  }, 10000),
  test("minCount & maxCount exists", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["minCount-maxCount-exist"])
    .expect(200).end((err, res) => {      
      if(err) return done(err)

      expect(res.body.code).toBe(0)

      done()
    })
  }, 10000),
  test("Three parameters exist - 0", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["three-parameters-exist-0"])
    .expect(200).end((err, res) => {      
      if(err) return done(err)

      expect(res.body.code).toBe(0)

      done()
    })
  }, 10000),
  test("Three parameters exist - 1", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["three-parameters-exist-1"])
    .expect(200).end((err, res) => {      
      if(err) return done(err)

      expect(res.body.code).toBe(0)

      done()
    })
  }, 10000)
  
})