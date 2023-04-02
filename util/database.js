const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dotenv = require('dotenv');
dotenv.config();
//const username = process.env.username;
const password = process.env.password;

let _db;
// This method is for connecting and storing connection infomation in _db.
const mongoConnect = (callback) => {
    MongoClient.connect(`mongodb+srv://nkword1899:${password}@nitishcluster0.e0nwreq.mongodb.net/shop?retryWrites=true&w=majority`)
    .then(client => {
      console.log('Connected');
      _db = client.db(); // making connection to default shop database
      // _db variable stores information of how to connect to shop database
      callback();
    })
    .catch((err)=>{
      console.log(err);
      throw err;
    })
};

const getDb = () => {
  if(_db){
    return _db;
  }
  throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;