# Development Workflow Guide

This document outlines the recommended development workflow for the Orion Next.js Starter project. Following this workflow ensures consistency, maintainability, and quality across the codebase.

## Branching Strategy

### Branch Types and Naming Convention

We use a feature-branch workflow with the following branch types:

- `main` - Production-ready code (protected branch)
- `dev` - Main development branch (protected branch)
- `feature/*` - Feature development branches
- `fix/*` - Bug fix branches
- `hotfix/*` - Urgent production fixes

### Branch Naming Conventions

- **Feature branches**: `feature/descriptive-feature-name`
  - Examples: `feature/setup-storybook`, `feature/add-msw`, `feature/implement-auth`
- **Bug fix branches**: `fix/descriptive-bug-name`
  - Examples: `fix/tailwind-import-issue`, `fix/vitest-setup-error`
- **Hotfix branches**: `hotfix/urgent-fix-name`
  - Examples: `hotfix/security-patch`, `hotfix-critical-bug`

## Complete Development Workflow

### 1. Planning & Decision Making

Before starting work, consider:

- What feature/tool needs to be implemented based on the PRD
- What is the logical next step in the development process
- What dependencies exist with other features
- How this fits into the overall project architecture

### 2. Create Feature Branch

Start a new feature branch from the `dev` branch:

```bash
# Ensure you're on the latest dev branch
git checkout dev
git pull origin dev

# Create a new feature branch with descriptive naming
git checkout -b feature/descriptive-feature-name
```

### 3. Implementation Process

- Implement the feature or fix incrementally
- Write tests for new functionality
- Follow the existing code style and architecture patterns
- Use descriptive variable and function names
- Add necessary documentation and comments
- Keep related changes together in logical chunks

### 4. Testing & Quality Assurance

Before committing, ensure:

- All existing tests pass
- New tests pass
- Code is formatted correctly
- Linting passes
- The feature works as expected
- No console errors or warnings

Run the quality checks:

```bash
yarn lint:ci
yarn format:ci
yarn test:ci
```

### 5. Atomic Commits

Make focused, atomic commits that:

- Contain related changes only
- Have clear, descriptive commit messages
- Follow the conventional commit format
- Include all related files (implementation, tests, documentation)

#### Commit Message Format

We follow conventional commits with the format:

```
type(scope): brief description

- Optional detailed description
- Bullet points for multiple changes
```

#### Commit Types Used

- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Test-related changes
- `chore` - Other maintenance tasks

#### Scope Convention

Use descriptive scopes that indicate the area of the codebase:

- `ui` - UI components and styling
- `testing` - Testing framework and utilities
- `dev-tools` - Development tools and setup
- `auth` - Authentication-related changes
- `api` - API and data handling
- `config` - Configuration changes

#### Example Commits

```
feat(dev-tools): add Storybook for component documentation and testing
```

```
fix(styles): configure stylelint to use string notation for CSS imports

- Update stylelint config to support Tailwind CSS v4
- Fix CSS import syntax in all relevant files
- Add proper import formatting rules
```

```
feat(testing): add Vitest for unit testing with jsdom environment

- Install vitest and related dependencies
- Configure vitest with proper jsdom setup
- Add testing utilities and matchers
- Update package.json with test scripts
```

### 6. Merge Process

After completing the feature:

1. **Final testing**: Run all tests to ensure everything works
2. **Commit all changes**: Group related changes in atomic commits
3. **Switch to dev branch**: `git checkout dev`
4. **Update dev branch**: `git pull origin dev`
5. **Merge feature branch**: `git merge feature/your-branch-name`
6. **Delete feature branch**: `git branch -d feature/your-branch-name`
7. **Push dev branch**: `git push origin dev`
8. **Create pull request**: Create PR from dev to main on GitHub (main is PR protected)

## File Organization Standards

### Directory Structure Adherence

Respect the established project structure:

```
/orion-next-starter
├── .github/
├── .husky/
├── .storybook/
├── public/
├── app/                    # Next.js App Router pages and layouts
├── components/            # Reusable React components
├── lib/                   # Shared utilities and business logic
├── hooks/                 # Custom React hooks
├── providers/             # React context providers
├── styles/                # Global styles
├── types/                 # TypeScript type definitions
├── msw/                   # MSW setup (mock data and handlers)
├── stories/               # Storybook component stories
├── tests-e2e/            # End-to-end tests
├── docs/                 # Project documentation
```

### New Feature Setup

When adding new tools/features, follow this pattern:

1. Install dependencies
2. Create necessary configuration files
3. Set up directory structure if needed
4. Add documentation
5. Write tests
6. Update progress tracking if applicable

## Code Quality Standards

### Linting & Formatting

- All code must pass ESLint checks
- Use Prettier for consistent formatting
- Stylelint for CSS/SCSS files
- TypeScript strict mode enforced

### Testing Standards

- Unit tests for utility functions and business logic
- Component tests for UI components
- Integration tests for feature workflows
- End-to-end tests for critical user flows
- Minimum 80% code coverage for new features

### Documentation

- Update README when adding major features
- Add inline documentation for complex logic
- Write clear JSDoc comments for exported functions
- Add usage examples where appropriate

## Common Workflow Examples

### Adding a New Development Tool

```bash
# 1. Create feature branch
git checkout -b feature/setup-tool-name

# 2. Implement the tool setup
# - Install dependencies
# - Create configuration files
# - Set up directory structure
# - Update documentation

# 3. Test the implementation
yarn test --run
yarn lint
yarn format

# 4. Create atomic commit
git status (to see and just make sure the current uncommited fils and changes are relaed to the current work and there are no other things. there aere no unrelaetd changes we use "git add ." but otherwise we will handpick related files only and stage them)
git add .
git commit -m "feat(dev-tools): add tool-name for specific-purpose

- Install tool-name and related dependencies
- Configure tool-name with recommended settings
- Add documentation on how to use tool-name
- Update progress tracking to mark as completed"

# 5. Follow merge process
git checkout dev
git pull origin dev
git merge feature/setup-tool-name
git branch -d feature/setup-tool-name
git push origin dev
```

### Fixing a Bug

```bash
# 1. Create fix branch
git checkout -b fix/issue-description

# 2. Implement the fix
# - Locate and fix the bug
# - Add a regression test if applicable

# 3. Test the fix
yarn test --run
yarn lint

# 4. Create commit
git add .
git commit -m "fix(module): resolve issue-description

- Fix the underlying cause of the bug
- Add regression test to prevent future occurrences
- Update related documentation if needed"
```

## Pull Request Process

- Main branch is protected and requires PR approval
- All development happens on dev branch first
- PRs from dev to main are reviewed and merged on GitHub
- Squash and merge for clean history

## Best Practices

1. **Small, focused commits**: Group related changes together
2. **Descriptive messages**: Make it clear what was changed and why
3. **Consistent style**: Follow existing code patterns
4. **Test thoroughly**: Ensure new code doesn't break existing functionality
5. **Documentation**: Update docs when adding new features
6. **Clean up**: Remove temporary files and debug code before committing

Following this workflow ensures consistent, high-quality contributions to the project while maintaining a clean and understandable Git history.
