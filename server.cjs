const express = require("express");
const path = require("node:path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));
app.use(express.static("public"));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
