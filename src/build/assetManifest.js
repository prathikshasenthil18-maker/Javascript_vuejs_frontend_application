/**
 * Build-time asset manifest constants for Customer Version 18.
 * Imported by the Vue entry so Vite includes it in the production bundle.
 */
export const ASSET_MANIFEST = {
  customerVersion: 18,
  syntax: "ES2022 / Node.js 18",
  appName: "javascript-vuejs-frontend-application",
  entry: "src/main.js",
  publicAssets: ["favicon.svg"],
};

export function describeBuild() {
  return `${ASSET_MANIFEST.appName}@node${ASSET_MANIFEST.customerVersion}`;
}
