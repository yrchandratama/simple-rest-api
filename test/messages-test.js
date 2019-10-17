const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const should = chai.should();

const app = require('../app');

const mockInput = {
    message: "this is a test message"
}

describe('/POST messages', () => {
    it('should create a new message', (done) => {
        chai.request(app)
            .post('/messages')
            .send(mockInput)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property('message').eql(mockInput.message);
            });
        done();
    })
});

describe('/GET messages', () => {
    it('should return all previous messages', (done) => {
        chai.request(app)
            .get('/messages')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.messages.should.be.a('array');
                res.body.should.have.property('messages').eql([mockInput.message]);
            })
        done();
    })
});