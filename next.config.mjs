import fs from "node:fs";
import path from "node:path";

// Auto-sync root assets into the public directory during build
try {
  const root = process.cwd();
  const publicDir = path.join(root, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const assetFolders = ["clients", "graphics", "images", "logo", "portfolio", "products"];
  for (const folder of assetFolders) {
    const src = path.join(root, folder);
    const dest = path.join(publicDir, folder);
    if (fs.existsSync(src)) {
      fs.cpSync(src, dest, { recursive: true, force: true });
    }
  }

  // Ensure root logos are copied to /public/logo and /public/favicon.png
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
    if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
} catch (e) {
  console.warn("Asset sync warning:", e);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
