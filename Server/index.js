const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

//middlewarer
app.use(cors({ origin: true, credentials: true }))
app.options('*', cors({ origin: true, credentials: true }))
app.use(express.json());


// Database Conention
const uri = "mongodb+srv://frist_curd_project:frist_curd_project@cluster0.5aayssm.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    // const database = client.db("frist_curd");
    // const userCollection = database.collection("frist_curd_project");
    const userCollection=client.db('frist_curd').collection('frist_curd_project')

    app.get('/users', async(req,res)=>{
      const cursor=userCollection.find();
      const result= await cursor.toArray();
      res.send(result)
    })

    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollection.insertOne(user);
      console.log({result});
      res.send(result);
    })
   


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
  res.send("Smple Curd Is Runing")
})
app.listen(port, () => {
  console.log(`simple Curd is runing Port ${port}`);
})






// https://cloud.mongodb.com/v2/6589631993b2105f595fe698#/metrics/replicaSet/658963a71fb79e0db56c8501/explorer/frist_curd/frist_curd_project/find


