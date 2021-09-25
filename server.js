const express = require("express");

const path = require("path");

const app = express();

app.use(express.json()); //for post request

app.use(express.urlencoded({extended: true}))//for post req

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/api", require("./route/api").route);

app.listen(2679, () =>
  console.log("server started at http://localhost:2678")
);
