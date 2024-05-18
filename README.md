# 1inch allowance

### Apps and Packages

- `web`: [Next.js](https://nextjs.org/) app
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

## Packages

Run the following command to install required packages.

```bash
pnpm install turbo --global
pnpm install
```

## Frontend

Next.js `./apps/web` application with TypeScript, Shadcn-UI, and WAGMI.

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Environment variables

Copy environment variable examples, create .env and .env.local files, and replace values.

### Build

```
1- turbo build
2- turbo start
```

### Develop

```
turbo dev
```
