let express = require('express');
let app = express();

let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.MongoURL;
let db;


app.get('/',(req,res) => {
    res.send('Hii Espress is on')
})

app.get('/location', (req,res)=> {
    db.collection('location').find().toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})


//connection with db
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('Error while connecting');
    db = client.db('fiverr');
    app.listen(port, () => {
        console.log(`Server is Running on port ${port}`)
    } )
})
