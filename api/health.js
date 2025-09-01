// Simple health check endpoint that bypasses DDoS protection
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, User-Agent');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Simple health check
  res.status(200).json({ 
    status: 'ok', 
    message: 'CTF endpoint accessible',
    timestamp: new Date().toISOString()
  });
}
