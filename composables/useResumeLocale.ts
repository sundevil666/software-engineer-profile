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
  const localeCookie = useCookie<LocaleCode>('resume-locale', {
    default: () => 'en',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
  const queryLocale = normalizeLocale(typeof route.query.lang === 'string' ? route.query.lang : undefined)
  const savedLocale = normalizeLocale(localeCookie.value) ?? 'en'
  const initialLocale = queryLocale ?? savedLocale
  const locale = useState<LocaleCode>('resume-locale', () => initialLocale)
  const easternSlavicLocale = useState<'uk' | 'ru'>(
    'eastern-slavic-locale',
    () => initialLocale === 'ru' ? 'ru' : 'uk',
  )

  if (!normalizeLocale(localeCookie.value)) localeCookie.value = 'en'

  const setLocale = async (nextLocale: LocaleCode) => {
    locale.value = nextLocale
    if (nextLocale === 'uk' || nextLocale === 'ru') easternSlavicLocale.value = nextLocale
    localeCookie.value = nextLocale
    await router.replace({ query: { ...route.query, lang: nextLocale === 'en' ? undefined : nextLocale } })
  }

  onMounted(() => {
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
