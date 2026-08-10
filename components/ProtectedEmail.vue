<script setup lang="ts">
const emailCharacterCodes = [
  115, 117, 110, 100, 101, 118, 105, 108, 100, 105, 64, 103, 109, 97, 105, 108,
  46, 99, 111, 109,
]

const email = ref('')

function revealEmail() {
  if (!email.value) {
    email.value = String.fromCharCode(...emailCharacterCodes)
  }
}
</script>

<template>
  <span class="protected-email">
    <a
      v-if="email"
      class="text-link"
      :href="`mailto:${email}`"
    >
      {{ email }}
    </a>
    <button
      v-else
      class="text-link protected-email__button"
      type="button"
      @click="revealEmail"
    >
      Reveal email
    </button>
    <noscript>Email is available via LinkedIn or Telegram.</noscript>
  </span>
</template>
