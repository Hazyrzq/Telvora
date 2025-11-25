## TL;DR — what you need to know

- This is a front-end only React + Vite UI project (no running backend in repo).
- Key commands: `npm install`, `npm run dev` to run Vite dev server, `npm run build` for production, `npm run lint` for ESLint.
 - The app uses React Router with a nested `/admin` route; admin pages live in `src/pages/Admin/` and share layout in `src/components/AdminLayout.jsx`.

## Big picture architecture (quick)

- Format: Vite + React 18. Entry: `src/main.jsx` -> renders `<App />`.
- Routing: `src/App.jsx` defines routes:
  - `/` -> `src/pages/Home.jsx` (landing)
  - `/admin` -> `src/components/AdminLayout.jsx` with nested pages in `src/pages/Admin/*` (Dashboard, Packages, Customers, Recommendations, Settings)
- UI: component-first; reusable pieces in `src/components/` (Header, Hero, Footer, Features, etc.). Styles are plain CSS files in `src/styles/` and often mirror component names (e.g., `Header.jsx` -> `Header.css`).
- Static assets and HTML: top-level `index.html` (Vite). Vite config at `vite.config.js` only uses `@vitejs/plugin-react`.

## Developer workflows & commands (explicit)

- Install dependencies:

```powershell
npm install
```

- Run dev server (hot reload):

```powershell
npm run dev
```

- Build for production:

```powershell
npm run build
```

- Linting (ESLint):

```powershell
npm run lint
```

- Windows convenience: `install.bat` (installs) and `run-dev.bat` (starts dev server) are present and safe to use for quick local setup.

## Project-specific conventions and patterns

- File naming: React components use PascalCase and `.jsx` (e.g., `AdminLayout.jsx`, `Header.jsx`). Pages live under `src/pages/` with an `Admin/` subfolder for admin UI.
- Styling: CSS files live in `src/styles/`. Per-component CSS follows the component name: `src/components/Foo.jsx` -> `src/styles/Foo.css` (or `src/styles/Admin/Foo.css` for admin-specific styles).
- Routing pattern: Admin uses nested routes; to add a new admin page, create the component in `src/pages/Admin/` and add a `Route` as a child of the `/admin` `Route` in `src/App.jsx`.
- No backend wiring in this repo: README documents Supabase schema and SQL in `database/migrations/001_create_tables.sql`. Treat that as reference/schema-only unless you are explicitly adding server code.

## Integration points & external dependencies

- Dependencies from `package.json`: `react`, `react-dom`, `react-router-dom`, `react-icons`.
- Dev tools: `vite`, `@vitejs/plugin-react`, `eslint` and related ESLint React plugins.
- Data / backend: README references Supabase and includes DDL and CSV import snippets. There is a `database/migrations/001_create_tables.sql` file; the UI currently does not contact a backend—mock or add API clients if implementing real data flows.

## Small examples (how to make common changes)

- Add a new landing component and style:
  1. Create `src/components/MyWidget.jsx` (PascalCase).
  2. Add `src/styles/MyWidget.css` and import it at top of the component: `import '../styles/MyWidget.css'`.

- Add a new admin page:
  1. Create `src/pages/Admin/MyNewPage.jsx`.
 2. Add a route in `src/App.jsx` inside the `/admin` `Route`:
     <Route path="mynewpage" element={<MyNewPage />} />

- Where to change layout: `src/components/AdminLayout.jsx` contains the admin sidebar/header wrapper used by all `/admin` pages.

## Code-style and checks

- Linting: ESLint is configured and should be run via `npm run lint` before PRs. The script runs `eslint . --ext js,jsx`.
- Keep components small and prefer composition via props (project is UI-focused; state management is local/component-level at present).

## Files to reference when coding

- Routing and app shape: `src/App.jsx`, `src/main.jsx`
- Admin layout and pages: `src/components/AdminLayout.jsx`, `src/pages/Admin/*`
- Shared components: `src/components/*`
- Styles: `src/styles/*`, `src/styles/Admin/*`
- Build & scripts: `package.json`, `vite.config.js`
- Database schema & ML notes: `database/migrations/001_create_tables.sql`, `README.md` (contains Supabase SQL snippets)

## Do / Don't notes for AI agents

- DO: Make edits consistent with existing file naming and CSS conventions (PascalCase `.jsx` + matching CSS file in `src/styles/`).
- DO: Preserve the routing structure; add routes only in `src/App.jsx` and use `AdminLayout` for admin pages.
- DO NOT: Add server code or assume API endpoints unless user requests it—database SQL is schema-only.
- DO: Run `npm run dev` to test UI changes; use the provided batch files on Windows if you prefer GUI.

## Feedback
If any instruction is unclear or you want more granular guidance (tests, component-level patterns, or API client templates), tell me which area to expand and I'll iterate.
