/**
 * Build-time asset manifest constants for Customer Version 14.
 */
export const ASSET_MANIFEST = {
  customerVersion: 14,
  syntax: "ES2020 / Node.js 14",
  appName: "javascript-vuejs-frontend-application",
  entry: "src/main.js",
  publicAssets: ["favicon.svg"],
};

export function describeBuild() {
  return ASSET_MANIFEST.appName + "@node" + ASSET_MANIFEST.customerVersion;
}
