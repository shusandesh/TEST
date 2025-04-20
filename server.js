const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  fs.readFile("/app/data/test.txt", "utf8", (err, data) => {
    if (err) {
      res.end("Error reading file or no data available.");
    } else {
      res.end("Data from file: " + data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000 - Version 2.0.0");
});
