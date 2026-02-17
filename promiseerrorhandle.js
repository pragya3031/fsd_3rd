const promise=require('promise');
//.then() is used to handle the resolved value of a promise,
 // while .catch() is used to handle any errors that may occur during the execution of the promise.
 const MongoClient =require('mongodb').MongoClient;
 const url='mongodb://localhost/festhost/TestDB';
    MongoClient.connect(url).then(function(err,db){
        db.collection('Test').updateOne({
            "Name":"joe"

        },
        {
            $set:{
                "Name":"john"
            }
        });
    }).catch(error=>alert(error.message));
//In this code, we are connecting to a MongoDB database and updating a document in the "Test" collection. If there is an error during the connection or the update operation, the .catch() method will catch the error and display an alert with the error message.