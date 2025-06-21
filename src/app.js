const express = require('express');

const app = express();


//ALWAYS REMEMBER HOW NODE.JS WORKS(LINE BY LINE MAIN STACK etc .....),ORDER MATTER



//Error handling 
//first-way(better way)
app.get('/user',(req, res, next) => { //another way of using middleware
    try {

        throw new Error('Something went wrong');     
        res.send('User data sended');
    } catch (error) {
       res.status(500).send('Internal Server Error'); 
    }
    
});

app.get('/product', (req, res, next) => {
    res.send('Product data sended');
});


//Error handling middleware(at global Route)always keep this at end of all routes
//second-way(not a good way but keep this as last line of code)

/* app.get('/user',(req, res, next) => { //another way of using middleware
    //logic of DB call and getting user data
    
    throw new Error('Something went wrong');     
    res.send('User data sended');
}); */

app.use("/", (err,req, res, next) => {//err always be first parameter (ORDER-MATTER)
    if (err) {
        // Log the error message
        res.status(500).send('Internal Server Error');
    }
});




app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});