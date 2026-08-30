# Complete Deployment Guide: GitHub to Vercel

## 📋 Prerequisites

1. GitHub Account: https://github.com/signup
2. Vercel Account: https://vercel.com/signup
3. Git installed: https://git-scm.com/

## Step 1: Prepare Your Local Repository

### 1.1 Navigate to Project Directory
```bash
cd /path/to/gpu-miner
```

### 1.2 Initialize Git (if not already done)
```bash
git init
```

### 1.3 Add All Files
```bash
git add .
```

### 1.4 Create Initial Commit
```bash
git commit -m "Initial commit: GPU Miner NFT Platform"
```

### 1.5 Rename Branch to Main
```bash
git branch -M main
```

---

## Step 2: Create GitHub Repository

### 2.1 Go to GitHub
Visit: https://github.com/new

### 2.2 Repository Settings
- **Repository Name**: `gpu-miner` (or your preferred name)
- **Description**: "5090 Pixel-Powered NFT Mining Machines"
- **Privacy**: Public (or Private if preferred)
- **Do NOT initialize** with README, .gitignore, or license

### 2.3 Click "Create Repository"

### 2.4 Add Remote and Push

After creating the repository, you'll see instructions. Run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/gpu-miner.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 2.5 Verify Upload
- Visit: https://github.com/YOUR_USERNAME/gpu-miner
- Confirm all files are there

---

## Step 3: Deploy to Vercel

### Option A: Web Import (Easiest)

#### 3.1 Go to Vercel Dashboard
- Visit: https://vercel.com/dashboard
- Sign in with your GitHub account

#### 3.2 Import Project
- Click "New Project"
- Click "Import Git Repository"
- Paste: `https://github.com/YOUR_USERNAME/gpu-miner`
- Click "Continue"

#### 3.3 Configure Project
- **Project Name**: `gpu-miner` (auto-filled)
- **Framework Preset**: Select "Vite"
- **Root Directory**: Leave as default
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

#### 3.4 Environment Variables (Optional)
- Click "Environment Variables"
- Add any variables from `.env.example`:
  ```
  VITE_NETWORK = robinhood
  VITE_CHAIN_ID = 4663
  ```

#### 3.5 Deploy
- Click "Deploy"
- Wait 1-2 minutes for build
- You'll get a deployment URL like: `https://gpu-miner-abc123.vercel.app`

### Option B: Vercel CLI (For Advanced Users)

#### 3.1 Install Vercel CLI
```bash
npm install -g vercel
```

#### 3.2 Login to Vercel
```bash
vercel login
```

#### 3.3 Deploy
```bash
vercel --prod
```

#### 3.4 Follow Prompts
- Confirm project settings
- Watch deployment logs

---

## Step 4: Setup Custom Domain (Optional)

### 4.1 In Vercel Dashboard
- Go to your project
- Settings → Domains
- Add your domain (e.g., `gpu-miner.com`)

### 4.2 Update DNS Records
Follow Vercel's DNS instructions for your domain registrar

### 4.3 Verify Domain
- Takes 5-30 minutes to propagate
- Vercel shows status in Settings → Domains

---

## Step 5: Continuous Deployment Setup

### 5.1 Automatic Deployments
Once linked, Vercel automatically:
- Deploys on every `git push` to main
- Creates preview URLs for pull requests
- Builds and tests before deployment

### 5.2 Check Deployment Status
- Visit: https://vercel.com/dashboard
- Click your project
- See deployments and logs

---

## Step 6: Making Updates

### 6.1 Make Changes Locally
Edit files in your local project

### 6.2 Commit and Push
```bash
git add .
git commit -m "Update: Description of changes"
git push origin main
```

### 6.3 Vercel Deploys Automatically
- Deployment starts immediately
- View progress in Vercel dashboard
- Site updates in 30-60 seconds

---

## Troubleshooting

### Build Fails: "npm not found"
**Solution**: Vercel needs Node.js
- Go to Vercel Project Settings
- Environment → Node.js Version
- Set to 18 or higher
- Redeploy

### Build Fails: "Missing dependencies"
```bash
# Locally:
rm -rf node_modules package-lock.json
npm install
git add .
git commit -m "Update dependencies"
git push origin main
```

### Site Shows Vercel Logo Only
- Wait for build to complete (check dashboard)
- Clear browser cache (Ctrl+Shift+Del)
- Try incognito window

### Cannot Connect GitHub
- Verify GitHub token permissions
- Go to https://vercel.com/account/connected-services
- Re-authorize GitHub

### Domain Not Working
- DNS changes take 24 hours (usually 5-30 minutes)
- Verify DNS records in domain registrar
- Use Vercel's DNS suggestion if supported

---

## File Structure After Deployment

```
Your GitHub Repository
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── .gitignore
├── .env.example
└── README.md

↓ After Deployment ↓

Vercel CDN
├── index.html
├── assets/
│   ├── App-abc123.jsx
│   └── styles-def456.css
└── All files optimized & cached
```

---

## Performance Checks

### 1. Lighthouse Score
```bash
# After deployment, run:
npm install -g lighthouse
lighthouse https://gpu-miner-abc123.vercel.app
```

### 2. Bundle Size
```bash
npm run build
du -sh dist/
```

Expected: < 200KB (gzipped)

### 3. Load Time
Use Vercel Analytics:
- Vercel Dashboard → Analytics
- View Core Web Vitals

---

## Security Best Practices

### 1. Environment Variables
- Never commit `.env` files
- Use `.env.example` for template
- Set sensitive values in Vercel UI only

### 2. Repository Visibility
- Public: Anyone can see code
- Private: Only you and collaborators
- Set in GitHub Settings → Visibility

### 3. Branch Protection
- GitHub Settings → Branches
- Require pull requests before merging
- Require status checks to pass

---

## Next Steps

1. **Setup Analytics**
   - Vercel Analytics
   - Google Analytics

2. **Add Features**
   - Wallet Integration (ethers.js)
   - Database (MongoDB, Firebase)
   - Email Notifications

3. **Monitor**
   - Vercel Analytics
   - Error tracking (Sentry)
   - Performance monitoring

4. **Collaborate**
   - Add collaborators on GitHub
   - Use pull requests for changes
   - Automated testing (GitHub Actions)

---

## Useful Links

- **Vercel Docs**: https://vercel.com/docs
- **Vite Guide**: https://vitejs.dev/guide/
- **React Docs**: https://react.dev
- **GitHub Help**: https://docs.github.com

---

## Support

If you encounter issues:

1. Check Vercel deployment logs
2. Review GitHub Actions logs
3. Search Vercel forums
4. Create GitHub issue with details

Good luck! 🚀
