const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = 5000;
app.listen(PORT, () => console.log("Server running on port 5000"));

const { save } = require("./database");

setInterval(() => {
  save({
    id: Date.now(),
    value: "Auto-" + Math.random().toFixed(2),
    timestamp: Date.now(),
  });
}, 500);
