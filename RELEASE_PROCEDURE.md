# Release Procedure

This project uses a standard Feature Branch workflow and Semantic Versioning (SemVer) for releases to the Chrome Web Store.

## 1. Branching Strategy
- `main` branch is always deployable and contains the latest published version.
- Development should occur on feature branches off `main`: `feature/your-feature-name` or `fix/your-bug-fix`.

## 2. Making Changes
1. Create a new branch: `git checkout -b feature/my-new-feature`
2. Commit your changes logically.
3. Push your branch and create a Pull Request against `main`.

## 3. Creating a Release
Once changes are merged into `main` and ready for release:

1. **Checkout Main & Pull:**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Bump Version:**
   Update the version in both `package.json` and `manifest.json`.
   You can use standard npm commands:
   ```bash
   npm version patch  # For bug fixes (e.g., 1.0.0 -> 1.0.1)
   npm version minor  # For new features (e.g., 1.0.0 -> 1.1.0)
   npm version major  # For breaking changes (e.g., 1.0.0 -> 2.0.0)
   ```
   *Note: Ensure `manifest.json` version string is updated manually if `npm version` doesn't sync it automatically.*

3. **Push Tags:**
   ```bash
   git push origin main --follow-tags
   ```

4. **Build the Web Store Package:**
   Zip the necessary files for the Chrome Web Store, excluding development artifacts:
   ```bash
   # In PowerShell
   Compress-Archive -Path src, manifest.json, background.js -DestinationPath JobFormAutoFill.zip -Force
   ```
   *Note: Only include `src/`, `manifest.json`, and any root required assets. Do NOT include `.git`, `node_modules`, or `*.md`.*

5. **Upload & Publish:**
   - Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/).
   - Select "JobForm AutoFill".
   - Navigate to "Package" and upload the newly created `JobFormAutoFill.zip`.
   - Submit for review.
