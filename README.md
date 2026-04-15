# Cloud Technologies Website

Nowoczesna, dwujęzyczna (PL/EN) strona korporacyjna dla Cloud Technologies — platforma marketingowo-informacyjna z naciskiem na narrację technologiczną i inwestorską.

---

## Spis treści

- [Opis projektu](#opis-projektu)
- [Architektura informacji](#architektura-informacji)
- [Wymagania funkcjonalne](#wymagania-funkcjonalne)
- [Architektura techniczna](#architektura-techniczna)
- [System projektowania](#system-projektowania)
- [Wzorce UX](#wzorce-ux)
- [Plan wdrożenia](#plan-wdrożenia)
- [Ryzyka](#ryzyka)

---

## Opis projektu

**Cel projektu:**
Zaprojektowanie i wdrożenie nowoczesnej, dwujęzycznej strony korporacyjnej Cloud Technologies z zachowaniem aktualnej architektury informacji i logiki treści, przy jednoczesnym wprowadzeniu:

- Nowego designu wizualnego (opartego na Figma)
- Zaktualizowanych treści
- Skalowalnej architektury frontend/backend

**Kluczowe cechy:**
- Strona korporacyjna z sekcją dla inwestorów
- Narracja skoncentrowana na technologiach danych
- Platforma marketingowo-informacyjna

---

## Architektura informacji

### Nawigacja główna

| Sekcja | Opis |
|--------|------|
| Home | Strona główna |
| About / DataTech | O firmie |
| Data Scope / Types / Usage | Zakres i typy danych |
| Investors | Inwestorzy |
| Media / News | Media i aktualności |
| Career | Kariera |
| Contact | Kontakt |
| Legal / GDPR | Dokumenty prawne |

### Struktura strony głównej

1. **Hero Section** — nagłówek, metryki, CTA
2. **Social Proof** — logotypy partnerów
3. **Value Proposition** — propozycja wartości
4. **Key Metrics** — kluczowe wskaźniki
5. **Global Data Reach** — zasięg globalny danych
6. **Data Processing Flow** — przepływ przetwarzania danych
7. **Use Cases** — przypadki użycia
8. **Compliance / GDPR** — zgodność i RODO
9. **Partners** — partnerzy
10. **Newsletter / CTA** — zapis i wezwanie do działania

### Podstrony

**A. About / Company**
- Misja firmy
- Model biznesowy
- Technologia (DMP)

**B. Data / Technology**
- Źródła danych
- Typy danych
- Wykorzystanie danych
- AI / segmentacja

**C. Investors**
- Raporty
- Ład korporacyjny
- Strategia

**D. Media**
- Artykuły i aktualności

**E. Career**
- Kultura organizacyjna
- Oferty pracy

**F. Contact**
- Formularz kontaktowy + dane

**G. Legal**
- Polityka prywatności / RODO

---

## Wymagania funkcjonalne

- Hybrydowy model static + dynamic
- Treści zarządzane przez CMS
- System aktualności/newsów
- Dokumenty dla inwestorów
- Przełączanie języka (PL/EN)
- Backend formularza kontaktowego

---

## Architektura techniczna

### Frontend

```
Next.js (React)
├── Tailwind CSS / Design System
└── i18n (obsługa wielu języków)
```

### Backend

```
Headless CMS
├── Strapi / Contentful / Sanity
└── Opcjonalny backend Node.js
```

### Model danych

| Encja | Opis |
|-------|------|
| `Page` | Strona |
| `Section` | Sekcja strony |
| `Article` | Artykuł / news |
| `Document` | Dokument (raporty, pliki) |
| `Partner` | Partner / logo |
| `Metric` | Wskaźnik / metryka |

### Wdrożenie

| Warstwa | Platforma |
|---------|-----------|
| Frontend | Vercel / Netlify |
| CMS | Cloud-hosted |
| Zasoby statyczne | CDN |

---

## System projektowania

- Architektura komponentowa (Atomic Design)
- Wielokrotnie używalne sekcje
- Design tokeny: kolory, typografia, odstępy

---

## Wzorce UX

- Struktura oparta na storytellingu
- Silny nacisk na metryki i dane liczbowe
- Modularny układ stron

---

## Plan wdrożenia

| Faza | Zakres |
|------|--------|
| **Faza 1** | Analiza wymagań |
| **Faza 2** | Projekt w Figma |
| **Faza 3** | Konfiguracja CMS |
| **Faza 4** | Rozwój frontendu |
| **Faza 5** | Integracja CMS + frontend |
| **Faza 6** | Wdrożenie produkcyjne |

---

## Ryzyka

- Dynamiczne treści wymagają działającego CMS/backendu
- Wizualizacje danych mogą wymagać dodatkowych bibliotek (np. D3.js, Chart.js)

---

## Podsumowanie

Projekt zakłada budowę strony korporacyjnej opartej na treściach, dwujęzycznej, z modularną strukturą sekcji i lekkimi funkcjami dynamicznymi.

**Rekomendowana architektura:**

```
Headless CMS  ──►  Next.js Frontend  ──►  Vercel / Netlify
```
