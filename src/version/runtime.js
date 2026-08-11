/**
 * Runtime metadata for Customer Version 26 (ES2026 target / Node.js 26).
 */
const RUNTIME = {
  customerVersion: 26,
  syntaxLabel: "ES2026 target / Node.js 26",
  language: "javascript",
  projectType: "Vue.js Frontend Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=26",
};

function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) {
    throw new Error("unable_to_read_node_version");
  }
  if (major < 26) {
    throw new Error(
      "node_too_old: need >=26, found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 26 };
}

module.exports = { RUNTIME, assertCompatibleNode };
