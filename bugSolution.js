```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"myNumber": 1}});

// Or, if you need to convert a string to a number, you can do so within the query:

db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"myNumber": parseInt(this.myString)}}); 
//Note: This requires adding myNumber field to collection and handling potential errors if myString is not a valid integer.
```