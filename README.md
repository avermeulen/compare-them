# compare-them

A simple API that checks how similar two string are.

The API takes parameter like this

```json

{
  "textOne" : {
    "baseTextId" : "",
    "text" : "The text to compare"
  },
  "textTwo" : {
    "compareToTextId" : "",
    "text" : "The text to compare"
  }
}

```

It returns :

```json
{
  "similarityRating" : 0.670
}
```

The more similar two pieces of text is the the closer the similarityRating number is to 1.

## Project setup

To run this project do:

```
git clone https://github.com/avermeulen/compare-them
npm install

nodemon
// or
node index.js
```

## Module to use

https://www.npmjs.com/package/string-similarity

## API endpoints

POST endpoint `api/compare`

~~Call the endpoint using POSTMAN.~~

Using supertest with mocha works very well for testing.

## Think about

A compare all API endpoint, that compares one string against a list of strings returning the string with the highest degree of similarity.

```json

{
  "text" : {
    "baseTextId" : "",
    "text" : "The text to compare"
  },
  "compareTo" : [{
    "id" : "one-12",
    "text" : "The text to compare"
  },
  {
    "id" : "one-26",
    "text" : "Other text to compare"
  }]
}
```

It returns something like :

```json
{
  "baseTextId" : "",
  "mostSimilarTextId" : "",
  "baseText" : "The base text",
  "mostSimilarText" : "",
  "similarityRating" : 0.670
}
```

Once the API it working think about creating an UI that use https://diff2html.xyz/
