/**
 * Runtime metadata for Customer Version 22 (ES2024 / Node.js 22).
 * Consumed by build scripts and Mocha tests.
 */
const RUNTIME = {
  customerVersion: 22,
  syntaxLabel: "ES2024 / Node.js 22",
  language: "javascript",
  projectType: "Vue.js Frontend Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=22",
};

function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) {
    throw new Error("unable_to_read_node_version");
  }
  // Allow newer hosts (local/CI) while documenting the branch target.
  if (major < 22) {
    throw new Error(
      `node_too_old: need >=22, found ${process.versions.node}`,
    );
  }
  return { hostMajor: major, targetMajor: 22 };
}

module.exports = { RUNTIME, assertCompatibleNode };
