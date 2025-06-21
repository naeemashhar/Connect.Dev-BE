const express = require('express');

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");//second way to use middleware

//ALWAYS REMEMBER HOW NODE.JS WORKS(LINE BY LINE MAIN STACK etc .....),ORDER MATTER




//Why we use middlewares?
// when (/user) called it will check line by line until he founds the respond and that response call as (REQUEST-HANDLERS) and rest of is called as (MIDDLEWARES).
//(Get /user => middleware-chain => request-handler.) 
//Example : 

//handling middleware request for all GET, POST, PUT, DELETE requests to /admin, using (app.use)


//this is the first way to use middleware
/* app.use("/admin",(req, res, next) => { 
    console.log('check the admin authorization'); 
    //logic of authorization
    const token = "xyzasdas";
    const authorized = token === "xyz";
    if(!authorized){
        res.status(401).send('Access Denied');
    }
    else{
        next();
    }
}); */

//second way to use middleware
app.use("/admin", adminAuth);


app.get('/admin/getAllData', (req, res, next) =>{
    res.send('All Data sended');
});

app.get('/admin/deleteUser', (req, res, next) =>{
    res.send('User deleted');
})

app.post('/user/login', (req, res, next) => { //this will not use middleware
    res.send('User logged in');
});


app.get('/user/data', userAuth, (req, res, next) => { //another way of using middleware
    res.send('User data sended');
});




app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});