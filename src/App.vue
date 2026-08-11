<script setup>
import { computed, ref } from "vue";
import { catalogSummary } from "./services/catalogBrowser.js";
import { ASSET_MANIFEST } from "./build/assetManifest.js";
import { ENV_FLAGS } from "./build/envFlags.js";
import { CUSTOMER_VERSION, sortDesc } from "./version/featuresBrowser.js";

const nodeVersion = CUSTOMER_VERSION;
const syntaxLabel = "ES2026 target / Node.js 26";
const items = ref([
  { sku: "vue-kit", active: true, score: 91 },
  { sku: "vite-board", active: false, score: 77 },
  { sku: "eslint-pack", active: true, score: 88 },
]);

const summary = computed(() => catalogSummary(items.value));
const ranked = computed(() => sortDesc(items.value.map((i) => i.score ?? 0)));

function bumpScores() {
  items.value = items.value.map((item) => ({
    ...item,
    score: Math.min(100, (item.score ?? 0) + 1),
  }));
}
</script>

<template>
  <main class="card">
    <h1>Vue.js Frontend Application</h1>
    <p>
      Scenario <strong>1 - Monolithic</strong> · Customer Version
      <strong>{{ nodeVersion }}</strong>
    </p>
    <p>Syntax: {{ syntaxLabel }}</p>
    <p>Build: {{ ASSET_MANIFEST.appName }}</p>
    <p>Active SKU: {{ summary.activeSku }}</p>
    <p>Top score: {{ summary.topScore }}</p>
    <p>Ranked: {{ ranked.join(", ") }}</p>
    <p>Flags: toSorted={{ ENV_FLAGS.supportsToSorted }} findLast={{ ENV_FLAGS.supportsFindLast }}</p>
    <button type="button" @click="bumpScores">Increment scores</button>
  </main>
</template>
