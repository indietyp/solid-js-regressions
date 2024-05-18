# solid-js-regressions

Regressions observed in solid.js

This branch shows a regression in solid.js when trying to use [`effect`](npmjs.com/package/effect).
Babel will stop transpiling the code and throw an error.

The repository has been created with solid start using:

```bash
bun create solid
```

The offending code has been included in `src/routes/index.tsx`:

```js
import { Iterable } from "effect";

// somewhere in the code
let _items = Iterable.replicate(10, 1);
```

When running `bun run build` this error **will not** be thrown, but when running `bun dev` it will.

The error in question is:

```
11:55:39 AM [vite] Internal server error: <REDACTED>/node_modules/.vinxi/client/deps/effect.js: Unexpected token, expected "=>" (12604:10)

  12602 | var promise = (evaluate3) => evaluate3.length >= 1 ? async((resolve, signal) => {
  12603 |   evaluate3(signal).then((a) => resolve(exitSucceed(a)), (e) => resolve(exitDie(e)));
> 12604 | }) : async((resolve) => {
        |           ^
  12605 |   ;
  12606 |   evaluate3().then((a) => resolve(exitSucceed(a)), (e) => resolve(exitDie(e)));
  12607 | });
  Plugin: solid
  File: <REDACTED>/node_modules/.vinxi/client/deps/effect.js?v=61a49a4d:12604:10
  12602|  var promise = (evaluate3) => evaluate3.length >= 1 ? async((resolve, signal) => {
  12603|    evaluate3(signal).then((a) => resolve(exitSucceed(a)), (e) => resolve(exitDie(e)));
  12604|  }) : async((resolve) => {
     |            ^
  12605|    ;
  12606|    evaluate3().then((a) => resolve(exitSucceed(a)), (e) => resolve(exitDie(e)));
      at constructor (<REDACTED>/node_modules/@babel/parser/lib/index.js:351:19)
      at TypeScriptParserMixin.raise (<REDACTED>/node_modules/@babel/parser/lib/index.js:3281:19)
      at TypeScriptParserMixin.unexpected (<REDACTED>/node_modules/@babel/parser/lib/index.js:3301:16)
      at TypeScriptParserMixin.expect (<REDACTED>/node_modules/@babel/parser/lib/index.js:3605:28)
      at TypeScriptParserMixin.parseAsyncArrowFromCallExpression (<REDACTED>/node_modules/@babel/parser/lib/index.js:10804:10)
      at TypeScriptParserMixin.parseAsyncArrowFromCallExpression (<REDACTED>/node_modules/@babel/parser/lib/index.js:9407:18)
      at TypeScriptParserMixin.parseCoverCallAndAsyncArrowHead (<REDACTED>/node_modules/@babel/parser/lib/index.js:10718:27)
      at TypeScriptParserMixin.parseSubscript (<REDACTED>/node_modules/@babel/parser/lib/index.js:10647:19)
      at TypeScriptParserMixin.parseSubscript (<REDACTED>/node_modules/@babel/parser/lib/index.js:8987:18)
      at TypeScriptParserMixin.parseSubscripts (<REDACTED>/node_modules/@babel/parser/lib/index.js:10620:19)
      at TypeScriptParserMixin.parseExprSubscripts (<REDACTED>/node_modules/@babel/parser/lib/index.js:10611:17)
      at TypeScriptParserMixin.parseUpdate (<REDACTED>/node_modules/@babel/parser/lib/index.js:10590:21)
      at TypeScriptParserMixin.parseMaybeUnary (<REDACTED>/node_modules/@babel/parser/lib/index.js:10568:23)
      at TypeScriptParserMixin.parseMaybeUnary (<REDACTED>/node_modules/@babel/parser/lib/index.js:9478:18)
      at TypeScriptParserMixin.parseMaybeUnaryOrPrivate (<REDACTED>/node_modules/@babel/parser/lib/index.js:10422:61)
      at TypeScriptParserMixin.parseExprOps (<REDACTED>/node_modules/@babel/parser/lib/index.js:10427:23)
      at TypeScriptParserMixin.parseMaybeConditional (<REDACTED>/node_modules/@babel/parser/lib/index.js:10404:23)
      at TypeScriptParserMixin.parseMaybeAssign (<REDACTED>/node_modules/@babel/parser/lib/index.js:10365:21)
      at TypeScriptParserMixin.parseMaybeAssign (<REDACTED>/node_modules/@babel/parser/lib/index.js:9427:20)
      at <REDACTED>/node_modules/@babel/parser/lib/index.js:10335:39
      at TypeScriptParserMixin.allowInAnd (<REDACTED>/node_modules/@babel/parser/lib/index.js:11957:12)
      at TypeScriptParserMixin.parseMaybeAssignAllowIn (<REDACTED>/node_modules/@babel/parser/lib/index.js:10335:17)
      at TypeScriptParserMixin.parseConditional (<REDACTED>/node_modules/@babel/parser/lib/index.js:10414:30)
      at TypeScriptParserMixin.parseConditional (<REDACTED>/node_modules/@babel/parser/lib/index.js:9244:20)
      at TypeScriptParserMixin.parseMaybeConditional (<REDACTED>/node_modules/@babel/parser/lib/index.js:10408:17)
      at TypeScriptParserMixin.parseMaybeAssign (<REDACTED>/node_modules/@babel/parser/lib/index.js:10365:21)
      at TypeScriptParserMixin.parseMaybeAssign (<REDACTED>/node_modules/@babel/parser/lib/index.js:9427:20)
      at TypeScriptParserMixin.parseFunctionBody (<REDACTED>/node_modules/@babel/parser/lib/index.js:11630:24)
      at TypeScriptParserMixin.parseArrowExpression (<REDACTED>/node_modules/@babel/parser/lib/index.js:11612:10)
      at TypeScriptParserMixin.parseParenAndDistinguishExpression (<REDACTED>/node_modules/@babel/parser/lib/index.js:11228:12)
      at TypeScriptParserMixin.parseExprAtom (<REDACTED>/node_modules/@babel/parser/lib/index.js:10874:23)
      at TypeScriptParserMixin.parseExprAtom (<REDACTED>/node_modules/@babel/parser/lib/index.js:6829:20)
      at TypeScriptParserMixin.parseExprSubscripts (<REDACTED>/node_modules/@babel/parser/lib/index.js:10607:23)
      at TypeScriptParserMixin.parseUpdate (<REDACTED>/node_modules/@babel/parser/lib/index.js:10590:21)
      at TypeScriptParserMixin.parseMaybeUnary (<REDACTED>/node_modules/@babel/parser/lib/index.js:10568:23)
      at TypeScriptParserMixin.parseMaybeUnary (<REDACTED>/node_modules/@babel/parser/lib/index.js:9478:18)
      at TypeScriptParserMixin.parseMaybeUnaryOrPrivate (<REDACTED>/node_modules/@babel/parser/lib/index.js:10422:61)
      at TypeScriptParserMixin.parseExprOps (<REDACTED>/node_modules/@babel/parser/lib/index.js:10427:23)
      at TypeScriptParserMixin.parseMaybeConditional (<REDACTED>/node_modules/@babel/parser/lib/index.js:10404:23)
      at TypeScriptParserMixin.parseMaybeAssign (<REDACTED>/node_modules/@babel/parser/lib/index.js:10365:21)
      at TypeScriptParserMixin.parseMaybeAssign (<REDACTED>/node_modules/@babel/parser/lib/index.js:9427:20)
      at <REDACTED>/node_modules/@babel/parser/lib/index.js:10335:39
      at TypeScriptParserMixin.allowInAnd (<REDACTED>/node_modules/@babel/parser/lib/index.js:11952:16)
      at TypeScriptParserMixin.parseMaybeAssignAllowIn (<REDACTED>/node_modules/@babel/parser/lib/index.js:10335:17)
      at TypeScriptParserMixin.parseVar (<REDACTED>/node_modules/@babel/parser/lib/index.js:12885:91)
      at TypeScriptParserMixin.parseVarStatement (<REDACTED>/node_modules/@babel/parser/lib/index.js:12731:10)
      at TypeScriptParserMixin.parseVarStatement (<REDACTED>/node_modules/@babel/parser/lib/index.js:9122:31)
      at TypeScriptParserMixin.parseStatementContent (<REDACTED>/node_modules/@babel/parser/lib/index.js:12343:23)
      at TypeScriptParserMixin.parseStatementContent (<REDACTED>/node_modules/@babel/parser/lib/index.js:9152:18)
      at TypeScriptParserMixin.parseStatementLike (<REDACTED>/node_modules/@babel/parser/lib/index.js:12260:17)
```

# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
npm init solid@latest

# create a new project in my-app
npm init solid@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

## This project was created with the [Solid CLI](https://solid-cli.netlify.app)
