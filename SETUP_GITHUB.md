# Connect to GitHub Repository

To connect this project to your GitHub repository, follow these steps:

## Option 1: If the repository already exists on GitHub

1. Get your GitHub repository URL (format: `https://github.com/username/repo-name.git`)

2. Add the remote:
   ```bash
   git remote add origin https://github.com/username/beyond-ai-legal-scribe.git
   ```

3. Verify the connection:
   ```bash
   git remote -v
   ```

4. Pull existing code (if any):
   ```bash
   git pull origin main --allow-unrelated-histories
   ```

5. Add, commit, and push:
   ```bash
   git add .
   git commit -m "Initial commit - Next.js SSR setup"
   git push -u origin main
   ```

## Option 2: Create a new repository on GitHub

1. Go to GitHub and create a new repository named `beyond-ai-legal-scribe`

2. Don't initialize it with README, .gitignore, or license

3. Then run:
   ```bash
   git remote add origin https://github.com/username/beyond-ai-legal-scribe.git
   git add .
   git commit -m "Initial commit - Next.js SSR setup"
   git branch -M main
   git push -u origin main
   ```

## Connect to Vercel

Once your code is on GitHub:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and configure it
5. Your site will be deployed with SSR enabled

