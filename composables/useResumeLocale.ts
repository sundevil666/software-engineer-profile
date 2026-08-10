import {
  getProfile,
  languageNames,
  localeCodes,
  type LocaleCode,
  ui,
} from '~/content/i18n'

function normalizeLocale(value: string | null | undefined): LocaleCode | undefined {
  const code = value?.toLowerCase().split('-')[0]
  return localeCodes.find(locale => locale === code)
}

export function useResumeLocale() {
  const route = useRoute()
  const router = useRouter()
  const locale = useState<LocaleCode>('resume-locale', () => 'en')
  const easternSlavicLocale = useState<'uk' | 'ru'>('eastern-slavic-locale', () => 'uk')

  const setLocale = async (nextLocale: LocaleCode) => {
    locale.value = nextLocale
    if (nextLocale === 'uk' || nextLocale === 'ru') easternSlavicLocale.value = nextLocale
    if (import.meta.client) localStorage.setItem('resume-locale', nextLocale)
    await router.replace({ query: { ...route.query, lang: nextLocale === 'en' ? undefined : nextLocale } })
  }

  onMounted(() => {
    const browserLocales = navigator.languages.length ? navigator.languages : [navigator.language]
    const stored = normalizeLocale(localStorage.getItem('resume-locale'))
    const queryLocale = normalizeLocale(typeof route.query.lang === 'string' ? route.query.lang : undefined)
    const detected = browserLocales.map(normalizeLocale).find(Boolean)
    const hasRussian = browserLocales.some(value => normalizeLocale(value) === 'ru')
    const hasUkrainian = browserLocales.some(value => normalizeLocale(value) === 'uk')

    easternSlavicLocale.value = hasRussian && !hasUkrainian ? 'ru' : 'uk'
    const nextLocale = queryLocale ?? stored ?? detected ?? 'en'
    locale.value = nextLocale
    if (nextLocale === 'uk' || nextLocale === 'ru') easternSlavicLocale.value = nextLocale
    document.documentElement.lang = locale.value
  })

  watch(locale, value => {
    if (import.meta.client) document.documentElement.lang = value
  })

  const availableLocales = computed<LocaleCode[]>(() => [
    'en', 'de', 'pl', 'sk', easternSlavicLocale.value,
  ])

  return {
    locale,
    availableLocales,
    languageNames,
    copy: computed(() => ui[locale.value]),
    localizedProfile: computed(() => getProfile(locale.value)),
    setLocale,
  }
}
