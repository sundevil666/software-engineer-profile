import { profile as englishProfile } from './profile'

export const localeCodes = ['en', 'de', 'pl', 'sk', 'uk', 'ru'] as const
export type LocaleCode = typeof localeCodes[number]

type UiCopy = {
  nav: string[]
  skip: string
  footer: string
  heroTitle: [string, string]
  explore: string
  download: string
  pdfPreparing: string
  pdfPreparingDetail: string
  pdfError: string
  pdfRetry: string
  pdfClose: string
  highlights: string
  experience: string
  experienceTitle: string
  work: string
  workTitle: string
  workIntro: string
  toolkit: string
  toolkitTitle: string
  toolkitIntro: string
  beyond: string
  beyondTitle: string
  languages: string
  contactEyebrow: string
  contactTitle: string
  contactText: string
  source: string
  cv: string
  profile: string
  selectedProjects: string
  skills: string
  teaching: string
  additionalInfo: string
  contacts: string
  live: string
  repository: string
  caseStudy: string
  continued: string
}

export const languageNames: Record<LocaleCode, string> = {
  en: 'English',
  de: 'Deutsch',
  pl: 'Polski',
  sk: 'Slovenčina',
  uk: 'Українська',
  ru: 'Русский',
}

export const ui: Record<LocaleCode, UiCopy> = {
  en: {
    nav: ['Experience', 'Work', 'Stack', 'Contact'], skip: 'Skip to content',
    footer: 'Built with Vue, TypeScript, and care.',
    heroTitle: ['I turn complex workflows into', 'clear digital products.'],
    explore: 'Explore my work', download: 'Download CV', highlights: 'Professional highlights',
    pdfPreparing: 'Preparing your PDF', pdfPreparingDetail: 'Your CV will download as soon as it is ready.', pdfError: 'Could not prepare the PDF. Please try again.', pdfRetry: 'Try again', pdfClose: 'Close',
    experience: 'Experience', experienceTitle: 'Building for the web since 2013.',
    work: 'Selected work', workTitle: 'Products built around real workflows.',
    workIntro: 'A selection of business, educational, and mobile products from my commercial and independent work.',
    toolkit: 'Technical toolkit', toolkitTitle: 'Vue expertise backed by delivery experience.',
    toolkitIntro: 'Technologies are tools, not outcomes. These are the ones I have used to ship and maintain real products.',
    beyond: 'Beyond delivery', beyondTitle: 'Teaching and communication matter.', languages: 'Languages',
    contactEyebrow: 'Let’s work together', contactTitle: 'Looking for a frontend developer who understands business?',
    contactText: 'I am interested in Vue.js and TypeScript roles focused on business applications, dashboards, and cross-platform products.',
    source: 'Website source', cv: 'Curriculum Vitae', profile: 'Profile', selectedProjects: 'Selected Projects',
    skills: 'Skills', teaching: 'Teaching', additionalInfo: 'Additional information', contacts: 'Contact details',
    live: 'Live product', repository: 'Repository', caseStudy: 'Case study', continued: 'Selected Projects — continued',
  },
  de: {
    nav: ['Erfahrung', 'Projekte', 'Stack', 'Kontakt'], skip: 'Zum Inhalt springen',
    footer: 'Erstellt mit Vue, TypeScript und Sorgfalt.',
    heroTitle: ['Ich verwandle komplexe Abläufe in', 'klare digitale Produkte.'],
    explore: 'Projekte ansehen', download: 'Lebenslauf laden', highlights: 'Berufliche Eckdaten',
    pdfPreparing: 'PDF wird vorbereitet', pdfPreparingDetail: 'Der Lebenslauf wird heruntergeladen, sobald er bereit ist.', pdfError: 'Das PDF konnte nicht erstellt werden. Bitte versuchen Sie es erneut.', pdfRetry: 'Erneut versuchen', pdfClose: 'Schließen',
    experience: 'Erfahrung', experienceTitle: 'Webentwicklung seit 2013.',
    work: 'Ausgewählte Projekte', workTitle: 'Produkte für reale Arbeitsabläufe.',
    workIntro: 'Eine Auswahl an Geschäfts-, Bildungs- und Mobilprodukten aus meiner kommerziellen und selbstständigen Arbeit.',
    toolkit: 'Technologien', toolkitTitle: 'Vue-Kompetenz mit echter Delivery-Erfahrung.',
    toolkitIntro: 'Technologien sind Werkzeuge, keine Ergebnisse. Mit diesen habe ich reale Produkte veröffentlicht und gepflegt.',
    beyond: 'Darüber hinaus', beyondTitle: 'Lehre und Kommunikation zählen.', languages: 'Sprachen',
    contactEyebrow: 'Lassen Sie uns zusammenarbeiten', contactTitle: 'Suchen Sie einen Frontend-Entwickler mit Geschäftsverständnis?',
    contactText: 'Ich interessiere mich für Vue.js- und TypeScript-Rollen rund um Geschäftsanwendungen, Dashboards und plattformübergreifende Produkte.',
    source: 'Quellcode der Website', cv: 'Lebenslauf', profile: 'Profil', selectedProjects: 'Ausgewählte Projekte',
    skills: 'Kenntnisse', teaching: 'Lehrtätigkeit', additionalInfo: 'Weitere Informationen', contacts: 'Kontaktdaten',
    live: 'Live-Produkt', repository: 'Repository', caseStudy: 'Fallstudie', continued: 'Ausgewählte Projekte — Fortsetzung',
  },
  pl: {
    nav: ['Doświadczenie', 'Projekty', 'Technologie', 'Kontakt'], skip: 'Przejdź do treści',
    footer: 'Zbudowano z Vue, TypeScript i dbałością o szczegóły.',
    heroTitle: ['Zmieniam złożone procesy w', 'przejrzyste produkty cyfrowe.'],
    explore: 'Zobacz moje projekty', download: 'Pobierz CV', highlights: 'Najważniejsze informacje',
    pdfPreparing: 'Przygotowywanie pliku PDF', pdfPreparingDetail: 'CV zostanie pobrane, gdy będzie gotowe.', pdfError: 'Nie udało się przygotować pliku PDF. Spróbuj ponownie.', pdfRetry: 'Spróbuj ponownie', pdfClose: 'Zamknij',
    experience: 'Doświadczenie', experienceTitle: 'Tworzę dla internetu od 2013 roku.',
    work: 'Wybrane projekty', workTitle: 'Produkty oparte na rzeczywistych procesach.',
    workIntro: 'Wybrane produkty biznesowe, edukacyjne i mobilne z mojej pracy komercyjnej i niezależnej.',
    toolkit: 'Narzędzia techniczne', toolkitTitle: 'Znajomość Vue poparta doświadczeniem we wdrożeniach.',
    toolkitIntro: 'Technologie są narzędziami, nie celem. Tych używałem do wdrażania i utrzymania prawdziwych produktów.',
    beyond: 'Poza wdrożeniami', beyondTitle: 'Nauczanie i komunikacja mają znaczenie.', languages: 'Języki',
    contactEyebrow: 'Pracujmy razem', contactTitle: 'Szukasz frontend developera, który rozumie biznes?',
    contactText: 'Interesują mnie role Vue.js i TypeScript związane z aplikacjami biznesowymi, dashboardami i produktami wieloplatformowymi.',
    source: 'Kod strony', cv: 'Curriculum Vitae', profile: 'Profil', selectedProjects: 'Wybrane projekty',
    skills: 'Umiejętności', teaching: 'Nauczanie', additionalInfo: 'Dodatkowe informacje', contacts: 'Dane kontaktowe',
    live: 'Produkt', repository: 'Repozytorium', caseStudy: 'Opis projektu', continued: 'Wybrane projekty — ciąg dalszy',
  },
  sk: {
    nav: ['Skúsenosti', 'Projekty', 'Technológie', 'Kontakt'], skip: 'Prejsť na obsah',
    footer: 'Vytvorené s Vue, TypeScriptom a dôrazom na detail.',
    heroTitle: ['Mením zložité pracovné postupy na', 'jasné digitálne produkty.'],
    explore: 'Pozrieť projekty', download: 'Stiahnuť CV', highlights: 'Profesijné zhrnutie',
    pdfPreparing: 'Pripravuje sa PDF', pdfPreparingDetail: 'Životopis sa stiahne hneď, ako bude pripravený.', pdfError: 'PDF sa nepodarilo pripraviť. Skúste to znova.', pdfRetry: 'Skúsiť znova', pdfClose: 'Zavrieť',
    experience: 'Skúsenosti', experienceTitle: 'Tvorím pre web od roku 2013.',
    work: 'Vybrané projekty', workTitle: 'Produkty postavené na reálnych procesoch.',
    workIntro: 'Výber obchodných, vzdelávacích a mobilných produktov z mojej komerčnej a samostatnej práce.',
    toolkit: 'Technické znalosti', toolkitTitle: 'Znalosť Vue podložená skúsenosťami s dodávaním produktov.',
    toolkitIntro: 'Technológie sú nástroje, nie výsledky. Tieto som používal pri nasadzovaní a údržbe reálnych produktov.',
    beyond: 'Nad rámec vývoja', beyondTitle: 'Na vzdelávaní a komunikácii záleží.', languages: 'Jazyky',
    contactEyebrow: 'Poďme spolupracovať', contactTitle: 'Hľadáte frontend vývojára, ktorý rozumie biznisu?',
    contactText: 'Zaujímajú ma pozície s Vue.js a TypeScriptom zamerané na biznis aplikácie, dashboardy a multiplatformové produkty.',
    source: 'Zdrojový kód webu', cv: 'Životopis', profile: 'Profil', selectedProjects: 'Vybrané projekty',
    skills: 'Zručnosti', teaching: 'Vzdelávanie', additionalInfo: 'Ďalšie informácie', contacts: 'Kontaktné údaje',
    live: 'Produkt', repository: 'Repozitár', caseStudy: 'Prípadová štúdia', continued: 'Vybrané projekty — pokračovanie',
  },
  uk: {
    nav: ['Досвід', 'Проєкти', 'Технології', 'Контакти'], skip: 'Перейти до вмісту',
    footer: 'Створено з Vue, TypeScript і турботою про деталі.',
    heroTitle: ['Перетворюю складні робочі процеси на', 'зрозумілі цифрові продукти.'],
    explore: 'Переглянути проєкти', download: 'Завантажити CV', highlights: 'Професійні показники',
    pdfPreparing: 'Підготовка PDF', pdfPreparingDetail: 'Резюме завантажиться, щойно буде готове.', pdfError: 'Не вдалося підготувати PDF. Спробуйте ще раз.', pdfRetry: 'Спробувати знову', pdfClose: 'Закрити',
    experience: 'Досвід', experienceTitle: 'Створюю для вебу з 2013 року.',
    work: 'Вибрані проєкти', workTitle: 'Продукти, побудовані навколо реальних процесів.',
    workIntro: 'Добірка бізнесових, освітніх і мобільних продуктів із моєї комерційної та незалежної роботи.',
    toolkit: 'Технічні навички', toolkitTitle: 'Експертиза у Vue, підкріплена досвідом запуску продуктів.',
    toolkitIntro: 'Технології — це інструменти, а не результат. Їх я використовував для запуску й підтримки реальних продуктів.',
    beyond: 'Поза розробкою', beyondTitle: 'Навчання й комунікація мають значення.', languages: 'Мови',
    contactEyebrow: 'Працюймо разом', contactTitle: 'Шукаєте frontend-розробника, який розуміє бізнес?',
    contactText: 'Мене цікавлять ролі з Vue.js і TypeScript, пов’язані з бізнес-застосунками, дашбордами та кросплатформними продуктами.',
    source: 'Код сайту', cv: 'Резюме', profile: 'Профіль', selectedProjects: 'Вибрані проєкти',
    skills: 'Навички', teaching: 'Викладання', additionalInfo: 'Додаткова інформація', contacts: 'Контактні дані',
    live: 'Продукт', repository: 'Репозиторій', caseStudy: 'Опис проєкту', continued: 'Вибрані проєкти — продовження',
  },
  ru: {
    nav: ['Опыт', 'Проекты', 'Технологии', 'Контакты'], skip: 'Перейти к содержанию',
    footer: 'Создано с Vue, TypeScript и вниманием к деталям.',
    heroTitle: ['Превращаю сложные рабочие процессы в', 'понятные цифровые продукты.'],
    explore: 'Посмотреть проекты', download: 'Скачать CV', highlights: 'Профессиональные показатели',
    pdfPreparing: 'Подготавливаем PDF', pdfPreparingDetail: 'Резюме скачается, как только будет готово.', pdfError: 'Не удалось подготовить PDF. Попробуйте ещё раз.', pdfRetry: 'Повторить', pdfClose: 'Закрыть',
    experience: 'Опыт', experienceTitle: 'Создаю для веба с 2013 года.',
    work: 'Избранные проекты', workTitle: 'Продукты, построенные вокруг реальных процессов.',
    workIntro: 'Подборка бизнес-, образовательных и мобильных продуктов из моей коммерческой и независимой работы.',
    toolkit: 'Технические навыки', toolkitTitle: 'Экспертиза во Vue, подкреплённая опытом запуска продуктов.',
    toolkitIntro: 'Технологии — это инструменты, а не результат. Их я использовал для запуска и поддержки реальных продуктов.',
    beyond: 'За рамками разработки', beyondTitle: 'Обучение и коммуникация имеют значение.', languages: 'Языки',
    contactEyebrow: 'Давайте работать вместе', contactTitle: 'Ищете frontend-разработчика, который понимает бизнес?',
    contactText: 'Мне интересны роли с Vue.js и TypeScript, связанные с бизнес-приложениями, дашбордами и кроссплатформенными продуктами.',
    source: 'Код сайта', cv: 'Резюме', profile: 'Профиль', selectedProjects: 'Избранные проекты',
    skills: 'Навыки', teaching: 'Преподавание', additionalInfo: 'Дополнительная информация', contacts: 'Контактные данные',
    live: 'Продукт', repository: 'Репозиторий', caseStudy: 'Описание проекта', continued: 'Избранные проекты — продолжение',
  },
}

const localizedCore = {
  de: {
    role: 'Frontend-Entwickler — Vue.js & TypeScript',
    availability: 'In Europa · CET/CEST · Offen für Remote-Angebote weltweit',
    workPreferences: 'In Europa · CET/CEST · Offen für Remote-Angebote weltweit · Festanstellung, B2B oder Freelance',
    summary: 'Ich entwickle zuverlässige Geschäftsanwendungen mit Vue.js und TypeScript — von datenintensiven Dashboards und wiederverwendbaren Komponentensystemen bis zu plattformübergreifenden Produkten.',
    experienceSummary: 'Über 10 Jahre kommerzielle Webentwicklung, davon über 4 Jahre mit Schwerpunkt auf Vue.js-Anwendungen.',
    strengths: [['10+', 'Jahre kommerzielle Webentwicklung'], ['4+', 'Jahre mit Fokus auf Vue.js'], ['End-to-End', 'von Anforderungen bis zum Deployment']],
    languages: ['Englisch — B1', 'Ukrainisch — Muttersprache', 'Russisch — Muttersprache'],
  },
  pl: {
    role: 'Frontend Developer — Vue.js i TypeScript',
    availability: 'W Europie · CET/CEST · Otwarty na pracę zdalną na całym świecie',
    workPreferences: 'W Europie · CET/CEST · Otwarty na pracę zdalną na całym świecie · UoP, B2B lub freelance',
    summary: 'Tworzę niezawodne aplikacje biznesowe w Vue.js i TypeScript — od dashboardów opartych na danych i systemów komponentów po produkty wieloplatformowe.',
    experienceSummary: 'Ponad 10 lat komercyjnego tworzenia stron i aplikacji, w tym ponad 4 lata pracy z Vue.js.',
    strengths: [['10+', 'lat komercyjnego web developmentu'], ['4+', 'lata pracy z Vue.js'], ['End-to-end', 'od wymagań do wdrożenia']],
    languages: ['Angielski — B1', 'Ukraiński — ojczysty', 'Rosyjski — ojczysty'],
  },
  sk: {
    role: 'Frontend vývojár — Vue.js a TypeScript',
    availability: 'V Európe · CET/CEST · Otvorený práci na diaľku po celom svete',
    workPreferences: 'V Európe · CET/CEST · Otvorený práci na diaľku po celom svete · Zamestnanie, B2B alebo freelance',
    summary: 'Tvorím spoľahlivé biznis aplikácie vo Vue.js a TypeScripte — od dátových dashboardov a znovupoužiteľných komponentov až po multiplatformové produkty.',
    experienceSummary: 'Viac ako 10 rokov komerčného webového vývoja, z toho viac ako 4 roky so zameraním na Vue.js.',
    strengths: [['10+', 'rokov komerčného webového vývoja'], ['4+', 'roky zamerané na Vue.js'], ['End-to-end', 'od požiadaviek po nasadenie']],
    languages: ['Angličtina — B1', 'Ukrajinčina — materinský jazyk', 'Ruština — materinský jazyk'],
  },
  uk: {
    role: 'Frontend-розробник — Vue.js і TypeScript',
    availability: 'У Європі · CET/CEST · Відкритий до віддаленої роботи по всьому світу',
    workPreferences: 'У Європі · CET/CEST · Відкритий до віддаленої роботи по всьому світу · Найм, B2B або фриланс',
    summary: 'Створюю надійні бізнес-застосунки на Vue.js і TypeScript — від насичених даними дашбордів і систем компонентів до кросплатформних продуктів.',
    experienceSummary: 'Понад 10 років комерційної веброзробки, з них понад 4 роки з фокусом на Vue.js.',
    strengths: [['10+', 'років комерційної веброзробки'], ['4+', 'роки з фокусом на Vue.js'], ['End-to-end', 'від вимог до розгортання']],
    languages: ['Англійська — B1', 'Українська — рідна'],
  },
  ru: {
    role: 'Frontend-разработчик — Vue.js и TypeScript',
    availability: 'В Европе · CET/CEST · Открыт для удалённой работы по всему миру',
    workPreferences: 'В Европе · CET/CEST · Открыт для удалённой работы по всему миру · Найм, B2B или фриланс',
    summary: 'Создаю надёжные бизнес-приложения на Vue.js и TypeScript — от насыщенных данными дашбордов и систем компонентов до кроссплатформенных продуктов.',
    experienceSummary: 'Более 10 лет коммерческой веб-разработки, из них более 4 лет с фокусом на Vue.js.',
    strengths: [['10+', 'лет коммерческой веб-разработки'], ['4+', 'года с фокусом на Vue.js'], ['End-to-end', 'от требований до развёртывания']],
    languages: ['Английский — B1', 'Русский — родной'],
  },
} as const

const localizedDetails: Record<Exclude<LocaleCode, 'en'>, {
  experience: string[]
  projects: string[]
  skillTitles: string[]
  teaching: string
}> = {
  de: {
    experience: [
      'Ich liefere Vue.js-Produkte für Kunden, als Freelancer und in eigenen Projekten - von den Anforderungen bis zum Deployment. Dazu gehören eine komplette Kundenwebsite, Poland Group Materials, My Shift, PolandShopPrice, Mentor AI und vertrauliche Geschäftsplattformen mit Rollen, Workflows und Reporting.',
      'Unterrichtete HTML- und CSS-Kurse für angehende Frontend-Entwickler. Erstellte praktische Übungen, prüfte die Arbeiten der Teilnehmenden, gab Feedback und half ihnen, ihre ersten responsiven Webseiten zu entwickeln und die Grundlagen der Frontend-Entwicklung zu verstehen.',
      'Konzipierte, entwickelte und lieferte selbstständig ein MVP für persönliche Konten von Teilnehmenden und Fachkräften im schulischen Assessment. Entwickelte Teilnehmerverwaltung, Testzuweisungen, Dashboards, Diagramme und detaillierte Auswertungen in Zusammenarbeit mit Backend- und Testing-Frontend-Entwicklern.',
      'Pflegte und erweiterte als Teil eines zweiköpfigen Frontend-Teams eine bestehende Vue-2-Anwendung. Implementierte klar definierte Funktionen und passte Lösungen an die vorhandene Codebasis an.',
      'Lieferte Websites und Geschäftsanwendungen von den Anforderungen bis zum Deployment. Koordinierte Designer und Backend-Entwickler und entwickelte Lösungen mit WordPress, Joomla, JavaScript und Vue.js, darunter eine E-Commerce-Plattform mit eigener Administration und Lieferlogik.',
    ],
    projects: [
      'Verantwortete gemeinsam mit einem Backend-Entwickler die komplette Frontend-Umsetzung. Ersetzte einen stark manuellen Excel-Prozess durch eine rollenbasierte Plattform für Transaktionen, Ausgaben, Reporting, Filter und Datenexporte.',
      'Alleiniger Frontend-Entwickler einer großen rollenbasierten Administrationsplattform. Empfahl Quasar für eine schnelle Umsetzung und entwickelte das Frontend eines MVP, das in sechs Monaten veröffentlicht wurde.',
      'Lieferte selbstständig ein MVP für Portale von Teilnehmenden und Assessment-Fachkräften. Integrierte eine separate Testanwendung und visualisierte Ergebnisse mit Dashboards, Diagrammen und detaillierten Interpretationen.',
      'Lieferte eine öffentliche WordPress-Website und einen produktiven Vue.js-Shop. Koordinierte Designer und Backend-Entwickler und entwickelte Shop, Administration sowie eine Verpackungslogik für Kartongrößen, Produktkompatibilität und Kosten.',
      'Plattformübergreifende mobile App zum Durchsuchen von PDF-Produktkatalogen. Für Android und iOS entwickelt; die Veröffentlichung im App Store ist in Vorbereitung.',
      'Plattformübergreifendes mobiles Produkt für Baustoffinformationen und interaktive Kostenschätzungen. Umgesetzt wurden die iOS-Erfahrung, tabletgerechte Abläufe, Onboarding, Teilen und der App-Store-Review-Prozess.',
      'Eigene Englischlern-PWA mit Übungen für Hören, Sprechen und Wortschatz sowie Fortschrittsverfolgung und Sprachfunktionen.',
      'Mehrsprachige Anwendung zur Schichtplanung mit Erinnerungen, Countdowns und praktischen Produktivitätsfunktionen.',
    ],
    skillTitles: ['Frontend-Kerntechnologien', 'Anwendungsarchitektur', 'Delivery & Plattformen', 'Weitere Erfahrung'],
    teaching: 'Leitete HTML- und CSS-Workshops und betreute angehende Frontend-Entwickler.',
  },
  pl: {
    experience: [
      'Realizuję kontraktowe, freelancerskie i własne produkty Vue.js od wymagań po wdrożenie. Ostatnie prace obejmują kompletną stronę klienta, Poland Group Materials, My Shift, PolandShopPrice, Mentor AI oraz objęte NDA platformy biznesowe z rolami, procesami i raportowaniem.',
      'Prowadziłem kursy HTML i CSS dla początkujących frontend developerów. Przygotowywałem ćwiczenia praktyczne, oceniałem prace uczestników, przekazywałem informacje zwrotne i pomagałem im tworzyć pierwsze responsywne strony oraz poznawać podstawy frontend developmentu.',
      'Samodzielnie zaprojektowałem, stworzyłem i wdrożyłem MVP kont uczestników badań oraz specjalistów pracujących z uczniami. Zbudowałem zarządzanie uczestnikami, przydzielanie testów, dashboardy wyników, wykresy i szczegółowe interpretacje, współpracując z backendem i frontendem aplikacji testowej.',
      'Utrzymywałem i rozwijałem starszą aplikację Vue 2 w dwuosobowym zespole frontendowym. Wdrażałem precyzyjnie określone funkcje i dopasowywałem rozwiązania do istniejącego kodu.',
      'Realizowałem strony i aplikacje biznesowe od wymagań po wdrożenie. Koordynowałem projektantów i backend developerów oraz tworzyłem rozwiązania WordPress, Joomla, JavaScript i Vue.js, w tym sklep z własnym panelem i logiką dostaw.',
    ],
    projects: [
      'Odpowiadałem za cały frontend we współpracy z backend developerem. Zastąpiłem ręczny proces oparty na Excelu platformą z rolami do obsługi transakcji, wydatków, raportów, filtrowania i eksportu danych.',
      'Jedyny frontend developer dużej platformy administracyjnej z rolami. Zarekomendowałem Quasar, aby przyspieszyć realizację, i stworzyłem frontend MVP uruchomionego przez zespół w sześć miesięcy.',
      'Samodzielnie dostarczyłem MVP portali uczestników i specjalistów. Zintegrowałem osobną aplikację testową i prezentowałem wyniki przez dashboardy, wykresy i szczegółowe interpretacje.',
      'Dostarczyłem publiczną stronę WordPress i działający sklep Vue.js. Koordynowałem projektanta i backend developera, stworzyłem sklep, panel administracyjny i logikę pakowania uwzględniającą rozmiary pudełek, zgodność produktów oraz koszty.',
      'Wieloplatformowa aplikacja mobilna do przeglądania katalogów produktów PDF. Zbudowana dla Androida i iOS, obecnie przygotowywana do publikacji w App Store.',
      'Wieloplatformowy produkt mobilny do pracy z informacjami o materiałach budowlanych i tworzenia interaktywnych kosztorysów. Zrealizowałem wersję iOS, responsywne widoki tabletowe, onboarding, udostępnianie i proces App Store Review.',
      'Własna PWA do nauki angielskiego z ćwiczeniami słuchania, mówienia i słownictwa, śledzeniem postępów oraz funkcjami mowy.',
      'Wielojęzyczna aplikacja do planowania zmian z przypomnieniami, licznikami i praktycznymi funkcjami produktywności.',
    ],
    skillTitles: ['Frontend', 'Architektura aplikacji', 'Wdrożenia i platformy', 'Dodatkowe doświadczenie'],
    teaching: 'Prowadziłem warsztaty HTML i CSS oraz wspierałem początkujących frontend developerów.',
  },
  sk: {
    experience: [
      'Dodávam zmluvné, freelance a vlastné Vue.js produkty od požiadaviek po nasadenie. Medzi aktuálne práce patria kompletný klientsky web, Poland Group Materials, My Shift, PolandShopPrice, Mentor AI a biznis platformy pod NDA s rolami, pracovnými postupmi a reportmi.',
      'Viedol som kurzy HTML a CSS pre začínajúcich frontend vývojárov. Pripravoval som praktické cvičenia, kontroloval práce účastníkov, poskytoval spätnú väzbu a pomáhal im vytvárať prvé responzívne webové stránky a osvojiť si základy frontend vývoja.',
      'Samostatne som navrhol, vyvinul a dodal MVP účtov pre účastníkov hodnotenia a odborníkov pracujúcich so žiakmi. Vytvoril som správu účastníkov, prideľovanie testov, dashboardy, grafy a detailné interpretácie v spolupráci s backend a testing-frontend vývojármi.',
      'Udržiaval a rozširoval som staršiu Vue 2 aplikáciu v dvojčlennom frontend tíme. Implementoval som presne definované funkcie a prispôsoboval riešenia existujúcemu kódu.',
      'Dodával som weby a biznis aplikácie od požiadaviek po nasadenie. Koordinoval som dizajnérov a backend vývojárov a tvoril riešenia vo WordPresse, Joomle, JavaScripte a Vue.js vrátane e-shopu s vlastnou administráciou a logikou doručenia.',
    ],
    projects: [
      'Zodpovedal som za celý frontend v spolupráci s backend vývojárom. Manuálny proces založený na Exceli sme nahradili platformou s rolami pre transakcie, výdavky, reporty, filtrovanie a export dát.',
      'Jediný frontend vývojár rozsiahlej administračnej platformy s rolami. Pre rýchle dodanie som odporučil Quasar a vytvoril frontend MVP, ktoré tím spustil za šesť mesiacov.',
      'Samostatne som dodal MVP portálov pre účastníkov a odborníkov. Integroval som samostatnú testovaciu aplikáciu a výsledky zobrazil v dashboardoch, grafoch a detailných interpretáciách.',
      'Dodal som verejný WordPress web a funkčný Vue.js obchod. Koordinoval som dizajnéra a backend vývojára a vytvoril obchod, administráciu aj baliacu logiku pre veľkosti krabíc, kompatibilitu produktov a náklady.',
      'Multiplatformová mobilná aplikácia na prehliadanie PDF katalógov produktov. Vytvorená pre Android a iOS, momentálne smeruje k publikovaniu v App Store.',
      'Multiplatformový mobilný produkt na prácu s informáciami o stavebných materiáloch a tvorbu interaktívnych odhadov nákladov. Dodal som iOS verziu, responzívne tabletové obrazovky, onboarding, zdieľanie a proces App Store Review.',
      'Vlastná PWA na učenie angličtiny zameraná na počúvanie, rozprávanie, slovnú zásobu, sledovanie pokroku a hlasové funkcie.',
      'Viacjazyčná aplikácia na plánovanie zmien s pripomienkami, odpočítavaním a praktickými funkciami produktivity.',
    ],
    skillTitles: ['Frontend základ', 'Architektúra aplikácií', 'Dodávanie a platformy', 'Ďalšie skúsenosti'],
    teaching: 'Viedol som workshopy HTML a CSS a mentoroval začínajúcich frontend vývojárov.',
  },
  uk: {
    experience: [
      'Розробляю контрактні, фриланс- і власні продукти на Vue.js від вимог до розгортання. Серед актуальних робіт - сайт клієнта під ключ, Poland Group Materials, My Shift, PolandShopPrice, Mentor AI та бізнес-платформи під NDA з ролями, робочими процесами й звітністю.',
      'Проводив курси з HTML і CSS для frontend-розробників-початківців. Готував практичні завдання, перевіряв роботи учасників, надавав зворотний зв\'язок і допомагав створювати перші адаптивні вебсторінки та опановувати основи frontend-розробки.',
      'Самостійно спроєктував, розробив і запустив MVP особистих кабінетів учасників оцінювання та фахівців, які працюють зі школярами. Створив керування учасниками, призначення тестів, дашборди, графіки й детальні інтерпретації у співпраці з backend- і testing-frontend-розробниками.',
      'Підтримував і розвивав legacy-застосунок на Vue 2 у frontend-команді з двох людей. Реалізовував чітко визначені функції та адаптував рішення до наявної кодової бази.',
      'Створював сайти й бізнес-застосунки від вимог до розгортання. Координував дизайнерів і backend-розробників та будував рішення на WordPress, Joomla, JavaScript і Vue.js, зокрема інтернет-магазин із власною адмінпанеллю та логікою доставки.',
    ],
    projects: [
      'Відповідав за всю frontend-частину у співпраці з backend-розробником. Замінив ручний процес на базі Excel рольовою платформою для транзакцій, витрат, звітності, фільтрації й експорту даних.',
      'Єдиний frontend-розробник великої рольової адмінплатформи. Запропонував Quasar для швидкої реалізації та створив frontend MVP, який команда запустила за шість місяців.',
      'Самостійно реалізував MVP порталів учасників і фахівців. Інтегрував окремий застосунок для тестування та візуалізував результати через дашборди, графіки й детальні інтерпретації.',
      'Створив публічний сайт на WordPress і робочий магазин на Vue.js. Координував дизайнера й backend-розробника, реалізував вітрину, адмінпанель і логіку пакування з урахуванням розмірів коробок, сумісності товарів і вартості.',
      'Кросплатформний мобільний застосунок для перегляду PDF-каталогів товарів. Створений для Android та iOS і готується до публікації в App Store.',
      'Кросплатформний мобільний продукт для роботи з інформацією про будівельні матеріали та створення інтерактивних кошторисів. Реалізував iOS-версію, адаптивні планшетні сценарії, онбординг, поширення та процес App Store Review.',
      'Власний PWA для вивчення англійської з практикою аудіювання, мовлення й лексики, відстеженням прогресу та голосовими функціями.',
      'Багатомовний застосунок для планування змін із нагадуваннями, зворотними відліками та практичними функціями продуктивності.',
    ],
    skillTitles: ['Основний frontend', 'Архітектура застосунків', 'Розгортання й платформи', 'Додатковий досвід'],
    teaching: 'Проводив воркшопи з HTML і CSS та менторив frontend-розробників-початківців.',
  },
  ru: {
    experience: [
      'Разрабатываю контрактные, фриланс- и собственные продукты на Vue.js от требований до развёртывания. Среди актуальных работ - сайт клиента под ключ, Poland Group Materials, My Shift, PolandShopPrice, Mentor AI и бизнес-платформы под NDA с ролями, рабочими процессами и отчётностью.',
      'Проводил курсы по HTML и CSS для начинающих frontend-разработчиков. Готовил практические задания, проверял работы участников, давал обратную связь и помогал создавать первые адаптивные веб-страницы и осваивать основы frontend-разработки.',
      'Самостоятельно спроектировал, разработал и запустил MVP личных кабинетов участников оценки и специалистов, работающих со школьниками. Создал управление участниками, назначение тестов, дашборды, графики и детальные интерпретации вместе с backend- и testing-frontend-разработчиками.',
      'Поддерживал и развивал legacy-приложение на Vue 2 во frontend-команде из двух человек. Реализовывал чётко определённые функции и адаптировал решения к существующей кодовой базе.',
      'Создавал сайты и бизнес-приложения от требований до развёртывания. Координировал дизайнеров и backend-разработчиков и строил решения на WordPress, Joomla, JavaScript и Vue.js, включая интернет-магазин с собственной админпанелью и логикой доставки.',
    ],
    projects: [
      'Отвечал за весь frontend вместе с backend-разработчиком. Заменил ручной процесс на базе Excel ролевой платформой для транзакций, расходов, отчётности, фильтрации и экспорта данных.',
      'Единственный frontend-разработчик крупной ролевой админплатформы. Предложил Quasar для быстрой реализации и создал frontend MVP, который команда запустила за шесть месяцев.',
      'Самостоятельно реализовал MVP порталов участников и специалистов. Интегрировал отдельное приложение для тестирования и визуализировал результаты через дашборды, графики и подробные интерпретации.',
      'Создал публичный сайт на WordPress и работающий магазин на Vue.js. Координировал дизайнера и backend-разработчика, реализовал витрину, админпанель и логику упаковки с учётом размеров коробок, совместимости товаров и стоимости.',
      'Кроссплатформенное мобильное приложение для просмотра PDF-каталогов товаров. Создано для Android и iOS и готовится к публикации в App Store.',
      'Кроссплатформенный мобильный продукт для работы с информацией о строительных материалах и создания интерактивных смет. Реализовал iOS-версию, адаптивные планшетные сценарии, онбординг, отправку данных и процесс App Store Review.',
      'Собственная PWA для изучения английского с практикой аудирования, речи и лексики, отслеживанием прогресса и голосовыми функциями.',
      'Многоязычное приложение для планирования смен с напоминаниями, обратными отсчётами и практичными функциями продуктивности.',
    ],
    skillTitles: ['Основной frontend', 'Архитектура приложений', 'Развёртывание и платформы', 'Дополнительный опыт'],
    teaching: 'Проводил воркшопы по HTML и CSS и менторил начинающих frontend-разработчиков.',
  },
}

const localizedLabels: Record<Exclude<LocaleCode, 'en'>, {
  roles: string[]
  independent: string
  periods: string[]
  projectNames: string[]
  ongoingProjectPeriod: string
  materialsProjectPeriod: string
  confidentiality: string
}> = {
  de: {
    roles: ['Selbstständiger Frontend-Entwickler', 'Dozent für HTML & CSS', 'Frontend-Entwickler', 'Frontend-Entwickler', 'Freelance-Berater'],
    independent: 'Selbstständig',
    periods: ['Apr 2023 — Heute', 'Mär 2018 — Dez 2023', 'Jan 2022 — Mär 2023', 'Jan 2021 — Dez 2021', 'Mär 2013 — Jan 2021'],
    projectNames: ['Finanzoperationsplattform', 'Werbeoperationsplattform', 'Plattform für Bildungsassessment', 'Poland Group Website & Shop', 'PolandShopPrice', 'Poland Group Materials', 'Mentor AI', 'My Shift'],
    ongoingProjectPeriod: 'Jun 2026 — Heute',
    materialsProjectPeriod: 'Jul 2025 — Heute',
    confidentiality: 'Verallgemeinerter Projektname; Kundendaten sind gemäß NDA vertraulich.',
  },
  pl: {
    roles: ['Niezależny Frontend Developer', 'Instruktor HTML i CSS', 'Frontend Developer', 'Frontend Developer', 'Konsultant freelance'],
    independent: 'Niezależnie',
    periods: ['kwi 2023 — obecnie', 'mar 2018 — gru 2023', 'sty 2022 — mar 2023', 'sty 2021 — gru 2021', 'mar 2013 — sty 2021'],
    projectNames: ['Platforma operacji finansowych', 'Platforma operacji reklamowych', 'Platforma ocen edukacyjnych', 'Strona i sklep Poland Group', 'PolandShopPrice', 'Poland Group Materials', 'Mentor AI', 'My Shift'],
    ongoingProjectPeriod: 'cze 2026 — obecnie',
    materialsProjectPeriod: 'lip 2025 — obecnie',
    confidentiality: 'Uogólniona nazwa projektu; dane klienta są poufne zgodnie z NDA.',
  },
  sk: {
    roles: ['Nezávislý frontend vývojár', 'Lektor HTML a CSS', 'Frontend vývojár', 'Frontend vývojár', 'Freelance konzultant'],
    independent: 'Nezávisle',
    periods: ['apr 2023 — súčasnosť', 'mar 2018 — dec 2023', 'jan 2022 — mar 2023', 'jan 2021 — dec 2021', 'mar 2013 — jan 2021'],
    projectNames: ['Platforma finančných operácií', 'Platforma reklamných operácií', 'Platforma vzdelávacieho hodnotenia', 'Web a obchod Poland Group', 'PolandShopPrice', 'Poland Group Materials', 'Mentor AI', 'My Shift'],
    ongoingProjectPeriod: 'jún 2026 — súčasnosť',
    materialsProjectPeriod: 'júl 2025 — súčasnosť',
    confidentiality: 'Zovšeobecnený názov projektu; údaje klienta sú dôverné podľa NDA.',
  },
  uk: {
    roles: ['Незалежний frontend-розробник', 'Викладач HTML і CSS', 'Frontend-розробник', 'Frontend-розробник', 'Фриланс-консультант'],
    independent: 'Незалежна робота',
    periods: ['кві 2023 — дотепер', 'бер 2018 — гру 2023', 'січ 2022 — бер 2023', 'січ 2021 — гру 2021', 'бер 2013 — січ 2021'],
    projectNames: ['Платформа фінансових операцій', 'Платформа рекламних операцій', 'Платформа освітнього оцінювання', 'Сайт і магазин Poland Group', 'PolandShopPrice', 'Poland Group Materials', 'Mentor AI', 'My Shift'],
    ongoingProjectPeriod: 'чер 2026 — дотепер',
    materialsProjectPeriod: 'лип 2025 — дотепер',
    confidentiality: 'Узагальнена назва проєкту; дані клієнта конфіденційні згідно з NDA.',
  },
  ru: {
    roles: ['Независимый frontend-разработчик', 'Преподаватель HTML и CSS', 'Frontend-разработчик', 'Frontend-разработчик', 'Фриланс-консультант'],
    independent: 'Независимая работа',
    periods: ['апр 2023 — настоящее время', 'мар 2018 — дек 2023', 'янв 2022 — мар 2023', 'янв 2021 — дек 2021', 'мар 2013 — янв 2021'],
    projectNames: ['Платформа финансовых операций', 'Платформа рекламных операций', 'Платформа образовательной оценки', 'Сайт и магазин Poland Group', 'PolandShopPrice', 'Poland Group Materials', 'Mentor AI', 'My Shift'],
    ongoingProjectPeriod: 'июн 2026 — настоящее время',
    materialsProjectPeriod: 'июл 2025 — настоящее время',
    confidentiality: 'Обобщённое название проекта; данные клиента конфиденциальны согласно NDA.',
  },
}

export function getProfile(locale: LocaleCode) {
  if (locale === 'en') return englishProfile
  const core = localizedCore[locale]
  const details = localizedDetails[locale]
  const labels = localizedLabels[locale]
  return {
    ...englishProfile,
    ...core,
    workPreferencesByMarket: {
      ...englishProfile.workPreferencesByMarket,
      international: core.availability,
    },
    strengths: core.strengths.map(([value, label]) => ({ value, label })),
    experience: englishProfile.experience.map((item, index) => ({
      ...item,
      company: item.company === 'Independent' ? labels.independent : item.company,
      period: labels.periods[index] ?? item.period,
      role: labels.roles[index] ?? item.role,
      summary: details.experience[index] ?? item.summary,
    })),
    projects: englishProfile.projects.map((item, index) => ({
      ...item,
      name: labels.projectNames[index] ?? item.name,
      period: item.id === 'poland-group-materials'
        ? labels.materialsProjectPeriod
        : ['mentor-ai', 'my-shift'].includes(item.id)
          ? labels.ongoingProjectPeriod
          : item.period,
      confidentialityNote: item.confidentialityNote ? labels.confidentiality : undefined,
      summary: details.projects[index] ?? item.summary,
    })),
    skillGroups: englishProfile.skillGroups.map((group, index) => ({
      ...group,
      title: details.skillTitles[index] ?? group.title,
    })),
    teaching: {
      ...englishProfile.teaching,
      summary: details.teaching,
    },
  }
}
