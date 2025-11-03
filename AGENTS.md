# AGENTS.md

This document provides guidelines for AI agents working on this project.

## Project Overview

This is an interactive website for a digital marketing service. The goal is to create a modern, performant, and user-friendly experience.

## Tech Stack

*   [Next.js](https://nextjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)

## Development Workflow

### Branching

Create a new branch for each new feature or bug fix. Branch names should be descriptive and follow this convention:

*   `feature/<feature-name>`
*   `fix/<bug-name>`

### Commits

*   **Format**: Use the [Conventional Commits](https://www.conventionalcommits.org/) specification. This helps keep the commit history clean and readable.
*   **Messages**: Write clear and concise commit messages. The first line should be a short summary (max 50 characters), followed by a blank line and a more detailed explanation if necessary.

## Coding Style

*   **Readability**: Write code that is easy to read and understand. Add comments to explain complex logic.
*   **Consistency**: Follow the existing code style.
*   **Type Safety**: Use TypeScript to its full potential. Avoid using `any` unless absolutely necessary.

## Component Structure

When creating new components, follow this file structure:

```
src/components/
  ├── MyComponent/
  │   ├── MyComponent.tsx
  │   ├── MyComponent.module.css
  │   └── MyComponent.test.tsx
```

## Testing

*   **Write Tests**: All new components and features should have corresponding tests.
*   **Unit Tests**: Use a testing library like Jest or Vitest to write unit tests for individual components and functions.
*   **End-to-End Tests**: For critical user flows, consider writing end-to-end tests with a framework like Cypress or Playwright.
