const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Jenkins CI/CD 🚀');
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});

//test change successful status
//testing deployment directory on VM - Test 2