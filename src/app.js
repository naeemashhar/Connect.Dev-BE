const express = require('express');

const app = express();


//request handler (Order of Routes matters)

//this will only handel GET requests 
app.get("/user", (req, res) => {
    res.send({firstName : "Naeem", lastName: "Ashhar"});
});



app.post("/user", (req, res) => {
    res.send({message: "User created successfully!"});
});



app.delete("/user", (req, res) => {
    res.send({message: "User deleted successfully!"});
});


app.put("/user", (req, res) => {
    //this will handle PUT requests
    //PUT is used to update the entire resource
    res.send({message: "User updated successfully!"});
});


app.patch("/user", (req, res) => {
    //this will handle PATCH requests
    //PATCH is used to update a part of the resource
    res.send({message: "User partially updated successfully!"});
});






//this will match all the HTTP methods 
app.use("/admin", (req, res) =>{//request handler (Order of Routes matters)
    res.send('Welcome to the admin page!');
})


app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});