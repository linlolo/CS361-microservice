# CS 361 Microservice Communication Contract

This is a spell checking microservice takes in a body of text and returns any invalid words.

## How to REQUEST Data

App is deployed on https://linlo-cs361-microservice.uw.r.appspot.com/. To request data, send a HTTP
POST request to this URL with the text included in the body of the request

### Example Request:

Requests will be in the "text" key of the body. The body must include the "text" property, and the
value must be a non-empty string type.

POST https://linlo-cs361-microservice.uw.r.appspot.com/

Request Body: { "text": "A long body of text, that can contain numbers like 123, and symbols like
hyphens within hyphenated-words, but only thi will be returned." }

## How to RECEIVE Data

Data will be in the body of the response that was requested.

### Example Response:

Valid Requests will return a 200 status.

Response Body: { "invalidWords: [ "thi" ] }

Invalid Requests will return a 404 error.

Error Body: { "Error": "Invalid Body" }

## UML Diagram

(To be completed)
