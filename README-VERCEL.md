# ECorpCTF - Vercel Deployment

This is the Vercel-optimized version of the ECorpCTF challenge, modified to work with static hosting.

## Changes Made for Vercel Deployment

### 1. Routing Fix
The original `/dev` route was handled by Express server, but Vercel's static hosting requires client-side routing. 

**Changes:**
- Updated `components/Dev.tsx` to include the dev portal content and memo functionality
- Modified `components/Login.tsx` to handle authentication client-side
- Added `vercel.json` configuration for proper SPA routing

### 2. Authentication
- Moved authentication logic from server-side to client-side in the Login component
- Credentials remain the same: `tyrellw` / `3r@s3_UrS3lf!`

### 3. CTF Flow
The CTF flow now works entirely client-side:
1. Visit `/dev` route 
2. Click "View Latest Dev Notes" to see the memo with credentials
3. Use credentials on `/login` to access admin panel
4. Complete the challenge

## Deployment

To deploy this to Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the React/Vite setup
3. The `vercel.json` configuration handles SPA routing
4. Build command: `npm run build`
5. Output directory: `dist`

## Local Development

```bash
npm install
npm run dev
```

The app will run on `http://localhost:5173`

## Live Demo

The CTF should now work properly at: https://e-corp-ctf-phi.vercel.app/dev
