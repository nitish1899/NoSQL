const getDb = require('../util/database').getDb;

class Product {
  constructor(title,price,imageUrl,description){
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save(){
    const db = getDb();// gives database connection information 
    return db.collection('products')
    .insertOne(this)
    .then(result => {
      console.log('Result is : ',result);
    })
    .catch(err => {
      console.log(err);
    });
  }
}

module.exports = Product;
