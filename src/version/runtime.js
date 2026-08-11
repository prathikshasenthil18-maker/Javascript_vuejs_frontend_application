/**
 * Runtime metadata for Customer Version 16 (ES2021 / Node.js 16).
 */
const RUNTIME = {
  customerVersion: 16,
  syntaxLabel: "ES2021 / Node.js 16",
  language: "javascript",
  projectType: "Vue.js Frontend Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=16",
};

function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) {
    throw new Error("unable_to_read_node_version");
  }
  if (major < 16) {
    throw new Error(
      "node_too_old: need >=16, found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 16 };
}

module.exports = { RUNTIME, assertCompatibleNode };
