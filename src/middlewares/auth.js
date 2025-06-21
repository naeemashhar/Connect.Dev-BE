const adminAuth = (req, res, next) => { 
    console.log('check the admin authorization'); 
    //logic of authorization
    const token = "xyz";
    const authorized = token === "xyz";
    if(!authorized){
        res.status(401).send('Access Denied');
    }
    else{
        next();
    }
};


const userAuth = (req, res, next) => { 
    console.log('check the user authorization'); 
    //logic of authorization
    const token = "xyzasa";
    const authorized = token === "xyz";
    if(!authorized){
        res.status(401).send('Access Denied');
    }
    else{
        next();
    }
};


module.exports = {
    adminAuth,
    userAuth,
};