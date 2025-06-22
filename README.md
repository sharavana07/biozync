# 🌱 BioZync

**BioZync** is a sustainability-focused web application built using **React** + **Vite**, designed to showcase eco-friendly solutions like **C4 Super Trees** and **EarthZync Bricks**. It supports modular components, responsive design, and leverages cloud video hosting for smooth deployment.

---

## 📁 Project Structure

```

biozync/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, logos
│   ├── components/        # Reusable components (Hero, CTA, etc.)
│   ├── pages/             # Route-specific pages like About, Products
│   ├── App.jsx            # Centralized routing and layout
│   └── main.jsx           # React entry point
├── .gitattributes         # Git LFS tracking rules
├── package.json           # Project metadata and scripts
├── vite.config.js         # Vite build configuration
└── README.md              # Project overview (this file)

````

---

## 🌐 Live Website

Hosted on **Vercel**  
🔗 [https://biozync.vercel.app](https://biozync.vercel.app)  
_(Update with your actual deployment link if needed)_

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js & npm
- Git & GitHub account
- (Optional) Git LFS for large assets

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/sharavana07/biozync.git
cd biozync

# 2. Install dependencies
npm install

# 3. Start local dev server
npm run dev
````

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🚀 Deployment (Vercel)

### ✅ Auto-Deploy Setup

1. Go to [https://vercel.com](https://vercel.com) and sign in.
2. Import the `biozync` GitHub repository.
3. Set the **build command**: `npm run build`
   and **output directory**: `dist`
4. Click "Deploy" and you're live!

### ⚡ Triggering Redeploys

Push to the `main` branch and Vercel will auto-deploy the new version.

---

## 🎥 Video Handling (Git LFS → Cloudinary)

### ❌ Git LFS Attempt (Did Not Work)

* GitHub blocks files >100MB (e.g., `.mp4`)
* Even with Git LFS, the push was rejected

### ✅ Final Fix: Cloudinary Hosting

**Cloudinary Video URL Example**:

```jsx
<video autoPlay loop muted className="bg-video">
  <source src="https://res.cloudinary.com/dwk7tj6jb/video/upload/v1718827229/dbm3thp2dzkxptkoitit.mp4" type="video/mp4" />
</video>
```

Steps:

1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Upload your video
3. Use the public video URL in JSX

---

## 🔧 Common Git Commands

```bash
# Pull latest and rebase
git pull origin main --rebase

# Push changes
git push origin main

# If remote has new commits, resolve with rebase
git pull --rebase

# (Only if needed) Force push after cleaning large file
git push origin main --force
```

---

## 🧼 Cleaning Large Files (if needed)

If you committed a file >100MB and got blocked:

```bash
# Remove large file from history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch path/to/largefile.mp4" \
  --prune-empty --tag-name-filter cat -- --all
```

Then re-add your clean files and force push.

---

## 📦 Building for Production

```bash
npm run build
```

Output goes to `/dist` folder — ready to deploy.

---

## 🤝 Contributions

Feel free to fork and open a Pull Request!

---

## 👤 Author

* **Sharavana Ragav**
* GitHub: [@sharavana07](https://github.com/sharavana07)

---
