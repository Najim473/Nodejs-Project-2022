const PORT = 4000;
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: "Hello World"
    }));
})
console.log(`server is running at http://localhost:${PORT}`);
server.listen(PORT);