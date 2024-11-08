const express = require('express');
const { default: helmet } = require('helmet');
const app = express();


// Middleware to parse the body of the request
app.use (express.json());
// Middleware to parse the body of the request
app.use (express.urlencoded({ extended: true }));

// Middleware to secure the app by setting various HTTP headers
app.use(helmet());


//port number to listen on 
const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
     res.send('Hello this is ');
     console.log('ahmed sassssssssssssmir looggg this is ');
 });



 // listening 
app.listen(port, () => {
    console.log(`Server is rddddunning on port ${port}`);
});
