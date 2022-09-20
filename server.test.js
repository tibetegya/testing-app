let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./server');
let should = chai.should();
const { expect } = chai
chai.use(chaiHttp);

describe('Server', function () {
    it('should return response', function (done) {
        chai.request(server).get('/')
            .end(function (err, res) {
                expect(res.text).to.equal('Hello World!')
                done()
            })
    })
})