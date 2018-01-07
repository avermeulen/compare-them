const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;
const bodyParser = require('body-parser');
const stringSimilarity = require('string-similarity');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", index)
app.post("/api/compare", compare)

function index(req, res){
    res.send("Compare API")
}

function compare(req, res){
    const stringOne = req.body.textOne.text;
    const stringTwo = req.body.textTwo.text;

    const similarity = stringSimilarity
        .compareTwoStrings(stringOne, stringTwo);

    res.send({
        similarityRating : similarity.toFixed(2)
    });

}

app.listen(PORT, function(){
    console.log(`Started app on port : ${PORT}`);
});
