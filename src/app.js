const express = require('express');

const app = express();

//ALWAYS REMEMBER HOW NODE.JS WORKS(LINE BY LINE MAIN STACK etc .....),ORDER MATTER


//app.use("/route", [rh1, rh2, rh3], rh4); => we can wrap them using an array it will give u same result.

//Why we use middlewares?
// when (/user) called it will check line by line until he founds the respond and that response call as (REQUEST-HANDLERS) and rest of is called as (MIDDLEWARES).
//(Get /user => middleware-chain => request-handler.) 
//Example : 

app.use("/", (req, res, next) =>{ //middleware
    console.log('Home route accessed');
    //res.send('Home route');
    next();
})

app.use("/user", (req, res, next) =>{ //middleware
    //Route handler-1 
    console.log('User-1 route accessed');
    //res.send('User-1 route');
    next(); //function by (express-js) // or next() function to pass control to the next middleware function in the stack.
});
app.use("/user", (req, res, next) =>{ //request-handler
    //Route handler-2 
    console.log('User-2 route accessed');
    res.send('User-2 route');
});

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});