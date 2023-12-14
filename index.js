import express from "express";

const app = express();

const port = 3000;

// port is the location of our server
// listen is method obtained from express module

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

// to run the server ----------->>>>>>> node index.js / nodemon index.js

// to cheeck all the ports runing on my computer
// ----------->>>>>>> sudo lsof -i -P -n | grep LISTEN
