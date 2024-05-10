const http = require("node:http");
const os = require("os");


const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Method", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  console.log(req);
  if (req.url === '/' && req.method === 'GET'){
    const randomDelay = Math.floor(Math.random() * 10000);
    setTimeout(() => {
      const hostName = os.hostname();
      const platform = os.platform();
      const osversion = os.version();
      const message = `Message acknowledged on ${hostName} from ${platform} and ${osversion}`
      res.writeHead(200);
      res.end(message)
    }, randomDelay)
  } else {
    res.writeHead(404)
    res.end(JSON.stringify({"message": "not found"}))
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running");
});
