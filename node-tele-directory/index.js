const express = require("express");
const app = express();

app.use(express.json());

//READ  - get all entries
app.get("/directory", (req, res) => {
  res.send("all phone nos");
});

//CREATE - add new no to directory
app.post("/directory", (req, res) => {
  res.send("add new no to directory");
});

//UPDATE - update entry
app.put("/directory", (req, res) => {
  res.send("update entry");
});

//DELETE - delete an entry
app.delete("/directory", (req, res) => {
  res.send("delete an entry");
});

app.listen(8080, () => {
  console.log("Server Connected");
});
