const express = require("express");
const cors = require("cors");
const router = require("./routes/qrRoutes.js");
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/tools", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
