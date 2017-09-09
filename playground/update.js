const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log(err);
    console.log('Connected!');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId("59b21f9573252306abff0ae4") // filter
    }, {
        $set: {
            completed: true // what to update
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // db.close();
})