/**
 * Build-time asset manifest constants for Customer Version 22.
 * Imported by the Vue entry so Vite includes it in the production bundle.
 */
export const ASSET_MANIFEST = {
  customerVersion: 22,
  syntax: "ES2024 / Node.js 22",
  appName: "javascript-vuejs-frontend-application",
  entry: "src/main.js",
  publicAssets: ["favicon.svg"],
};

export function describeBuild() {
  return `${ASSET_MANIFEST.appName}@node${ASSET_MANIFEST.customerVersion}`;
}
