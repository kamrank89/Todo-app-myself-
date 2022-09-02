const { MongoClient, Collection } = require("mongodb");

/* Connection URI */
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const run = async function () {
  try {
    const database = client.db("mytestdb");
    const test = database.collection("test");
    const doc = { name: "Test", color: "red" };
    const result = await test.insertOne(doc);
    console.log(`A documnet was inserted with the _id: ${result.insertedId}`);
    const doc2 = { name: "test2", color: "red2" };
    const result2 = test.insertOne(doc2);
    console.log(`A documnet was inserted with the _id: ${result2.insertedId}`);
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
module.exports = run;
