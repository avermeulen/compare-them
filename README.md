# compare-them

A simple API that checks how similar two string are.

The API takes parameter like this

```json

{
  "textOne" : {
    "id" : "",
    "text" : "The text to compare"
  },
  "textTwo" : {
    "id" : "",
    "text" : "The text to compare"
  }
}

```

It returns :

```json
{
  "similarity" : 0.670
}
```

The more similar two pieces of text is the the closer the number is to 1.

## Module to use

https://www.npmjs.com/package/string-similarity

## API endpoints

POST endpoint `api/compare`

Call the endpoint using POSTMAN.

## Think about

A compare all API endpoint, that compares one string against a list of strings returning the string with the highest degree of similarity.

```json

{
  "text" : {
    "id" : "",
    "text" : "The text to compare"
  },
  compareTo : [{
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
  idOne : "",
  idTwo : "",
  similarity : 0.670
}
```

