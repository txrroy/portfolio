# Portfolio

Source code for [tusharroy.com](https://www.tusharroy.com), the portfolio of Tushar Roy, Staff Product Designer and Design Engineer.

I designed and built this site in code. It shows how I work: I define the design system first, then build pages from it.

## What to look at

- **Four switchable themes.** One codebase renders four different visual designs. One environment variable selects the theme at build time.
- **A documented design system.** Colors, type styles, and components are listed at [tusharroy.com/design-system](https://www.tusharroy.com/design-system/).
- **Theme-independent routes.** The home route imports from the active theme, so a theme can change the full layout without changes to the route.
- **Built with AI coding agents.** The rules the agents follow are in `.agents/rules/` and `.claude/`.

## How theming works

`astro.config.mjs` reads the `THEME` environment variable and points the `@theme` alias to the matching folder in `src/themes/`.

```js
// src/pages/index.astro
import HomePage from "@theme/HomePage.astro";
```

| Theme | Dev command | Build command |
| --- | --- | --- |
| `one-dog` | `npm run dev:one` | `npm run build:one` |
| `two-printer` | `npm run dev:two` | `npm run build:two` |
| `three-hybrid` | `npm run dev:three` | `npm run build:three` |
| `four-zelt` (default) | `npm run dev` | `npm run build` |

You can also set the variable directly:

```sh
THEME=two-printer npm run dev
```

## Stack

- [Astro 5](https://astro.build)
- [Tailwind CSS 4](https://tailwindcss.com), through the Vite plugin
- TypeScript

## Run locally

```sh
npm install
npm run dev        # start the dev server at localhost:4321
npm run build      # build the site to ./dist/
npm run preview    # preview the build
```

## Project structure

```text
.agents/rules/     rules for AI coding agents
.claude/           Claude Code settings
public/            images and static files
src/
  layouts/         shared layouts, such as the case study layout
  pages/           routes
  themes/          one folder per theme
astro.config.mjs   theme selection and the @theme alias
```

## Contact

- Website: [tusharroy.com](https://www.tusharroy.com)
- LinkedIn: [linkedin.com/in/tusharroy](https://www.linkedin.com/in/tusharroy)
- Email: [contact@tusharroy.com](mailto:contact@tusharroy.com)
