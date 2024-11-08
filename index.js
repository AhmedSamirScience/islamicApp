const express = require('express');
const app = express();


app.get("/", (req, res) => {
     res.send('Hello this is ');
     console.log('ahmed sassssssssssssmir looggg this is ');
 });


app.listen(3000, () => {
    console.log('Server is rddddunning on port 3000');
});
