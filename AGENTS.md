# Nuxtify Core (Nuxt Module)

This document provides a comprehensive overview of the **Nuxtify Core** Nuxt module, its project architecture, development conventions, and building/testing commands to guide future development, maintenance, and automated assistance.

---

## Project Overview

**Nuxtify Core** is an open-source [Nuxt Module](https://nuxt.com/) (specifically targeted at Nuxt `>=4.0.0`) powered by Nuxt and Vuetify 3. It provides a robust, loosely-opinionated foundation for building fast and organized web applications with standardized defaults.

### Key Technologies
- **Framework:** [Nuxt](https://nuxt.com/) (version 4 compatibility)
- **UI Framework:** [Vuetify 3](https://vuetifyjs.com/) via the `vuetify-nuxt-module`
- **Build Tooling:** `@nuxt/module-builder`
- **Testing:** [Vitest](https://vitest.dev/) with `@nuxt/test-utils`
- **Linting & Code Style:** ESLint flat config v9 (`@nuxt/eslint`)
- **Type Safety:** TypeScript & `vue-tsc`

---

## Architecture and Directory Structure

The repository has the following structure:

```
nuxtify-core/
├── eslint.config.mjs          # ESLint (v9) configuration with stylistic rules
├── package.json               # Dependencies, scripts, and exports configurations
├── tsconfig.json              # TypeScript compilation setup
├── playground/                # Sandboxed Nuxt playground for testing/dev
│   ├── app.config.ts
│   ├── app.vue
│   ├── nuxt.config.ts         # Imports local module for live development
│   └── components/
│       └── demo/
├── src/                       # Main module source
│   ├── module.ts              # Nuxt module definition (entry point)
│   ├── types.ts               # Module option type definitions (ModuleOptions)
│   └── runtime/               # Code injected into the host Nuxt application
│       ├── components/        # Auto-imported app components
│       │   └── app/           # AppAnnouncement, AppDialog, AppError, etc.
│       ├── composables/       # Auto-imported composables (dialog, state, etc.)
│       ├── middleware/        # Global route middleware (setup.ts)
│       ├── server/            # Server-side composables and utils
│       └── utils/             # Helper utilities (formRules, math, text, etc.)
└── test/                      # E2E and Unit Tests
    ├── basic.test.ts          # Vitest suite using @nuxt/test-utils/e2e
    └── fixtures/              # Test fixtures for E2E setups
```

### Module Setup and Injections (`src/module.ts`)
- **Metadata:** Registered under config key `nuxtifyCore` and targeting Nuxt `github/nuxtify-dev/core`.
- **Dependencies:** Implicitly adds dependency constraints on `@nuxt/image` and `vuetify-nuxt-module`.
- **Config Injections:**
  - Exposes config options to the app's config space under `nuxt.options.appConfig.nuxtify`.
  - Auto-imports and registers files from `./runtime/components`.
  - Auto-imports client and server composables and utilities.
  - Registers a global route middleware (`runtime/middleware/setup`).

---

## Building and Running

The project includes standard scripts for development, testing, building, and publishing:

### 1. Local Development
Start the local sandbox playground with hot-reloading:
```bash
npm run dev
```
*(This command internally builds the module stubs/types via `dev:prepare` and launches `nuxt dev playground`)*

### 2. Testing
Run the test suite using Vitest:
```bash
npm run test
```
To run tests in interactive watch mode:
```bash
npm run test:watch
```

### 3. Type Checking
Perform strict TypeScript verification across both the module source and the playground:
```bash
npm run test:types
```

### 4. Code Quality & Linting
Verify stylistic rules, import ordering, and code standards:
```bash
npm run lint
```
Automatically fix lint errors:
```bash
npm run lint:fix
```

### 5. Production Build / Prepack
Build the distribution assets (found in `dist/`) in preparation for packaging or release:
```bash
npm run prepack
```

---

## Module Configuration (`types.ts`)

The module can be configured via `nuxtifyCore` options in a host project's `nuxt.config.ts` or directly on `app.config.ts`. The primary configuration parameters include:

- `verboseLogs`: Boolean indicating whether to output additional diagnostic logs.
- `brand`: Brand details like `name`, `domain`, `tagline`, and `logo` urls/formatting.
- `policies`: URLs for privacy and terms pages.
- `announcement`: Options for global announcements (`show`, `message`, `buttonText`, `exclude` list, etc.).
- `navigation`: Custom links arrays representing primary, secondary, and alternate navigation bars.
- `credits`: Attribution configurations including creator name, link, and power-by flags.
- `email`: Contact addresses (general, support).

---

## Development Conventions

When modifying or extending this codebase, adhere to the following conventions:

1. **Composition API & SFCs:** Always write Vue components in `./src/runtime/components` using the modern Composition API with `<script setup lang="ts">`.
2. **Type Safety:** Ensure any public-facing or internal configurations are properly typed in `src/types.ts`. Run `npm run test:types` before submitting any changes.
3. **Use Direct Imports:** Because this is a Nuxt module, auto-imports do not work. All utilities, components, and composables must explicitly be imported from `#imports`.
4. **Styling Defaults:** Rely heavily on Vuetify utility classes or Vuetify defaults configurations. Keep Custom CSS to a minimum to ensure consumers can override styles easily.
5. **Linting Compliance:** Make sure that code meets the ESLint stylistic rules (with v9 flat configurations). Run `npm run lint` regularly to catch formatting and styling discrepancies.
6. **Robust Testing:** Always update or add corresponding E2E and unit tests in the `test/` directory to ensure that any additions or changes don't introduce regressions.
