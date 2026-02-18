const http = require('http');

// 1. The Voice (Fixes the "No open ports" error)
const port = process.env.PORT || 10000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Ark Sentinel COO: Active\n');
}).listen(port, '0.0.0.0', () => {
  console.log(`Vessel heartbeat online on port ${port}`);
});

// 2. The Identity (Correctly reads your Keys)
console.log("Sentinel COO Initialized...");
console.log("Ark Decree CID: " + (process.env.AGENT_DECREE_CID || "Missing CID"));
console.log("Vault Address: " + (process.env.SENTINEL_VAULT_ADDRESS || "Missing Address"));

// 3. The Pulse
setInterval(() => {
  console.log("Ark Audit Pulse: " + new Date().toISOString());
}, 60000);
