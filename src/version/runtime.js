/**
 * Runtime metadata for Customer Version 18 (ES2022 / Node.js 18).
 * Consumed by build scripts and Mocha tests.
 */
const RUNTIME = {
  customerVersion: 18,
  syntaxLabel: "ES2022 / Node.js 18",
  language: "javascript",
  projectType: "Vue.js Frontend Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=18",
};

function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) {
    throw new Error("unable_to_read_node_version");
  }
  // Allow newer hosts (local/CI) while documenting the branch target.
  if (major < 18) {
    throw new Error(
      `node_too_old: need >=18, found ${process.versions.node}`,
    );
  }
  return { hostMajor: major, targetMajor: 18 };
}

module.exports = { RUNTIME, assertCompatibleNode };
