<script setup lang="ts">
import { getProfile, type LocaleCode, ui } from '~/content/i18n'

const route = useRoute()
const locale = computed<LocaleCode>(() => {
  const value = typeof route.query.lang === 'string' ? route.query.lang : 'en'
  return ['en', 'de', 'pl', 'sk', 'uk', 'ru'].includes(value) ? value as LocaleCode : 'en'
})
const profile = computed(() => getProfile(locale.value))
const copy = computed(() => ui[locale.value])
const { data: selectedProjectIds } = await useFetch<string[]>('/api/resume-projects')

const resumeProjects = computed(() => {
  const projectsById = new Map(profile.value.projects.map(project => [project.id, project]))

  return (selectedProjectIds.value ?? profile.value.projects.slice(0, 5).map(project => project.id))
    ?.map(projectId => projectsById.get(projectId))
    .filter(project => project !== undefined) ?? []
})

definePageMeta({
  layout: false,
})

useSeoMeta({
  title: `${profile.value.name} — Vue.js & TypeScript Frontend Developer CV`,
  description: `${profile.value.name}'s Vue.js and TypeScript Frontend Developer CV.`,
  robots: 'noindex, follow',
})
</script>

<template>
  <main class="resume" :style="{ '--continued-label': `'${copy.continued}'` }">
    <header class="resume__header">
      <div>
        <p class="resume__eyebrow">{{ copy.cv }}</p>
        <h1><BrandName :name="profile.name" /></h1>
        <p class="resume__role">{{ profile.role }}</p>
      </div>
      <div class="resume__contact" :aria-label="copy.contacts">
        <a :href="`mailto:${profile.contacts.email}`">{{ profile.contacts.email }}</a>
        <a :href="profile.contacts.linkedin">LinkedIn</a>
        <a :href="profile.contacts.github">GitHub</a>
        <a :href="profile.contacts.telegram">Telegram</a>
      </div>
    </header>

    <p class="resume__preference">{{ profile.workPreferences }}</p>

    <section aria-labelledby="summary-title">
      <h2 id="summary-title">{{ copy.profile }}</h2>
      <p>{{ profile.summary }}</p>
      <p>{{ profile.experienceSummary }}</p>
    </section>

    <section aria-labelledby="experience-title">
      <h2 id="experience-title">{{ copy.experience }}</h2>
      <article
        v-for="item in profile.experience"
        :key="`${item.company}-${item.period}`"
        class="resume-entry"
      >
        <div class="resume-entry__heading">
          <div>
            <h3>{{ item.role }}</h3>
            <p>{{ item.company }}</p>
          </div>
          <p>{{ item.period }}</p>
        </div>
        <p>{{ item.summary }}</p>
      </article>
    </section>

    <section class="resume__projects" aria-labelledby="projects-title">
      <h2 id="projects-title">{{ copy.selectedProjects }}</h2>
      <article
        v-for="project in resumeProjects"
        :key="project.name"
        class="resume-project"
      >
        <h3>{{ project.name }}</h3>
        <p v-if="project.confidentialityNote" class="resume-project__confidentiality">
          {{ project.confidentialityNote }}
        </p>
        <p>{{ project.summary }}</p>
        <p class="resume-project__stack">{{ project.stack.join(' · ') }}</p>
        <p
          v-if="project.liveUrl || project.repositoryUrl || project.caseStudyUrl"
          class="resume-project__links"
        >
          <a v-if="project.liveUrl" :href="project.liveUrl">{{ copy.live }}</a>
          <a v-if="project.repositoryUrl" :href="project.repositoryUrl">{{ copy.repository }}</a>
          <a v-if="project.caseStudyUrl" :href="project.caseStudyUrl">{{ copy.caseStudy }}</a>
        </p>
      </article>
    </section>

    <section aria-labelledby="skills-title">
      <h2 id="skills-title">{{ copy.skills }}</h2>
      <div class="resume-skills">
        <div v-for="group in profile.skillGroups" :key="group.title">
          <h3>{{ group.title }}</h3>
          <p>{{ group.skills.join(' · ') }}</p>
        </div>
      </div>
    </section>

    <section class="resume__closing" :aria-label="copy.additionalInfo">
      <div>
        <h2>{{ copy.teaching }}</h2>
        <h3>{{ profile.teaching.organization }}</h3>
        <p>{{ profile.teaching.summary }}</p>
      </div>
      <div>
        <h2>{{ copy.languages }}</h2>
        <ul>
          <li v-for="language in profile.languages" :key="language">
            {{ language }}
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@page {
  size: A4;
  margin: 13mm 15mm 14mm;
}

.resume {
  width: min(100% - 2.5rem, 56rem);
  margin: 0 auto;
  padding: 3rem 0;
  color: #14221b;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.94rem;
  line-height: 1.45;

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-underline-offset: 0.15em;
  }

  h1,
  h2,
  h3,
  p {
    margin-top: 0;
  }

  h1 {
    margin-bottom: 0.15rem;
    font-size: clamp(2.6rem, 7vw, 4.4rem);
    line-height: 0.95;
    letter-spacing: -0.055em;

    .brand-name,
    .brand-name span {
      display: inline;
      color: inherit;
    }

    .brand-name span.brand-name__initial {
      color: #ff6b4a;
    }
  }

  h2 {
    margin: 0 0 0.85rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid rgba(20, 34, 27, 0.28);
    font-size: 0.78rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    break-after: avoid-page;
  }

  h3 {
    margin-bottom: 0.2rem;
    font-size: 1rem;
  }

  section {
    margin-top: 1.55rem;
  }

  section,
  article {
    break-inside: avoid;
  }
}

.resume__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #14221b;
}

.resume__eyebrow,
.resume__role,
.resume__preference,
.resume-entry__heading p,
.resume-project__stack {
  color: #526158;
}

.resume-project__confidentiality {
  margin-bottom: 0.15rem !important;
  color: #526158;
  font-size: 0.76rem;
  font-style: italic;
}

.resume-project__links {
  display: flex;
  gap: 0.8rem;
  margin-top: 0.18rem;
  font-size: 0.76rem;
  font-weight: 700;
}

.resume__eyebrow {
  margin-bottom: 0.7rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.resume__role {
  margin-bottom: 0;
  font-size: 1.15rem;
  font-weight: 700;
}

.resume__contact {
  display: grid;
  justify-items: end;
  gap: 0.25rem;
  font-size: 0.82rem;
}

.resume__preference {
  margin: 0.8rem 0 0;
  font-weight: 700;
}

.resume-entry {
  margin-bottom: 1rem;
}

.resume-entry__heading {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  p {
    margin-bottom: 0;
    font-size: 0.8rem;
    font-weight: 700;
  }

  > p {
    flex: none;
    text-align: right;
  }
}

.resume-entry > p,
.resume-project p,
.resume-skills p,
.resume__closing p {
  margin-bottom: 0;
}

.resume-project {
  margin-bottom: 0.85rem;
}

.resume-project__stack {
  margin-top: 0.2rem;
  font-size: 0.78rem;
  font-weight: 700;
}

.resume-skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem 1.5rem;
}

.resume__closing {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1.5rem;

  ul {
    margin: 0;
    padding-left: 1.1rem;
  }
}

@media (max-width: 38rem) {
  .resume__header,
  .resume-entry__heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.75rem;
  }

  .resume__contact {
    justify-items: start;
  }

  .resume-skills,
  .resume__closing {
    grid-template-columns: 1fr;
  }
}

@media print {
  html,
  body {
    background: #fff;
  }

  .resume {
    width: auto;
    margin: 0;
    padding: 0;
    font-size: 9.2pt;
    line-height: 1.34;

    h1 {
      font-size: 30pt;
    }

    section {
      margin-top: 4.5mm;
    }
  }

  .resume__header {
    padding-bottom: 3mm;
  }

  .resume-entry {
    margin-bottom: 3mm;
  }

  .resume .resume__projects {
    break-inside: auto;
  }

  .resume-project {
    break-inside: avoid-page;
    margin-bottom: 2.4mm;
  }

.resume-project:nth-of-type(3) {
    break-before: page;

    &::before {
      display: block;
      margin-bottom: 3mm;
      padding-bottom: 1.5mm;
      border-bottom: 1px solid rgba(20, 34, 27, 0.28);
      color: #526158;
      content: var(--continued-label);
      font-size: 7.5pt;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
  }

  .resume__projects::before {
    display: block;
    height: 1.5mm;
    content: "";
  }

  .resume__closing {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    padding-top: 2mm;

    > div:first-child {
      flex: 1.4;
    }

    > div:last-child {
      flex: 1;
    }
  }
}
</style>
