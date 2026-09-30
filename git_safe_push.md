# 🛡️ Git Safe Push Workflow

Follow these steps to safely push your code changes without directly pushing to the `main` branch. This prevents accidental overwrites and keeps the main branch clean.

---

### 1. Create a New Branch
Always create a new branch for your work before making changes.
```bash
git checkout -b safe-update
```

### 2. Review Your Changes
Check which files were modified:
```bash
git status
```
Review the exact code diff before committing:
```bash
git diff
```

### 3. Stage and Commit
Stage all your modifications:
```bash
git add .
```
Commit them with a descriptive message:
```bash
git commit -m "clean update"
```

### 4. Push to Remote
Push your new branch to GitHub. Once pushed, you can create a Pull Request on GitHub to merge it.
```bash
git push origin safe-update
```

### 5. Compare with Main (Optional)
Check the differences between your branch and the local `main` branch to ensure everything looks correct.
```bash
git diff main safe-update
```

### 6. Keep Local Main Updated
After your pull request is merged on GitHub, switch back to the `main` branch:
```bash
git checkout main
```
Pull the latest changes so your local machine stays in sync:
```bash
git pull origin main
```




```
gh pr create --title "My code updates" --body "Safely pushing new code" --base main
```