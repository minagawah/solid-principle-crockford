# solid-principle-crockford

## 1. About

Examples implementing SOLID principles using Crockford's methods.

## 2. Instruction

To run the program:
```
npm run start
```

To generate `*.d.ts` files to `/types`:
```
npm run type:generate
```

To generate JSDoc documents to `/jsdoc`:
```
npm run jsdoc
```

To build:
```
npm run build
```

## 3. Notes

## 4. Installed NPM Packages

### Babel

- core-js
- @babel/cli
- @babel/core
- @babel/preset-env
- babel-loader

### ESLint & Prettier

- prettier
- eslint
- eslint-config-prettier
  - Filters out all the ESLint rules which conflict with Prettier.
- eslint-plugin-prettier
  - Orchestrates ESLint and Prettier together.
- @stylistic/eslint-plugin
  - New way of setting rules

### JSDoc

- jsdoc
- jsdoc-tsimport-plugin
- jsdoc-plugin-intersection
- typescript

### Jest

- jest
- babel-jest

```
npm install --save core-js;

npm install --save-dev @babel/cli @babel/core @babel/preset-env babel-loader \
  prettier eslint eslint-config-prettier eslint-plugin-prettier @stylistic/eslint-plugin \
  jsdoc jsdoc-tsimport-plugin jsdoc-plugin-intersection \
  typescript jest babel-jest;
```

## 5. License

Dual-licensed under either of the followings.  
Choose at your option.
 The UNLICENSE ([LICENSE.UNLICENSE](LICENSE.UNLICENSE)) MIT license ([LICENSE.MIT](LICENSE.MIT))

