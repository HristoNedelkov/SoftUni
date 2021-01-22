const mongoDB = require('mongodb');
const MongoClient = mongoDB.MongoClient
const conStr = 'mongodb://localhost:27017'

const client  = new MongoClient(conStr,{useUnifiedTopology: true})

// client.connect(function(err) {
//     if(err) {
//         console.log(err)

//     }
//     let db = client.db('catagram');
//     let cats = db.collection('cats');
//     cats.find({}, (e, res ) =>  {
//         if(e) {
//             console.log(e)
//             return
//         }

//         res.toArray((e,res)=> {
//             console.log(res);
//         })


//     })
// })



client.connect()
    .then(res=> {
        const db = clint.db('catagram')
        const cats = db.collection('cats')

        return cats.findOne({})

    })
    .then(res=> {
        console.log(res)
    })