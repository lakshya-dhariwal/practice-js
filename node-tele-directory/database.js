require("dotenv").config();
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:2717/tele-directory");

const run = async () => {
  try {
    await client.connect();
    const database = client.db();
    const db = database.collection("directory");
    console.log("MongoDB connected...");
    await update(db ,"alphabeta" , ,"l");
  } catch (e) {
    console.log(e);
  }
};

//create
const create = async (entryName, entryNumber, db) => {
  await db.insertOne({
    name: entryName,
    number: entryNumber,
  });
  console.log("Entry Created");
};

// //update
// const update = async (db , entryName, newName, newNumber) => {
//   const document = await db.find({ name: entryName });
//  if(newName){
//   console.log(newName);
//  }
//  if(newNumber){
//   console.log(newNumber);
//  }
 
// };

run();
