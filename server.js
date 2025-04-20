const http = require("http");
const fs = require("fs");
const path = "/app/data/test.txt";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      res.end(`
        <h1>🚫 No data found</h1>
        <p>Error: ${err.message}</p>
        <p>Expected data file: <code>${path}</code></p>
      `);
    } else {
      res.end(`
        <h1>🚀 Docker App Version 2.0.0</h1>
        <p><strong>Persisted Data:</strong></p>
        <pre>${data}</pre>
      `);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000 - Version 2.0.0");
});
