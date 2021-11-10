const app = require("./server");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
}); //listens on port 3000 -> http://localhost:3000/
