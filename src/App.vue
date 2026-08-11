<script setup>
import { computed, ref } from "vue";
import { catalogSummary } from "./services/catalogBrowser.js";

const nodeVersion = 24;
const syntaxLabel = "ES2024+ / Node.js 24";
const items = ref([
  { sku: "vue-kit", active: true, score: 91 },
  { sku: "vite-board", active: false, score: 77 },
  { sku: "eslint-pack", active: true, score: 88 },
]);

const summary = computed(() => catalogSummary(items.value));

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
    <p>Active SKU: {{ summary.activeSku }}</p>
    <p>Top score: {{ summary.topScore }}</p>
    <p>Last tag: {{ summary.lastTag }}</p>
    <button type="button" @click="bumpScores">Increment scores</button>
  </main>
</template>
