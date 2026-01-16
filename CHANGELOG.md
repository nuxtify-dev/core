# Changelog

## [0.2.1] - 2026-01-15

Nuxt 4 support.

_v0.2.0 was unpublished due to an installation bug._

### 🚨 Breaking Changes

- chore(deps)!: upgrade to nuxt 4

### Changes

- fix: possibly undefined type errors
- fix: replace deprecated server seo meta composable
- chore(deps): update dev package majors
- chore(deps): update typescript
- chore: delete .npmrc

## [0.1.11] - 2026-01-15

- feat: add useCopyText composable
- feat: add link-hover utility global style
- fix: useHead proper import
- refactor: update core module logic to match docs
- dx: add eslint warn import order rule
- dx: add lint:fix npm command
- chore(deps): update nuxt 3.x
- chore(deps): update vuetify
- chore(deps): update dev packages

## [0.1.10] - 2025-08-22

### 🚨 Breaking Changes

- refactor!: formatDate util function
- refactor!: remove formatDateTime in favor of formatDate

### Changes

- refactor: useLogger

## [0.1.9] - 2025-06-24

- fix: rollup import error
- feat: add AppError component
- ui: simplify AppCredits component style
- docs: add nuxtify app section

## [0.1.8] - 2025-06-17

### 🚨 Breaking Changes

- dx!: revert "feat: export Link type"

### Changes

- feat: add useNuxtifySiteTitle composable
- feat: add AppCredits component
- feat: add utils functions
- dx: update formatting rules
- chore(deps): update packages

## [0.1.7] - 2025-05-22

- feat: export Link type
- fix: allow all date types
- dx: add type hints to math utils

## [0.1.6] - 2025-05-21

- feat: add navigation config
- feat: add addArticle function

## [0.1.5] - 2025-05-20

- fix: maybe fix import error

## [0.1.4] - 2025-05-20

- fix: maybe fix import error
- revert: types: don't allow undefined objects

## [0.1.3] - 2025-05-20

- ux: reset error message on page reload
- types: don't allow undefined objects
- chore(deps): update dev minors

## [0.1.2] - 2025-05-16

- feat(dx): add verbose logging config
- revert: fix(types): don't explicitly type nuxtifyConfig

## [0.1.1] - 2025-05-16

- feat: add submit to API helper function
- fix(types): don't explicitly type nuxtifyConfig
- dx: playground and readme updates
- refactor: package name

## [0.1.0] - 2025-05-15

- chore: install and configure Nuxt and Vuetify
- chore: setup dev environment (TypeScript, eslint, etc)
- docs: add readme and changelog
- feat: add initial set of features

## Meta

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and [Conventional Commits](https://www.conventionalcommits.org/).
