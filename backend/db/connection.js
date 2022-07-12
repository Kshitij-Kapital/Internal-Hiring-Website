const mongoose = require('mongoose');

//Connect to HubDB
const DB = process.env.DATABASE;


try{
    mongoose.connect(DB, { 
        // useNewUrlParser: true,
        // useUnfiedTopology:true,
        // useCreateIndex: true,
        // useFindAndModify: false
    }, () => console.log("Connection Successful")) ;
    }
        catch(error) { console.log("No Connection ");
    }
    

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(() => {
//     console.log(`Connection Successful`);
// }).catch((err) => console.log(`No Connection`));