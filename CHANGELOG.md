## [1.2.1](https://github.com/orion-stack/orion-next-starter/compare/v1.2.0...v1.2.1) (2025-11-14)

### Bug Fixes

- **storybook:** update configuration to remove MDX pattern and docs addon ([c7036dd](https://github.com/orion-stack/orion-next-starter/commit/c7036ddef60253b9f41f9442c3c0522b2c551123))

# [1.2.0](https://github.com/orion-stack/orion-next-starter/compare/v1.1.0...v1.2.0) (2025-11-14)

### Features

- **comments:** improve code documentation and add JSDoc comments throughout the codebase ([6a7c999](https://github.com/orion-stack/orion-next-starter/commit/6a7c999d5be37a9e09ea0bc68b757f9c2b699ba7))
- **i18n, storybook, e2e:** configure timezone and update dependencies ([500e130](https://github.com/orion-stack/orion-next-starter/commit/500e13088a4872a0f662079b9388df414493adca))
- **package:** add docs script and improve type safety in tests ([14d943c](https://github.com/orion-stack/orion-next-starter/commit/14d943c1c051920fc8a340a2c175818af6acedd6))

# [1.1.0](https://github.com/orion-stack/orion-next-starter/compare/v1.0.0...v1.1.0) (2025-11-09)

### Features

- **i18n:** add internationalization support with language switcher ([f2b91bb](https://github.com/orion-stack/orion-next-starter/commit/f2b91bbe54d8fea3b51b3fe95037b6ce759763fb))
- **i18n:** add internationalization support with language switcher ([95f7eef](https://github.com/orion-stack/orion-next-starter/commit/95f7eeffae0b0312266aa444ac7515fc7f937bd4))
- **layout:** update metadata with proper project information ([468f0fc](https://github.com/orion-stack/orion-next-starter/commit/468f0fc630e7e835496c82ea87253fa8c7b3fed6))

# 1.0.0 (2025-11-09)

### Bug Fixes

- **ci:** enable corepack before setting up node ([8392618](https://github.com/orion-stack/orion-next-starter/commit/8392618f7df3f0a6981ce1d5bb1194e4747d5383))
- **ci:** repair and separate ci workflows ([f995d42](https://github.com/orion-stack/orion-next-starter/commit/f995d423014641df43780fa94131ed00aa2b9817))
- **ci:** resolve type errors and remove unused component ([741d7d0](https://github.com/orion-stack/orion-next-starter/commit/741d7d0d101bbad4d8da6a66a6a6be9cf030b20c))
- **ci:** resolve yarn version mismatch in GitHub Actions workflows ([9cd56e9](https://github.com/orion-stack/orion-next-starter/commit/9cd56e9e382e1cad5449b0bc5f45bf096cd4d7b9))
- **ci:** update Node.js version to 24.x for semantic-release compatibility ([3276c9b](https://github.com/orion-stack/orion-next-starter/commit/3276c9bc85c5ddc40952b39902d592cd6140bf8f))
- **ci:** update release workflow to trigger only on main branch ([e329eb4](https://github.com/orion-stack/orion-next-starter/commit/e329eb4b4ca2d88f640d676392cfb5fd8c7af413))
- **config:** update release.config.mjs to use ES module syntax ([11717bb](https://github.com/orion-stack/orion-next-starter/commit/11717bbc1c26be6f0156ab6b4930b96970ea01b9))
- **msw:** add type for login request body in auth handler ([6d46c99](https://github.com/orion-stack/orion-next-starter/commit/6d46c991f436ee6ad17baa3234d493e64398178b))
- **msw:** add types for user request bodies in user handler ([0c57dc5](https://github.com/orion-stack/orion-next-starter/commit/0c57dc536704d87dfdd117ff3ddf7b772fb7d799))
- **playwright:** set reuseExistingServer to true in Playwright config ([b6bd665](https://github.com/orion-stack/orion-next-starter/commit/b6bd66504dd8b61de59ea2ce3a85d77afb6648af))
- **stylelint:** update config to support Tailwind CSS v4 directives ([7260047](https://github.com/orion-stack/orion-next-starter/commit/7260047f0e59cffb56785b71ac7f2e47d5de29f9))
- **styles:** configure stylelint to use string notation for CSS imports ([bc5e098](https://github.com/orion-stack/orion-next-starter/commit/bc5e0989447db9b5ab27862b1d23820893b8fac8))
- **styles:** fix Tailwind CSS v4 import syntax and add tw-animate-css dependency ([6858eed](https://github.com/orion-stack/orion-next-starter/commit/6858eed5dfd0b3e4c264eaed10b48ca55060d707))
- **testing:** fix Vitest setup with proper jest-dom matchers and configuration ([8cf730c](https://github.com/orion-stack/orion-next-starter/commit/8cf730ca6a7df868e7c5b4070da099aa82bcb0a0))
- **ui:** fix shadcn/ui setup by removing invalid tw-animate-css import ([918583e](https://github.com/orion-stack/orion-next-starter/commit/918583e9dc3d6c5dc9365bb7ed361c235a00f1af))

### Features

- **assets:** add assets folder structure and update MSW file ([9fdba61](https://github.com/orion-stack/orion-next-starter/commit/9fdba6130253ce0832ec7b85c3067825b3020058))
- **components:** simplify custom button and remove rotate component ([5d1692d](https://github.com/orion-stack/orion-next-starter/commit/5d1692d92b2431136eb326dc9d8068d4a760a80f))
- **dev-tools:** add commitlint for conventional commit validation ([7f00e87](https://github.com/orion-stack/orion-next-starter/commit/7f00e874c7060f04ed233204f68ba2be35eee588))
- **dev-tools:** add husky for git hooks setup ([d4688b5](https://github.com/orion-stack/orion-next-starter/commit/d4688b55db7a41a1f503db586eaa61987f1adff1))
- **dev-tools:** add lint-staged for pre-commit code quality checks ([8ffc5ac](https://github.com/orion-stack/orion-next-starter/commit/8ffc5ac655c94ef4f2e2e3e51037c45af8bae6e7))
- **dev-tools:** add MSW for API mocking in development and testing ([107f01b](https://github.com/orion-stack/orion-next-starter/commit/107f01bb484ee4481287c739310c74841b479be3))
- **dev-tools:** add prettier for code formatting with format script ([f1a796d](https://github.com/orion-stack/orion-next-starter/commit/f1a796d400fd2b4763c97e484d52c01e9baeaf8c))
- **dev-tools:** add Storybook for component documentation and testing ([4299ff9](https://github.com/orion-stack/orion-next-starter/commit/4299ff91c92273a1845e53e34a16424595eedbe0))
- **dev-tools:** add stylelint for CSS/Sass/Less code linting with lint:css script ([2412ef6](https://github.com/orion-stack/orion-next-starter/commit/2412ef6329b8296c2364e40262f173034b1fa508))
- implement theme toggle and motion animations ([afd3c84](https://github.com/orion-stack/orion-next-starter/commit/afd3c8445d54db598faf84b8a62236ca03ba7b9b))
- **release:** set up semantic release with GitHub Actions workflow ([780d412](https://github.com/orion-stack/orion-next-starter/commit/780d41263f35422506878db5b48277570862c5fd))
- **testing:** add @faker-js/faker for generating test data in e2e tests ([6b2478f](https://github.com/orion-stack/orion-next-starter/commit/6b2478ff14fbeedc04d70bbee91098c04ed85fde))
- **testing:** add Playwright for end-to-end testing in tests-e2e directory ([9000c3e](https://github.com/orion-stack/orion-next-starter/commit/9000c3e8c5e3a5fcbeb053e29935910f9613729d))
- **testing:** add Vitest for unit testing with jsdom environment ([0d7a2fd](https://github.com/orion-stack/orion-next-starter/commit/0d7a2fd56e748b6f3875785eb9a83a5a5f51feae))
- **testing:** overhaul testing strategy and component structure ([cf6c2d0](https://github.com/orion-stack/orion-next-starter/commit/cf6c2d0f30e96bb5345d4c9b9128a619c6355356))
- **testing:** remove unused definitions from vitest config and clean it ([fc92618](https://github.com/orion-stack/orion-next-starter/commit/fc926184408d8991e0a36f48c4006e891536eda5))
- **ui:** add shadcn/ui component library with configuration ([849b16d](https://github.com/orion-stack/orion-next-starter/commit/849b16d7af1206b09d5d8a90dcc46d07555b9f8e))
- **ui:** enhance homepage with animations and updated content ([f2d113a](https://github.com/orion-stack/orion-next-starter/commit/f2d113a7fb5b7c287fd79dda1c80d47154287bfc))

## [Unreleased]

### Features

- AI pane responds in user's selected language via locale-aware prompt (`src/app/api/ai/explain/route.ts:14`) and client transport (`src/components/quiz/ai-panel.tsx:81`)
- Readme updated to LevelUp app description and structure
- AI docs updated with implementation summary and environment notes

### Changes

- Replace boilerplate references with LevelUp context across README

### Known Issues

- TypeScript errors in `src/db/seed.ts` unrelated to AI pane changes
