const express = require("express");
const cors = require("cors"); 

const app = express();

app.use(cors({
  origin: "http://localhost:5173" 
}));

app.use(express.json());

app.use("/messages", require("./routes/message.routes"));

app.listen(5000, () => {
  console.log("Server działa na porcie 5000");
});