const request = require('supertest');

const app = require('../app')

const {ERR_DETAILS} = require('../constants')

const def = require('../validators/definitions')

const seeds = require('./records.unit.seed')

describe("Parameters errors", () => {
  test("startDate is not a valid date string - 0", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["startDate-not-valid-0"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg
        .find(el => el.param === "startDate" && el.msg === ERR_DETAILS["startDate-not-valid"])).toBeTruthy()

      done()
    })
  }),
  test("startDate is not a valid date string - 1", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["startDate-not-valid-1"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg.find(el => el.param === "startDate" && el.msg === ERR_DETAILS["startDate-not-valid"])).toBeTruthy()

      done()
    })
  }),
  test("startDate is not a valid date string - 2", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["startDate-not-valid-2"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg.find(el => el.param === "startDate" && el.msg === ERR_DETAILS["startDate-not-valid"])).toBeTruthy()

      done()
    })
  }),
  test("endDate is not a valid date string - 0", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["endDate-not-valid-0"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg.find(el => el.param === "endDate" && el.msg === ERR_DETAILS["endDate-not-valid"])).toBeTruthy()

      done()
    })
  }),
  test("endDate is not a valid date string - 1", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["endDate-not-valid-1"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg.find(el => el.param === "endDate" && el.msg === ERR_DETAILS["endDate-not-valid"])).toBeTruthy()

      done()
    })
  }),
  test("endDate is not a valid date string - 2", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["endDate-not-valid-2"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg.find(el => el.param === "endDate" && el.msg === ERR_DETAILS["endDate-not-valid"])).toBeTruthy()

      done()
    })
  }),
  test("endDate is not after startDate", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["endDate-not-after-startDate"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg.find(el => el.param === "endDate" && el.msg === ERR_DETAILS["endDate-not-correct"])).toBeTruthy()

      done()
    })
  }),
  test("minCount is not valid - 0", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["minCount-not-valid-0"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg
        .find(el => el.param === "minCount"
          && el.msg === ERR_DETAILS["minCount-not-valid"](def.COUNT_MIN, def.COUNT_MAX))).toBeTruthy()

      done()
    })
  }),
  test("minCount is not valid - 1", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["minCount-not-valid-1"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg
        .find(el => el.param === "minCount"
          && el.msg === ERR_DETAILS["minCount-not-valid"](def.COUNT_MIN, def.COUNT_MAX))).toBeTruthy()

      done()
    })
  }),
  test("minCount is not valid - 2", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["minCount-not-valid-2"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg
        .find(el => el.param === "minCount"
          && el.msg === ERR_DETAILS["minCount-not-valid"](def.COUNT_MIN, def.COUNT_MAX))).toBeTruthy()

      done()
    })
  }),
  test("maxCount is not valid - 0", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["maxCount-not-valid-0"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg
        .find(el => el.param === "maxCount"
          && el.msg === ERR_DETAILS["maxCount-not-valid"](def.COUNT_MIN, def.COUNT_MAX))).toBeTruthy()

      done()
    })
  }),
  test("maxCount is not valid - 1", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["maxCount-not-valid-1"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg
        .find(el => el.param === "maxCount"
          && el.msg === ERR_DETAILS["maxCount-not-valid"](def.COUNT_MIN, def.COUNT_MAX))).toBeTruthy()

      done()
    })
  }),
  test("maxCount is not valid - 2", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["maxCount-not-valid-2"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg
        .find(el => el.param === "maxCount"
          && el.msg === ERR_DETAILS["maxCount-not-valid"](def.COUNT_MIN, def.COUNT_MAX))).toBeTruthy()

      done()
    })
  }),
  test("maxCount is smaller than minCount", (done) => {
    request(app)
    .post('/g/records/fetch')
    .send(seeds["max-count-smaller-than-minCount"])
    .expect(400)
    .end((err, res) => {
      if(err) return done(err)

      expect(res.body.code === -2).toBeTruthy()
      expect(res.body.msg
        .find(el => el.param === "maxCount"
          && el.msg === ERR_DETAILS["maxCount-not-correct"])).toBeTruthy()

      done()
    })
  })
})