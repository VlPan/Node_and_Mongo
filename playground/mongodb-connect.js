const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('There is an error');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something toDO',
    //     completed: false
    // }, (err, result)=>{
    //     if(err) return console.log(err);
    //     console.log(JSON.stringify(result.ops, undefined, 2))

    // })

    db.collection('Users').insertOne({
        name: 'Vl',
        age: 18,
        location: 'Mogilev cosmonavtov street'
    },(err, result)=>{
        if(err) return console.log(err);
        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    db.close();
});