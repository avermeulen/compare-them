const request = require('supertest');
const assert = require('assert');

describe("The compare API", function() {

    const testRequest = request("http://localhost:3005")

    it("should return 1 for strings that are the same", function(done) {
        testRequest
            .post("/api/compare")
            .send({
                "textOne": {
                    "baseTextId": "",
                    "text": "The text to compare"
                },
                "textTwo": {
                    "compareToTextId": "",
                    "text": "The text to compare"
                }
            })
            .then(function(res){
                const result = JSON.parse(res.text);
                assert.equal(1, result.similarityRating);
                done();
            })
            .catch(function(err){
                done(err);
            })
    });

    it("should return less than 1 for strings that are not the same", function(done) {
        testRequest
            .post("/api/compare")
            .send({
                "textOne": {
                    "baseTextId": "",
                    "text": "pears, apples and plumbs"
                },
                "textTwo": {
                    "compareToTextId": "",
                    "text": "apples, plumbs with pears"
                }
            })
            .then(function(res){
                const result = JSON.parse(res.text);
                assert.equal(0.86, result.similarityRating);
                done();
            })
            .catch(function(err){
                done(err);
            })
    });
});
