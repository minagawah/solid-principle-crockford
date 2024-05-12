# solid-principle-crockford

**STILL WORK IN PROGRESS. NOTHING WORTHY.**

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

### 3-1. Wacky Pomo 90s Web Designs

How to Make a Website Like the 90s: Design Ideas & More!  
https://www.wikihow.com/Make-a-Website-Like-the-90s

Sugar for Brains  
https://sugarforbrains.neocities.org/

### 3-2. Super Mario Bros. Character Correspondences

#### Major Characters

| Eng. | Jap. | Image | Notes |
|--|--|--|--|
| Bowser | Koopa | <img src="https://static.wikia.nocookie.net/villains/images/c/ce/Downloadsdw.png/revision/latest?cb=20171023010601" width="100"> |
| Princess Toadstool | Princess Peach | <img src="https://static.wikia.nocookie.net/freezeflame22/images/6/68/PeachTKK.png/revision/latest?cb=20201224202114" width="100"> |

#### Turtles

| Eng. | Jap. | Image | Notes |
|--|--|--|--|
| Koopa Troopas | Noko-noko | <img src="https://static.wikia.nocookie.net/super-mario-maker-2-wiki/images/e/e3/Koopa_Troopa.png/revision/latest?cb=20190901175730" width="100"> | Turtles |
| Koopa Paratroopas | Pata-pata | <img src="https://static.wikia.nocookie.net/mario/images/5/54/7D27CCF9-6AFC-4509-BB44-CD740B58B602.jpeg/revision/latest?cb=20200523102035&path-prefix=es" width="100"> | Flying Turtles |
| Spiny | Togezo | <img src="https://static.wikia.nocookie.net/mario/images/b/b4/Sad_Spiny_SPP_sprite.png/revision/latest?cb=20231016121621" width="100"> | Turtles with spikes/thorns |
| Lakitu | Jugemu | <img src="https://static.wikia.nocookie.net/super-mario-maker-2-wiki/images/2/2d/Lakitu.png/revision/latest?cb=20190826015742" width="100"> | Turtles on a cloud |
| Hammer Brothers | Hammer Brothers | <img src="https://static.wikia.nocookie.net/stabyourself/images/7/7b/Hammerbro.gif/revision/latest?cb=20151023223645" width="100"> | The hammer throwing turtles |

#### Others

| Eng. | Jap. | Image | Notes |
|--|--|--|--|
| Bloober | Gesso | <img src="https://static.wikia.nocookie.net/stabyourself/images/8/82/Bloober.gif/revision/latest?cb=20151025200210" width="100"> | Squids |
| Buzzy Beetles | Met | <img src="https://static.wikia.nocookie.net/supermariobrothersx/images/b/b7/Beetle.gif/revision/latest?cb=20180109220354" width="100"> | Beatles |
| Cheep-cheeps | Puku-puku | <img src="https://static.wikia.nocookie.net/stabyourself/images/6/6c/Cheepcheepred.gif/revision/latest?cb=20151025205406" width="100"> | Fish |
| Goombas | Kuribo | <img src="https://static.wikia.nocookie.net/supermariobrothersx/images/8/8d/Goombawalk.gif/revision/latest?cb=20180109205947" width="100"> | Mushrooms |
| Piranha Plants | Pakkun Flowers | <img src="https://static.wikia.nocookie.net/stabyourself/images/1/1c/Plant.gif/revision/latest?cb=20150929225119" width="100"> | The man-eating plants |


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

### Others

- ramda
- @types/ramda

```
npm install --save core-js ramda;

npm install --save-dev @babel/cli @babel/core @babel/preset-env babel-loader \
  prettier eslint eslint-config-prettier eslint-plugin-prettier @stylistic/eslint-plugin \
  jsdoc jsdoc-tsimport-plugin jsdoc-plugin-intersection \
  typescript jest babel-jest;
```

## 5. License

Dual-licensed under either of the followings.  
Choose at your option.
 The UNLICENSE ([LICENSE.UNLICENSE](LICENSE.UNLICENSE)) MIT license ([LICENSE.MIT](LICENSE.MIT))

