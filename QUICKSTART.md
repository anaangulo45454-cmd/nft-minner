# GPU MINER - Quick Start (5 Minutes)

## 🚀 Deploy in 5 Steps

### Step 1: Push to GitHub (2 mins)
```bash
cd gpu-miner
git init
git add .
git commit -m "GPU Miner NFT Platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gpu-miner.git
git push -u origin main
```

### Step 2: Go to Vercel (1 min)
1. Visit https://vercel.com/dashboard
2. Click "New Project"
3. Select your `gpu-miner` repository
4. Click "Import"

### Step 3: Configure (1 min)
- Framework: **Vite** (auto-detected)
- Build Command: `npm run build`
- Output: `dist`
- Click "Deploy"

### Step 4: Wait for Deployment (1 min)
Watch the build logs. When complete, you get a live URL!

### Step 5: Share! 🎉
Your site is live at: `https://gpu-miner-abc123.vercel.app`

---

## 📝 Local Development

### Run Locally
```bash
npm install
npm run dev
```
Opens at `http://localhost:3000`

### Make Changes
```bash
# Edit files in src/
# Auto-reload in browser
```

### Deploy Changes
```bash
git add .
git commit -m "Your changes"
git push origin main
```
Vercel deploys automatically!

---

## 🎨 Customize

### Change Name
Edit `src/App.jsx` line 50:
```javascript
◆ YOUR_NAME_HERE
```

### Change Colors
Edit `src/App.css` lines 5-13:
```css
--primary-green: #00ff41;
--primary-blue: #00d9ff;
```

### Add Your Wallet
Edit `src/App.jsx` line 139:
```javascript
// Add ethers.js integration
```

---

## 📂 Files Included

```
gpu-miner/
├── 📄 package.json      ← Dependencies
├── 📄 vite.config.js    ← Build config
├── 📄 vercel.json       ← Deployment config
├── 📄 index.html        ← Main page
├── 📁 src/
│   ├── App.jsx          ← Main component
│   ├── App.css          ← Styles
│   ├── main.jsx         ← Entry point
│   └── index.css        ← Global styles
├── 📄 .gitignore        ← Git ignore
├── 📄 .env.example      ← Environment template
├── 📁 .github/
│   └── workflows/
│       └── deploy.yml   ← Auto-deploy config
└── 📄 README.md         ← Full documentation
```

---

## ❓ Common Questions

### Q: How do I use my own domain?
A: After deployment:
1. Go to Vercel Project Settings → Domains
2. Add your domain
3. Update DNS records at your domain registrar

### Q: Can I edit without Git?
A: Yes! Edit on Vercel's UI or use GitHub's web editor.

### Q: How do I add a Web3 wallet?
A: Install ethers.js:
```bash
npm install ethers
```
Then integrate in `App.jsx`.

### Q: Will my site go down?
A: No! Vercel provides 99.95% uptime with 99 free deployments/month.

### Q: How do I add a database?
A: Options:
- Firebase (easiest)
- MongoDB Atlas (recommended)
- Supabase (PostgreSQL)

---

## 🔗 Important Links

| Link | Purpose |
|------|---------|
| https://vercel.com | Deploy here |
| https://github.com | Code hosting |
| https://vitejs.dev | Build tool docs |
| https://react.dev | React docs |

---

## 💡 Next: Advanced Features

1. **Add Analytics**
   ```bash
   npm install vercel
   ```
   Then: Settings → Analytics

2. **Add Database**
   ```bash
   npm install firebase
   ```

3. **Connect Blockchain**
   ```bash
   npm install ethers
   ```

4. **Add Authentication**
   ```bash
   npm install next-auth
   ```

---

## 🆘 Troubleshooting

### "npm: command not found"
Install Node.js: https://nodejs.org

### "Build failed"
```bash
rm -rf node_modules
npm install
npm run build
```

### "Can't connect to GitHub"
1. Go to https://vercel.com/account
2. Click "Connected Services"
3. Re-authorize GitHub

---

## 📞 Support

- **Vercel Issues**: https://vercel.com/support
- **React Help**: https://react.dev/learn
- **GitHub Help**: https://docs.github.com

---

**Ready?** Start with Step 1 above! 🚀

Questions? Read `DEPLOYMENT_GUIDE.md` for detailed instructions.
