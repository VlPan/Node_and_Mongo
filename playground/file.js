const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log(err);
    console.log('Connected!');

    // db.collection('Todos').find({
    //     _id: new ObjectId('59b185f971965d1234daf74f')
    // }).toArray().then((docs)=>{
    //         console.log('Todos::');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     (err)=>{
    //         console.log("Unable to fetch the data!", err);
    //     }
    // );
    //
    // db.collection('Todos').find().count().then((count)=>{
    //         console.log('Todos::');
    //         console.log('Todos Count: ' + count);
    //     },
    //     (err)=>{
    //         console.log("Unable to fetch the data!", err);
    //     }
    // );

    db.collection('Users').find({name:'Vl'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined , 2))
    }, (err) => {
        console.log('Unable to find the data! ', err)
    })

    // db.close();
})