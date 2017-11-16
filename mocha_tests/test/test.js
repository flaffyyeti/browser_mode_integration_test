var server = 'http://localhost:8080';
var expect = chai.expect;
var assert = chai.assert;

function testAsync(done, fn) {
  try {
    fn();
    done();
  } catch(err) {
    done(err);
  }
}

describe('Test REST api', function() {
	
    it('should return correct devision result', (done) => {
		
    chai.request(server)
		    .get('/divide')
			.query({number: 10, divider: 2})
		    .end((err, res) => {
				testAsync(done, function(){
                   expect(res).to.have.status(200);
				   assert.equal(5, res.body.result);
				}.bind(res));
		    });
    });

    it('should return error response code when devision on zero', (done) => {
		
    chai.request(server)
		    .get('/divide')
			.query({number: 10, divider: 0})
		    .end((err, res) => {
				testAsync(done, function(){
			        expect(res).to.have.status(500);
				}.bind(res));
		    });
    });
	
	it('always failing test, assert incorrect result', (done) => {
		
    chai.request(server)
		    .get('/divide')
			.query({number: 10, divider: 2})
		    .end((err, res) => {
				testAsync(done, function(){
			       expect(res).to.have.status(200);
				   assert.equal(6, res.body.result);
				}.bind(res));
		    });
    });
  
});