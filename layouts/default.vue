<script setup lang="ts">
const { copy, localizedProfile: profile } = useResumeLocale()
const navigation = computed(() => [
  { href: '#experience', label: copy.value.nav[0] },
  { href: '#work', label: copy.value.nav[1] },
  { href: '#stack', label: copy.value.nav[2] },
  { href: '#contact', label: copy.value.nav[3] },
])
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">{{ copy.skip }}</a>

    <header class="site-header">
      <NuxtLink class="wordmark" to="/" aria-label="Serhii Tokmakov — Home">
        <BrandMark />
      </NuxtLink>

      <nav aria-label="Main navigation">
        <ul class="site-nav">
          <li v-for="item in navigation" :key="item.href">
            <a :href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </nav>

      <p class="availability">
        <span class="availability__dot" aria-hidden="true" />
        {{ profile.availability }}
      </p>
      <LanguageSwitcher />
    </header>

    <main id="main-content" class="site-main">
      <slot />
    </main>

    <footer class="site-footer">
      <p>© {{ new Date().getFullYear() }} <BrandName :name="profile.name" /></p>
      <p>{{ copy.footer }}</p>
    </footer>
  </div>
</template>
