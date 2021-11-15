require("dotenv").config();
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URI);

const run = async () => {
  try {
    await client.connect();
    const database = client.db();
    const db = database.collection("directory");
    console.log("MongoDB connected...");

    createEntry(db, "Lorem", "9911773355");
    readEntry(db, "Lakshya");
    // updateEntry(db, "Lakshya", "6611223355");
     deleteEntry(db, "alphabeta");
  } catch (e) {
    console.log(e);
  }
};

//create
const createEntry = async (db, entryName, entryNumber) => {
  try {
    if (!(await db.findOne({ number: entryNumber }))) {
      console.log("An Entry already exists for this number");
      return;
    }
    await db.insertOne({
      name: entryName,
      number: entryNumber,
    });
    console.log("Entry Created");
  } catch (err) {
    console.log(err);
  }
};


//read
const readEntry = async (db, entryName) => {
  try {
    const doc = await db.findOne({ name: entryName });
    console.log(`${doc.name}'s number is ${doc.number}'`);
  } catch (err) {
    console.log(err);
  }
};

//delete
const deleteEntry = async (db, entryName) => {
  try {
    await db.deleteOne({ name: entryName });
    console.log("Deleted Entry");
  } catch (err) {
    console.log(err);
  }
};

run();
