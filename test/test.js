var expect = require("chai").expect; 
var twitter = require("../routes/helpers/twitter"); 
var getty = require("../routes/helpers/getty"); 
var sinon = require("sinon"); 

var sandbox; 

//  beforeEach(function() {
//     // create a sandbox
//     console.log("in before..."); 
//     sandbox = sinon.sandbox.create();
//     sandbox.stub(getty, "makeApiRequest").callsFake(function(callback) {
//         callback(null, "http://gettyimages.com/bird.png"); 
//     });
//   });
  
//   afterEach(function() {
//     // restore the environment as it was before
//     // in after....
//     console.log("in after..............$$$$$$$$$$$$$$"); 
//     sandbox.restore();
//   });




describe("Twitter api call", function() {
    it("should return without errors", function(done) {
        twitter.doAllTwitterRequests(function(error, tweets) {
            //console.log("tweets: " + tweets.length); 
            console.log("error: " + error); 
            
            expect(error).to.be.a('null'); 
            done(); 
        });
    }); 
    
    it("should return a list of tweets", function(done) {
        twitter.doAllTwitterRequests(function(error, tweets) {
            //console.log("tweets: " + tweets.length); 
            expect(tweets).to.be.a('array'); 
            expect(tweets.length).to.be.above(0); 
            done(); 
        });
    });
}); 

describe("Getty api call",function()
{
    it("must return uri",function(done)
    {
        getty.makeApiRequest(function(error,imageURI)
        {
            expect(imageURI).to.be.a('string');
            done();
        });
    });
});

var stub = sinon.stub(getty, "makeApiRequest").callsFake(function(callback) {
         callback(null, "http://gettyimages.com/bird.png"); 
    });
    
describe("Getty api call", function() {
    
    it("should return without errors", function(done) {
        
        getty.makeApiRequest(function(error, imgURI) {
            //console.log("tweets: " + tweets.length); 
            console.log("imageURI!: " + imgURI); 
            
            expect(imgURI).to.not.be.a('null'); 
            done(); 
        });
    }); 
    
    
    
    
    
}); 
