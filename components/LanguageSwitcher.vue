<script setup lang="ts">
const { locale, availableLocales, languageNames, setLocale } = useResumeLocale()
</script>

<template>
  <label class="language-switcher">
    <span class="sr-only">Language</span>
    <select
      :value="locale"
      aria-label="Language"
      @change="setLocale(($event.target as HTMLSelectElement).value as typeof locale)"
    >
      <option v-for="code in availableLocales" :key="code" :value="code">
        {{ languageNames[code] }}
      </option>
    </select>
  </label>
</template>
