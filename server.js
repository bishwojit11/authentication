const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE;
mongoose.set("strictQuery", false);
mongoose.connect(DB).then(() => {
  console.log("DB Connection Successful");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
