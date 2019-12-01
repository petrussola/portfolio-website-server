const app = require("./server/server");
require("dotenv").config();

const port = process.env.PORT || 4400;

app.listen(port, () => {
  console.log(`\n ***Server Listening on port ${port} *** \n`);
});
