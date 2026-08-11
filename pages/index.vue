<script setup lang="ts">
import { siteMeta } from '~/config/site'
import { profile as baseProfile } from '~/content/profile'

const { locale, copy, localizedProfile: profile } = useResumeLocale()
const requestUrl = useRequestURL()
const canonicalUrl = new URL('/', requestUrl.origin).toString()
const ogImageUrl = new URL(siteMeta.ogImagePath, requestUrl.origin).toString()

useSeoMeta({
  title: 'Serhii Tokmakov — Vue.js & TypeScript Frontend Developer',
  ogTitle: 'Serhii Tokmakov — Vue.js & TypeScript Frontend Developer',
  description:
    'Frontend developer building business applications, data-heavy dashboards, and cross-platform products with Vue.js and TypeScript.',
  ogDescription:
    'Frontend developer building business applications, data-heavy dashboards, and cross-platform products with Vue.js and TypeScript.',
  ogType: 'profile',
  ogUrl: canonicalUrl,
  ogImage: ogImageUrl,
  ogImageAlt: `${baseProfile.name} — ${baseProfile.role}`,
  twitterCard: 'summary_large_image',
  twitterImage: ogImageUrl,
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: baseProfile.name,
      jobTitle: baseProfile.role,
      url: canonicalUrl,
      sameAs: [
        baseProfile.contacts.github,
        baseProfile.contacts.linkedin,
        baseProfile.contacts.telegram,
      ],
      knowsLanguage: baseProfile.languages.map(language => language.split(' — ')[0]),
      knowsAbout: baseProfile.skillGroups.flatMap(group => group.skills),
    }),
  }],
})
</script>

<template>
  <div>
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__intro">
        <p class="eyebrow">
          <span class="hero__profile-name">
            <BrandName :name="profile.name" />
          </span>
          <span class="hero__profile-role">{{ profile.role }}</span>
        </p>
        <h1 id="hero-title">
          {{ copy.heroTitle[0] }}
          <span>{{ copy.heroTitle[1] }}</span>
        </h1>
        <p class="hero__summary">
          {{ profile.summary }}
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="#work">{{ copy.explore }}</a>
          <a
            class="button button--download"
            :href="`/api/resume.pdf?lang=${locale}`"
            download="Serhii_Tokmakov_Vue_TypeScript_Frontend_Developer_CV.pdf"
            aria-label="Download Serhii Tokmakov Vue.js and TypeScript Frontend Developer CV as PDF"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3v12" />
              <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
              <path d="M5 21h14" />
            </svg>
            {{ copy.download }}
            <span class="button__format">PDF</span>
          </a>
          <a
            class="button button--secondary"
            :href="profile.contacts.linkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div class="hero__signature" aria-hidden="true">
        <BrandMark inverted />
      </div>
    </section>

    <section class="proof-strip" :aria-label="copy.highlights">
      <article v-for="item in profile.strengths" :key="item.label">
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
      </article>
    </section>

    <section
      id="experience"
      class="section section--experience"
      aria-labelledby="experience-title"
    >
      <div class="section-heading section-heading--compact">
        <div>
          <p class="eyebrow">
            {{ copy.experience }}
          </p>
          <h2 id="experience-title">{{ copy.experienceTitle }}</h2>
        </div>
        <p>{{ profile.experienceSummary }}</p>
      </div>

      <ol class="timeline">
        <li v-for="item in profile.experience" :key="`${item.company}-${item.period}`">
          <p class="timeline__period">
            {{ item.period }}
          </p>
          <div class="timeline__content">
            <p class="timeline__company">
              {{ item.company }}
            </p>
            <h3>{{ item.role }}</h3>
            <p>{{ item.summary }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section id="work" class="section section--projects" aria-labelledby="work-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">
            {{ copy.work }}
          </p>
          <h2 id="work-title">{{ copy.workTitle }}</h2>
        </div>
        <p>
          {{ copy.workIntro }}
        </p>
      </div>

      <div class="project-grid">
        <article
          v-for="(project, index) in profile.projects"
          :key="project.name"
          class="project-card"
        >
          <div class="project-card__number" aria-hidden="true">
            {{ String(index + 1).padStart(2, '0') }}
          </div>
          <div>
            <h3>{{ project.name }}</h3>
            <p v-if="project.period" class="project-card__period">
              {{ project.period }}
            </p>
            <p v-if="project.confidentialityNote" class="project-card__confidentiality">
              {{ project.confidentialityNote }}
            </p>
            <p>{{ project.summary }}</p>
          </div>
          <ul class="tag-list" :aria-label="`${project.name} technologies`">
            <li v-for="technology in project.stack" :key="technology">
              {{ technology }}
            </li>
          </ul>
          <div
            v-if="project.liveUrl || project.repositoryUrl || project.caseStudyUrl"
            class="project-card__links"
          >
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noreferrer">
              {{ copy.live }} <span aria-hidden="true">↗</span>
            </a>
            <a
              v-if="project.repositoryUrl"
              :href="project.repositoryUrl"
              target="_blank"
              rel="noreferrer"
            >
              {{ copy.repository }} <span aria-hidden="true">↗</span>
            </a>
            <a
              v-if="project.caseStudyUrl"
              :href="project.caseStudyUrl"
              target="_blank"
              rel="noreferrer"
            >
              {{ copy.caseStudy }} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>

    <section id="stack" class="section section--stack" aria-labelledby="stack-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">
            {{ copy.toolkit }}
          </p>
          <h2 id="stack-title">{{ copy.toolkitTitle }}</h2>
        </div>
        <p>
          {{ copy.toolkitIntro }}
        </p>
      </div>

      <div class="skill-grid">
        <article v-for="group in profile.skillGroups" :key="group.title">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="skill in group.skills" :key="skill">
              {{ skill }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section section--more" aria-labelledby="more-title">
      <div>
        <p class="eyebrow">
          {{ copy.beyond }}
        </p>
        <h2 id="more-title">{{ copy.beyondTitle }}</h2>
        <p>
          At {{ profile.teaching.organization }},
          {{ profile.teaching.summary.charAt(0).toLowerCase()
            + profile.teaching.summary.slice(1) }}
        </p>
      </div>
      <div>
        <h3>{{ copy.languages }}</h3>
        <ul>
          <li v-for="language in profile.languages" :key="language">
            {{ language }}
          </li>
        </ul>
      </div>
    </section>

    <section id="contact" class="contact-section" aria-labelledby="contact-title">
      <p class="eyebrow">
        {{ copy.contactEyebrow }}
      </p>
      <h2 id="contact-title">{{ copy.contactTitle }}</h2>
      <p>
        {{ profile.workPreferencesByMarket.international }}. I am interested in
        {{ copy.contactText }}
      </p>

      <div class="contact-links">
        <ProtectedEmail />
        <a
          class="text-link"
          :href="profile.contacts.linkedin"
          target="_blank"
          rel="noreferrer"
        >LinkedIn <span aria-hidden="true">↗</span></a>
        <a
          class="text-link"
          :href="profile.contacts.github"
          target="_blank"
          rel="noreferrer"
        >GitHub <span aria-hidden="true">↗</span></a>
        <a
          class="text-link"
          :href="profile.contacts.siteRepository"
          target="_blank"
          rel="noreferrer"
        >{{ copy.source }} <span aria-hidden="true">↗</span></a>
        <a
          class="text-link"
          :href="profile.contacts.telegram"
          target="_blank"
          rel="noreferrer"
        >Telegram <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </div>
</template>
