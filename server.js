import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Vulnerability Step 1: Hidden Dev Portal
app.get('/dev', (req, res) => {
    const devPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DEV PORTAL</title>
    <style>
        body {
            background-color: #0a0a0a;
            color: #00ff41;
            font-family: 'Courier New', monospace;
            margin: 0;
            padding: 20px;
            overflow-x: hidden;
        }
        .container {
            max-width: 800px;
            margin-left: 50px;
            padding: 20px;
            border: 1px solid #00ff41;
            background-color: rgba(0, 255, 65, 0.05);
        }
        .glitch {
            font-size: 2.5em;
            text-align: center;
            text-shadow: 2px 2px 4px rgba(0, 255, 65, 0.5);
            margin-bottom: 30px;
            animation: glitch 2s infinite;
        }
        @keyframes glitch {
            0% { text-shadow: 2px 2px 4px rgba(0, 255, 65, 0.5); }
            50% { text-shadow: -2px -2px 4px rgba(255, 0, 0, 0.5); }
            100% { text-shadow: 2px 2px 4px rgba(0, 255, 65, 0.5); }
        }
        p {
            font-size: 1.2em;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        .dev-link {
            display: block;
            text-align: center;
            text-decoration: none;
            color: #00ff41;
            border: 2px solid #00ff41;
            padding: 15px 30px;
            margin-top: 30px;
            transition: all 0.3s ease;
        }
        .dev-link:hover {
            background-color: #00ff41;
            color: #000;
            box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
        }
        .dev-link h3 {
            margin: 0;
            font-size: 1.3em;
        }
        .warning {
            color: #ff4444;
            font-size: 0.9em;
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="glitch">--= DEV AREA - RESTRICTED =--</h1>
        <p>Internal development resources and temporary notes.</p>
        <p>⚠️ WARNING: This area contains sensitive development information. Access is restricted to authorized personnel only.</p>
        <a href="/memo.txt" class="dev-link">
            <h3>>>> View Latest Dev Notes <<<</h3>
        </a>
        <div class="warning">
            [SYSTEM] Unauthorized access attempts will be logged and reported.
        </div>
    </div>
</body>
</html>
`;
    res.send(devPage);
});





// Vulnerability Step 2: Leaked Memo
app.get('/memo.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    const memo = `To: Development Team
From: Bill

Subject: Temporary Portal Login Credentials

Team, for the millionth time, stop leaving experimental folders on the server! I've reset the admin login credentials.

username: tyrellw
password: 3r@s3_UrS3lf!

Serious note: Terry, I swear I'll fire you myself if you don't delete this folder (/dev/) before launch day!`;
    res.send(memo);
});

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'tyrellw' && password === '3r@s3_UrS3lf!') {
        res.json({ success: true, redirect: '/$2a$12$KJywhIRpfbNU5V26wXaz7' });
    } else {
        res.status(401).json({ success: false, message: 'Authentication failed.' });
    }
});

// Catch-all route for React Router (only for valid React routes)
app.get('*', (req, res) => {
    // Check if the request is for a React route
    const validReactRoutes = ['/', '/login', '/dev', '/$2a$12$KJywhIRpfbNU5V26wXaz7', '/$2a$12$ddM4fTZK3M74mjZm8grLDef'];
    
    if (validReactRoutes.includes(req.path)) {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    } else {
        res.status(404).send('Not Found');
    }
});

const host = '0.0.0.0'; // Bind to all network interfaces

app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
    console.log(`Local access: http://localhost:${port}`);
    console.log(`Network access: http://YOUR_MAC_IP:${port}`);
});