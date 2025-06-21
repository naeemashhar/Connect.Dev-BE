const express = require('express');

const app = express();

//ALWAYS REMEMBER HOW NODE.JS WORKS(LINE BY LINE MAIN STACK etc .....)


app.use("/route", [rh1, rh2, rh3], rh4);// we can wrap them using an array it will give u same result.


app.use("/user", (req, res, next) =>{ //ap.use handles all(get,put ....) requests to the specified path.
    //Route handler-1 
    console.log('User-1 route accessed');
    //res.send('User-1 route');
    next(); //function by (express-js)
}, (req, res, next) => {
    //Route handler-2
    console.log('User-2 route accessed');
    //res.send('User-2 route');
    next(); 
},(req, res, next) => {
    //Route handler-3
    console.log('User-3 route accessed');
    //res.send('User-3 route');
    next();
},
(req, res, next) => {
    //Route handler-4
    console.log('User-4 route accessed');
    res.send('User-4 route');

}
);

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});