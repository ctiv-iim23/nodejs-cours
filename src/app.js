const express = require("express");
const app = express();

require("./loaders")(app);

app.listen(3000, function () {
  console.log(`Example app listening at http://localhost:3000`);
});
