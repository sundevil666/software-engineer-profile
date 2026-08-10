<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <span class="brand-name" :aria-label="name">
    <template v-for="(part, index) in name.split(' ')" :key="`${part}-${index}`">
      <span v-if="index" aria-hidden="true">{{ ' ' }}</span>
      <span aria-hidden="true">
        <span class="brand-name__initial">{{ part.charAt(0) }}</span>{{ part.slice(1) }}
      </span>
    </template>
  </span>
</template>

<style scoped>
.brand-name__initial {
  display: inline-block;
  color: var(--color-coral);
  font-family: var(--font-display);
  font-size: 1.08em;
  font-weight: 900;
  letter-spacing: 0;
}
</style>
