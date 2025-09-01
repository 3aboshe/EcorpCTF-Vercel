export default function handler(req, res) {
  // Return 404 for all non-existent paths
  res.status(404).json({ error: 'Not Found' });
}
