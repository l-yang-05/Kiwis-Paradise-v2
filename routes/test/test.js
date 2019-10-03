
require('dotenv').config()

const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const request = require('request')
const app = require('../../server')

chai.use(chaiHttp);
chai.should();

describe("Tests API Endpoints", () => {
    describe("GET /", () => {
        it("should get back html text in res.text", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.text.should.be.a('string');
                    done();
                });
        });
    });

    describe("GET /api/products", () => {
        it("should get all products", (done) => {
            chai.request(app)
                .get('/api/products')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe("GET /api/productfilter", () => {
        it("should get all products by filter", (done) => {
            chai.request(app)
                .get('/api/productfilter')
                .query({ type: 'other' })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe("GET /api/contacts", () => {
        it("should get all contacts", (done) => {
            chai.request(app)
                .get('/api/contacts')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe("GET /api/productinvoice", () => {
        it("should perform query from invoice", (done) => {
            chai.request(app)
                .get('/api/productinvoice')
                .query({ quantity: 2, name: "FGO Summer Jeanne D'Arc Alter Plush" })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe("POST /api/newContact", () => {
        it("should be able to post new contact", (done) => {
            chai.request(app)
                .post('/api/newContact')
                .set('content-type', 'application/json')
                .send({
                    full_name: 'TDD Toby',
                    email: 'TDD0192@hotmail.com',
                    message: 'Huh this post works I see.'
                })
                .end(function (error, response, body) {
                    if (error) {
                        done(error);
                    } else {
                        done();
                    }
                });

        });
    });


});