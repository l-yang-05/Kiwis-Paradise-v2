const expect = require('chai').expect
const request = require('request')

describe('Tests for "/" api endpoint', () => {
    it("/ should send back 200 status code", (done) => {
        request.get('/', (error, response, body) => {
            expect(200)
            done()
        })
    })
    it("/ should not send back json in the body", (done) => {
        request.get("/", (error, response, body) => {
            expect(body).to.not.be.an('json')
            done()
        })
    })
})

describe('Tests for "/api/products" api endpoint', () => {
    it("/api/products should send back string in body", (done) => {
        request.get('/api/products', (error, response, body) => {
            expect(body).to.not.be.an('string');
            done();
        })
    })
    it('/api/products should send back 200 status code', (done) => {
        request.get('/api/products', (error, response, body) => {
            expect(200)
            done()
        })
    })
})

describe('Tests for "/api/productfilter" api endpoint', () => {
    it("/api/productfilter to not bring back string in body", (done) => {
        request.get("/api/productfilter", (error, response, body) => {
            expect(body).to.not.be.an('string')
            done();
        })
    })
    it('/api/productfilter should send back 200 status code', (done) => {
        request.get('/api/productfilter', (error, response, body) => {
            expect(200)
            done()
        })
    })
})

describe('Tests for "/api/contacts" api endpoint', () => {
    it("/api/contacts query should throw error", (done) => {
        request.get('/api/contacts', (error, response, body) => {
            expect(body).to.not.be.an('json')

            done();
        })
    })
    it('/api/contacts should send back 200 status code', (done) => {
        request.get('/api/contacts', (error, response, body) => {
            expect(200)
            done()
        })
    })
})

describe('Tests for "/api/newcontact" api endpoint', () => {
    it("/api/newContact body should not be a string", (done) => {
        request.post('/api/newcontacts', (error, response, body) => {
            expect(body).to.not.be.an('string')
            done();
        })
    })
    it('/api/newContact should send back 200 status code', (done) => {
        request.post('/api/newContact', (error, response, body) => {
            expect(200)
            done()
        })
    })
})

describe('Tests for "/api/productinvoice" api endpoint', () => {
    it("/api/productinvoice should not send back string in body", (done) => {
        request.get('/api/productinvoice', (error, response, body) => {
            expect(body).to.not.be.an('string')

            done();
        })
    })
    it('/api/productinvoice should send back 200 status code', (done) => {
        request.get('/api/productinvoice', (error, response, body) => {
            expect(200)
            done()
        })
    })
})