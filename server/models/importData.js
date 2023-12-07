const { MongoClient } = require('mongodb');
const fs = require('fs');
require('dotenv').config(); 

const url = process.env.MONGODB_URI;

async function importData() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const database = client.db('Visualization_DashBoard'); 
    const collection = database.collection('data'); 

 
    const jsonData = JSON.parse(fs.readFileSync('./data/jsondata.json', 'utf-8'));

    const result = await collection.insertMany(jsonData);
    console.log(`${result.insertedCount} documents inserted`);
  } finally {
    await client.close();
  }
}

importData();
