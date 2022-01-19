require("dotenv").config();
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URI);

const run = async () => {
  try {
    await client.connect();
    const database = client.db();
    const db = database.collection("directory");
    console.log("MongoDB connected...");
    createEntry(db, "Lorem", "9911991191");
    readEntry(db, "Gamma");
    updateEntry(db, "Beta","Alpha", "6611223355");
    deleteEntry(db, "alphabeta");
  } catch (e) {
    console.log(e);
  }
};

//create
const createEntry = async (db, entryName, entryNumber) => {
  try {
    if ((await db.findOne({ number: entryNumber }))) {
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

//update
const updateEntry = async (db, entryName, newName, newNumber) => {
  try {
    await db.updateOne(
      { name: entryName },
      { $set:
      { name: newName, number: newNumber }}
    );
    console.log('Entry updated')
  } catch (err) {
    console.log(err);
  }
};

//delete
const deleteEntry = async (db, entryName) => {
  try {
    await db.deleteOne({ name: entryName });
    console.log("Entry Deleted");
  } catch (err) {
    console.log(err);
  }
};

try{
  run();
}catch (err) {
  console.log(err);
  console.log('500 Internal server error')
}

