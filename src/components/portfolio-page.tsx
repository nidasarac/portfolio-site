"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import Reveal from "@/components/reveal";

type Lang = "en" | "tr";

const novaCandleScreenshots = [
  {
    src: "/images/nova-candle/focus-session-hero.png",
    alt: "NovaCandle focus session hero screen",
    label: "Focus Session",
  },
  {
    src: "/images/nova-candle/home.png",
    alt: "NovaCandle home screen",
    label: "Home",
  },
  {
    src: "/images/nova-candle/onboarding.png",
    alt: "NovaCandle onboarding screen",
    label: "Onboarding",
  },
  {
    src: "/images/nova-candle/sky.png",
    alt: "NovaCandle sky screen",
    label: "Sky",
  },
  {
    src: "/images/nova-candle/star-map.png",
    alt: "NovaCandle star map screen",
    label: "Star Map",
  },
  {
    src: "/images/nova-candle/analytics-overview.png",
    alt: "NovaCandle analytics overview screen",
    label: "Analytics",
  },
  {
    src: "/images/nova-candle/analytics-levels.png",
    alt: "NovaCandle levels screen",
    label: "Levels",
  },
  {
    src: "/images/nova-candle/settings.png",
    alt: "NovaCandle settings screen",
    label: "Settings",
  },
  {
    src: "/images/nova-candle/settings-modal.png",
    alt: "NovaCandle settings modal screen",
    label: "Reminder Goal",
  },
] as const;

const novaCandleShowcasePreview = novaCandleScreenshots;

const electroopV2Screenshots = [
  {
    src: "/images/electroop-v2/map.png",
    alt: "Electroop V2 map screen",
    label: "Map",
  },
  {
    src: "/images/electroop-v2/search.png",
    alt: "Electroop V2 station search screen",
    label: "Search",
  },
  {
    src: "/images/electroop-v2/station-details.png",
    alt: "Electroop V2 station details screen",
    label: "Station",
  },
  {
    src: "/images/electroop-v2/start-charge.png",
    alt: "Electroop V2 start charge screen",
    label: "Charge",
  },
  {
    src: "/images/electroop-v2/transaction.png",
    alt: "Electroop V2 transaction details screen",
    label: "History",
  },
  {
    src: "/images/electroop-v2/analytics.png",
    alt: "Electroop V2 analytics screen",
    label: "Analytics",
  },
  {
    src: "/images/electroop-v2/login.png",
    alt: "Electroop V2 login screen",
    label: "Login",
  },
] as const;

const electroopV1Screenshots = [
  {
    src: "/images/electroop-v1/map-overview.png",
    alt: "Electroop V1 map overview screen",
    label: "Map",
  },
  {
    src: "/images/electroop-v1/station-list.png",
    alt: "Electroop V1 station list screen",
    label: "Stations",
  },
  {
    src: "/images/electroop-v1/station-detail.png",
    alt: "Electroop V1 station detail screen",
    label: "Detail",
  },
  {
    src: "/images/electroop-v1/filter.png",
    alt: "Electroop V1 filter screen",
    label: "Filter",
  },
  {
    src: "/images/electroop-v1/settings.png",
    alt: "Electroop V1 settings screen",
    label: "Settings",
  },
] as const;

const content = {
  en: {
    navRole: "Mobile Developer",
    toggle: { en: "EN", tr: "TR" },
    topBadge: "React Native • Expo • Mobile development",
    heroEyebrow: "Mobile Developer Portfolio",
    heroTitleStart: "Building and maintaining",
    heroTitleAccent: "cross-platform",
    heroTitleEnd: "mobile applications.",
    heroText:
      "Mobile Developer with experience building and maintaining cross-platform mobile applications using React Native and Expo. I work on mobile features, user experience, and day-to-day product development.",
    heroPrimary: "View my work",
    heroSecondary: "See stack",
    heroScrollHint: "scroll to explore",
    heroCards: [
      "Experienced in developing applications published on the App Store and Google Play Store.",
      "Comfortable with REST API integrations, localization systems, and persistent storage solutions.",
      "Focused on performance, UI/UX quality, and application structure.",
    ],
    photoCardTitle: "Profile",
    photoCardSubtitle: "Nida Sarac",
    photoCardText:
      "Mobile developer focused on building thoughtful cross-platform products with strong interaction quality, clean structure, and reliable day-to-day user experience.",
    photoStats: [
      { label: "Address", value: "Istanbul / 4. Levent" },
      { label: "Current role", value: "Mobile Developer" },
      { label: "Main focus", value: "Cross-platform apps" },
      { label: "Focus area", value: "Design and speed" },
    ],
    aboutTitle: "About",
    aboutText:
      "I have experience building and maintaining cross-platform mobile applications using React Native and Expo. My work includes mobile features such as push notifications, localization, persistent storage, and native integrations. I pay attention to UI/UX, performance, and overall application structure.",
    aboutHeading: "Mobile development focused on user experience, performance, and clean implementation.",
    experienceTitle: "Experience",
    experienceHeading: "Professional timeline",
    experienceItems: [
      {
        company: "Electroop Teknoloji Enerji Sanayi ve Tic Ltd Sti",
        role: "Mobile Developer",
        period: "Sep 2023 - Present",
        points: [
          "Developing and maintaining cross-platform mobile applications using React Native and Expo.",
          "Building scalable and production-ready applications published on the App Store and Google Play Store.",
          "Implementing REST API integrations, localization systems, persistent storage solutions, and responsive mobile UI flows.",
          "Working with Redux, Zustand, and modern state management solutions.",
          "Collaborating closely with UI/UX designers and backend teams to improve application performance and user experience.",
          "Contributing to release management, debugging, testing, and performance optimization processes.",
        ],
      },
      {
        company: "Electroop Teknoloji Enerji Sanayi ve Tic Ltd Sti",
        role: "Software Intern",
        period: "Jul 2023 - Sep 2023",
        points: [
          "Focused on strengthening my mobile development foundations.",
          "Spent this period learning key technologies and practicing with React Native in real project contexts.",
          "Built the base that later shaped my professional mobile development path.",
        ],
      },
      {
        company: "Funverse Games",
        role: "Game Developer Intern",
        period: "Apr 2022 - Sep 2022",
        points: [
          "Worked on game mechanics, characters, and level design with Unreal Engine.",
          "This experience helped shape my visual taste and interaction mindset.",
        ],
      },
    ],
    showcaseTitle: "Portfolio Showcase",
    showcaseText:
      "Electroop V2 and NovaCandle now include real app screens from production and personal work.",
    appSections: [
      {
        id: "electroop-1",
        title: "Electroop V1",
        subtitle: "Station list, map, filtering, and settings screens from the first release of the EV charging app.",
        tag: "Real app screens",
      },
      {
        id: "electroop-2",
        title: "Electroop V2",
        subtitle: "Map, search, charging, analytics, and station flow screens from the EV charging app.",
        tag: "Real app screens",
      },
      {
        id: "nova-candle",
        title: "NovaCandle",
        subtitle: "Selected screens from a focus and productivity app built with React Native and Expo.",
        tag: "Real app screens",
      },
    ],
    appMeta: ["App Store ready", "Android ready", "Motion friendly"],
    showcaseHeading: "App mockup placeholders",
    showcaseSwipeHint: "Scroll inside the phone to explore the flow.",
    projectTitle: "NovaCandle - Focus Timer",
    projectText:
      "NovaCandle is a personal project focused on cross-platform mobile development, responsive user experience, and mobile capabilities.",
    projectFootnote:
      "A calm focus timer with playful progress, short sessions, and lightweight habit tracking.",
    projectBullets: [
      "Built with React Native, Expo, and Expo Router.",
      "Includes multilingual support, persistent local storage, and progress tracking.",
      "Integrates local notifications, haptics, audio feedback, Live Activities, and widget support.",
      "Built with attention to performance, responsiveness, and mobile interaction.",
    ],
    projectGalleryTitle: "Selected NovaCandle screens",
    stackTitle: "Stack",
    stackSubtitle: "Technologies I use the most",
    stackGroups: [
      {
        title: "Mobile Development",
        items: ["React Native", "Expo", "Expo Router"],
      },
      {
        title: "Frontend",
        items: ["JavaScript", "TypeScript", "React.js", "Tailwind CSS"],
      },
      {
        title: "State Management",
        items: ["Redux", "Zustand"],
      },
      {
        title: "Mobile Features",
        items: [
          "Push Notifications",
          "Localization",
          "Persistent Storage",
          "Live Activities",
          "Widgets",
          "OTA Updates",
        ],
      },
      {
        title: "Tools & Platforms",
        items: ["Git", "GitHub", "App Store Connect", "Google Play Console"],
      },
    ],
    educationTitle: "Education",
    educationItems: [
      {
        title: "Bachelor of Computer Engineering",
        subtitle: "Trakya University | Aug 2019 - Jun 2023",
      },
      {
        title: "Nisantasi Anatolian High School",
        subtitle: "Sep 2015 - Jun 2019",
      },
    ],
    certificatesTitle: "Certificates",
    certificates: [
      "Google Game and Application Academy | Dec 2021 - Jun 2022",
      "FLO Technology iOS Bootcamp with Swift | May 2023 - Jul 2023",
    ],
    linksTitle: "Links",
    linksText:
      "This space is simply a collection of my profiles and places where my work lives.",
    linksHeading: "Profiles and platforms",
    links: [
      { label: "Email", value: "nidasaracc@gmail.com", href: "mailto:nidasaracc@gmail.com" },
      { label: "GitHub", value: "github.com/nidasarac", href: "https://github.com/nidasarac" },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/nidasarac",
        href: "https://linkedin.com/in/nidasarac/",
      },
    ],
  },
  tr: {
    navRole: "Mobil Geliştirici",
    toggle: { en: "EN", tr: "TR" },
    topBadge: "React Native • Expo • Mobil geliştirme",
    heroEyebrow: "Mobil Geliştirici Portfolyosu",
    heroTitleStart: "Geliştiriyor ve sürdürüyorum:",
    heroTitleAccent: "cross-platform",
    heroTitleEnd: "mobil uygulamalar.",
    heroText:
      "React Native ve Expo kullanarak cross-platform mobil uygulamalar geliştiren bir Mobile Developer'ım. Mobil özellikler, kullanıcı deneyimi ve günlük ürün geliştirme süreçleri üzerinde çalışıyorum.",
    heroPrimary: "İşlerimi keşfet",
    heroSecondary: "Stack'e bak",
    heroScrollHint: "incelemek için kaydır",
    heroCards: [
      "App Store ve Google Play Store'da yayınlanmış uygulamalar üzerinde deneyim sahibiyim.",
      "REST API entegrasyonları, localization sistemleri ve persistent storage çözümleri geliştiriyorum.",
      "Performans, UI/UX kalitesi ve uygulama yapısı benim için öncelikli alanlar.",
    ],
    photoCardTitle: "Profil",
    photoCardSubtitle: "Nida Sarac",
    photoCardText:
      "Etkileşim kalitesi yüksek, temiz yapılı ve günlük kullanımda güven veren cross-platform ürünler geliştirmeye odaklanan mobil geliştirici.",
    photoStats: [
      { label: "Adres", value: "İstanbul / 4. Levent" },
      { label: "Rol", value: "Mobil Geliştirici" },
      { label: "Odak", value: "Cross-platform uygulamalar" },
      { label: "Odak alanı", value: "Tasarım ve hız" },
    ],
    aboutTitle: "Hakkımda",
    aboutText:
      "React Native ve Expo ile cross-platform mobil uygulamalar geliştirme ve sürdürme konusunda deneyime sahibim. Çalışmalarım; push notifications, localization, persistent storage ve native entegrasyonlar gibi mobil özellikleri kapsıyor. UI/UX, performans ve uygulama yapısına dikkat ediyorum.",
    aboutHeading: "Kullanıcı deneyimi, performans ve temiz uygulamaya odaklanan mobil geliştirme yaklaşımı.",
    experienceTitle: "Deneyim",
    experienceHeading: "Profesyonel zaman çizelgesi",
    experienceItems: [
      {
        company: "Electroop Teknoloji Enerji Sanayi ve Tic Ltd Sti",
        role: "Mobil Geliştirici",
        period: "Eyl 2023 - Günümüz",
        points: [
          "React Native ve Expo kullanarak cross-platform mobil uygulamalar geliştiriyor ve sürdürüyorum.",
          "App Store ve Google Play Store'da yayınlanan ölçeklenebilir ve production-ready uygulamalar geliştiriyorum.",
          "REST API entegrasyonları, localization sistemleri, persistent storage çözümleri ve responsive mobil UI akışları uyguluyorum.",
          "Redux, Zustand ve modern state management çözümleri ile çalışıyorum.",
          "Uygulama performansını ve kullanıcı deneyimini iyileştirmek için UI/UX tasarımcıları ve backend ekipleriyle yakın çalışıyorum.",
          "Release management, debugging, testing ve performance optimization süreçlerine katkı sağlıyorum.",
        ],
      },
      {
        company: "Electroop Teknoloji Enerji Sanayi ve Tic Ltd Sti",
        role: "Yazılım Stajyeri",
        period: "Tem 2023 - Eyl 2023",
        points: [
          "Mobil geliştirme temellerimi güçlendirmeye odaklandım.",
          "React Native ile gerçek proje bağlamlarında pratik yaparak temel teknolojileri öğrendim.",
          "Bu dönem profesyonel mobil geliştirme yolculuğumun temelini oluşturdu.",
        ],
      },
      {
        company: "Funverse Games",
        role: "Oyun Geliştirme Stajyeri",
        period: "Nis 2022 - Eyl 2022",
        points: [
          "Unreal Engine ile oyun mekanikleri, karakterler ve level design üzerine çalıştım.",
          "Bu deneyim görsel zevkimi ve etkileşim bakış açımı güçlendirdi.",
        ],
      },
    ],
    showcaseTitle: "Portfolyo Vitrini",
    showcaseText:
      "Electroop V2 ve NovaCandle alanlarında artık gerçek uygulama ekranları yer alıyor.",
    appSections: [
      {
        id: "electroop-1",
        title: "Electroop V1",
        subtitle: "EV şarj uygulamasının ilk sürümündeki liste, harita, filtre ve ayarlar ekranları.",
        tag: "Gerçek uygulama ekranları",
      },
      {
        id: "electroop-2",
        title: "Electroop V2",
        subtitle: "EV şarj uygulamasındaki harita, arama, istasyon, şarj ve analiz akışlarından gerçek ekranlar.",
        tag: "Gerçek uygulama ekranları",
      },
      {
        id: "nova-candle",
        title: "NovaCandle",
        subtitle: "React Native ve Expo ile geliştirdiğim odak ve üretkenlik uygulamasından seçili ekranlar.",
        tag: "Gerçek uygulama ekranları",
      },
    ],
    appMeta: ["App Store hazır", "Android hazır", "Motion dostu"],
    showcaseHeading: "Uygulama mockup alanları",
    showcaseSwipeHint: "Akışı görmek için telefonun içinde kaydır.",
    projectTitle: "NovaCandle - Focus Timer",
    projectText:
      "NovaCandle, cross-platform mobil geliştirme, responsive kullanıcı deneyimi ve mobil yeteneklere odaklanan kişisel bir projedir.",
    projectFootnote:
      "Kısa seansları, hafif alışkanlık takibini ve oyun hissini birleştiren sakin bir odak zamanlayıcısı.",
    projectBullets: [
      "React Native, Expo ve Expo Router ile geliştirildi.",
      "Çoklu dil desteği, persistent local storage ve progress tracking içeriyor.",
      "Local notifications, haptics, audio feedback, Live Activities ve widget desteği içeriyor.",
      "Performans, responsiveness ve özenli mobil etkileşim odağıyla geliştirildi.",
    ],
    projectGalleryTitle: "Seçili NovaCandle ekranları",
    stackTitle: "Stack",
    stackSubtitle: "En sık kullandığım teknolojiler",
    stackGroups: [
      {
        title: "Mobil Geliştirme",
        items: ["React Native", "Expo", "Expo Router"],
      },
      {
        title: "Frontend",
        items: ["JavaScript", "TypeScript", "React.js", "Tailwind CSS"],
      },
      {
        title: "State Management",
        items: ["Redux", "Zustand"],
      },
      {
        title: "Mobil Özellikler",
        items: [
          "Push Notifications",
          "Localization",
          "Persistent Storage",
          "Live Activities",
          "Widgets",
          "OTA Updates",
        ],
      },
      {
        title: "Araçlar & Platformlar",
        items: ["Git", "GitHub", "App Store Connect", "Google Play Console"],
      },
    ],
    educationTitle: "Eğitim",
    educationItems: [
      {
        title: "Bilgisayar Mühendisliği Lisans",
        subtitle: "Trakya Üniversitesi | Ağu 2019 - Haz 2023",
      },
      {
        title: "Nişantaşı Anadolu Lisesi",
        subtitle: "Eyl 2015 - Haz 2019",
      },
    ],
    certificatesTitle: "Sertifikalar",
    certificates: [
      "Google Game and Application Academy | Ara 2021 - Haz 2022",
      "FLO Technology iOS Bootcamp with Swift | May 2023 - Tem 2023",
    ],
    linksTitle: "Bağlantılar",
    linksText:
      "Bu alan sadece profillerimin ve işlerimin bulunduğu yerlerin kısa bir koleksiyonu.",
    linksHeading: "Profiller ve platformlar",
    links: [
      { label: "Email", value: "nidasaracc@gmail.com", href: "mailto:nidasaracc@gmail.com" },
      { label: "GitHub", value: "github.com/nidasarac", href: "https://github.com/nidasarac" },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/nidasarac",
        href: "https://linkedin.com/in/nidasarac/",
      },
    ],
  },
} as const;

function PhoneMockup({
  title,
  subtitle,
  tag,
  swipeHint,
  previewScreens,
}: {
  title: string;
  subtitle: string;
  tag: string;
  swipeHint?: string;
  previewScreens?: readonly {
    src: string;
    alt: string;
    label: string;
  }[];
}) {
  const isFeatured = Boolean(previewScreens);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeScreen, setActiveScreen] = useState(0);

  const handleCarouselScroll = () => {
    if (!carouselRef.current || !previewScreens?.length) {
      return;
    }

    const { scrollLeft, clientWidth } = carouselRef.current;
    const nextIndex = Math.round(scrollLeft / clientWidth);
    const safeIndex = Math.max(0, Math.min(nextIndex, previewScreens.length - 1));
    setActiveScreen(safeIndex);
  };

  const scrollToScreen = (index: number) => {
    if (!carouselRef.current) {
      return;
    }

    carouselRef.current.scrollTo({
      left: carouselRef.current.clientWidth * index,
      behavior: "smooth",
    });
    setActiveScreen(index);
  };

  return (
    <article
      className={`relative rounded-[2rem] border border-white/12 bg-white/[0.05] backdrop-blur ${
        isFeatured
          ? "h-full overflow-hidden p-0"
          : "h-full p-4"
      }`}
    >
      <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(145deg,rgba(217,70,239,0.08),rgba(139,92,246,0.02),rgba(59,130,246,0.04))]" />
      {isFeatured && previewScreens ? (
        <div className="relative flex h-full flex-col gap-6 p-5 sm:p-6">
          <div className="relative z-10 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-200/65">{tag}</p>
              <h3 className="mt-3 text-3xl font-semibold text-white sm:text-[2.15rem]">
                {title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">{subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {previewScreens.map((screen) => (
                <span
                  key={screen.src}
                  className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-slate-200/85"
                >
                  {screen.label}
                </span>
              ))}
            </div>

            {swipeHint ? (
              <p className="text-xs uppercase tracking-[0.28em] text-fuchsia-100/70">
                {swipeHint}
              </p>
            ) : null}
          </div>

          <div className="relative mt-auto flex justify-center">
            <div className="absolute top-8 h-56 w-56 rounded-full bg-fuchsia-500/18 blur-3xl" />
            <div className="relative h-[500px] w-[252px] rounded-[3.2rem] border border-white/12 bg-[#080312] p-3 shadow-[0_30px_80px_rgba(168,85,247,0.26)] sm:h-[540px] sm:w-[270px]">
              <div className="absolute left-1/2 top-3 h-7 w-32 -translate-x-1/2 rounded-full bg-black/75" />
              <div className="absolute left-4 top-14 z-20 rounded-full bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-fuchsia-100/70 backdrop-blur">
                Swipe
              </div>
              <div className="h-full overflow-hidden rounded-[2.7rem] border border-white/8 bg-[linear-gradient(180deg,#140722_0%,#0d0618_52%,#080312_100%)]">
                <div
                  ref={carouselRef}
                  onScroll={handleCarouselScroll}
                  className="hide-scrollbar touch-pan-x flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
                >
                  {previewScreens.map((screen) => (
                    <div
                      key={screen.src}
                      className="relative flex min-w-full snap-center items-start justify-center overflow-hidden bg-[#0b0614]"
                    >
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        width={943}
                        height={2048}
                        className="h-full w-auto max-w-none select-none object-contain object-top"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur">
                {previewScreens.map((screen, index) => (
                  <button
                    type="button"
                    key={screen.src}
                    aria-label={`Show ${screen.label} screen`}
                    aria-pressed={activeScreen === index}
                    onClick={() => scrollToScreen(index)}
                    className={`rounded-full transition-all ${
                      activeScreen === index
                        ? "h-1.5 w-5 bg-white"
                        : "h-1.5 w-1.5 bg-white/45 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="relative p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-200/65">{tag}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{subtitle}</p>
          </div>

          <div className="relative mt-2 flex justify-center px-4 pb-4">
            <div className="relative h-[480px] w-[230px] rounded-[3rem] border border-white/12 bg-[#080312] p-3 shadow-[0_24px_70px_rgba(168,85,247,0.28)] sm:h-[530px] sm:w-[250px]">
              <div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full bg-black/70" />
              <div className="h-full overflow-hidden rounded-[2.4rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.16),transparent_28%),linear-gradient(180deg,#1a0930_0%,#0d0618_48%,#080312_100%)] p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-100/70">
                      Coming Soon
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">Screenshot Slot</p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-fuchsia-300/18" />
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-[1.4rem] border border-fuchsia-300/12 bg-white/[0.06] p-4">
                    <div className="h-24 rounded-[1rem] bg-[linear-gradient(135deg,rgba(217,70,239,0.28),rgba(124,58,237,0.18))]" />
                    <div className="mt-4 flex gap-2">
                      <div className="h-2 flex-1 rounded-full bg-fuchsia-100/30" />
                      <div className="h-2 w-12 rounded-full bg-fuchsia-100/15" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-28 rounded-[1.2rem] bg-violet-300/12" />
                    <div className="h-28 rounded-[1.2rem] bg-fuchsia-300/12" />
                  </div>
                  <div className="rounded-[1.4rem] border border-white/8 bg-black/20 p-4">
                    <div className="mb-3 h-2 w-24 rounded-full bg-white/20" />
                    <div className="space-y-2">
                      <div className="h-2 rounded-full bg-white/10" />
                      <div className="h-2 rounded-full bg-white/10" />
                      <div className="h-2 w-2/3 rounded-full bg-white/10" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-[1rem] bg-fuchsia-400/14" />
                    <div className="h-16 rounded-[1rem] bg-violet-400/14" />
                    <div className="h-16 rounded-[1rem] bg-sky-400/14" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </article>
  );
}

function ScreenshotCard({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <article className="relative min-w-[68vw] max-w-[240px] shrink-0 snap-start rounded-[1.7rem] border border-white/10 bg-black/20 p-3 sm:min-w-[240px]">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.32em] text-fuchsia-100/65">
          {label}
        </p>
        <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-fuchsia-100">
          NovaCandle
        </span>
      </div>
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#12071f]">
        <Image
          src={src}
          alt={alt}
          width={943}
          height={2048}
          className="h-auto w-full"
        />
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = useMemo(() => content[lang], [lang]);

  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(216,180,254,0.22),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(244,114,182,0.2),_transparent_28%),radial-gradient(circle_at_18%_82%,_rgba(59,130,246,0.14),_transparent_30%),linear-gradient(180deg,_#13061f_0%,_#090312_45%,_#040109_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />
      <div className="pointer-events-none absolute left-[8%] top-24 -z-10 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl animate-[floatOrb_14s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute right-[8%] top-[30rem] -z-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl animate-[floatOrb_17s_ease-in-out_infinite_reverse]" />
      <div className="pointer-events-none absolute bottom-24 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl animate-[floatOrb_18s_ease-in-out_infinite]" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-200/70">
              Nida Sarac
            </p>
            <p className="text-sm font-medium text-white">{t.navRole}</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full border border-white/10 bg-black/20 p-1">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  lang === "en"
                    ? "bg-fuchsia-300 text-slate-950"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {t.toggle.en}
              </button>
              <button
                type="button"
                onClick={() => setLang("tr")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  lang === "tr"
                    ? "bg-fuchsia-300 text-slate-950"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {t.toggle.tr}
              </button>
            </div>
          </div>
        </header>

        <div className="grid flex-1 gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-16">
          <section className="space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-sm text-violet-100">
                <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.95)]" />
                {t.topBadge}
              </div>
            </Reveal>

            <Reveal delay={70}>
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.45em] text-fuchsia-200/60">
                  {t.heroEyebrow}
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
                  {t.heroTitleStart}
                  <span className="block bg-gradient-to-r from-fuchsia-300 via-white to-violet-300 bg-clip-text text-transparent">
                    {t.heroTitleAccent}
                  </span>
                  {t.heroTitleEnd}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  {t.heroText}
                </p>
              </div>
            </Reveal>

            <Reveal delay={130}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#showcase"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(216,180,254,0.18)] transition hover:scale-[1.02]"
                >
                  {t.heroPrimary}
                </a>
                <a
                  href="#stack"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-fuchsia-300/40 hover:bg-fuchsia-300/10"
                >
                  {t.heroSecondary}
                </a>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex items-center gap-3 text-sm text-violet-100/80">
                <span className="h-px flex-1 bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-400/70 to-fuchsia-400/0" />
                {t.heroScrollHint}
                <span className="h-px flex-1 bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-400/70 to-fuchsia-400/0" />
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {t.heroCards.map((item, index) => (
                <Reveal key={item} delay={240 + index * 90}>
                  <article className="tilt-card rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/30 hover:bg-white/[0.08]">
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <Reveal className="relative" delay={170}>
            <div className="absolute inset-8 rounded-full bg-fuchsia-300/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_20px_80px_rgba(168,85,247,0.22)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    {t.photoCardTitle}
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">
                    {t.photoCardSubtitle}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(217,70,239,0.24),rgba(91,33,182,0.16),rgba(9,3,18,0.7))] p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_30%)]" />
                  <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center">
                    <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/12 bg-black/20 shadow-[0_0_60px_rgba(217,70,239,0.2)]">
                      <div className="relative h-40 w-40 overflow-hidden rounded-full ring-1 ring-white/10">
                        <Image
                          src="/images/profile/nida-portrait.png"
                          alt="Portrait of Nida Sarac"
                          fill
                          sizes="160px"
                          className="object-cover object-[center_18%]"
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-3 py-1 text-xs text-fuchsia-100">
                        React Native
                      </span>
                      <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs text-violet-100">
                        Expo
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="rounded-[1.25rem] border border-fuchsia-300/20 bg-[linear-gradient(135deg,rgba(168,85,247,0.22),rgba(244,114,182,0.14))] p-4">
                    <p className="text-sm text-fuchsia-100/70">{t.photoCardTitle}</p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      {t.photoCardSubtitle}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-100/85">
                      {t.photoCardText}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {t.photoStats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.25rem] border border-white/10 bg-black/30 p-4"
                      >
                        <p className="text-sm text-slate-400">{item.label}</p>
                        <p className="mt-2 break-words text-base leading-6 font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            {t.aboutTitle}
          </p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {t.aboutHeading}
            </h2>
            <p className="text-base leading-8 text-slate-300">{t.aboutText}</p>
          </div>
        </Reveal>

        <Reveal id="experience" className="pt-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              {t.experienceTitle}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {t.experienceHeading}
            </h2>
          </div>

          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3">
            {t.experienceItems.map((item, index) => (
              <Reveal key={`${item.company}-${item.role}`} delay={index * 90}>
                <article className="tilt-card min-w-[82vw] max-w-[360px] shrink-0 snap-start rounded-[1.8rem] border border-white/10 bg-black/20 p-6 sm:min-w-[320px]">
                  <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-200/60">
                    {item.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.company}</h3>
                  <p className="mt-2 text-sm text-violet-100/80">{item.period}</p>
                  <div className="mt-6 grid gap-3">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-slate-300"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal id="showcase" className="py-16">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                {t.showcaseTitle}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {t.showcaseHeading}
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">{t.showcaseText}</p>
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            {t.appMeta.map((item) => (
              <span
                key={item}
                className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-2 text-sm text-fuchsia-100"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {t.appSections.map((item) => (
              <Reveal key={item.title}>
                <PhoneMockup
                  title={item.title}
                  subtitle={item.subtitle}
                  tag={item.tag}
                  swipeHint={
                    item.id === "nova-candle" ||
                    item.id === "electroop-2" ||
                    item.id === "electroop-1"
                      ? t.showcaseSwipeHint
                      : undefined
                  }
                  previewScreens={
                    item.id === "nova-candle"
                      ? novaCandleShowcasePreview
                      : item.id === "electroop-1"
                        ? electroopV1Screenshots
                      : item.id === "electroop-2"
                        ? electroopV2Screenshots
                        : undefined
                  }
                />
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(168,85,247,0.18),rgba(244,114,182,0.12))] p-6">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <div className="min-w-0 space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-100/70">
                Personal Project
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                {t.projectTitle}
              </h2>
              <p className="text-lg leading-8 text-slate-200">{t.projectText}</p>
              <div className="grid gap-3 pb-2">
                {t.projectBullets.map((point, index) => (
                  <div
                    key={point}
                    className="tilt-card rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-7 text-slate-300"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    {point}
                  </div>
                ))}
              </div>
              <p className="text-sm leading-6 text-fuchsia-100/78">{t.projectFootnote}</p>
            </div>

            <div className="min-w-0 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                {t.projectGalleryTitle}
              </p>
              <div className="hide-scrollbar mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
                {novaCandleScreenshots.map((item) => (
                  <ScreenshotCard
                    key={item.src}
                    src={item.src}
                    alt={item.alt}
                    label={item.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal id="stack" className="py-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              {t.stackTitle}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {t.stackSubtitle}
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {t.stackGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 80}>
                <article className="tilt-card rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-2 text-sm text-fuchsia-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <section className="grid gap-6 py-4 lg:grid-cols-2">
          <Reveal>
            <article className="tilt-card rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                {t.educationTitle}
              </p>
              <div className="mt-6 space-y-4">
                {t.educationItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="tilt-card rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                {t.certificatesTitle}
              </p>
              <div className="mt-6 grid gap-4">
                {t.certificates.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </section>

        <Reveal className="pt-12">
          <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(168,85,247,0.18),rgba(59,130,246,0.12),rgba(244,114,182,0.14))] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-100/70">
              {t.linksTitle}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              {t.linksHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200/90">
              {t.linksText}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {t.links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-4 transition hover:border-fuchsia-300/30 hover:bg-white/[0.06]"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-slate-100">{item.value}</p>
                </a>
              ))}
            </div>
          </section>
        </Reveal>
      </section>
    </main>
  );
}
