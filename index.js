const app = require("./server");

const port = process.env.PORT || 4400;

app.listen(port, () => {
  console.log(`\n ***Server Listening on port ${port} *** \n`);
});
