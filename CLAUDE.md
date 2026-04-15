# CLAUDE.md — Instrukcje dla agenta

Ten plik zawiera wytyczne dla Claude Code podczas pracy w tym repozytorium.
Agent powinien stosować się do poniższych standardów przy każdej modyfikacji kodu.

---

## Stack technologiczny

- **Frontend:** Next.js (React), TypeScript, Tailwind CSS
- **CMS:** Headless CMS (Strapi / Contentful / Sanity)
- **i18n:** next-i18next lub next-intl
- **Deployment:** Vercel / Netlify

---

## Standardy pisania kodu

### Ogólne zasady

- Pisz kod w **TypeScript** — nie używaj `any` bez uzasadnienia
- Każda funkcja powinna robić jedną rzecz (zasada Single Responsibility)
- Preferuj **kompozycję** nad dziedziczenie
- Unikaj zbędnych abstrakcji — nie generalizuj przedwcześnie
- Nie dodawaj kodu na zapas (YAGNI — You Aren't Gonna Need It)
- Nie duplikuj logiki — wyciągaj powtarzające się fragmenty do wspólnych funkcji

### Nazewnictwo

| Element | Konwencja | Przykład |
|---------|-----------|---------|
| Komponenty React | PascalCase | `HeroSection`, `MetricCard` |
| Funkcje / zmienne | camelCase | `fetchArticles`, `isLoading` |
| Stałe | UPPER_SNAKE_CASE | `MAX_ITEMS`, `API_URL` |
| Typy / Interfejsy | PascalCase | `ArticleProps`, `PageSection` |
| Pliki komponentów | PascalCase | `HeroSection.tsx` |
| Pliki helperów | camelCase | `formatDate.ts`, `useMediaQuery.ts` |
| Foldery | kebab-case | `data-processing/`, `use-cases/` |

### TypeScript

```ts
// Dobrze — jawny typ, bez any
interface ArticleProps {
  title: string;
  slug: string;
  publishedAt: Date;
  tags?: string[];
}

// Dobrze — typ zwracany jawnie określony
function formatDate(date: Date): string {
  return date.toLocaleDateString('pl-PL');
}

// Niedopuszczalne
const data: any = fetchData();
```

- Używaj `interface` dla kształtu obiektów, `type` dla unii i aliasów
- Nie używaj `!` (non-null assertion) bez komentarza wyjaśniającego dlaczego
- Włącz `strict: true` w `tsconfig.json`

### Komponenty React

- Używaj **funkcyjnych komponentów** — bez class components
- Props destrukturyzuj bezpośrednio w sygnaturze funkcji
- Każdy komponent w osobnym pliku
- Eksportuj komponent jako **named export** (nie default, chyba że wymaga tego Next.js)

```tsx
// Dobrze
interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
}

export function MetricCard({ label, value, unit }: MetricCardProps) {
  return (
    <div className="metric-card">
      <span className="metric-value">{value}{unit}</span>
      <span className="metric-label">{label}</span>
    </div>
  );
}
```

- Nie umieszczaj logiki biznesowej bezpośrednio w komponentach — wyciągaj do hooków lub helperów
- Duże komponenty dziel na mniejsze podkomponenty w tym samym folderze

### Hooki

- Własne hooki zaczynają się od `use` — np. `useArticles`, `useBreakpoint`
- Hook powinien zwracać obiekt z nazwanymi polami, nie tablicę (chyba że jest to para `[value, setter]`)

```ts
// Dobrze
function useArticles(limit: number) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  return { articles, isLoading };
}
```

### Stylowanie (Tailwind CSS)

- Używaj klas Tailwind bezpośrednio w JSX — nie twórz osobnych plików CSS dla pojedynczych komponentów
- Złożone, powtarzające się kombinacje klas wyciągaj do zmiennej lub używaj `cva` (class-variance-authority)
- Nie używaj inline styles (`style={{}}`) — wyjątek: dynamiczne wartości niemożliwe do wyrażenia w Tailwind
- Design tokeny (kolory, fonty, spacing) definiuj w `tailwind.config.ts`

```tsx
// Dobrze — tokeny z configa
<h1 className="text-brand-primary font-display text-4xl font-bold">

// Niedopuszczalne
<h1 style={{ color: '#1A2B3C', fontSize: '36px' }}>
```

### Internacjonalizacja (i18n)

- Wszelkie teksty widoczne dla użytkownika muszą przechodzić przez system i18n
- Klucze tłumaczeń w formacie `sekcja.element` — np. `hero.headline`, `nav.about`
- Nie hardkoduj polskich ani angielskich tekstów bezpośrednio w komponentach

```tsx
// Dobrze
const { t } = useTranslation('common');
return <h1>{t('hero.headline')}</h1>;

// Niedopuszczalne
return <h1>Lider technologii danych</h1>;
```

### Struktura folderów

```
src/
├── app/                  # Next.js App Router — strony i layouty
├── components/
│   ├── ui/               # Atomowe elementy (Button, Badge, Card)
│   ├── sections/         # Sekcje strony (HeroSection, MetricSection)
│   └── layout/           # Header, Footer, Navigation
├── hooks/                # Własne hooki React
├── lib/                  # Klienty CMS, helpery, konfiguracja
├── types/                # Globalne typy TypeScript
├── messages/             # Pliki tłumaczeń (pl.json, en.json)
└── styles/               # Globalne style (globals.css)
```

### Pobieranie danych

- Dane z CMS pobieraj w **Server Components** (Next.js App Router) — nie na kliencie, chyba że wymagana interaktywność
- Używaj `fetch` z odpowiednim `cache` / `revalidate` zamiast `useEffect` + `useState` dla danych statycznych
- Błędy z API obsługuj jawnie — nie ukrywaj wyjątków

```ts
// Dobrze — Server Component
async function ArticlesPage() {
  const articles = await fetchArticles({ limit: 10 });
  return <ArticleList articles={articles} />;
}
```

---

## Standardy pracy z repozytorium

### Branche

- `main` — kod produkcyjny, zawsze stabilny
- `develop` — branch integracyjny
- Feature branche: `feature/<opis>`, np. `feature/hero-section`
- Bugfixy: `fix/<opis>`, np. `fix/nav-mobile-overflow`

### Commity

Format: `typ(zakres): krótki opis` (Conventional Commits)

| Typ | Kiedy używać |
|-----|-------------|
| `feat` | Nowa funkcjonalność |
| `fix` | Naprawa błędu |
| `refactor` | Zmiana kodu bez zmiany działania |
| `style` | Formatowanie, brak zmian logiki |
| `docs` | Dokumentacja |
| `chore` | Zmiany konfiguracji, zależności |

Przykłady:
```
feat(hero): add animated metric counters
fix(nav): correct mobile menu z-index overflow
docs(readme): update deployment instructions
```

### Pull Requesty

- PR powinien dotyczyć jednej funkcjonalności lub poprawki
- Opis PR zawiera: co zmieniono, dlaczego, jak przetestować
- Przed mergem kod musi przejść type-check i lint

---

## Czego agent nie powinien robić

- Nie dodawaj `console.log` do kodu produkcyjnego
- Nie twórz plików konfiguracyjnych bez potrzeby
- Nie instaluj nowych paczek bez sprawdzenia czy problem można rozwiązać istniejącymi zależnościami
- Nie zmieniaj `tsconfig.json` ani `tailwind.config.ts` bez wyraźnej potrzeby
- Nie commituj do `main` bezpośrednio
- Nie usuwaj plików bez upewnienia się, że nie są używane gdzie indziej
