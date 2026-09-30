const fs = require("fs");
const path = require("path");

const root = process.cwd();
const publicDir = path.join(root, "public");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Sync asset folders
const assetFolders = ["clients", "graphics", "images", "logo", "portfolio", "products"];
for (const folder of assetFolders) {
  const src = path.join(root, folder);
  const dest = path.join(publicDir, folder);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true, force: true });
    console.log(`Synced folder: ${folder} -> public/${folder}`);
  }
}

// 2. Sync root logo files
const publicLogoDir = path.join(publicDir, "logo");
if (!fs.existsSync(publicLogoDir)) {
  fs.mkdirSync(publicLogoDir, { recursive: true });
}

const logoMap = [
  { src: "webiz-white-logo.png", dest: "logo/webiz-white-logo.png" },
  { src: "webiz-dark-logo.png", dest: "logo/webiz-dark-logo.png" },
  { src: "webiz-fevicon.png", dest: "logo/webiz-fevicon.png" },
  { src: "webiz-fevicon.png", dest: "favicon.png" },
  { src: "favicon.png", dest: "favicon.png" },
];

for (const item of logoMap) {
  const srcPath = path.join(root, item.src);
  const destPath = path.join(publicDir, item.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Synced file: ${item.src} -> public/${item.dest}`);
  }
}

console.log("Assets sync completed successfully!");
