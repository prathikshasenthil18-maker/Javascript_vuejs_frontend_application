const features = require("../version/features");

function uniqueSkus(items) {
  const seen = new Set();
  for (const item of items ?? []) {
    const sku = item?.sku;
    if (sku) seen.add(String(sku));
  }
  return [...seen];
}

function rankByScore(items) {
  const scores = (items ?? []).map((item) => item?.score ?? 0);
  return features.sortDesc(scores);
}

function sharedSkus(a, b) {
  if (typeof features.intersectKeys === "function") {
    return features.intersectKeys(
      (a ?? []).map((x) => x?.sku).filter(Boolean),
      (b ?? []).map((x) => x?.sku).filter(Boolean),
    );
  }
  const left = new Set((a ?? []).map((x) => x?.sku).filter(Boolean));
  return [...new Set((b ?? []).map((x) => x?.sku).filter(Boolean))].filter((sku) =>
    left.has(sku),
  );
}

module.exports = { uniqueSkus, rankByScore, sharedSkus };
