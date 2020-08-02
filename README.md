# who-logs-to-console

You have some components writing very verbose logs and you don't know which? Inspired by the well known [`why-is-node-running`](https://github.com/mafintosh/why-is-node-running) package, `who-logs-to-console` is here to help you.

## Installation

Any node version:

```bash
npm i who-logs-to-console -g
```

## Usage

```js
require('who-logs-to-console') // should be your first require

// catches console outputs
console.log("Hello World!");
console.error("Failed Hello World?!");

// also catches more low-level stuff
process.stdout.write("Who does that?\n");
process.stderr.write("Seriously!?\n");
```

Save the file as `example.js`, then execute:

```bash
node ./example.js
```

Here's the output:

```
Hello World!
Trace: who-logs-to-console
    at WriteStream.hook [as write] (C:\Dropbox\Private\Projects\Who-Logs-To-Console\index.js:9:13)
    at Object.Console.<computed> (internal/console/constructor.js:249:12)
    at Object.log (internal/console/constructor.js:294:26)
    at Object.<anonymous> (C:\Dropbox\Private\Projects\Who-Logs-To-Console\example.js:4:9)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
    at Function.Module._load (internal/modules/cjs/loader.js:877:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47
Failed Hello World?!
Trace: who-logs-to-console
    at WriteStream.hook (C:\Dropbox\Private\Projects\Who-Logs-To-Console\index.js:9:13)
    at Object.Console.<computed> (internal/console/constructor.js:249:12)
    at Object.warn (internal/console/constructor.js:299:26)
    at Object.<anonymous> (C:\Dropbox\Private\Projects\Who-Logs-To-Console\example.js:5:9)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
    at Function.Module._load (internal/modules/cjs/loader.js:877:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47
Who does that?
Trace: who-logs-to-console
    at WriteStream.hook [as write] (C:\Dropbox\Private\Projects\Who-Logs-To-Console\index.js:9:13)
    at Object.<anonymous> (C:\Dropbox\Private\Projects\Who-Logs-To-Console\example.js:8:16)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
    at Function.Module._load (internal/modules/cjs/loader.js:877:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47
Seriously!?
Trace: who-logs-to-console
    at WriteStream.hook (C:\Dropbox\Private\Projects\Who-Logs-To-Console\index.js:9:13)
    at Object.<anonymous> (C:\Dropbox\Private\Projects\Who-Logs-To-Console\example.js:9:16)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
    at Function.Module._load (internal/modules/cjs/loader.js:877:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47
```

## CLI

You can also run `who-logs-to-console` as a standalone if you don't want to include it inside your code.

```bash
who-logs-to-console /path/to/some/file.js
```

## Require CLI Option

You can also use the node `-r` option to include `who-logs-to-console`:

```bash
node -r who-logs-to-console /path/to/some/file.js
```

## Author

Written by [Kristian Kraljić](https://kra.lc/).

## Reporting bugs

Please file any issues [on Github](https://github.com/kristian/who-logs-to-console).

## License

This library is licensed under the [MIT](LICENSE) license.