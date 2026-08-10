<script setup lang="ts">
defineProps<{
  inverted?: boolean
}>()
</script>

<template>
  <svg
    class="brand-mark"
    :class="{ 'brand-mark--inverted': inverted }"
    viewBox="0 0 64 56"
    aria-hidden="true"
  >
    <path
      class="brand-mark__letter brand-mark__letter--s"
      d="M24 12H14c-6 0-9 3-9 8s3 8 9 8h3c5 0 8 4 8 10s-4 10-10 10H5"
    />
    <circle class="brand-mark__colon" cx="34" cy="21" r="3.4" />
    <circle class="brand-mark__colon" cx="34" cy="35" r="3.4" />
    <path
      class="brand-mark__letter"
      d="M40 7h21v11h-7v31H44V18h-4Z"
    />
  </svg>
</template>

<style scoped>
.brand-mark {
  display: block;
  width: 100%;
  height: auto;
}

.brand-mark__letter {
  fill: var(--color-ink);
}

.brand-mark__letter--s {
  fill: none;
  stroke: var(--color-ink);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 9;
}

.brand-mark__colon {
  fill: var(--color-coral);
}

.brand-mark--inverted .brand-mark__letter {
  fill: var(--color-paper);
}

.brand-mark--inverted .brand-mark__letter--s {
  fill: none;
  stroke: var(--color-paper);
}
</style>
