const express = require('express');

const app = express();
app.use("/",(req, res) =>{
    res.send('This is the default response for all other routes.');
})

app.use("/test", (req, res) =>{           //request handler
    res.send('Welcome to the test page!');
})

app.use("/admin", (req, res) =>{
    res.send('Welcome to the admin page!');
})


app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});