const features = require("../version/features");

async function mapSeries(items, worker) {
  const out = [];
  for (const item of items ?? []) {
    out.push(await worker(item));
  }
  return out;
}

function createGate() {
  if (typeof features.deferred === "function") {
    return features.deferred();
  }
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

async function settleAll(tasks) {
  return Promise.allSettled(tasks);
}

module.exports = { mapSeries, createGate, settleAll, customerVersion: 24 };
