const express = require('express');

const app = express();


//request handler (Order of Routes matters)

//this will only handel GET requests
//in between path 
// (+ => ab+c we can write any number of b's), 
// (* => ab*cd we can write any number of characters), 
// (ab?c => ab?c will match both ab and abc)
// (a(bc)?d) = > that means (bc) is optional
// (/a/) => this will match any path that starts with a
//(/.*fly$/) => this will match any path that ends with fly
app.get("/user/:user_id/:name/:age", (req, res) => { // dynamic id route
    console.log(req.params); //to save dynamic parameters
    //console.log(req.query);//to save query parameters
    res.send({firstName : "Naeem", lastName: "Ashhar"});
});


app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});