const {
  hasOwn,
  lastItem,
  sortDesc,
  findLastMatch,
  replaceAt,
} = require("../version/features");

function summarizeInventory(items) {
  const list = Array.isArray(items) ? items : [];
  const active = findLastMatch(list, (item) => item?.active === true);
  const scores = list.map((item) => item?.score ?? 0);
  const ranked = sortDesc(scores);
  return {
    count: list.length,
    activeSku: active?.sku ?? "none",
    topScore: ranked[0] ?? 0,
    lastSku: lastItem(list)?.sku ?? "none",
    hasMeta: hasOwn(list[0] ?? {}, "sku"),
  };
}

function pinFirst(items, pinned) {
  return replaceAt(items, 0, { ...(items?.[0] ?? {}), ...pinned, pinned: true });
}

module.exports = { summarizeInventory, pinFirst };
