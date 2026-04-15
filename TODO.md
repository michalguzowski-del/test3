# TODO — Lista zadań dla agenta

Lista zadań wynikających z `README.md` (architektura i zakres projektu) oraz `CLAUDE.md` (standardy techniczne).
Zadania pogrupowane zgodnie z fazami wdrożenia. Każde zadanie oznaczone statusem i priorytetem.

**Legenda statusów:** `[ ]` do zrobienia · `[~]` w toku · `[x]` ukończone  
**Priorytety:** `[P1]` krytyczny · `[P2]` wysoki · `[P3]` normalny · `[P4]` niski

---

## Faza 1 — Analiza wymagań

- [ ] `[P1]` Zebrać i potwierdzić ostateczną listę podstron i ich URL-e (PL + EN)
- [ ] `[P1]` Ustalić wybór Headless CMS: Strapi / Contentful / Sanity
- [ ] `[P1]` Określić środowiska: dev / staging / production
- [ ] `[P2]` Zdefiniować pełny model danych CMS: `Page`, `Section`, `Article`, `Document`, `Partner`, `Metric`
- [ ] `[P2]` Ustalić wymagania SEO (meta tagi, Open Graph, sitemap, robots.txt)
- [ ] `[P2]` Zdefiniować wymagania WCAG / dostępności
- [ ] `[P3]` Zebrać wymagania analityczne (GA4, GTM, cookie consent)
- [ ] `[P3]` Ustalić wymagania formularza kontaktowego (backend, walidacja, powiadomienia e-mail)

---

## Faza 2 — Projekt w Figma

- [ ] `[P1]` Zdefiniować design tokeny: paleta kolorów, typografia, spacing, border-radius
- [ ] `[P1]` Zaprojektować komponenty atomowe: Button, Badge, Card, Input, Link
- [ ] `[P1]` Zaprojektować layout globalny: Header, Footer, Navigation (desktop + mobile)
- [ ] `[P2]` Zaprojektować sekcje strony głównej:
  - [ ] HeroSection (headline, metryki, CTA)
  - [ ] SocialProof (logotypy)
  - [ ] ValueProposition
  - [ ] KeyMetrics
  - [ ] GlobalDataReach (mapa / wizualizacja)
  - [ ] DataProcessingFlow (diagram)
  - [ ] UseCases
  - [ ] ComplianceSection (RODO)
  - [ ] PartnersSection
  - [ ] NewsletterCTA
- [ ] `[P2]` Zaprojektować widoki podstron: About, Data, Investors, Media, Career, Contact, Legal
- [ ] `[P3]` Przygotować wersje mobilną i tabletową (responsive breakpoints)
- [ ] `[P3]` Zaprojektować stany interaktywne: hover, focus, disabled, loading, error

---

## Faza 3 — Konfiguracja CMS

- [ ] `[P1]` Zainstalować i skonfigurować wybrany CMS (Strapi / Contentful / Sanity)
- [ ] `[P1]` Zdefiniować kolekcje / content types zgodnie z modelem danych:
  - [ ] `Page`
  - [ ] `Section`
  - [ ] `Article`
  - [ ] `Document`
  - [ ] `Partner`
  - [ ] `Metric`
- [ ] `[P1]` Skonfigurować obsługę dwóch języków (PL / EN) w CMS
- [ ] `[P2]` Skonfigurować role i uprawnienia użytkowników CMS
- [ ] `[P2]` Wgrać przykładowe treści do wszystkich kolekcji (seed data)
- [ ] `[P2]` Skonfigurować webhooks do przebudowy frontendu (ISR / revalidate)
- [ ] `[P3]` Skonfigurować CDN dla zasobów statycznych (obrazy, dokumenty)
- [ ] `[P3]` Przetestować API CMS — zapytania dla każdej kolekcji

---

## Faza 4 — Rozwój frontendu

### Inicjalizacja projektu

- [ ] `[P1]` Zainicjować projekt: `npx create-next-app@latest` z TypeScript i App Router
- [ ] `[P1]` Skonfigurować Tailwind CSS z design tokenami (`tailwind.config.ts`)
- [ ] `[P1]` Skonfigurować i18n: zainstalować `next-intl` lub `next-i18next`, dodać pliki `pl.json` i `en.json`
- [ ] `[P1]` Skonfigurować `tsconfig.json` z `strict: true` i aliasami ścieżek (`@/`)
- [ ] `[P2]` Skonfigurować ESLint + Prettier zgodnie ze standardami z `CLAUDE.md`
- [ ] `[P2]` Stworzyć strukturę folderów zgodną z `CLAUDE.md`:
  ```
  src/app · src/components/ui · src/components/sections
  src/components/layout · src/hooks · src/lib · src/types · src/messages · src/styles
  ```

### Komponenty UI (atomowe)

- [ ] `[P1]` `Button` — warianty: primary, secondary, ghost; rozmiary: sm, md, lg
- [ ] `[P1]` `Typography` — nagłówki H1–H4, body, caption
- [ ] `[P2]` `Badge` — kategorie, tagi
- [ ] `[P2]` `Card` — artykuł, dokument, partner
- [ ] `[P2]` `Input` / `Textarea` — z walidacją i komunikatami błędów
- [ ] `[P2]` `LanguageSwitcher` — przełącznik PL / EN
- [ ] `[P3]` `Spinner` / `Skeleton` — stany ładowania

### Komponenty layout

- [ ] `[P1]` `Header` — logo, nawigacja główna, language switcher, mobile menu
- [ ] `[P1]` `Footer` — linki, dane kontaktowe, logotypy, copyright
- [ ] `[P1]` `Navigation` — desktop (horizontal) + mobile (hamburger/drawer)
- [ ] `[P2]` `MobileMenu` — animowane menu mobilne

### Sekcje strony głównej

- [ ] `[P1]` `HeroSection` — headline (i18n), metryki, przycisk CTA
- [ ] `[P2]` `SocialProofSection` — karuzela / grid logotypów
- [ ] `[P2]` `ValuePropositionSection` — bloki z ikonami i opisami
- [ ] `[P2]` `KeyMetricsSection` — animowane liczniki metryk
- [ ] `[P2]` `GlobalDataReachSection` — mapa świata lub wizualizacja zasięgu
- [ ] `[P2]` `DataProcessingFlowSection` — interaktywny diagram przepływu danych
- [ ] `[P2]` `UseCasesSection` — karty przypadków użycia
- [ ] `[P2]` `ComplianceSection` — bloki RODO/certyfikaty
- [ ] `[P2]` `PartnersSection` — logotypy partnerów
- [ ] `[P3]` `NewsletterCTASection` — formularz zapisu z walidacją

### Podstrony

- [ ] `[P1]` `/` — strona główna (kompozycja sekcji)
- [ ] `[P2]` `/o-nas` / `/about` — misja, model biznesowy, technologia DMP
- [ ] `[P2]` `/dane` / `/data` — źródła, typy, wykorzystanie, AI/segmentacja
- [ ] `[P2]` `/inwestorzy` / `/investors` — raporty, ład korporacyjny, strategia
- [ ] `[P2]` `/media` / `/news` — lista artykułów + strona pojedynczego artykułu
- [ ] `[P2]` `/kariera` / `/career` — kultura, lista ofert pracy
- [ ] `[P2]` `/kontakt` / `/contact` — formularz + dane kontaktowe
- [ ] `[P3]` `/polityka-prywatnosci` / `/privacy-policy` — treść prawna z CMS

### Hooki i helpery

- [ ] `[P2]` `useArticles(limit)` — pobieranie artykułów z CMS
- [ ] `[P2]` `useMetrics()` — pobieranie metryk z CMS
- [ ] `[P3]` `useBreakpoint()` — detekcja breakpointów (mobile/tablet/desktop)
- [ ] `[P3]` `formatDate(date, locale)` — formatowanie daty z obsługą locale
- [ ] `[P3]` `fetchCMS(query)` — centralny klient CMS z obsługą błędów

---

## Faza 5 — Integracja CMS + frontend

- [ ] `[P1]` Podłączyć klienta CMS (`src/lib/cms.ts`) z obsługą zmiennych środowiskowych
- [ ] `[P1]` Implementować pobieranie danych w Server Components dla każdej podstrony
- [ ] `[P1]` Skonfigurować ISR (`revalidate`) lub On-Demand Revalidation dla treści z CMS
- [ ] `[P2]` Podłączyć artykuły (`Article`) do strony `/media`
- [ ] `[P2]` Podłączyć dokumenty (`Document`) do strony `/inwestorzy`
- [ ] `[P2]` Podłączyć metryki (`Metric`) do `KeyMetricsSection` i `HeroSection`
- [ ] `[P2]` Podłączyć partnerów (`Partner`) do `PartnersSection` i `SocialProofSection`
- [ ] `[P2]` Zintegrować formularz kontaktowy z backendem (Node.js / API route)
- [ ] `[P3]` Skonfigurować generowanie dynamicznego sitemap.xml
- [ ] `[P3]` Skonfigurować dynamiczne meta tagi (Open Graph, Twitter Card) z danych CMS

---

## Faza 6 — Wdrożenie produkcyjne

- [ ] `[P1]` Skonfigurować projekt na Vercel / Netlify (zmienne środowiskowe, domeny)
- [ ] `[P1]` Skonfigurować CI/CD: type-check + lint na każdym PR
- [ ] `[P1]` Przeprowadzić testy end-to-end nawigacji i formularzy
- [ ] `[P2]` Przetestować przełączanie języka PL ↔ EN na wszystkich podstronach
- [ ] `[P2]` Przetestować responsywność: mobile (375px), tablet (768px), desktop (1280px+)
- [ ] `[P2]` Uruchomić Lighthouse audit (Performance, Accessibility, SEO, Best Practices)
- [ ] `[P2]` Skonfigurować monitoring błędów (Sentry lub podobne)
- [ ] `[P3]` Skonfigurować analitykę (GA4 + cookie consent banner)
- [ ] `[P3]` Przeprowadzić audyt bezpieczeństwa nagłówków HTTP (CSP, HSTS)

---

## Zadania ciągłe

- [ ] `[P2]` Każdy nowy komponent musi mieć klucze i18n w `pl.json` i `en.json`
- [ ] `[P2]` Każdy PR przechodzi przez type-check (`tsc --noEmit`) i lint przed mergem
- [ ] `[P3]` Utrzymywać pliki tłumaczeń zsynchronizowane między PL i EN
- [ ] `[P3]` Aktualizować model danych CMS przy każdej nowej sekcji

---

## Podsumowanie zadań

| Faza | Liczba zadań | P1 | P2 | P3 | P4 |
|------|-------------|----|----|----|----|
| Analiza | 8 | 3 | 3 | 2 | 0 |
| Figma / Design | 16 | 3 | 8 | 3 | 2 |
| CMS | 8 | 5 | 3 | 0 | 0 |
| Frontend | 38 | 12 | 18 | 8 | 0 |
| Integracja | 10 | 3 | 6 | 1 | 0 |
| Wdrożenie | 9 | 3 | 5 | 1 | 0 |
| Ciągłe | 4 | 0 | 2 | 2 | 0 |
| **Łącznie** | **93** | **29** | **45** | **17** | **2** |
